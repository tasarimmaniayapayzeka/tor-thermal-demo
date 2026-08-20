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
        /* Video artık sıkıştırılmış (~2 MB) olduğu için mobilde de oynatılır;
           yalnız kullanıcı cihazında açıkça "Veri Tasarrufu" seçiliyse
           (navigator.connection.saveData) indirmeyi atlayıp poster karesinde
           bırakılır. Önceki sürüm yalnızca dar ekranı da (max-width:767px)
           engel sayıyordu — video 33 MB'ken alınmış bir karardı; dosya artık
           küçük olduğu için bu kısıtlama kaldırıldı (mobilde oynamıyordu). */
        var tasarrufAcik = false;
        try { tasarrufAcik = !!(navigator.connection && navigator.connection.saveData); } catch (e) {}
        var afis = k.replace("assets/video/", "assets/img/ai/").replace(/\.mp4$/, ".jpg");
        if (afis !== k) el.poster = afis;
        if (tasarrufAcik) return;
        var kaynak = el.querySelector("source");
        if (!kaynak) {
          kaynak = document.createElement("source");
          kaynak.type = "video/mp4";
          el.appendChild(kaynak);
        }
        kaynak.src = k;
        el.preload = "auto";
        el.autoplay = true;
        el.muted = true;           /* sessiz olmadan otomatik oynatma engellenir */
        el.load();
        function oynat() {
          var s = el.play && el.play();
          if (s && typeof s.catch === "function") s.catch(function () {});
        }
        el.addEventListener("loadeddata", oynat, { once: true });
        /* Sekme arka plandayken tarayıcı oynatmayı reddeder; görünür olunca dene. */
        document.addEventListener("visibilitychange", function () {
          if (!document.hidden && el.paused) oynat();
        });
        oynat();
      }
    } catch (e) {}
  });

  document.querySelectorAll("[data-mevsim-etiket]").forEach(function (el) {
    el.textContent = etiket;
  });
})();
