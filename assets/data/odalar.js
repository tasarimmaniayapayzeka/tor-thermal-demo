/*
 * TOR Thermal — Daire/Villa oda dökümü
 * Oda dökümü resmî teklif dosyasından (PPTX teklif slaytları 46/49/52/55/58);
 * oda adlandırmaları plan görselinden okunmuştur.
 * - Daire planlarında (1+1, 2+1, 3+1) m² etiketleri slayt üzerinde metin kutusu
 *   olarak plana bindirilmişti; eşleştirme, metin kutusu koordinatlarının plan
 *   görseli üzerindeki konumuna göre yapıldı.
 * - Villa planlarında m² değerleri doğrudan görselin üzerinde yazılıdır.
 * - Villalar ikiz (ayna simetrik) çizilmiştir; m² değerleri TEK ünite içindir.
 * - "tahmini: true" işaretli oda adları plan görselinden kesin okunamadı,
 *   konum ve mantıkla adlandırıldı (m² değerleri resmî, adlar tahminî).
 */
window.TOR_ODALAR = {
  "1p1": {
    plan: "assets/img/planlar/plan-1p1.jpg",
    toplamNet: 37.5,
    odalar: [
      { ad: "Salon", m2: 9.1 },
      { ad: "Yatak Odası", m2: 9.0 },
      { ad: "Mutfak (Açık)", m2: 7.4 },
      { ad: "Banyo", m2: 4.6 },
      { ad: "Antre / Hol", m2: 3.9 },
      { ad: "Balkon / Teras", m2: 3.5 }
    ]
  },
  "2p1": {
    plan: "assets/img/planlar/plan-2p1.jpg",
    toplamNet: 77.2,
    odalar: [
      { ad: "Ebeveyn Yatak Odası", m2: 15.5 },
      { ad: "Salon", m2: 15.1 },
      { ad: "Yatak Odası", m2: 13.8 },
      { ad: "Balkon / Teras", m2: 8.8 },
      { ad: "Mutfak", m2: 8.0 },
      { ad: "Antre", m2: 4.7 },
      { ad: "Banyo", m2: 4.3 },
      { ad: "Ebeveyn Banyosu", m2: 4.2 },
      { ad: "Koridor", m2: 2.8, tahmini: true }
    ]
  },
  "3p1": {
    plan: "assets/img/planlar/plan-3p1.jpg",
    toplamNet: 97.4,
    odalar: [
      { ad: "Salon", m2: 18.5 },
      { ad: "Yatak Odası 1", m2: 15.0 },
      { ad: "Yatak Odası 2", m2: 13.6 },
      { ad: "Yatak Odası 3", m2: 12.3 },
      { ad: "Mutfak", m2: 12.3 },
      { ad: "Balkon / Teras", m2: 6.1 },
      { ad: "Banyo", m2: 6.5, tahmini: true },
      { ad: "Yatak Odaları Holü", m2: 5.0 },
      { ad: "Antre", m2: 4.8, tahmini: true },
      { ad: "Ebeveyn Banyosu", m2: 3.3, tahmini: true }
    ]
  },
  "villa3": {
    planZemin: "assets/img/planlar/plan-villa-zemin.jpg",
    planKat1: "assets/img/planlar/plan-villa-kat1.jpg",
    odalar: [
      /* Zemin kat */
      { ad: "Salon + Yemek Odası", m2: 25.7, kat: "zemin" },
      { ad: "Mutfak", m2: 13.0, kat: "zemin" },
      { ad: "Giriş / Antre", m2: 7.9, kat: "zemin" },
      { ad: "Hol", m2: 6.8, kat: "zemin" },
      { ad: "Merdiven", m2: 6.5, kat: "zemin" },
      { ad: "Banyo / WC", m2: 3.1, kat: "zemin" },
      { ad: "Yüzme Havuzu (Bahçe)", m2: 15.0, kat: "zemin", dis: true },
      /* 1. kat */
      { ad: "Ebeveyn Yatak Odası", m2: 17.3, kat: "kat1" },
      { ad: "Yatak Odası 2", m2: 16.9, kat: "kat1" },
      { ad: "Yatak Odası 3", m2: 13.7, kat: "kat1" },
      { ad: "Merdiven", m2: 6.8, kat: "kat1" },
      { ad: "Balkon / Teras", m2: 6.6, kat: "kat1" },
      { ad: "Hol", m2: 3.8, kat: "kat1" },
      { ad: "Koridor", m2: 3.6, kat: "kat1" },
      { ad: "Ebeveyn Banyosu", m2: 3.5, kat: "kat1", tahmini: true },
      { ad: "Banyo", m2: 3.1, kat: "kat1" }
    ]
  },
  "villa4": {
    planZemin: "assets/img/planlar/plan-villa4-zemin.jpg",
    planKat1: "assets/img/planlar/plan-villa4-kat1.jpg",
    odalar: [
      /* Zemin kat */
      { ad: "Salon + Yemek Odası", m2: 31.9, kat: "zemin" },
      { ad: "Yatak Odası (Zemin Kat)", m2: 12.25, kat: "zemin", tahmini: true },
      { ad: "Mutfak", m2: 11.2, kat: "zemin" },
      { ad: "Merdiven", m2: 6.52, kat: "zemin" },
      { ad: "WC / Duş", m2: 2.62, kat: "zemin" },
      { ad: "Kiler / Depo", m2: 2.24, kat: "zemin", tahmini: true },
      { ad: "Yüzme Havuzu (Bahçe)", m2: 12.8, kat: "zemin", dis: true },
      /* 1. kat */
      { ad: "Ebeveyn Yatak Odası", m2: 22.7, kat: "kat1" },
      { ad: "Yatak Odası 2", m2: 14.66, kat: "kat1" },
      { ad: "Yatak Odası 3", m2: 9.73, kat: "kat1" },
      { ad: "Balkon / Teras", m2: 8.79, kat: "kat1" },
      { ad: "Ebeveyn Banyosu", m2: 6.88, kat: "kat1" },
      { ad: "Merdiven", m2: 6.6, kat: "kat1" },
      { ad: "Banyo", m2: 4.42, kat: "kat1" },
      { ad: "Hol", m2: 4.39, kat: "kat1" }
    ]
  }
};
