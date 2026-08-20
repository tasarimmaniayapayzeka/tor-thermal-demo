/* TOR|THERMAL — Tor Asistan ön yüzü
   Kendi DOM'unu kurar; chatbot.php'ye konuşur. PHP yoksa/anahtar yoksa
   dürüst "çevrimdışı" moduna düşer ve WhatsApp'a yönlendirir.
   .wa-balon sağ altta durduğu için launcher SOL altta açılır. */
(function () {
  'use strict';

  var WA = 'https://wa.me/902126716968?text=' + encodeURIComponent('Merhaba, TOR|THERMAL hakkında bilgi almak istiyorum.');
  var TEL = 'tel:+902126716968';
  var DEPO = 'torthermal_chat_v1';
  var ILK = 'Merhaba! 👋 Ben Tor Asistan. Daire ve villa tipleri, devre mülk süreci, wellness programları ya da lokasyon hakkında ne merak ediyorsun?';
  var CIPLER = ['Daire tipleri neler?', 'Ödeme planı nasıl?', 'Devre mülk mü, devre tatil mi?', 'Nasıl ulaşırım?'];
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
      '<div class="tchat__chips" id="tcChips"></div>' +
      '<div class="tchat__menu" id="tcMenu"><small>Hızlı bağlantılar</small><nav></nav></div>' +
      '<form class="tchat__bar" id="tcForm">' +
        '<input type="text" id="tcInput" placeholder="Mesajını yaz…" maxlength="500" autocomplete="off" aria-label="Mesaj">' +
        '<button type="submit" aria-label="Gönder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>' +
      '</form>' +
      '<div class="tchat__foot"><span>Yapay zekâ destekli · içerikler temsilîdir · kişisel veri paylaşma</span></div>' +
    '</div>';
  document.body.appendChild(kok);

  var panel = document.getElementById('tcPanel');
  var msgs  = document.getElementById('tcMsgs');
  var chips = document.getElementById('tcChips');
  var menu  = document.getElementById('tcMenu');
  var form  = document.getElementById('tcForm');
  var input = document.getElementById('tcInput');
  var durum = document.getElementById('tcDurum');

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
  function linkle(t) {
    t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var linkler = [];
    t = t.replace(/\[([^\]]+)\]\(([^()\s]+)\)/g, function (m, metin, hedef) {
      var dis = /^https?:\/\//.test(hedef);
      linkler.push('<a href="' + hedef + '"' + (dis ? ' target="_blank" rel="noopener"' : '') + '>' + metin + '</a>');
      return '' + (linkler.length - 1) + '';
    });
    t = t
      .replace(/(https?:\/\/[^\s<]+)/g, function (m, url) {
        linkler.push('<a href="' + url + '" target="_blank" rel="noopener">' + url + '</a>');
        return '' + (linkler.length - 1) + '';
      })
      .replace(IC_SAYFA, '<a href="$1">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/\n/g, '<br>');
    return t.replace(/(\d+)/g, function (m, i) { return linkler[+i]; });
  }
  function balon(rol, html) {
    var d = document.createElement('div');
    d.className = 'tchat__msg tchat__msg--' + rol;
    d.innerHTML = html;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
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
    chips.style.display = tarih.length ? 'none' : '';
    menu.style.display = tarih.length ? 'none' : '';
  }

  /* ---------- gönderim ---------- */
  var mesgul = false;
  function gonder(metin) {
    metin = (metin || '').trim();
    if (!metin || mesgul) return;
    mesgul = true;
    chips.style.display = 'none';
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
        } else if (j && j.offline) {
          cevrimdisi();
        } else {
          balon('bot', linkle((j && j.hata) || 'Bir sorun oluştu; tekrar dener misin?'));
        }
      })
      .catch(function () { yaziyor(false); cevrimdisi(); })
      .finally(function () { mesgul = false; odakla(); });
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
  form.addEventListener('submit', function (e) { e.preventDefault(); gonder(input.value); });

  CIPLER.forEach(function (c) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = c;
    b.addEventListener('click', function () { gonder(c); });
    chips.appendChild(b);
  });
})();
