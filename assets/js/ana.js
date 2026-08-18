/* TOR|THERMAL — Ortak site davranışları */
(function () {
  "use strict";

  /* Üst bar: kaydırınca sabitlenir */
  var bar = document.querySelector(".ust-bar");
  if (bar) {
    var esik = 90;
    window.addEventListener("scroll", function () {
      bar.classList.toggle("sabit", window.scrollY > esik);
    }, { passive: true });
  }

  /* Mobil menü */
  var dugme = document.querySelector(".menu-dugme");
  var menu = document.querySelector(".ust-menu");
  if (dugme && menu) {
    dugme.addEventListener("click", function () {
      menu.classList.toggle("acik");
      dugme.setAttribute("aria-expanded", menu.classList.contains("acik"));
    });
  }

  /* Scroll'da belirme */
  var azHareket = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!azHareket && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (girisler) {
      girisler.forEach(function (g) {
        if (g.isIntersecting) { g.target.classList.add("geldi"); io.unobserve(g.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".gorun").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".gorun").forEach(function (el) { el.classList.add("geldi"); });
  }

  /* Sayaçlar: data-hedef="332" data-birim="+" */
  function sayacBaslat(el) {
    var hedef = parseFloat(el.getAttribute("data-hedef"));
    var birim = el.getAttribute("data-birim") || "";
    var ondalik = (el.getAttribute("data-hedef").indexOf(".") > -1) ? 1 : 0;
    if (azHareket) { el.childNodes[0].nodeValue = hedef.toLocaleString("tr-TR"); return; }
    var sure = 1400, t0 = null;
    function adim(t) {
      if (!t0) t0 = t;
      var oran = Math.min((t - t0) / sure, 1);
      var eased = 1 - Math.pow(1 - oran, 3);
      var deger = hedef * eased;
      el.childNodes[0].nodeValue = deger.toLocaleString("tr-TR", { maximumFractionDigits: ondalik, minimumFractionDigits: 0 });
      if (oran < 1) requestAnimationFrame(adim);
    }
    requestAnimationFrame(adim);
  }
  if ("IntersectionObserver" in window) {
    var sayacIo = new IntersectionObserver(function (girisler) {
      girisler.forEach(function (g) {
        if (g.isIntersecting) { sayacBaslat(g.target); sayacIo.unobserve(g.target); }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll(".sayac .deger[data-hedef]").forEach(function (el) { sayacIo.observe(el); });
  }

  /* Buhar tuvali (hero) */
  var tuval = document.querySelector(".buhar-tuval");
  if (tuval && !azHareket) {
    var ctx = tuval.getContext("2d");
    var parcalar = [];
    function boyutla() {
      tuval.width = tuval.offsetWidth; tuval.height = tuval.offsetHeight;
    }
    boyutla(); window.addEventListener("resize", boyutla);
    for (var i = 0; i < 26; i++) {
      parcalar.push({
        x: Math.random(), y: 1 + Math.random() * 0.4,
        r: 30 + Math.random() * 90, hiz: 0.0004 + Math.random() * 0.0009,
        sal: Math.random() * Math.PI * 2, op: 0.05 + Math.random() * 0.09
      });
    }
    (function ciz(t) {
      ctx.clearRect(0, 0, tuval.width, tuval.height);
      parcalar.forEach(function (p) {
        p.y -= p.hiz; p.sal += 0.004;
        if (p.y < -0.25) { p.y = 1.2; p.x = Math.random(); }
        var x = (p.x + Math.sin(p.sal) * 0.02) * tuval.width;
        var y = p.y * tuval.height;
        var g = ctx.createRadialGradient(x, y, 0, x, y, p.r);
        g.addColorStop(0, "rgba(246,243,238," + p.op + ")");
        g.addColorStop(1, "rgba(246,243,238,0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      requestAnimationFrame(ciz);
    })();
  }

  /* Morf sekmeleri (Çizimden Hayata) */
  document.querySelectorAll("[data-morf-hedef]").forEach(function (sekme) {
    sekme.addEventListener("click", function () {
      var kap = sekme.closest("[data-morf-kap]");
      if (!kap) return;
      kap.querySelectorAll(".morf-sekme").forEach(function (s) { s.classList.remove("aktif"); });
      sekme.classList.add("aktif");
      var video = kap.querySelector("video");
      var img = kap.querySelector("img[data-morf-gorsel]");
      var hedefVideo = sekme.getAttribute("data-morf-hedef");
      var hedefGorsel = sekme.getAttribute("data-morf-gorsel");
      if (video && hedefVideo) {
        video.querySelector("source").src = hedefVideo; video.load();
        video.play && video.play().catch(function(){});
      }
      if (img && hedefGorsel) { img.src = hedefGorsel; }
    });
  });

  /* Mevsim sekmeleri (Dört Mevsim bölümü) */
  document.querySelectorAll("[data-mevsim-sekme]").forEach(function (sekme) {
    sekme.addEventListener("click", function () {
      var grup = sekme.closest("[data-mevsim-grup]");
      grup.querySelectorAll(".mevsim-sekme").forEach(function (s) { s.classList.remove("aktif"); });
      sekme.classList.add("aktif");
      var hedef = sekme.getAttribute("data-mevsim-sekme");
      grup.querySelectorAll(".mevsim-panel").forEach(function (p) {
        p.classList.toggle("aktif", p.getAttribute("data-mevsim-panel") === hedef);
      });
    });
  });

  /* Aktif menü vurgusu */
  var yol = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".ust-menu a").forEach(function (a) {
    if (a.getAttribute("href") === yol) a.classList.add("aktif");
  });
})();
