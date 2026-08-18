/* TOR|THERMAL — Daire/villa tipleri (m² verileri torthermal.com'daki resmi listedir)
   Fiyat alanları TEMSİLÎDİR — firma teyidiyle gerçek matris girilecek. */
window.TOR_DAIRELER = [
  { id: "1p1-deluks",       ad: "1+1 Delüks",                        brutMin: 48.59,  brutMaks: 60.54,  netMin: 32.60,  netMaks: 42.40,  kisi: 4,  manzara: "Orman / Deniz", tip: "daire", ozet: "Çiftler ve küçük aileler için kompakt, tam eşyalı başlangıç suiti." },
  { id: "1p1-deniz",        ad: "1+1 Delüks Deniz Manzaralı",        brutMin: 55.87,  brutMaks: 60.54,  netMin: 37.50,  netMaks: 42.40,  kisi: 4,  manzara: "Deniz",         tip: "daire", ozet: "Balkonundan Marmara'ya uyanan, gün batımına bakan 1+1." },
  { id: "2p1-deluks",       ad: "2+1 Delüks",                        brutMin: 85.30,  brutMaks: 109.97, netMin: 62.10,  netMaks: 77.20,  kisi: 6,  manzara: "Orman / Deniz", tip: "daire", ozet: "İki geniş yatak odasıyla aile konforu, tatil özgürlüğü." },
  { id: "2p1-deniz",        ad: "2+1 Delüks Deniz Manzaralı",        brutMin: 128.12, brutMaks: 139.35, netMin: 89.90,  netMaks: 97.40,  kisi: 6,  manzara: "Deniz",         tip: "daire", ozet: "Ferah salonu ve deniz cepheli geniş balkonuyla ailenin sahnesi." },
  { id: "3p1-deluks",       ad: "3+1 Delüks",                        brutMin: 128.12, brutMaks: 139.35, netMin: 89.90,  netMaks: 97.40,  kisi: 8,  manzara: "Orman / Deniz", tip: "daire", ozet: "Geniş aileler için üç yatak odalı premium yaşam." },
  { id: "3p1-deniz",        ad: "3+1 Delüks Deniz Manzaralı",        brutMin: 130.81, brutMaks: 139.35, netMin: 94.40,  netMaks: 97.40,  kisi: 8,  manzara: "Deniz",         tip: "daire", ozet: "Her sabah Marmara manzarasıyla açılan üç yatak odalı suit." },
  { id: "3p1-villa",        ad: "3+1 Delüks Deniz Manzaralı Villa",  brutMin: 272.72, brutMaks: 273.68, netMin: 135.83, netMaks: 136.14, kisi: 8,  manzara: "Deniz",         tip: "villa", ozet: "Zemin + 1. kat, teras planlı; özel bahçesi ve termal su erişimiyle villa mahremiyeti." },
  { id: "4p1-villa",        ad: "4+1 Delüks Deniz Manzaralı Villa",  brutMin: 254.41, brutMaks: 309.67, netMin: 130.30, netMaks: 132.88, kisi: 10, manzara: "Deniz",         tip: "villa", ozet: "En geniş aileler için ultra ferah, çift katlı deniz manzaralı villa." }
];

/* Resmi ödeme çerçevesi (Tor Thermal güncel sunumundan) */
window.TOR_ODEME = {
  pesinatOrani: 0.30,        // %30 peşinat
  taksitAy: 18,              // 18 ay taksit
  pesinIndirimOrani: 0.25,   // peşin ödemede %25 indirim
  banka: "Türkiye Finans Katılım Bankası",
  gelistirici: "Nihal İnşaat A.Ş. ve Tor Global İnşaat ve Yatırım A.Ş. Adi Ortaklığı"
};

/* Anahtar teslim daire içeriği (resmi teklif dosyasından) */
window.TOR_ESYA = [
  { grup: "Beyaz Eşyalar", icerik: "Ankastre fırın ve ocak, davlumbaz, ankastre bulaşık makinesi, solo buzdolabı, klima, çamaşır makinesi, küçük ev aletleri" },
  { grup: "Mobilya", icerik: "Yemek masası ve sandalyeler, salon oturma takımı, orta sehpa, TV ünitesi, yatak odası takımı, balkon oturma grubu, vestiyer" },
  { grup: "Mutfak Ekipmanları", icerik: "Tencere/tava seti, hazırlık ve servis gereçleri" },
  { grup: "Ev Tekstili", icerik: "Yatak ve nevresim takımı, banyo tekstili, halı (dönemsel), perde" },
  { grup: "Teknoloji", icerik: "TV + uydu sistemi, dahili telefon hattı, akıllı ev sistemleri" }
];
