/* TOR|THERMAL — Mevsim Motoru
   Gerçek takvime göre body'ye mevsim sınıfı basar,
   hero medyasını ve mevsim rozetini günceller. */
(function () {
  var ay = new Date().getMonth() + 1; // 1-12
  var mevsim, etiket;
  if (ay >= 3 && ay <= 5) { mevsim = "bahar"; etiket = "İlkbahar"; }
  else if (ay >= 6 && ay <= 8) { mevsim = "yaz"; etiket = "Yaz"; }
  else if (ay >= 9 && ay <= 11) { mevsim = "sonbahar"; etiket = "Sonbahar"; }
  else { mevsim = "kis"; etiket = "Kış"; }

  document.body.classList.add("mevsim-" + mevsim);
  window.TOR_MEVSIM = { ad: mevsim, etiket: etiket };

  // Hero medya değişimi (data-mevsim-kaynak özniteliği JSON: {bahar:"...", yaz:"..."} )
  document.querySelectorAll("[data-mevsim-kaynak]").forEach(function (el) {
    try {
      var kaynaklar = JSON.parse(el.getAttribute("data-mevsim-kaynak"));
      var k = kaynaklar[mevsim] || kaynaklar.yaz;
      if (!k) return;
      if (el.tagName === "IMG") { el.src = k; }
      else if (el.tagName === "VIDEO") {
        el.querySelector("source").src = k; el.load();
        el.play && el.play().catch(function(){});
      }
    } catch (e) {}
  });

  document.querySelectorAll("[data-mevsim-etiket]").forEach(function (el) {
    el.textContent = etiket;
  });
})();
