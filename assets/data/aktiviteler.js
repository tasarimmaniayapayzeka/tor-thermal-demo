/* TOR|THERMAL — Aktivite detay verileri
   Program içerikleri temsilîdir; kesin süre, rota ve kontenjan bilgisi
   resort aktivite merkezinden teyit edilir. */
window.TOR_AKTIVITELER = [
  {
    id: "trekking",
    ad: "Trekking",
    ustyazi: "Doğa ile İç İçe",
    kisa: "Özel parkurlarda doğa yürüyüşleriyle huzurlu bir kaçış.",
    hero: "assets/img/ai/aktivite/trekking-baslangic.jpg",
    ozet: "Yarımadanın çam ormanlarında, deniz manzarasına açılan işaretli parkurlarda; profesyonel rehber eşliğinde, kendi temponuzda yürüyün.",
    paragraflar: [
      "Tor Thermal'in çam ormanıyla kaplı yamaçlarında, resort sınırları içinden başlayan işaretli yürüyüş parkurları sizi Marmara'ya bakan seyir noktalarına, orman içi patikalara ve mevsiminde akan derelere ulaştırır. Rotalar sabah serinliğinde başlar; grup temposu, katılımcıların seviyesine göre rehber tarafından ayarlanır.",
      "Her yürüyüş kısa bir bilgilendirme ve ısınma ile açılır. Rehber, güzergâh boyunca bölgenin bitki örtüsü, kuş türleri ve termal kaynağın jeolojik hikâyesi üzerine kısa duraklar yapar; böylece yürüyüş bir spor faaliyeti olduğu kadar bir keşif turuna da dönüşür.",
      "Dönüşte termal havuzlarda kas gevşemesine ayrılan bir saat önerilir — yürüyüşün ardından sıcak mineralli suda dinlenmek, günün en keyifli tamamlayıcısıdır."
    ],
    kunye: [
      { etiket: "Süre", deger: "2–4 saat" },
      { etiket: "Mesafe", deger: "4–9 km" },
      { etiket: "Zorluk", deger: "Başlangıç – Orta" },
      { etiket: "Grup", deger: "6–12 kişi" }
    ],
    rotalar: [
      { ad: "Orman Halkası", sure: "2 saat", mesafe: "4 km", zorluk: "Başlangıç", aciklama: "Resort çevresindeki çam ormanında, hafif eğimli halka parkur. İlk kez yürüyenler ve çocuklu aileler için ideal." },
      { ad: "Seyir Terasları Hattı", sure: "3 saat", mesafe: "6,5 km", zorluk: "Orta", aciklama: "Yamaç boyunca yükselerek Marmara'ya bakan seyir noktalarına ulaşan güzergâh; dönüşte fünikülere bağlanır." },
      { ad: "Şelale Rotası", sure: "4 saat", mesafe: "9 km", zorluk: "Orta", aciklama: "Orman içinden dereye inen, mevsiminde şelale manzarasıyla biten uzun parkur. Düzenli yürüyüş alışkanlığı önerilir." }
    ],
    galeri: [
      { src: "assets/img/ai/aktivite/trekking-patika.jpg", ad: "Orman patikası" },
      { src: "assets/img/ai/aktivite/trekking-mola.jpg", ad: "Manzara molası" },
      { src: "assets/img/ai/aktivite/trekking-selale.jpg", ad: "Şelale varışı" },
      { src: "assets/img/ai/aktivite/trekking-ekipman.jpg", ad: "Ekipman" }
    ],
    video: "assets/video/aktivite-trekking.mp4",
    videoPoster: "assets/img/ai/aktivite/trekking-patika.jpg",
    hazirlik: [
      "Bileği kavrayan, tabanı tutan yürüyüş ayakkabısı",
      "Katmanlı giyim: nefes alan tişört + ince polar + rüzgârlık",
      "Kişi başı en az 1,5 litre su",
      "Şapka, güneş gözlüğü ve güneş koruyucu",
      "Kuru meyve, kuruyemiş gibi hafif atıştırmalık"
    ],
    saglayanlar: [
      "Sertifikalı doğa rehberi eşliği",
      "Telsiz ve ilk yardım çantası",
      "Trekking bastonu (talep hâlinde)",
      "Rota sonunda soğuk içecek ikramı"
    ],
    guvenlik: "Yürüyüşler hava koşullarına göre yeniden planlanabilir veya ertelenebilir. Kalp-damar rahatsızlığı, denge sorunu veya yakın zamanda geçirilmiş ameliyat gibi durumlarda katılım öncesi hekiminize danışınız; rehberinizi bilgilendiriniz.",
    ilgili: ["dag-yuruyusu", "kaya-tirmanisi", "macera-parkuru"]
  },
  { id: "dag-yuruyusu", ad: "Dağ Yürüyüşü", kisa: "Zorluk seviyesi ayarlanabilir rotalarla nefes kesen manzaralara ulaşın.", hero: "assets/img/ai/dag-yuruyusu.jpg", yakinda: true },
  { id: "kaya-tirmanisi", ad: "Kaya Tırmanışı", kisa: "Profesyonel eğitmenler eşliğinde sınırlarınızı keşfedin.", hero: "assets/img/ai/kaya-tirmanisi.jpg", yakinda: true },
  { id: "macera-parkuru", ad: "Macera Parkuru", kisa: "Engel parkurlarında fiziksel dayanıklılığınızı test edin.", hero: "assets/img/ai/macera-parkuru.jpg", yakinda: true },
  { id: "atv", ad: "ATV", kisa: "Yaşa uygun parkurlarla doğanın engebeli arazilerini keşfedin.", hero: "assets/img/ai/atv.jpg", yakinda: true },
  { id: "binicilik", ad: "Binicilik Kulübü", kisa: "Profesyonel eğitmenlerle binicilik becerilerinizi geliştirin.", hero: "assets/img/ai/binicilik.jpg", yakinda: true }
];
