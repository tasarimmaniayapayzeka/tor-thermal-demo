<?php
declare(strict_types=1);
/**
 * TOR|THERMAL — Ses → yazı (OpenAI Whisper proxy)
 * Mikrofon kaydı multipart 'ses' alanıyla gelir. Anahtar chatbot.php ile
 * aynı yerde: /home/torthermal/torthermal-gizli.php
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function yanit(array $d, int $kod = 200): void {
    http_response_code($kod);
    echo json_encode($d, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') yanit(['ok' => false, 'hata' => 'yontem'], 405);

$cfg = @include dirname(__DIR__) . '/torthermal-gizli.php';
$KEY = is_array($cfg) ? (string)($cfg['openai_key'] ?? '') : '';
if ($KEY === '' || strpos($KEY, 'BURAYA') !== false) yanit(['ok' => false, 'offline' => true]);

/* hız sınırı: IP başına saatte 20 ses kaydı (metin sohbetten ayrı sayaç) */
$ip  = (string)($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
$kova = sys_get_temp_dir() . '/torbot_stt_' . md5($ip) . '_' . date('YmdH');
$adet = (int)@file_get_contents($kova);
if ($adet >= 20) yanit(['ok' => false, 'hata' => 'Ses kaydı için biraz hızlı gidiyoruz 🙂 Yazarak da devam edebilirsiniz.'], 429);
@file_put_contents($kova, $adet + 1);

if (empty($_FILES['ses']['tmp_name']) || $_FILES['ses']['error'] !== UPLOAD_ERR_OK) {
    yanit(['ok' => false, 'hata' => 'Ses kaydı alınamadı, tekrar dener misiniz?'], 400);
}
/* 6 MB tavan: ~40sn kalitede ses için fazlasıyla yeterli, kötüye kullanımı sınırlar. */
if ($_FILES['ses']['size'] > 6 * 1024 * 1024) yanit(['ok' => false, 'hata' => 'Ses kaydı çok uzun oldu, kısa bir cümleyle tekrar deneyin.'], 400);

/* Tarayıcı hangi mimeType'ı kullandıysa (webm/mp4/ogg) frontend bildirir;
   Whisper uzantıdan format çıkarır — dosya adını buna göre uyarlıyoruz. */
$mime = (string)($_POST['mime'] ?? 'audio/webm');
$uzanti = 'webm';
if (strpos($mime, 'mp4') !== false) $uzanti = 'mp4';
elseif (strpos($mime, 'ogg') !== false) $uzanti = 'ogg';
elseif (strpos($mime, 'wav') !== false) $uzanti = 'wav';
elseif (strpos($mime, 'mpeg') !== false || strpos($mime, 'mp3') !== false) $uzanti = 'mp3';

$ch = curl_init('https://api.openai.com/v1/audio/transcriptions');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 30,
    CURLOPT_POSTFIELDS     => [
        'file'     => new CURLFile($_FILES['ses']['tmp_name'], $mime, 'ses.' . $uzanti),
        'model'    => 'whisper-1',
        'language' => 'tr',
    ],
    CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $KEY],
]);
$res  = curl_exec($ch);
$http = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($res === false || $http !== 200) {
    yanit(['ok' => false, 'hata' => 'Sesi yazıya çeviremedim, tekrar dener misiniz?'], 502);
}
$j = json_decode((string)$res, true);
$metin = trim((string)($j['text'] ?? ''));
if ($metin === '') yanit(['ok' => false, 'hata' => 'Sesi anlayamadım, tekrar dener misiniz?']);

yanit(['ok' => true, 'metin' => mb_substr($metin, 0, 500)]);
