/* TOR|THERMAL — 52 haftalık dönem takvimi (TEMSİLÎ müsaitlik; gerçek envanter firma teyidiyle bağlanacak) */
window.TOR_DONEMLER = (function () {
  var sezonlar = [
    { hafta: [1, 9],   sezon: "kis",      ad: "Kış Kür Sezonu",     carpani: 0.85 },
    { hafta: [10, 21], sezon: "bahar",    ad: "Bahar Sezonu",       carpani: 1.0 },
    { hafta: [22, 35], sezon: "yaz",      ad: "Yaz Yüksek Sezon",   carpani: 1.35 },
    { hafta: [36, 47], sezon: "sonbahar", ad: "Sonbahar Sezonu",    carpani: 1.0 },
    { hafta: [48, 52], sezon: "kis",      ad: "Yılbaşı & Kış",      carpani: 1.15 }
  ];
  // Deterministik temsilî müsaitlik (rastgele değil — demo tutarlılığı için)
  var doluHaftalar = [22, 23, 24, 27, 28, 29, 30, 33, 34, 51, 52];
  var opsiyonlu = [25, 26, 31, 35, 1, 14, 48];
  var liste = [];
  for (var h = 1; h <= 52; h++) {
    var s = sezonlar.find(function (x) { return h >= x.hafta[0] && h <= x.hafta[1]; });
    liste.push({
      hafta: h,
      sezon: s.sezon,
      sezonAd: s.ad,
      carpani: s.carpani,
      durum: doluHaftalar.indexOf(h) > -1 ? "satildi" : (opsiyonlu.indexOf(h) > -1 ? "opsiyonlu" : "musait")
    });
  }
  return liste;
})();
