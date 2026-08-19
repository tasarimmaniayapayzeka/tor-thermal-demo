/* TOR|THERMAL — Medya tembel yükleme (lazy)
   Amaç: sayfa açılışında görünmeyen videoların indirilmesini engellemek.

   Kural:
   · autoplay'li videolar (hero, morf, doku videoları) DEĞİŞTİRİLMEZ —
     yalnızca poster'i olup preload="auto" ise ipucu "metadata"ya çekilir.
   · autoplay'siz + controls'lu video (kullanıcı başlatır):
       masaüstü → ekrana 300px kala yalnızca "metadata",
       mobil / saveData → hiç ön-yükleme yok; dokunma veya play ile yüklenir.
   · autoplay'siz + controls'suz video (bir düğmeyle koddan oynatılan):
       kullanıcının basacağı bir oynat düğmesi olmadığı için her cihazda
       ekrana yaklaşınca yüklenir (mobilde "metadata", masaüstünde "auto").

   360° panoramalar panorama360.js içinde kendi gözlemcisiyle ertelenir.
   Konsola hiçbir şey basmaz; her adım sessizce hataya dayanıklıdır. */
(function () {
  "use strict";

  var PAY_GENIS = "300px 0px";  /* masaüstü: ekrana 300px kala hazırla */
  var PAY_DAR = "100px 0px";    /* mobil/tasarruf: kıyıya gelmeden başlatma */
  var IO_VAR = (typeof window.IntersectionObserver === "function");

  /* ---------- Ortam (her zaman kullanıldığı anda ölçülür) ---------- */
  function tasarrufModu() {
    try {
      var b = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (!b) return false;
      if (b.saveData) return true;
      var t = b.effectiveType || "";
      return (t === "slow-2g" || t === "2g");
    } catch (e) { return false; }
  }

  function darEkran() {
    try {
      if (window.matchMedia) return window.matchMedia("(max-width: 767px)").matches;
    } catch (e) {}
    var g = window.innerWidth || document.documentElement.clientWidth || 0;
    return g > 0 && g < 768;
  }

  function kisitliMi() { return darEkran() || tasarrufModu(); }

  function kullaniciSurerMi(video) {
    return !!(video.controls || video.hasAttribute("controls"));
  }

  /* Oynat düğmesi olan videoda tam gövdeyi asla peşinen çekme; kullanıcı
     play'e basınca zaten inecek. Koddan sürülen videoda ilk kare gerektiği
     için masaüstünde "auto" serbest. */
  function hedefPreload(video) {
    return (kisitliMi() || kullaniciSurerMi(video)) ? "metadata" : "auto";
  }

  /* ---------- Yardımcılar ---------- */
  function nitelik(el, ad) {
    try { return el.getAttribute(ad); } catch (e) { return null; }
  }

  /* src'leri data-src'ye taşır (indirmeyi durdurur). load() ÇAĞIRMAZ:
     preload="none" zaten indirmeyi engeller, load() ise gereksiz
     "error" olayları tetikleyip sayfanın kendi mantığını bozabilir. */
  function kaynaklariSakla(video) {
    try {
      var s = nitelik(video, "src");
      if (s) { video.setAttribute("data-src", s); video.removeAttribute("src"); }
      var liste = video.getElementsByTagName("source");
      for (var i = 0; i < liste.length; i++) {
        var k = liste[i];
        var u = nitelik(k, "src");
        if (u) { k.setAttribute("data-src", u); k.removeAttribute("src"); }
      }
    } catch (e) {}
  }

  /* data-src'leri geri koyar, preload ipucunu yükseltir ve load() eder.
     Bir kez çalışır; ikinci çağrı false döner. */
  function kaynaklariGeriKoy(video, preloadDegeri) {
    if (video.__mlGeriKondu) return false;
    video.__mlGeriKondu = true;
    try {
      var s = nitelik(video, "data-src");
      if (s) { video.setAttribute("src", s); video.removeAttribute("data-src"); }
      var liste = video.getElementsByTagName("source");
      for (var i = 0; i < liste.length; i++) {
        var k = liste[i];
        var u = nitelik(k, "data-src");
        if (u) { k.setAttribute("src", u); k.removeAttribute("data-src"); }
      }
      video.preload = preloadDegeri || "metadata";
      video.load();
    } catch (e) {}
    return true;
  }

  function gozle(el, geldi, pay) {
    if (!IO_VAR) { geldi(); return; }
    try {
      var io = new IntersectionObserver(function (girisler) {
        for (var i = 0; i < girisler.length; i++) {
          if (girisler[i].isIntersecting) { io.disconnect(); geldi(); return; }
        }
      }, { rootMargin: pay || PAY_GENIS, threshold: 0 });
      io.observe(el);
    } catch (e) { geldi(); }
  }

  /* Gözlemciler ancak yerleşim oturduktan sonra kurulur: DOMContentLoaded
     anında görseller daha yerleşmediği için sayfa kısa görünür, gözlemci de
     alttaki her şeye yanlışlıkla "ekranda" der (klasik tembel yükleme yarışı). */
  function yerlesimOturunca(is) {
    function calistir() {
      if (window.requestAnimationFrame) window.requestAnimationFrame(function () { is(); });
      else is();
    }
    if (document.readyState === "complete") calistir();
    else window.addEventListener("load", calistir);
  }

  /* ---------- Video başına kurulum ---------- */
  function hazirla(video) {
    if (!video || video.__mlKuruldu) return;

    /* Sayfanın kendi erteleme mantığı olan videoya karışma. İki ayrı
       gözlemci aynı src'yi çekiştirince (biri koyup diğeri data-src'ye
       kaldırınca) video hiç açılmıyor. Örn. daire-detay.html #planVideo:
       display:none olduğu için buradaki gözlemci zaten hiç tetiklenmez. */
    if (nitelik(video, "data-ml-atla") !== null) return;

    video.__mlKuruldu = true;

    /* 1) Autoplay'li videolar (hero, "Çizimden Hayata" şeridi):
          · masaüstü → dokunma, yalnızca preload ipucunu hafiflet.
          · mobil/tasarruf → hiç indirme. Poster zaten aynı karenin
            fotoğrafı olduğu için bölüm boş görünmez; kullanıcı isterse
            dokunarak (ya da oynat rozetiyle) videoyu başlatır.
            Ana sayfada bu iki video mobilde 33 MB'lık indirme demekti. */
    if (video.autoplay || video.hasAttribute("autoplay")) {
      if (!kisitliMi()) {
        try {
          var mevcut = (nitelik(video, "preload") || "").toLowerCase();
          if (nitelik(video, "poster") && (mevcut === "" || mevcut === "auto")) {
            video.preload = "metadata";
          }
        } catch (e) {}
        return;
      }
      try {
        video.autoplay = false;
        video.removeAttribute("autoplay");
        video.preload = "none";
        video.setAttribute("data-ml-mobil-durduruldu", "1");
      } catch (e) {}
      kaynaklariSakla(video);
      kullaniciyaBagla(video);
      oynatRozetiEkle(video);
      return;
    }

    /* 2) Autoplay'siz: indirme hemen dursun. */
    try { video.preload = "none"; } catch (e) {}
    kaynaklariSakla(video);

    /* Dokunma / play her hâlükârda yüklemeyi açsın. */
    kullaniciyaBagla(video);

    /* Görünürlük kararı, yerleşim oturduktan sonra ve o anki ekran
       genişliğine göre verilir. */
    yerlesimOturunca(function () {
      if (kullaniciSurerMi(video) && kisitliMi()) return; /* sadece dokunuşla */
      gozle(video, function () {
        kaynaklariGeriKoy(video, hedefPreload(video));
      }, kisitliMi() ? PAY_DAR : PAY_GENIS);
    });
  }

  /* Mobilde durdurulan autoplay videosunun üstüne küçük bir oynat rozeti
     koyar. Hero gibi tam ekran dekoratif videolarda rozet konmaz: poster
     zaten aynı kare ve rozet başlık/CTA'ların önüne düşerdi. */
  function oynatRozetiEkle(video) {
    try {
      if (video.closest && video.closest(".hero-medya")) return;
      var kap = video.parentNode;
      if (!kap || kap.querySelector(".ml-oynat")) return;
      var stil = window.getComputedStyle(kap);
      if (stil.position === "static") kap.style.position = "relative";

      var rozet = document.createElement("button");
      rozet.type = "button";
      rozet.className = "ml-oynat";
      rozet.setAttribute("aria-label", "Videoyu oynat");
      rozet.innerHTML = '<span class="ml-ok">▶</span><span class="ml-yazi">Videoyu oynat</span>';
      rozet.addEventListener("click", function () {
        rozet.remove();
        video.controls = true;
        if (kaynaklariGeriKoy(video, "auto")) {
          try {
            var p = video.play();
            if (p && typeof p.catch === "function") p.catch(function () {});
          } catch (e) {}
        }
      });
      kap.appendChild(rozet);
    } catch (e) {}
  }

  function kullaniciyaBagla(video) {
    function ac(oynat) {
      /* Kullanıcı gerçekten oynatıyorsa ipucunu serbest bırak. */
      var yeni = kaynaklariGeriKoy(video, oynat ? "auto" : hedefPreload(video));
      if (oynat && yeni) {
        try {
          var p = video.play();
          if (p && typeof p.catch === "function") p.catch(function () {});
        } catch (e) {}
      }
    }

    /* Yerel kontrol düğmeleri gölge DOM'da olsa da olaylar <video>'ya
       yeniden hedeflenir; yakalama evresinde dinleyerek src'yi play()
       işlenmeden önce geri koyarız. */
    try {
      video.addEventListener("pointerdown", function () { ac(false); }, true);
      video.addEventListener("touchstart", function () { ac(false); }, true);
      video.addEventListener("click", function () { ac(false); }, true);
      video.addEventListener("play", function () { ac(true); });
    } catch (e) {}
  }

  /* ---------- Ana akış ---------- */
  function baslat() {
    var dizi = [];
    try {
      var canli = document.getElementsByTagName("video");
      for (var i = 0; i < canli.length; i++) dizi.push(canli[i]);
    } catch (e) { return; }
    for (var j = 0; j < dizi.length; j++) hazirla(dizi[j]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", baslat);
  } else {
    baslat();
  }
})();
