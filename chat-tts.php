<?php
declare(strict_types=1);
/**
 * TOR|THERMAL — Yazı → ses (OpenAI TTS proxy)
 * Yalnız ziyaretçi bir mesajın hoparlör düğmesine bastığında çağrılır.
 * Anahtar chatbot.php ile aynı yerde: /home/torthermal/torthermal-gizli.php
 */

function hata_json(array $d, int $kod): void {
    http_response_code($kod);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($d, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') hata_json(['ok' => false, 'hata' => 'yontem'], 405);

$cfg = @include dirname(__DIR__) . '/torthermal-gizli.php';
$KEY = is_array($cfg) ? (string)($cfg['openai_key'] ?? '') : '';
if ($KEY === '' || strpos($KEY, 'BURAYA') !== false) hata_json(['ok' => false, 'offline' => true], 200);

/* hız sınırı: IP başına saatte 40 seslendirme (metinden ayrı sayaç) */
$ip  = (string)($_SERVER['REMOTE_ADDR'] ?? '0.0.0.0');
$kova = sys_get_temp_dir() . '/torbot_tts_' . md5($ip) . '_' . date('YmdH');
$adet = (int)@file_get_contents($kova);
if ($adet >= 40) hata_json(['ok' => false, 'hata' => 'limit'], 429);
@file_put_contents($kova, $adet + 1);

$govde = json_decode((string)file_get_contents('php://input'), true);
$metin = mb_substr(trim((string)($govde['metin'] ?? '')), 0, 600);
if ($metin === '') hata_json(['ok' => false, 'hata' => 'bos'], 400);

$ch = curl_init('https://api.openai.com/v1/audio/speech');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 30,
    CURLOPT_POSTFIELDS     => json_encode(['model' => 'tts-1', 'voice' => 'nova', 'input' => $metin, 'response_format' => 'mp3'], JSON_UNESCAPED_UNICODE),
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json', 'Authorization: Bearer ' . $KEY],
]);
$ses  = curl_exec($ch);
$http = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($ses === false || $http !== 200) hata_json(['ok' => false, 'hata' => 'saglayici'], 502);

header('Content-Type: audio/mpeg');
header('Content-Length: ' . strlen($ses));
header('Cache-Control: no-store');
echo $ses;
