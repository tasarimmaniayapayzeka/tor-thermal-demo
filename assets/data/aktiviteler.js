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
    bolum: {
      deneyimGozkasi: "Deneyim",
      deneyimBaslik: "Yürüyüş Nasıl İlerliyor?",
      rotaGozkasi: "Rota Seçenekleri",
      rotaBaslik: "Temponuza Göre Üç Parkur",
      rotaGiris: "Rehberiniz gruba göre tempoyu ayarlar; süreler yürüyüş molaları dâhil yaklaşık değerlerdir.",
      rotaNot: "Rota süreleri, mesafeleri ve zorluk dereceleri temsilîdir; hava ve grup durumuna göre değişebilir.",
      galeriGozkasi: "Parkurdan Kareler",
      galeriBaslik: "Yolda Sizi Neler Bekliyor?",
      videoGozkasi: "Parkurdan",
      videoBaslik: "Yürüyüş Gözünden",
      videoGiris: "Orman patikasında ilerlerken çekilmiş sesli görüntü — kulaklığınızı takın, ormanın sesini dinleyin.",
      ctaGozkasi: "Yerinde Deneyin",
      ctaBaslik: "Parkuru Kendi Adımlarınızla Tanıyın",
      ctaMetin: "Deneyim Günü'nde kısa bir tanıtım yürüyüşüne katılın, rehberimizle tanışın, parkurları yerinde görün."
    },
    bakista: [
      { etiket: "Buluşma", deger: "Resepsiyon önü, sabah 08:30" },
      { etiket: "Rehber", deger: "Sertifikalı doğa rehberi" },
      { etiket: "Kayıt", deger: "Bir gün önceden aktivite merkezinden" },
      { etiket: "Program", deger: "Bilgiler temsilîdir" }
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
  {
    "id": "dag-yuruyusu",
    "ad": "Dağ Yürüyüşü",
    "ustyazi": "Zirveye Doğru",
    "kisa": "Orman sınırının üzerine çıkıp Marmara'ya hâkim kayalık zirvelere ulaşan, yükseklik kazancı belirgin rotalar.",
    "hero": "assets/img/ai/aktivite/dagyuruyusu-hero.jpg",
    "ozet": "Yarımadanın en yüksek sırtlarına tırmanan, yükseklik kazancı belirgin rotalar. Deneyimli dağ rehberi eşliğinde erken saatte çıkıp Marmara'ya hâkim zirve seyir noktasına ulaşırsınız.",
    "paragraflar": [
      "Dağ yürüyüşü, resortun çevresindeki ormanın seyreldiği kotta başlar; buradan sonrası ağaç sınırının üzerindeki kayalık sırtlardır. Ormanın içinde ilerleyen günübirlik parkurlardan farkı da buradadır: belirleyici olan kat edilen mesafe değil, kazanılan kot farkıdır. Eğim baştan sona süreklidir, zemin yer yer taşlı ve gevşektir; adım seçimi sürekli dikkat ister. Kazanılan her yüz metrede manzara bir kat daha açılır; Marmara'nın mavisi ve karşı kıyının silueti sırt boyunca yavaş yavaş kadraja girer.",
      "Çıkış, serinlikten ve uzun gün ışığından yararlanmak için erken saatte yapılır. Rota lideri önce grubu tanır; adım uzunluğu, nefes ritmi ve mola aralıkları en yavaş katılımcıya göre belirlenir. Dik bölümlerde tempo bilinçli olarak düşürülür, açık sırtlarda rüzgâr ve zemin durumu yeniden değerlendirilir. Koşullar uygun görülmezse rehber, zirveye çıkmadan alt seyir noktasında programı tamamlama kararı alabilir; bu, dağdaki olağan işleyiştir.",
      "İniş, çıkıştan daha çok dikkat ister; dizler ve ayak bilekleri asıl yükü dönüşte taşır. Bu nedenle program, iniş sonrası termal havuzlarda geçirilecek uzunca bir dinlenme aralığıyla planlanır; ılık suda bacaklarınızı uzatmak günün en rahat bölümüdür. Dileyen misafirler wellness merkezinden randevu alarak günü tamamlar. Aynı güne ikinci bir yoğun aktivite koymamanızı öneririz."
    ],
    "bolum": {
      "deneyimGozkasi": "Zirve Günü",
      "deneyimBaslik": "Çıkıştan İnişe Bir Gün",
      "rotaGozkasi": "Yükseklik Seçenekleri",
      "rotaBaslik": "Yükseklik Kazancına Göre Üç Rota",
      "rotaGiris": "Rotalar mesafeden çok tırmanılan yüksekliğe göre ayrılır; süreler molalar ve zirvede geçirilen zaman dâhil yaklaşık değerlerdir.",
      "rotaNot": "Yükseklik kazancı, süre ve zorluk dereceleri temsilîdir; hava, zemin ve grup durumuna göre değişebilir.",
      "galeriGozkasi": "Sırttan Kareler",
      "galeriBaslik": "Sırtta ve Zirvede Ne Görürsünüz?",
      "videoGozkasi": "Zirve Hattından",
      "videoBaslik": "Zirveye Giden Sırt",
      "videoGiris": "Çıkışın son bölümünde çekilmiş sesli görüntü; sırttaki rüzgârı duymak için kulaklığınızı takın.",
      "ctaGozkasi": "Yamaçta Buluşalım",
      "ctaBaslik": "Yüksekliği Kendi Ritminizle Ölçün",
      "ctaMetin": "Deneyim Günü'nde ilk yüz metrelik yükseltiyi rehberimizle birlikte çıkın, dağ ekibimizle tanışın, rotaların başlangıç noktasını yerinde görün."
    },
    "bakista": [
      {
        "etiket": "Çıkış saati",
        "deger": "Aktivite merkezi önü, sabah 07:00"
      },
      {
        "etiket": "Rota lideri",
        "deger": "Dağcılık sertifikalı rehber ve süpürücü"
      },
      {
        "etiket": "Ön kayıt",
        "deger": "İki gün önceden, kısa bir seviye görüşmesiyle"
      },
      {
        "etiket": "Yaş ve koşul",
        "deger": "16 yaş ve üzeri; düzenli yürüyüş alışkanlığı"
      }
    ],
    "kunye": [
      {
        "etiket": "Süre",
        "deger": "4–7 saat"
      },
      {
        "etiket": "Yükseklik kazancı",
        "deger": "300–650 m"
      },
      {
        "etiket": "Zorluk",
        "deger": "Orta – İleri"
      },
      {
        "etiket": "Grup",
        "deger": "4–8 kişi"
      }
    ],
    "rotalar": [
      {
        "ad": "Ağaç Sınırı Çıkışı",
        "sure": "4 saat",
        "mesafe": "300 m yükseklik kazancı",
        "zorluk": "Orta",
        "aciklama": "Ormanın seyreldiği kottan başlayıp ilk kayalık sırta ulaşan giriş rotası. Eğim düzenlidir, teknik bölüm yoktur. Yükseltiye alışmak ve kendi temposunu ölçmek isteyen misafirler için uygundur; dönüş aynı hattan, daha yavaş bir tempoyla yapılır."
      },
      {
        "ad": "Seyir Zirvesi Hattı",
        "sure": "5 saat",
        "mesafe": "500 m yükseklik kazancı",
        "zorluk": "Orta – İleri",
        "aciklama": "Ağaç sınırının üzerine çıkarak Marmara'ya bakan ana seyir zirvesine ulaşan rota. Son bölümde taşlı ve gevşek zeminde kısa bir tırmanma kesiti bulunur; elleri kullanmayı gerektiren yerlerde rota lideri geçişi tek tek yaptırır ve talep hâlinde kask verir."
      },
      {
        "ad": "Şafak Zirvesi",
        "sure": "6–7 saat",
        "mesafe": "650 m yükseklik kazancı",
        "zorluk": "İleri",
        "aciklama": "Karanlıkta başlayan, gün doğumunu açık yamaçta karşılayan en uzun rota. Kesintisiz eğim, uzun bir sırt geçişi ve rüzgâra açık zirve alanı içerir. Düzenli kondisyon ve daha önce en az bir dağ yürüyüşü deneyimi beklenir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/dagyuruyusu-sirt-hatti.jpg",
        "ad": "Sırt hattında tempo"
      },
      {
        "src": "assets/img/ai/aktivite/dagyuruyusu-kayalik-gecis.jpg",
        "ad": "Kayalık geçiş"
      },
      {
        "src": "assets/img/ai/aktivite/dagyuruyusu-zirve-manzara.jpg",
        "ad": "Zirve seyir noktası"
      },
      {
        "src": "assets/img/ai/aktivite/dagyuruyusu-ekipman.jpg",
        "ad": "Çıkış donanımı"
      }
    ],
    "video": "assets/video/aktivite-dag-yuruyusu.mp4",
    "videoPoster": "assets/img/ai/aktivite/dagyuruyusu-sirt-hatti.jpg",
    "hazirlik": [
      "Bilek destekli, sert tabanlı ve önceden giyilerek alıştırılmış dağ botu",
      "Rüzgâr geçirmeyen dış katman; açık sırtlarda hava koşulları hızla değişir",
      "Kişi başı en az 2 litre su ve elektrolitli içecek",
      "Karanlıkta başlayan çıkışlar için baş lambası ve yedek pil",
      "Yüksek enerjili atıştırmalık: enerji barı, kuruyemiş, hurma"
    ],
    "saglayanlar": [
      "Dağcılık sertifikalı rota lideri ve grup sonunda süpürücü rehber",
      "Teleskopik yürüyüş bastonu ve kayalık kesitler için kask (talep hâlinde)",
      "Telsiz haberleşme, GPS takip ve genişletilmiş ilk yardım seti",
      "Zirvede sıcak içecek molası, dönüşte havlu ve mevsim meyvesi ikramı"
    ],
    "guvenlik": "Zirve programları rüzgâr, sis ve zemin durumuna göre kısaltılabilir, alternatif rotaya çevrilebilir veya ertelenebilir; nihai karar rota liderine aittir. Katılım 16 yaş ve üzeri misafirlerimiz içindir; bilek destekli dağ botu bulunmayan misafirler kayalık kesitlere alınmaz. Kalp-damar veya solunum rahatsızlığı, denge sorunu, diz ve ayak bileği şikâyeti ya da yakın zamanda geçirilmiş bir ameliyat söz konusuysa katılım öncesinde hekiminize danışınız ve durumu rehberinize bildiriniz. Buradaki süre, yükseklik ve zorluk bilgileri temsilîdir.",
    "ilgili": [
      "trekking",
      "kaya-tirmanisi",
      "macera-parkuru"
    ]
  },
  {
    "id": "kaya-tirmanisi",
    "ad": "Kaya Tırmanışı",
    "ustyazi": "Eğitmenli Tırmanış",
    "kisa": "Sertifikalı eğitmen gözetiminde, emniyet hattına bağlı olarak kendi derecenizde kaya tırmanışı.",
    "hero": "assets/img/ai/aktivite/kaya-hero.jpg",
    "ozet": "Resort sınırları içindeki kireç taşı yüzeylerde, sertifikalı eğitmen gözetiminde ve tam emniyet donanımıyla; kayaya ilk kez tutunandan deneyimli tırmanıcıya kadar herkesin kendi derecesinde ilerlediği seanslar.",
    "paragraflar": [
      "Resort sınırları içindeki kireç taşı yüzeyler ve eğitim duvarı, birbirinden farklı zorlukta hatlar barındırır. Sabit ankrajlarla donatılmış rotalar tutamak yoğunluğuna ve eğime göre derecelendirilmiştir; üst hatlarda yükseldikçe çam tepelerinin ardından Marmara ufku görünür hâle gelir. Seanslar günün ilk saatlerinde, kaya yüzeyi henüz ısınmadan başlar; her hat ve her ankraj, tırmanış öncesinde eğitmen tarafından tek tek kontrol edilir.",
      "Seans, düğüm ve emniyet sisteminin anlatımıyla açılır; katılımcılar önce alçak eğitim duvarında ayak yerleşimi, ağırlık aktarımı ve tutuş tekniklerini çalışır. Eğitmen, tırmanış boyunca ipin alt ucunda emniyeti üstlenir, sesli iletişimi kesintisiz sürdürür ve rota üzerinde hamle hamle yönlendirir. İnişler kontrollü sarkma ile yapılır; kimse acele ettirilmez, her katılımcı hattı kendi temposunda tamamlar.",
      "Tırmanış özellikle önkol, omuz ve sırt kaslarını yoğun çalıştırdığından seans kısa bir esneme bölümüyle kapanır. Sahanın hemen altındaki gölgeli seyir terasında soğuk bir içecekle oturup günün hatlarını konuşmak, birçok grubun alışkanlık hâline getirdiği bir kapanıştır. Kaslarınızı daha planlı toparlamak isterseniz aynı gün spor kulübündeki mobilite çalışmasına katılabilir, sahadan oraya fünikülerle birkaç dakikada ulaşabilirsiniz."
    ],
    "bolum": {
      "deneyimGozkasi": "Seans Akışı",
      "deneyimBaslik": "İpe Bağlanmadan Önce ve Sonra",
      "rotaGozkasi": "Hat Seçenekleri",
      "rotaBaslik": "Eğitim Duvarından İleri Rotaya",
      "rotaGiris": "Eğitmeniniz hattı katılımcının derecesine göre belirler; süreler emniyet hazırlığı, tırmanış ve iniş dâhil yaklaşık değerlerdir.",
      "rotaNot": "Hat yükseklikleri, dereceleri ve süreler temsilîdir; kaya durumuna, hava koşullarına ve grup seviyesine göre değişebilir.",
      "galeriGozkasi": "Kaya Yüzünden",
      "galeriBaslik": "Duvarda Sizi Neler Bekliyor?",
      "videoGozkasi": "Sahadan",
      "videoBaslik": "Kaya Yüzeyi Boyunca",
      "videoGiris": "Sabah seansında, hattın orta bölümünde çekilmiş sesli görüntü; magnezyumun ve ipin sesi ancak sessiz bir ortamda duyulur.",
      "ctaGozkasi": "Kayayla Tanışın",
      "ctaBaslik": "Kayaya İlk Kez Tutunun",
      "ctaMetin": "Ziyaretinizde eğitim duvarında kısa bir tanıtım tırmanışına katılabilir, eğitmenimizle tanışabilir, donanımı ve hatları yerinde görebilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Toplanma",
        "deger": "Tırmanış sahası girişi, sabah 09:00"
      },
      {
        "etiket": "Eğitmen",
        "deger": "Sertifikalı tırmanış eğitmeni; dört katılımcıya bir eğitmen"
      },
      {
        "etiket": "Kayıt",
        "deger": "Bir gün önceden; her seans için kontenjan sınırlı"
      },
      {
        "etiket": "Yaş ve derece",
        "deger": "10 yaş ve üzeri; İleri Rota için tırmanış deneyimi"
      }
    ],
    "kunye": [
      {
        "etiket": "Süre",
        "deger": "1 – 2,5 saat"
      },
      {
        "etiket": "Hat yüksekliği",
        "deger": "8–18 m"
      },
      {
        "etiket": "Zorluk",
        "deger": "Başlangıç – İleri"
      },
      {
        "etiket": "Grup",
        "deger": "En çok 8 kişi"
      }
    ],
    "rotalar": [
      {
        "ad": "Eğitim Duvarı",
        "sure": "1 saat",
        "mesafe": "8 m / 4a",
        "zorluk": "Başlangıç",
        "aciklama": "Bol tutamaklı, düşük eğimli başlangıç yüzeyi. Kayaya ilk kez tutunanlar burada düğüm, emniyet komutları ve ayak yerleşimi çalışır; hat kısa olduğu için aynı seans içinde birkaç kez tekrarlanabilir. Çocuklu aileler için de uygundur."
      },
      {
        "ad": "Gölge Yüzü",
        "sure": "1,5 saat",
        "mesafe": "12 m / 5a",
        "zorluk": "Orta",
        "aciklama": "Gün boyu çam gölgesinde kalan, dik ama tutamakları belirgin hat. Ağırlık aktarımı ve uzun hamle isteyen iki bölümü bulunur; üst ankrajdan Marmara'ya geniş bir açıklık görünür. Temel tekniği kavramış katılımcılar için önerilir."
      },
      {
        "ad": "İleri Rota",
        "sure": "2,5 saat",
        "mesafe": "18 m / 6a+",
        "zorluk": "İleri",
        "aciklama": "Deneyimli tırmanıcılara yönelik, negatif eğimli bölümler ve küçük tutamaklar içeren uzun hat. Katılım için düzenli tırmanış geçmişi, kendi emniyetini kurabilme becerisi ve eğitmenin ön değerlendirmesi gerekir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/kaya-egitim-duvari.jpg",
        "ad": "Eğitim duvarı"
      },
      {
        "src": "assets/img/ai/aktivite/kaya-tutamak-detay.jpg",
        "ad": "Kaya yüzeyi"
      },
      {
        "src": "assets/img/ai/aktivite/kaya-ekipman.jpg",
        "ad": "Emniyet donanımı"
      },
      {
        "src": "assets/img/ai/aktivite/kaya-hat-sonu.jpg",
        "ad": "Hattın sonunda"
      }
    ],
    "video": "assets/video/aktivite-kaya-tirmanisi.mp4",
    "videoPoster": "assets/img/ai/aktivite/kaya-hero.jpg",
    "hazirlik": [
      "Ayağı saran spor ayakkabı; tırmanış ayakkabısı numaranıza göre sahada verilir",
      "Hareketi kısıtlamayan, esnek ve nefes alan spor kıyafet",
      "Uzun saçlar için toka; yüzük, saat ve bilezik gibi takılar çıkarılır",
      "En az bir litrelik su; kaya ısındıkça sık aralıklarla yudumlamanız gerekir",
      "Güneş koruyucu ve hatlar arasında giyilecek ince bir rüzgârlık"
    ],
    "saglayanlar": [
      "Sertifikalı tırmanış eğitmeni eşliği; en fazla dört kişilik çalışma grupları",
      "Kask, emniyet kemeri, tırmanış ayakkabısı ve magnezyum kesesi",
      "İp, ankraj ve emniyet donanımının her seans öncesi kontrolü",
      "Saha girişinde ilk yardım noktası ve seans sonrası kısa esneme çalışması"
    ],
    "guvenlik": "Tırmanış seansları yağış, ıslak kaya ve kuvvetli rüzgâr durumunda ertelenir veya iptal edilir; buradaki program, hat ve süre bilgileri temsilîdir. Katılım 10 yaş ve üzeri içindir; 18 yaş altı katılımcılar için veli onayı, İleri Rota için ise eğitmenin ön değerlendirmesi aranır. Kask ve emniyet kemeri saha içinde her an takılı kalır. Omuz, dirsek, bel veya diz rahatsızlığı, yükseklik korkusu, kalp-damar rahatsızlığı, hamilelik ya da yakın zamanda geçirilmiş ameliyat gibi durumlarda katılım öncesinde hekiminize danışınız ve eğitmeninizi bilgilendiriniz.",
    "ilgili": [
      "macera-parkuru",
      "dag-yuruyusu",
      "trekking"
    ]
  },
  {
    "id": "macera-parkuru",
    "ad": "Macera Parkuru",
    "ustyazi": "Ağaçların Arasında",
    "kisa": "Ağaç gövdeleri arasına kurulu köprü, kütük ve zipline istasyonlarında emniyet hattına bağlı ilerleyin.",
    "hero": "assets/img/ai/aktivite/macera-hero.jpg",
    "ozet": "Çam gövdeleri arasına gerilen asma köprüler, sallanan kütükler ve zipline hatlarında; sürekli emniyet hattına bağlı olarak, eğitmen gözetiminde kendi seçtiğiniz yükseklikte ilerleyin.",
    "paragraflar": [
      "Macera parkuru, resortun çam ormanı içine kurulmuştur. Ağaç gövdeleri arasına gerilen çelik halatlardan, gövdelere sabitlenen ahşap platformlardan ve bu platformları birbirine bağlayan istasyonlardan oluşur: asma köprüler, sallanan kütükler, ağ tüneller, Tarzan atlayışı ve farklı uzunluklarda zipline hatları. Zeminden bir metre yükseklikteki çocuk hattından dokuz metreye çıkan ileri hatta kadar üç ayrı hat aynı ormanın içinde iç içe geçer; böylece her misafir kendi seviyesinde ilerlerken grubun geri kalanını gözden kaybetmez.",
      "Katılım her seferinde zemindeki alıştırma istasyonunda başlar. Emniyet kemeri ölçüye göre takılır, kask ayarlanır, makara ve çift karabina sistemi tanıtılır; hat değiştirme hareketi ağaçlara çıkmadan önce birkaç kez denenir. Eğitmenler parkur boyunca platformlar arasında konumlanır, sırayı yönetir, gerektiğinde ipucu verir ve isteyen misafiri hattın ortasından güvenle indirir. Kimse hızlanmaya ya da bir üst hatta geçmeye zorlanmaz; bir istasyonun ortasında durup nefeslenmek de programın parçasıdır.",
      "Seans, ana zipline hattının indiği varış platformunda sona erer; burada emniyet hattı çözülür, kask ve kemer zemin ekibine teslim edilir. Kollar, omuzlar ve el kavrama kasları hattın sonunda belirgin biçimde çalışmış olduğundan misafirlerin çoğu buradan aquapark tarafına ya da karşılama kulübesinin gölgeli oturma alanına yönelir. Çocuk hattını bitiren çocuklarla üst hatları tamamlayan yetişkinlerin bu kulübede buluştuğu an, ailece katılanlar için günün doğal kapanışıdır."
    ],
    "bolum": {
      "deneyimGozkasi": "Zeminden Platforma",
      "deneyimBaslik": "Kemer Takıldıktan Sonra Ne Oluyor?",
      "rotaGozkasi": "Ormandaki Üç Kat",
      "rotaBaslik": "Üç Hat, Üç Farklı Yükseklik",
      "rotaGiris": "Süreler ve istasyon sayıları; sıra yoğunluğuna, grubun temposuna ve hava durumuna göre değişir. Hatlar arasında geçiş eğitmen onayıyla yapılır.",
      "rotaNot": "Hat süreleri, istasyon sayıları ve zorluk dereceleri temsilîdir; ekipman bakım programına, hava koşullarına ve yaş-boy şartlarına göre değişebilir.",
      "galeriGozkasi": "İstasyon İstasyon",
      "galeriBaslik": "İlk Adımdan Son Platforma",
      "videoGozkasi": "Hat Üzerinden",
      "videoBaslik": "Zipline Hattından Bakış",
      "videoGiris": "Ana zipline hattı boyunca çekilmiş kısa görüntü; makaranın ve ormanın sesi için sesi açmanızı öneririz.",
      "ctaGozkasi": "Önce Zeminde",
      "ctaBaslik": "İlk İstasyonu Birlikte Geçelim",
      "ctaMetin": "Deneyim Günü programında alıştırma istasyonunda emniyet sistemini tanıyın, çocuk hattını yakından görün, zemin ekibimizle tanışın."
    },
    "bakista": [
      {
        "etiket": "Buluşma",
        "deger": "Parkur karşılama kulübesi, seans saatinden 20 dakika önce"
      },
      {
        "etiket": "Parkur ekibi",
        "deger": "Sertifikalı yüksek parkur eğitmeni ve zemin ekibi"
      },
      {
        "etiket": "Seans alma",
        "deger": "Aynı gün, aktivite merkezinden saat alarak"
      },
      {
        "etiket": "Yaş ve boy",
        "deger": "Çocuk hattı 4 yaş ve üzeri; üst hatlarda en az 130 cm"
      }
    ],
    "kunye": [
      {
        "etiket": "Süre",
        "deger": "45 dakika – 2,5 saat"
      },
      {
        "etiket": "İstasyon",
        "deger": "12–30 istasyon"
      },
      {
        "etiket": "Zorluk",
        "deger": "Çocuk – İleri"
      },
      {
        "etiket": "Yükseklik",
        "deger": "1–9 metre"
      }
    ],
    "rotalar": [
      {
        "ad": "Yavru Çam Hattı",
        "sure": "45 dakika",
        "mesafe": "12 istasyon",
        "zorluk": "Çocuk",
        "aciklama": "Zeminden yaklaşık bir metre yükseklikte kurulu; kısa asma köprüler, ağ tüneller ve alçak denge kütüklerinden oluşur. Ebeveynler istasyonların hemen yanından zeminde eşlik edebilir; hat, çocuk ölçüsüne göre ayarlanmış kısa bir zipline ile tamamlanır."
      },
      {
        "ad": "Kızılçam Hattı",
        "sure": "1,5 saat",
        "mesafe": "20 istasyon",
        "zorluk": "Orta",
        "aciklama": "Dört ile altı metre arasında değişen yükseklikte; sallanan kütükler, dar denge kirişleri, ağ duvar ve iki ara zipline içerir. İlk kez katılanların çoğu bu hattı seçer; alıştırma istasyonu tamamlandıktan sonra doğrudan geçilebilir."
      },
      {
        "ad": "Yamaç Hattı",
        "sure": "2,5 saat",
        "mesafe": "30 istasyon",
        "zorluk": "İleri",
        "aciklama": "Dokuz metreye kadar çıkan, kol gücü ve denge isteyen uzun hat. Tarzan atlayışı, halat tırmanışı ve yamaç boyunca uzanan manzaralı ana zipline ile biter. Kızılçam Hattı'nı tamamlamış olmak gerekir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/macera-asma-kopru.jpg",
        "ad": "Asma köprü geçişi"
      },
      {
        "src": "assets/img/ai/aktivite/macera-zipline.jpg",
        "ad": "Zipline varışı"
      },
      {
        "src": "assets/img/ai/aktivite/macera-emniyet.jpg",
        "ad": "Makara ve karabina"
      },
      {
        "src": "assets/img/ai/aktivite/macera-cocuk-hatti.jpg",
        "ad": "Çocuk hattı"
      }
    ],
    "video": "assets/video/aktivite-macera-parkuru.mp4",
    "videoPoster": "assets/img/ai/aktivite/macera-hero.jpg",
    "hazirlik": [
      "Bağcıklı, kapalı burunlu spor ayakkabı — sandalet ve terlik parkura alınmaz",
      "Harekete izin veren, bol olmayan kıyafet; toplanmış saç kaskın doğru oturmasını sağlar",
      "Avuç içini koruyan ince eldiven",
      "Seans öncesinde hafif bir şeyler yiyin; yanınıza kapaklı bir su şişesi alın",
      "Yüzük, kolye ve saat çıkarılır; kişisel eşyalar karşılamadaki kilitli dolaplara bırakılır"
    ],
    "saglayanlar": [
      "Kişiye göre ayarlanan emniyet kemeri, kask, makara ve çift karabina seti",
      "Zeminde ve platformlarda görevli sertifikalı eğitmen kadrosu",
      "Zeminde alıştırma istasyonu ve kısa güvenlik brifingi",
      "Kurtarma donanımı ve karşılama kulübesinde ilk yardım birimi"
    ],
    "guvenlik": "Parkur; rüzgâr, sağanak ve fırtına uyarısı gibi hava koşullarında kapatılabilir, seanslar ileri bir saate alınabilir. Yaş, boy ve kilo sınırları ile ekipman bakım programı gereği bazı hatlar geçici olarak kullanıma kapalı olabilir; alkol almış misafirler parkura alınmaz. Baş dönmesi, denge veya eklem sorunu, kalp-damar rahatsızlığı, yükseklik korkusu, hamilelik ya da yakın zamanda geçirilmiş ameliyat gibi durumlarda katılım kararınızı hekiminizle birlikte veriniz; parkur ekibini de mutlaka bilgilendiriniz. Seans saatleri, hat içerikleri ve istasyon sayıları temsilîdir; kesin bilgi resort aktivite merkezinden teyit edilir.",
    "ilgili": [
      "kaya-tirmanisi",
      "binicilik",
      "atv"
    ]
  },
  {
    "id": "atv",
    "ad": "ATV",
    "ustyazi": "Motorlu Arazi Keşfi",
    "kisa": "Kask ve tam donanımla, rehber önde olmak üzere konvoy düzeninde ilerleyen bir arazi turu.",
    "hero": "assets/img/ai/aktivite/atv-hero.jpg",
    "ozet": "Çam ormanının toprak servis yollarında başlayıp Marmara'ya bakan sırtlara çıkan bir arazi turu; hız ve mesafe rehberin belirlediği sınırda kalır.",
    "paragraflar": [
      "ATV parkuru, resortun üst kotundaki hazırlık alanından başlar ve çam ormanının içine uzanan toprak servis yollarına bağlanır. Güzergâh sıkışmış toprak, çakıl ve kısa eğimli rampalardan oluşur; tekerlek izleri belirgindir. Ağaçların seyreldiği sırtlarda Marmara birdenbire ufukta belirir; konvoy burada durur, motorlar susturulur ve manzaraya birkaç dakika ayrılır.",
      "Tur, sürüş öncesi brifingle açılır: gaz ve fren kullanımı, viraj alma, konvoy mesafesi ve el işaretleri düz bir alanda uygulamalı olarak gösterilir. Kask zorunludur; dizlik, eldiven ve koruyucu gözlük hazırlık alanında teslim edilir. Direksiyona geçecek misafirin 18 yaşını doldurmuş ve geçerli sürücü belgesine sahip olması gerekir. Daha genç katılımcılar, eğitmenin kullandığı çift kişilik araçta yolcu olarak yer alabilir. Rehber konvoyun önünde, ikinci görevli en arkada ilerler.",
      "Parkur boyunca hız sınırları ve sessiz geçiş bölgeleri işaretlidir; yaban hayatının yoğun olduğu kesimlerde motorlar rölantiye alınır, işaretli güzergâhın dışına çıkılmaz. Toz nedeniyle araçlar arasındaki mesafe korunur. Tur, hazırlık alanına dönüş ve ekipman teslimiyle biter; günün geri kalanını seyir teraslarında ya da hobi bahçesinin gölgesinde dinlenerek geçirebilirsiniz."
    ],
    "bolum": {
      "deneyimGozkasi": "Sürüş Deneyimi",
      "deneyimBaslik": "ATV Turu Nasıl İlerliyor?",
      "rotaGozkasi": "Parkur Seçenekleri",
      "rotaBaslik": "Sürüş Deneyiminize Göre Üç Parkur",
      "rotaGiris": "Konvoy hızını rehber belirler ve gruptaki en az deneyimli sürücüye göre ayarlar; süreler brifingi ve fotoğraf duraklarını da kapsayan yaklaşık değerlerdir.",
      "rotaNot": "Parkur uzunlukları, süreler ve zorluk dereceleri temsilîdir; güzergâh zemin ıslaklığına ve araç mevcuduna göre değişebilir.",
      "galeriGozkasi": "Toz ve Toprak",
      "galeriBaslik": "Konvoyun İçinden Kareler",
      "videoGozkasi": "Konvoydan",
      "videoBaslik": "Direksiyonun Arkasından",
      "videoGiris": "Konvoyun içinden çekilmiş on saniyelik görüntü — motor sesini ve toprak yolun ritmini duymak için sesi açın.",
      "ctaGozkasi": "Direksiyon Sizde",
      "ctaBaslik": "Parkuru Kendi Direksiyonunuzdan Tanıyın",
      "ctaMetin": "Deneyim günü programınızda hazırlık alanını, araç donanımını ve parkurun ilk etabını eğitmen eşliğinde yerinde görebilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Hazırlık alanı",
        "deger": "Üst kottaki araç sahası, sabah 10:00"
      },
      {
        "etiket": "Rehber",
        "deger": "Sertifikalı arazi aracı eğitmeni ve arkada refakatçi"
      },
      {
        "etiket": "Sürüş şartı",
        "deger": "18 yaş ve geçerli sürücü belgesi; kask zorunlu"
      },
      {
        "etiket": "Rezervasyon",
        "deger": "Bir önceki akşama kadar; araç sayısı sınırlı"
      }
    ],
    "kunye": [
      {
        "etiket": "Süre",
        "deger": "1,5–3 saat"
      },
      {
        "etiket": "Parkur",
        "deger": "8–18 km"
      },
      {
        "etiket": "Zorluk",
        "deger": "Başlangıç – İleri"
      },
      {
        "etiket": "Grup",
        "deger": "4–10 araç"
      }
    ],
    "rotalar": [
      {
        "ad": "İlk Sürüş Turu",
        "sure": "1,5 saat",
        "mesafe": "8 km",
        "zorluk": "Başlangıç",
        "aciklama": "Hazırlık alanının çevresindeki geniş ve düz toprak yolda, eğitmenin sürekli görüş mesafesinde ilerleyen kısa tur. Direksiyona ilk kez geçenler için uygundur; hız sınırı düşük tutulur ve konvoy tek sıra hâlinde ilerler."
      },
      {
        "ad": "Üst İstasyon Turu",
        "sure": "2 saat",
        "mesafe": "14 km",
        "zorluk": "Orta",
        "aciklama": "Ormanın içinden yükselerek Marmara'ya bakan açıklıklara çıkan güzergâh. Kısa rampalar, çakıllı bölümler ve fünikülerin üst istasyonunu gören seyir noktasında fotoğraf molası içerir; konvoy hızı burada bir miktar artar."
      },
      {
        "ad": "Dere Yatağı Etabı",
        "sure": "3 saat",
        "mesafe": "18 km",
        "zorluk": "Orta – İleri",
        "aciklama": "Orman yollarından dere yatağına inen, çamurlu ve taşlı kesimler barındıran uzun etap. Daha önce arazi aracı kullanmış, gövde dengesine hâkim sürücüler için planlanır; mevsimine göre sığ su geçişi bulunabilir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/atv-brifing.jpg",
        "ad": "Sürüş brifingi"
      },
      {
        "src": "assets/img/ai/aktivite/atv-konvoy.jpg",
        "ad": "Toprak yolda konvoy"
      },
      {
        "src": "assets/img/ai/aktivite/atv-sirt-manzara.jpg",
        "ad": "Seyir noktasında mola"
      },
      {
        "src": "assets/img/ai/aktivite/atv-ekipman.jpg",
        "ad": "Kask ve gözlük"
      }
    ],
    "video": "assets/video/aktivite-atv.mp4",
    "videoPoster": "assets/img/ai/aktivite/atv-pov.jpg",
    "hazirlik": [
      "Ayak bileğini örten, sağlam tabanlı bot; ayaklar sürüş boyunca basamakta sabit kalır",
      "Kirlenmesinde sakınca olmayan uzun kollu üst ve uzun pantolon",
      "Direksiyona geçecekseniz geçerli sürücü belgeniz",
      "Toza ve rüzgâra karşı ince boyunluk ya da bandana",
      "Gövdeye sabitlenebilen su matarası, güneş koruyucu ve tur sonrası için yedek tişört"
    ],
    "saglayanlar": [
      "Düzenli bakımı yapılan tek ve çift kişilik arazi araçları",
      "Kask, koruyucu gözlük, eldiven ve dizlik",
      "Sertifikalı eğitmen, telsizli konvoy ve arkada refakat aracı",
      "Sahada ilk yardım donanımı; dönüşte ıslak havlu ve soğuk su"
    ],
    "guvenlik": "Turlar; yağış, zemin ıslaklığı ve rüzgâr durumuna göre kısaltılabilir, ertelenebilir veya iptal edilebilir. Kask, dizlik ve koruyucu gözlük parkur boyunca çıkarılmaz; alkol alan misafirler direksiyona geçemez. Boyun, sırt veya omuz rahatsızlığı, denge sorunu, hamilelik ya da yakın zamanda geçirilmiş bir ameliyat gibi durumlarda önce hekiminize danışınız; brifing sırasında ekibimize de bildiriniz. Bu sayfadaki parkur, süre ve program bilgileri temsilîdir.",
    "ilgili": [
      "binicilik",
      "macera-parkuru",
      "dag-yuruyusu"
    ]
  },
  {
    "id": "binicilik",
    "ad": "Binicilik Kulübü",
    "ustyazi": "Atlarla Uyum İçinde",
    "kisa": "Sakin atlarla tanışın; manejde temel dersten orman turuna uzanan kademeli bir binicilik programı.",
    "hero": "assets/img/ai/aktivite/binicilik-hero.jpg",
    "ozet": "Çiftlik avlusundaki manejde eğitmen eşliğinde ata alışın; hayvanın temposuna saygılı, sakin bir yaklaşımla tanışma dersinden ormana açılan iki saatlik tura kademe kademe ilerleyin.",
    "paragraflar": [
      "Binicilik Kulübü, resortun alt kotunda; açık padoklar, üstü kapalı manej ve taş duvarlı bir çiftlik avlusundan oluşan sakin bir alanda kurulur. Atlar günün büyük bölümünü padokta geçirir; düzenli veteriner kontrolünden ve nal bakımından geçer. Misafirler önce avluda atla tanışır, tımar fırçasını eline alır; yaklaşma, eyerleme ve atın arkasından geçmeme kuralları tek tek anlatılır. Manej kapısından çıkan toprak yol, çam ormanının gölgeli hattı boyunca ilerler ve deniz manzarasına açılan bir açıklıkta son bulur.",
      "Her seans, eğitmenin misafiri gözleyerek at eşleştirmesi yapmasıyla başlar; boy, kilo ve önceki deneyim dikkate alınır. Baret takılır, üzengi boyu ayarlanır, kolan yeniden kontrol edilir. Manejde adım ve tırıs çalışılırken eğitmen kum zeminin ortasından sesli yönlendirme verir; yeni başlayanlarda at, uzun lonj kayışıyla eğitmenin kontrolünde tutulur. Ders sonunda atın tımarına ve su verilmesine katılmak isteyen misafirler ahır ekibine eşlik edebilir.",
      "Eyerden inildiğinde, gün içinde pek kullanılmayan bacak ve sırt kaslarının çalıştığı hissedilir; bu nedenle seansın ardından acele etmemekte fayda vardır. Kulüp avlusundaki gölgeli oturma alanında soğuk bir içecekle beklemek ya da termal havuzlara geçip ılık suda kısa bir mola vermek, günü sakin tamamlamanın yollarındandır. Atlar bu sırada eyerlerinden kurtulur, tımarlanır ve padokta dinlenmeye bırakılır."
    ],
    "bolum": {
      "deneyimGozkasi": "Çiftlikte Bir Sabah",
      "deneyimBaslik": "Ata Binmeden Önce Neler Yapılır?",
      "rotaGozkasi": "Eğitim Kademeleri",
      "rotaBaslik": "Ahır Avlusundan Orman Yoluna Üç Kademe",
      "rotaGiris": "Program üç kademe hâlinde kurgulanır: ahır avlusunda ata alışma, üstü kapalı manejde teknik çalışma ve ormana açılan tur. Eğitmen, bir üst kademeye geçmeye hazır olup olmadığınızı seans sonunda sizinle birlikte değerlendirir.",
      "rotaNot": "Kademelere ait süre, ders içeriği ve güzergâh bilgileri temsilîdir; günün at mevcuduna, manej zemininin durumuna ve hava koşullarına göre değişebilir.",
      "galeriGozkasi": "Avludan ve Ormandan",
      "galeriBaslik": "Manejden ve Orman Yolundan",
      "videoGozkasi": "Kulüpten 10 Saniye",
      "videoBaslik": "Sabah Serinliğinde Adım Temposu",
      "videoGiris": "Çit boyunca sakin bir adım; atın temposu, eyerin hafif gıcırtısı ve çam dallarının hareketi dışında bir şey yok.",
      "ctaGozkasi": "Seans Kaydı",
      "ctaBaslik": "Binicilik Kulübünde Yerinizi Ayırtın",
      "ctaMetin": "Kontenjan, günün at mevcuduna göre sınırlıdır. Kademe seçiminiz ve uygun saatler için resort aktivite merkezine bir gün önceden ulaşabilirsiniz; kayıt sırasında boy ve deneyim bilgisini paylaşmanız at eşleştirmesini kolaylaştırır."
    },
    "bakista": [
      {
        "etiket": "Buluşma noktası",
        "deger": "Çiftlik avlusu, ahır girişi"
      },
      {
        "etiket": "Kulüp ekibi",
        "deger": "Sertifikalı binicilik eğitmeni ve ahır görevlileri"
      },
      {
        "etiket": "Yer ayırma",
        "deger": "Bir gün önceden; günün at mevcuduna göre"
      },
      {
        "etiket": "Yaş ve seviye",
        "deger": "6 yaş ve üzeri; orman turu için en az iki manej dersi"
      }
    ],
    "kunye": [
      {
        "etiket": "Süre",
        "deger": "45 dakika – 2 saat"
      },
      {
        "etiket": "Ders / Tur",
        "deger": "1 ders veya 6 km tur"
      },
      {
        "etiket": "Zorluk",
        "deger": "Başlangıç – Orta"
      },
      {
        "etiket": "Grup",
        "deger": "1–6 kişi"
      }
    ],
    "rotalar": [
      {
        "ad": "Tanışma Dersi",
        "sure": "45 dakika",
        "mesafe": "1 ders (adım)",
        "zorluk": "Başlangıç",
        "aciklama": "Ahır avlusunda tımar, yaklaşma ve eyerleme kurallarıyla başlar; ardından lonj kayışıyla eğitmenin kontrolünde tutulan at üstünde manejde adım çalışılır. Daha önce hiç ata binmemiş misafirler ve çocuklar için ilk adımdır."
      },
      {
        "ad": "Manej Çalışması",
        "sure": "60 dakika",
        "mesafe": "1 ders (adım ve tırıs)",
        "zorluk": "Başlangıç – Orta",
        "aciklama": "Üstü kapalı manejde oturuş, dizgin tutuşu ve denge üzerine çalışılır; hazır olan misafirler adımdan tırısa geçer. Eğitmen her turda tek tek geri bildirim verir, gerektiğinde ahır ekibi at değişimi için devreye girer."
      },
      {
        "ad": "Orman Turu",
        "sure": "2 saat",
        "mesafe": "6 km toprak yol",
        "zorluk": "Orta",
        "aciklama": "Çiftlikten çıkan gölgeli orman yolunda, eğitmen önde olmak üzere sıralı kolon hâlinde ilerlenir; deniz manzarasına açılan açıklıkta atlar dinlendirilir ve kolon yeniden düzenlenir. Manejde adım ve tırıs deneyimi olan misafirler için uygundur."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/binicilik-manej.jpg",
        "ad": "Manejde ders"
      },
      {
        "src": "assets/img/ai/aktivite/binicilik-tanisma.jpg",
        "ad": "Tımar ve tanışma"
      },
      {
        "src": "assets/img/ai/aktivite/binicilik-orman-turu.jpg",
        "ad": "Orman yolunda kolon"
      },
      {
        "src": "assets/img/ai/aktivite/binicilik-ekipman.jpg",
        "ad": "Eyer ve takım odası"
      }
    ],
    "video": "assets/video/aktivite-binicilik.mp4",
    "videoPoster": "assets/img/ai/aktivite/binicilik-hero.jpg",
    "hazirlik": [
      "Bacağı saran uzun pantolon; kalın dikişli kot yerine tayt veya binici pantolonu",
      "Alçak topuklu, kapalı burunlu bot ya da tabanı düz ve sağlam bir ayakkabı",
      "Uzun saçlar için toka veya lastik; baretin doğru oturması buna bağlı",
      "Vücuda oturan bir üst giysi; atkı, uzun eşarp ve sallanan takılar odada bırakılmalı",
      "Orman turu kademesi için su şişesi, ince binici eldiveni ve güneş koruyucu"
    ],
    "saglayanlar": [
      "Sertifikalı binicilik eğitmeni eşliği",
      "Her bedende baret ve koruyucu yelek",
      "Seviyeye göre eşleştirilmiş at veya poni",
      "Eyer, dizgin ve tımar takımı ile ahır ekibi desteği"
    ],
    "guvenlik": "Seanslar; hava koşulları, manej zemininin durumu ve atların günlük sağlık kontrolü doğrultusunda yeniden planlanabilir veya ertelenebilir; sayfadaki süre, kademe ve kontenjan bilgileri temsilîdir. Eyere binen her misafir için baret takmak zorunludur, kulüp kurallarına ve eğitmenin yönlendirmesine uyulması beklenir; 6 yaşından küçük misafirler yalnızca ahır avlusunda, refakat eşliğinde at tanıtımına katılabilir. Bel veya boyun rahatsızlığı, denge sorunu, gebelik ya da yakın zamanda geçirilmiş bir ameliyat söz konusuysa katılım öncesinde hekiminize danışmanızı, eğitmeninizi de bilgilendirmenizi rica ederiz.",
    "ilgili": [
      "atv",
      "trekking",
      "macera-parkuru"
    ]
  }
];
