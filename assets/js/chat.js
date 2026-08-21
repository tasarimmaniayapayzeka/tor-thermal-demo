/* TOR|THERMAL — Tor Asistan ön yüzü
   Kendi DOM'unu kurar; chatbot.php'ye konuşur. PHP yoksa/anahtar yoksa
   dürüst "çevrimdışı" moduna düşer ve WhatsApp'a yönlendirir.
   Sesli giriş (mikrofon/STT) İSTEĞE BAĞLI eklenir: tarayıcı desteklemiyorsa
   düğme hiç görünmez; ağ/izin sorununda sessizce normal yazılı sohbete
   düşer. Sesli YANIT (TTS) kapalı — bot yalnız yazıyla cevap verir. */
(function () {
  'use strict';

  var WA = 'https://wa.me/902126716968?text=' + encodeURIComponent('Merhaba, TOR|THERMAL hakkında bilgi almak istiyorum.');
  var TEL = 'tel:+902126716968';
  var DEPO = 'torthermal_chat_v1';
  var ILK = 'Merhaba! 👋 Ben Tor Asistan. Daire ve villa tipleri, devre mülk süreci, wellness programları ya da lokasyon hakkında ne merak ediyorsun?';
  var MENU = [
    ['🏠', 'Daireler & Villalar', 'daireler.html'],
    ['📅', 'Dönem Bulucu', 'daire-donem-bulucu.html'],
    ['🧭', 'Nasıl Çalışır?', 'nasil-calisir.html'],
    ['📖', 'Açık Defter', 'acik-defter.html'],
    ['💧', 'Longevity & Wellness', 'wellness.html'],
    ['📍', 'Lokasyon', 'lokasyon.html']
  ];

  /* ---------- DOM ---------- */
  var kok = document.createElement('div');
  kok.id = 'tchat';
  kok.innerHTML =
    '<button type="button" class="tchat__launch" id="tcLaunch" aria-label="Tor Asistanı aç">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      '<span class="tchat__pulse"></span>' +
    '</button>' +
    '<div class="tchat__panel" id="tcPanel" hidden>' +
      '<div class="tchat__head">' +
        '<div class="tchat__badge" aria-hidden="true">T</div>' +
        '<div><b>Tor Asistan</b><small id="tcDurum">yapay zekâ destekli</small></div>' +
        '<button type="button" class="tchat__sil" id="tcSil" aria-label="Konuşmayı sil"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg></button>' +
        '<button type="button" class="tchat__close" id="tcClose" aria-label="Kapat">✕</button>' +
      '</div>' +
      '<div class="tchat__actions">' +
        '<a class="tchat__act tchat__act--tel" href="' + TEL + '">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
          'Hemen Ara</a>' +
        '<a class="tchat__act tchat__act--wa" href="' + WA + '" target="_blank" rel="noopener">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2z"/></svg>' +
          'WhatsApp</a>' +
      '</div>' +
      '<div class="tchat__msgs" id="tcMsgs"></div>' +
      '<div class="tchat__menu" id="tcMenu"><small>Hızlı bağlantılar</small><nav></nav></div>' +
      '<form class="tchat__bar" id="tcForm">' +
        '<button type="button" class="tchat__mik" id="tcMik" aria-label="Sesli yaz" hidden>' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z"/><path d="M19 11a7 7 0 0 1-14 0M12 19v3"/></svg>' +
        '</button>' +
        '<input type="text" id="tcInput" placeholder="Mesajını yaz…" maxlength="500" autocomplete="off" aria-label="Mesaj">' +
        '<button type="submit" aria-label="Gönder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>' +
      '</form>' +
      '<div class="tchat__foot"><span>Yapay zekâ destekli · içerikler temsilîdir · kişisel veri paylaşma</span></div>' +
    '</div>';
  document.body.appendChild(kok);

  var panel = document.getElementById('tcPanel');
  var msgs  = document.getElementById('tcMsgs');
  var menu  = document.getElementById('tcMenu');
  var form  = document.getElementById('tcForm');
  var input = document.getElementById('tcInput');
  var durum = document.getElementById('tcDurum');
  var mikBtn = document.getElementById('tcMik');

  MENU.forEach(function (o) {
    var a = document.createElement('a');
    a.href = o[2];
    a.innerHTML = '<span>' + o[0] + '</span>' + o[1];
    menu.querySelector('nav').appendChild(a);
  });

  /* ---------- geçmiş ---------- */
  var tarih = [];
  try { tarih = JSON.parse(sessionStorage.getItem(DEPO) || '[]'); } catch (e) {}
  function kaydet() { try { sessionStorage.setItem(DEPO, JSON.stringify(tarih.slice(-12))); } catch (e) {} }

  /* ---------- yardımcılar ---------- */
  var IC_SAYFA = /\b([a-z0-9-]+\.html)\b/g;
  function kacisEt(t) { return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function linkle(t) {
    t = kacisEt(t);
    var linkler = [];
    /* Yer tutucu olarak NUL ile sarılmış indeks kullanılır — metindeki sıradan
       rakamlarla (telefon, m², vb.) ASLA karışmaz. Düz "\d+" ile değiştirmek
       "0212 671 69 68" gibi gerçek rakamları da yakalayıp linkler[212] gibi
       tanımsız dizine düşürüyordu ("undefined" metne sızıyordu) — canlıda
       görülüp düzeltildi. */
    function tut(html) { linkler.push(html); return '\u0000' + (linkler.length - 1) + '\u0000'; }
    t = t.replace(/\[([^\]]+)\]\(([^()\s]+)\)/g, function (m, metin, hedef) {
      var dis = /^https?:\/\//.test(hedef);
      return tut('<a href="' + hedef + '"' + (dis ? ' target="_blank" rel="noopener"' : '') + '>' + metin + '</a>');
    });
    t = t
      .replace(/(https?:\/\/[^\s<]+)/g, function (m, url) {
        return tut('<a href="' + url + '" target="_blank" rel="noopener">' + url + '</a>');
      })
      .replace(IC_SAYFA, function (m, sayfa) { return tut('<a href="' + sayfa + '">' + sayfa + '</a>'); })
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\n/g, '<br>');
    return t.replace(/\u0000(\d+)\u0000/g, function (m, i) { return linkler[+i]; });
  }

  function balon(rol, html) {
    var d = document.createElement('div');
    d.className = 'tchat__msg tchat__msg--' + rol;
    d.innerHTML = html;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  function daireKartlari(liste) {
    if (!liste || !liste.length) return;
    var d = document.createElement('div');
    d.className = 'tchat__kartlar';
    liste.forEach(function (t) {
      var a = document.createElement('a');
      a.className = 'tchat__kart';
      a.href = t.link || '#';
      a.innerHTML =
        '<img src="' + t.img + '" alt="' + kacisEt(t.ad) + '" loading="lazy">' +
        '<div class="tchat__kart-ic"><b>' + kacisEt(t.ad) + '</b><span>' + kacisEt(t.metraj) + ' · ' + kacisEt(t.kisi) + '</span></div>';
      d.appendChild(a);
    });
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function yaziyor(ac) {
    var v = document.getElementById('tcTyping');
    if (v) v.remove();
    if (ac) {
      var d = balon('bot', '<span class="tchat__dots"><i></i><i></i><i></i></span>');
      d.id = 'tcTyping';
    }
  }
  function cevrimdisi() {
    durum.textContent = 'şu an çevrimdışı';
    balon('bot', 'Şu an çevrimdışıyım 😴 Ama ekip WhatsApp\'ta: <a href="' + WA + '" target="_blank" rel="noopener">0212 671 69 68</a> — size dönüş yapacaklardır.');
  }

  function ciz() {
    msgs.innerHTML = '';
    balon('bot', linkle(ILK));
    tarih.forEach(function (m) { balon(m.role === 'assistant' ? 'bot' : 'me', linkle(m.content)); });
    menu.style.display = tarih.length ? 'none' : '';
  }

  /* ---------- gönderim ---------- */
  var mesgul = false;
  function gonder(metin) {
    metin = (metin || '').trim();
    if (!metin || mesgul) return;
    mesgul = true;
    menu.style.display = 'none';
    balon('me', linkle(metin));
    tarih.push({ role: 'user', content: metin });
    kaydet();
    input.value = '';
    yaziyor(true);

    fetch('chatbot.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: tarih.slice(-10) })
    })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        yaziyor(false);
        if (j && j.ok && j.reply) {
          tarih.push({ role: 'assistant', content: j.reply });
          kaydet();
          balon('bot', linkle(j.reply));
          if (j.daireler && j.daireler.length) daireKartlari(j.daireler);
        } else if (j && j.offline) {
          cevrimdisi();
        } else {
          balon('bot', linkle((j && j.hata) || 'Bir sorun oluştu; tekrar dener misin?'));
        }
      })
      .catch(function () { yaziyor(false); cevrimdisi(); })
      .finally(function () { mesgul = false; odakla(); });
  }

  /* ---------- sesli giriş (STT) — tarayıcı desteklemiyorsa düğme hiç görünmez ---------- */
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) {
    mikBtn.hidden = false;
    (function () {
      var ADAY_MIME = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus', 'audio/ogg'];
      function secMime() {
        for (var i = 0; i < ADAY_MIME.length; i++) {
          if (window.MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(ADAY_MIME[i])) return ADAY_MIME[i];
        }
        return '';
      }
      function uzantiVer(mime) {
        if (mime.indexOf('mp4') > -1) return 'mp4';
        if (mime.indexOf('ogg') > -1) return 'ogg';
        return 'webm';
      }

      var kayitci = null;
      var kayitZamanlayici = null;

      mikBtn.addEventListener('click', function () {
        if (kayitci && kayitci.state === 'recording') { kayitci.stop(); return; } // ikinci tık: kaydı bitir
        if (mikBtn.disabled) return;
        mikBtn.disabled = true;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (akis) {
          mikBtn.disabled = false;
          var mime = secMime();
          try {
            kayitci = mime ? new MediaRecorder(akis, { mimeType: mime }) : new MediaRecorder(akis);
          } catch (e) {
            akis.getTracks().forEach(function (t) { t.stop(); }); // izin verilse bile kurulum başarısızsa mikrofonu bırak
            return;
          }
          var kullanilanMime = kayitci.mimeType || mime || 'audio/webm';
          var parcalar = [];
          kayitci.ondataavailable = function (e) { if (e.data && e.data.size) parcalar.push(e.data); };
          kayitci.onstop = function () {
            akis.getTracks().forEach(function (t) { t.stop(); }); // her durumda mikrofonu serbest bırak
            clearTimeout(kayitZamanlayici);
            mikBtn.classList.remove('tchat__mik--acik');
            if (!parcalar.length) return;
            mikBtn.classList.add('tchat__mik--mesgul');
            var fd = new FormData();
            fd.append('ses', new Blob(parcalar, { type: kullanilanMime }), 'ses.' + uzantiVer(kullanilanMime));
            fd.append('mime', kullanilanMime);
            var ctrl = window.AbortController ? new AbortController() : null;
            var zamanAsimi = ctrl ? setTimeout(function () { ctrl.abort(); }, 20000) : null;
            fetch('chat-stt.php', { method: 'POST', body: fd, signal: ctrl ? ctrl.signal : undefined })
              .then(function (r) { if (zamanAsimi) clearTimeout(zamanAsimi); if (!r.ok) throw 0; return r.json(); })
              .then(function (j) { if (j && j.ok && j.metin) { input.value = j.metin; input.focus(); } })
              .catch(function () {})
              .finally(function () { mikBtn.classList.remove('tchat__mik--mesgul'); });
          };
          kayitci.start();
          mikBtn.classList.add('tchat__mik--acik');
          kayitZamanlayici = setTimeout(function () { if (kayitci && kayitci.state === 'recording') kayitci.stop(); }, 15000); // güvenlik: asla açık kalmasın
        }).catch(function () { mikBtn.disabled = false; /* izin reddedildi / mikrofon yok — sessizce yazılı sohbete devam */ });
      });

      /* panel kapanırken hâlâ kayıttaysa hemen durdur */
      document.getElementById('tcClose').addEventListener('click', function () {
        if (kayitci && kayitci.state === 'recording') kayitci.stop();
      });
    })();
  }

  /* ---------- olaylar ---------- */
  var MASAUSTU = window.matchMedia('(min-width: 721px)');
  function odakla() {
    if (MASAUSTU.matches) { try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); } }
  }
  function panelDurum(acikMi) {
    panel.hidden = !acikMi;
    document.body.classList.toggle('tchat-open', acikMi);
  }
  document.getElementById('tcLaunch').addEventListener('click', function () {
    var acilacak = panel.hidden;
    panelDurum(acilacak);
    if (acilacak) { ciz(); setTimeout(odakla, 60); }
  });
  document.getElementById('tcClose').addEventListener('click', function () { panelDurum(false); });
  document.getElementById('tcSil').addEventListener('click', function () {
    tarih = [];
    try { sessionStorage.removeItem(DEPO); } catch (e) {}
    ciz();
  });
  form.addEventListener('submit', function (e) { e.preventDefault(); gonder(input.value); });
})();
