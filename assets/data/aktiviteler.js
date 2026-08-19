/* TOR|THERMAL — Aktivite detay verileri
   Program içerikleri temsilîdir; kesin süre, rota ve kontenjan bilgisi
   resort aktivite merkezinden teyit edilir. */
window.TOR_AKTIVITELER = [
  {
    id: "trekking",
grup: "doga",
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
grup: "doga",
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
grup: "doga",
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
grup: "doga",
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
grup: "doga",
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
grup: "doga",
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
      "videoGiris": "Orman yolunda adım temposunda ilerleyen bir tur sırasında çekilmiş sesli görüntü — nal seslerini ve eyerin gıcırtısını duymak için kulaklığınızı takın.",
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
    "videoPoster": "assets/img/ai/aktivite/binicilik-surus.jpg",
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
  },
  {
    "id": "spor-kulubu",
    "ad": "Spor Kulübü",
    "grup": "spor",
    "ustyazi": "Tesis İçi Spor Kulübü",
    "kisa": "Ağırlık alanı, dayanıklılık bölümü, stüdyolar ve ölçüm odasını tek çatı altında toplayan kulüp.",
    "hero": "assets/img/ai/aktivite/sporkulubu-hero.jpg",
    "ozet": "Ağırlık alanı, dayanıklılık bölümü, grup stüdyoları, ölçüm odası ve esneme alanını tek çatı altında toplayan kulüp; hangi birimi ne sıklıkla kullanacağınıza kendi temponuza göre karar verirsiniz.",
    "paragraflar": [
      "Spor Kulübü, tesisteki hareket birimlerinin bağlı olduğu çatı yapıdır. Ağırlık ve kuvvet alanı, dayanıklılık bölümü, iki grup dersi stüdyosu, ölçüm ve planlama odası ile esneme ve hareketlilik alanı aynı kulübe bağlıdır. Üyeler tek bir kayıtla bu beş birimin hepsine erişir; hangi birimi ne sıklıkla kullanacağınıza kendiniz karar verirsiniz. Kayıt tek seferliktir ve konaklamanız boyunca geçerlidir.",
      "Kulüp, wellness binasının iki katına yayılır: kuvvet ve ağırlık alanı alt katta, dayanıklılık bölümü ile grup stüdyoları üst kattadır. Salonların büyük bölümünde çalışırken cam cepheden çam örtüsünü ve puslu Marmara'yı görürsünüz. İç mekân sıcak ahşap, açık taş ve krem tonlarla düzenlenmiştir; alanlar birbirinden ayrılmış, geçişler geniş bırakılmıştır. Böylece yoğun saatlerde bile birimler arasında rahatça dolaşabilirsiniz.",
      "Kulüp ekibi bir kulüp sorumlusu, dört egzersiz eğitmeni ve bir ölçüm sorumlusundan oluşur. İlk gelişinizde kısa bir tanışma görüşmesi yapılır: önceki hareket alışkanlığınızı, konaklama sürenizi ve hangi çalışmalardan hoşlandığınızı konuşursunuz. Ekip buna göre bir kullanım programı önerir. Program bağlayıcı değildir; dilediğiniz zaman kademe değiştirebilir ya da yalnızca serbest kullanıma dönebilirsiniz."
    ],
    "bolum": {
      "deneyimGozkasi": "İşleyiş",
      "deneyimBaslik": "Kulüpte Bir Gün Nasıl İşler?",
      "rotaGozkasi": "Programlar",
      "rotaBaslik": "Üç Kulüp Kullanım Programı",
      "rotaGiris": "Kulüp, üyelerin farklı alışkanlıklarına göre üç kullanım programı sunar. Aralarındaki fark çalışmanın kendisi değil, ekibin sürece ne kadar dahil olduğu ve buluşmaların ne kadar yapılandırıldığıdır. Programlar arasında geçiş yapabilir, konaklamanız süresince kademeyi değiştirebilirsiniz.",
      "rotaNot": "Program içerikleri, süreler ve kademe tanımları temsilîdir; kulüp takvimi, kontenjan ve ekip uygunluğuna göre dönemsel olarak düzenlenir.",
      "galeriGozkasi": "Görseller",
      "galeriBaslik": "Kulüpten Kareler",
      "videoGozkasi": "Kayıttan",
      "videoBaslik": "Kulüpten On Saniye",
      "videoGiris": "Sabah ışığında kuvvet alanının olağan temposunu gösteren kısa, kesintisiz bir çekim.",
      "ctaGozkasi": "Davet",
      "ctaBaslik": "Kulübü Yerinde Görün",
      "ctaMetin": "Konaklamanız süresince kulübü gezmek, birimleri görmek ve kullanım programınızı belirlemek için kulüp bankosuna uğramanız yeterlidir. Ekip, alanları sizinle birlikte dolaşır; hangi birimden başlamak istediğinizi konuşur ve ilk buluşmanızı takviminize göre planlar."
    },
    "bakista": [
      {
        "etiket": "Konum",
        "deger": "Wellness binası, alt ve üst kat — funikuler alt istasyonuna yürüme mesafesinde"
      },
      {
        "etiket": "Sorumlu ekip",
        "deger": "Kulüp sorumlusu, dört egzersiz eğitmeni ve bir ölçüm sorumlusu"
      },
      {
        "etiket": "Üyelik kaydı",
        "deger": "Resepsiyondan veya kulüp bankosundan; ilk gelişte kısa tanışma görüşmesi"
      },
      {
        "etiket": "Katılım koşulu",
        "deger": "16 yaş ve üzeri; bazı stüdyo dersleri 14 yaş ve üzerine eğitmen eşliğinde açıktır"
      }
    ],
    "kunye": [
      {
        "etiket": "Seans süresi",
        "deger": "45-75 dakika"
      },
      {
        "etiket": "Kontenjan",
        "deger": "Birime göre 1-18 kişi"
      },
      {
        "etiket": "Seviye",
        "deger": "Tüm seviyeler; kademe ekiple birlikte belirlenir"
      },
      {
        "etiket": "Program sıklığı",
        "deger": "Haftada 2-4 gün; kulüp her gün açıktır"
      }
    ],
    "rotalar": [
      {
        "ad": "Serbest Kullanım",
        "sure": "45-60 dakika, açık kullanım",
        "mesafe": "Beş birim erişimi",
        "zorluk": "Tüm seviyeler",
        "aciklama": "Birimleri kendi başınıza kullanırsınız. Girişte kısa bir alan tanıtımı yapılır, ekipmanın nasıl ayarlandığı gösterilir. Sonrasında hangi bölümde ne kadar kaldığınıza siz karar verir, gün içinde dilediğiniz saatte gelirsiniz."
      },
      {
        "ad": "Rehberli Başlangıç",
        "sure": "60 dakika",
        "mesafe": "Haftada 2 buluşma, en çok 10 kişi",
        "zorluk": "Başlangıç – Orta",
        "aciklama": "Haftada iki gün, küçük gruplarla ekip eşliğinde çalışırsınız. Kuvvet, denge ve dayanıklılık birimleri sırayla tanıtılır; ekipman ayarları ve hareket düzeni üzerinde birlikte durulur, tempo grubun geneline göre belirlenir."
      },
      {
        "ad": "Kişiye Özel Takip",
        "sure": "75 dakika",
        "mesafe": "Haftada 3 buluşma, birebir",
        "zorluk": "Orta – İleri",
        "aciklama": "Ölçüm odasındaki tanışma ve hareket alışkanlığı değerlendirmesiyle başlar. Eğitmen size özel bir çalışma düzeni hazırlar, her buluşmada birlikte çalışır; yükü ve tekrar sayısını gözlemine göre kademe kademe düzenler."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/sporkulubu-agirlik-alani.jpg",
        "ad": "Ağırlık alanı ve ekipman düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/sporkulubu-egitmen-esliginde.jpg",
        "ad": "Birebir çalışma"
      },
      {
        "src": "assets/img/ai/aktivite/sporkulubu-olcum-odasi.jpg",
        "ad": "Ölçüm ve planlama odası"
      },
      {
        "src": "assets/img/ai/aktivite/sporkulubu-esneme-alani.jpg",
        "ad": "Esneme ve hareketlilik alanı"
      }
    ],
    "video": "assets/video/aktivite-spor-kulubu.mp4",
    "videoPoster": "assets/img/ai/aktivite/sporkulubu-agirlik-alani.jpg",
    "hazirlik": [
      "Rahat hareket etmenizi sağlayan sade spor kıyafeti ve yalnızca salon içinde kullanacağınız temiz spor ayakkabısı",
      "Kişisel havlu ve kapaklı su matarası; kulüp içinde doldurma noktaları bulunur",
      "Stüdyo dersleri için ince çorap veya kaymaz tabanlı çorap",
      "Düzenli kullandığınız ilaç, destek ürünü ya da diz-bilek bandajınız varsa yanınızda getirmeniz",
      "Kayıt görüşmesi için kimlik ve konaklama bilginiz; 18 yaşından küçükler için veli onay formu"
    ],
    "saglayanlar": [
      "Tor Thermal Spor Kulübü — kulüp sorumluluğu ve üye kaydı",
      "Kulüp egzersiz eğitmenleri ekibi — birim ve stüdyo buluşmaları",
      "Ölçüm ve planlama birimi — kayıt görüşmeleri ve dönemsel ölçümler",
      "Wellness merkezi resepsiyonu — yer ayırtma, stüdyo tahsisi ve takvim düzenlemesi"
    ],
    "guvenlik": "Kulüpteki program içerikleri, süreler ve kademe tanımları temsilîdir; dönemsel takvime, kontenjana ve ekip uygunluğuna göre düzenlenir. Bilinen bir sağlık durumunuz, hamilelik hâliniz, geçirilmiş bir ameliyatınız veya düzenli kullandığınız bir ilaç varsa kayıt sırasında eğitmene bildirmenizi, gerekiyorsa katılım öncesinde kendi hekiminize danışmanızı rica ederiz. Kulüp ekibi yalnızca egzersiz uygulaması yürütür; tıbbi değerlendirme, teşhis veya tedavi hizmeti vermez.",
    "ilgili": [
      "fitness",
      "kardiyo",
      "pilates"
    ]
  },
  {
    "id": "fitness",
    "ad": "Fitness",
    "grup": "spor",
    "ustyazi": "Kuvvet ve Teknik",
    "kisa": "Cam cepheli salonda, antrenör eşliğinde doğru teknikle ilerleyen kademeli ağırlık ve direnç çalışması.",
    "hero": "assets/img/ai/aktivite/fitness-hero.jpg",
    "ozet": "Marmara'ya bakan cam cepheli salonda, serbest ağırlık ve direnç istasyonları arasında antrenör eşliğinde doğru form üzerine çalışırsınız; program kademesi ilk değerlendirmede birlikte belirlenir.",
    "paragraflar": [
      "Fitness salonu, wellness merkezinin alt katında, resortun güney cephesinde yer alır; tavana kadar uzanan camlardan çam ormanı ve Marmara görünür. Serbest ağırlık alanı, direnç makineleri ve mat serili açık zemin bölümü birbirinden ayrı düzenlenmiştir; böylece aynı anda çalışan misafirler birbirinin sırasını beklemez. Sıcak ahşap zemin, açık taş duvar ve sade aydınlatma, salonu gürültülü bir spor merkezinden çok sakin bir çalışma alanına yaklaştırır.",
      "Çalışma, antrenörle yapılan kısa bir tanışma görüşmesiyle başlar. Daha önceki spor geçmişiniz, çalışmak istediğiniz alanlar ve varsa hekiminizin belirttiği kısıtlar konuşulur; program buna göre düzenlenir. İlk seanslarda ağırlık miktarı değil, hareketin doğru yapılması esastır: duruş, nefes ritmi ve hareket açıklığı üzerinde durulur. Antrenör her tekrarı izler, gerektiğinde ağırlığı düşürerek tekniği önceler.",
      "Kademeler arasında geçiş takvime değil, hareketin oturmasına bağlıdır; aynı kademede birkaç hafta kalmak olağandır. Tor Thermal'de longevity, düzenli hareket alışkanlığını yaşam biçiminin bir parçası olarak ele alan bir yaklaşımdır; bu nedenle salonda acele ettirilmezsiniz. Salon gün boyu açıktır, yoğun saatlerde istasyon sırası antrenör tarafından düzenlenir. Her seans, mat alanındaki kısa bir esneme bölümüyle kapanır."
    ],
    "bolum": {
      "deneyimGozkasi": "Salonda",
      "deneyimBaslik": "Salonda Bir Seans Böyle İlerler",
      "rotaGozkasi": "Program Kademeleri",
      "rotaBaslik": "Seviyenize Göre Üç Program",
      "rotaGiris": "Antrenörünüz kademeyi ilk değerlendirmeye göre önerir; süreler ısınma ve esneme bölümleri dâhil yaklaşık değerlerdir.",
      "rotaNot": "Seans süreleri, istasyon sayıları ve kademe içerikleri temsilîdir; antrenör değerlendirmesine ve salon yoğunluğuna göre değişebilir.",
      "galeriGozkasi": "Salondan",
      "galeriBaslik": "Ağırlık Alanı ve İstasyonlar",
      "videoGozkasi": "Ağırlık Alanından",
      "videoBaslik": "Seans Sırasında",
      "videoGiris": "Sabah seansından kesintisiz bir görüntü — ağırlıkların tok sesi, sakin nefes ve camdan gelen ışık dışında bir şey yok.",
      "ctaGozkasi": "Tanışma",
      "ctaBaslik": "Antrenörle Kısa Bir Tanışma",
      "ctaMetin": "İlk gelişinizde antrenörümüzle on beş dakikalık bir tanışma görüşmesi yapabilir, istasyonları ve ekipmanı yerinde görebilir, hangi kademeden başlayacağınızı birlikte belirleyebilirsiniz. Görüşme için kulüp bankosundan gün içinde bir saat ayırtmanız yeterlidir."
    },
    "bakista": [
      {
        "etiket": "Salon",
        "deger": "Wellness merkezi, alt kat güney cephesi"
      },
      {
        "etiket": "Antrenör",
        "deger": "Sertifikalı antrenör eşliği; salonda sürekli görevli"
      },
      {
        "etiket": "Seans planlama",
        "deger": "Aktivite merkezinden, bir gün önceden"
      },
      {
        "etiket": "Katılım",
        "deger": "16 yaş üzeri; ilk seansta seviye değerlendirmesi"
      }
    ],
    "kunye": [
      {
        "etiket": "Seans süresi",
        "deger": "45–75 dakika"
      },
      {
        "etiket": "Kontenjan",
        "deger": "1–6 kişi"
      },
      {
        "etiket": "Seviye",
        "deger": "Başlangıçtan ileriye üç kademe"
      },
      {
        "etiket": "Program sıklığı",
        "deger": "Haftada 2–4 seans"
      }
    ],
    "rotalar": [
      {
        "ad": "Temel Teknik",
        "sure": "45 dakika",
        "mesafe": "5 istasyon",
        "zorluk": "Başlangıç",
        "aciklama": "Ağırlıkla ilk kez çalışanlar için, haftada iki seans. Vücut ağırlığı hareketleri ve hafif dirençle duruş, nefes ve hareket açıklığı üzerinde durulur; antrenör her istasyonu tek tek gösterir, ağırlık artışı bu kademede gündeme gelmez."
      },
      {
        "ad": "Kuvvet Gelişimi",
        "sure": "60 dakika",
        "mesafe": "7 istasyon",
        "zorluk": "Orta",
        "aciklama": "Temel hareketleri oturmuş misafirler için, haftada üç seans. Serbest ağırlık ve direnç makineleri dönüşümlü kullanılır; set ile tekrar düzeni antrenörle birlikte kademeli olarak ayarlanır, her seans kısa bir esneme bölümüyle kapanır."
      },
      {
        "ad": "İleri Kuvvet Programı",
        "sure": "75 dakika",
        "mesafe": "9 istasyon",
        "zorluk": "İleri",
        "aciklama": "Düzenli çalışma alışkanlığı olan misafirler için, haftada dört seans. Uzun ısınma, gün ayrımına göre bölünmüş kas grupları ve birleşik hareketler yer alır; antrenör tekniği yakından izler, yorgunluk belirtisinde ağırlık düşürülerek form korunur."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/fitness-egitmen-destegi.jpg",
        "ad": "Formun kontrolü"
      },
      {
        "src": "assets/img/ai/aktivite/fitness-teknik-detay.jpg",
        "ad": "Tutuş detayı"
      },
      {
        "src": "assets/img/ai/aktivite/fitness-istasyon-duzeni.jpg",
        "ad": "İstasyon düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/fitness-toparlanma.jpg",
        "ad": "Esneme ve toparlanma"
      }
    ],
    "video": "assets/video/aktivite-fitness.mp4",
    "videoPoster": "assets/img/ai/aktivite/fitness-egitmen-destegi.jpg",
    "hazirlik": [
      "Kaymayan tabanlı, ayak bileğini saran spor ayakkabısı",
      "Hareketi kısıtlamayan, nefes alan sade spor kıyafeti",
      "Kişisel havlu ve en az 1 litre su",
      "Seanstan yaklaşık iki saat önce alınmış hafif bir öğün",
      "Varsa hekiminizin verdiği kısıt notu ve kullandığınız destek bandajı"
    ],
    "saglayanlar": [
      "Serbest ağırlık, direnç makinesi ve mat serili açık zemin istasyonları",
      "Sertifikalı antrenör eşliği ve ilk seansta seviye değerlendirmesi",
      "Mat, foam roller ve esneme bandı kullanımı",
      "Soyunma odası, duş ve kilitli dolap"
    ],
    "guvenlik": "Program içerikleri, seans süreleri ve kademe tanımları temsilîdir; antrenör değerlendirmesine ve salon yoğunluğuna göre değişebilir. Kalp-damar rahatsızlığı, tansiyon, eklem veya omurga şikâyeti, hamilelik ya da yakın zamanda geçirilmiş bir ameliyat gibi durumlarda katılım öncesinde hekiminize danışınız. Kullandığınız ilaçları ve hekiminizin belirttiği kısıtları ilk seanstan önce antrenörünüze bildiriniz; rahatsızlık hissettiğinizde çalışmayı durdurup antrenörü bilgilendiriniz. Salon ekibi yalnızca egzersiz uygulaması yürütür; tıbbi değerlendirme, teşhis veya tedavi hizmeti vermez.",
    "ilgili": [
      "kardiyo",
      "spor-kulubu",
      "pilates"
    ]
  },
  {
    "id": "kardiyo",
    "ad": "Kardiyo",
    "grup": "spor",
    "ustyazi": "Dayanıklılık Alanı",
    "kisa": "Marmara'ya bakan cam cepheli alanda, kendi temponuzda ilerleyen, üç kademeli dayanıklılık seansları.",
    "hero": "assets/img/ai/aktivite/kardiyo-hero.jpg",
    "ozet": "Koşu bandı, dik bisiklet, kürek ergometresi ve eliptik cihazların Marmara'ya dönük yerleştirildiği cam cepheli alanda, kendi temponuzda ilerleyen, üç kademede düzenlenmiş dayanıklılık odaklı seanslar.",
    "paragraflar": [
      "Kardiyo alanı, wellness merkezinin üst katında, Marmara'ya bakan cam cepheli bölümde yer alır. Koşu bandı, dik bisiklet, kürek ergometresi ve eliptik cihazlar manzaraya dönük biçimde sıralanmıştır; aralarındaki mesafe, yoğun saatlerde bile kendinizi sıkışık hissetmeyeceğiniz genişliktedir. Zemin ahşap, duvarlar açık taş ve krem sıvadır; dışarıda çam örtüsü ile puslu deniz görünür. Alanın sesi düşük tutulur, ortam müziği çalınmaz.",
      "Alanda görevli eğitmen, ilk gelişinizde cihazları tek tek tanıtır; oturuş yüksekliği, tutuş mesafesi ve direnç kademesi sizin ölçünüze göre ayarlanır, ayarlar kartınıza not edilir. Sonraki gelişlerinizde serbest kullanım saatlerinde dilediğiniz cihazda kendi temponuzda çalışabilir, isterseniz eğitmenin yönlendirdiği aralıklı seanslara katılabilirsiniz. Tempoyu baştan sona siz belirlersiniz; zorlandığınızda ara vermek her zaman mümkündür.",
      "Programlar düşük tempo dayanıklılık, aralıklı çalışma ve uzun süre seansı olmak üzere üç kademede tanımlıdır. Aralarındaki fark süre ve yoğunluktur; hangisinin size uyduğuna, alan görevlisiyle yapacağınız kısa bir görüşmenin ardından karar verirsiniz. Kademeler arasında sabit bir sıra yoktur; aynı hafta içinde farklı kademelerden seanslar da seçebilirsiniz. Amaç, konaklamanız boyunca sürdürebileceğiniz sakin ve zorlamasız bir çerçeve sunmaktır."
    ],
    "bolum": {
      "deneyimGozkasi": "Alanda",
      "deneyimBaslik": "Cihaz Başında Neler Olur?",
      "rotaGozkasi": "Kademeler",
      "rotaBaslik": "Üç Dayanıklılık Kademesi",
      "rotaGiris": "Kardiyo alanında üç kademe tanımlıdır; aralarındaki fark süre, yoğunluk ve grup büyüklüğüdür. Aşağıdaki değerler seans planlamasında esas alınan çerçevedir; alan görevlisi, katılımcının seviyesine göre bu çerçeveyi daraltabilir ya da genişletebilir.",
      "rotaNot": "Program içerikleri temsilîdir; alan görevlisi, katılımcı sayısına ve seviyeye göre süre ile yoğunluğu düzenler.",
      "galeriGozkasi": "Galeri",
      "galeriBaslik": "Cam Cephe Boyunca",
      "videoGozkasi": "Alandan",
      "videoBaslik": "Sabah Kuşağından Bir Kesit",
      "videoGiris": "Sabah ışığında cam cepheye bakan kardiyo alanından kısa bir görüntü. Cihazların yerleşimini, aradaki mesafeyi ve alanın olağan bir seans saatindeki sakin temposunu bu kısa kayıtta görebilirsiniz.",
      "ctaGozkasi": "İletişim",
      "ctaBaslik": "Kardiyo Alanını Görmek İster misiniz?",
      "ctaMetin": "Alanı yerinde gezmek, cihazları denemek veya eğitmenli seans saatlerini öğrenmek için resepsiyonla görüşebilirsiniz. Seviyenizi ve alışkanlıklarınızı dinleyip size uygun kademeyi birlikte belirleriz. Ziyaret öncesinde kısa bir randevu almanız, alanın sakin olduğu saatlerde daha rahat bir tanıtım yapmamızı sağlar."
    },
    "bakista": [
      {
        "etiket": "Alan",
        "deger": "Wellness merkezi üst kat kardiyo alanı; cam cephe Marmara'ya bakar"
      },
      {
        "etiket": "Alan görevlisi",
        "deger": "Alanda görevli bir eğitmen bulunur; cihaz tanıtımı, ayar ve tempo desteği verir"
      },
      {
        "etiket": "Kullanım",
        "deger": "Serbest kullanım saatlerinde kayıt gerekmez; eğitmenli aralıklı seanslar için resepsiyondan yer ayrılır"
      },
      {
        "etiket": "Yaş aralığı",
        "deger": "16 yaş ve üzeri serbest kullanım; 14–16 yaş yalnızca eğitmen eşliğinde"
      }
    ],
    "kunye": [
      {
        "etiket": "Seans süresi",
        "deger": "20 – 60 dakika"
      },
      {
        "etiket": "Kontenjan",
        "deger": "Eğitmenli seanslarda en çok 8 kişi"
      },
      {
        "etiket": "Seviye",
        "deger": "Başlangıçtan ileriye üç kademe"
      },
      {
        "etiket": "Program sıklığı",
        "deger": "Haftada 2 – 3 seans"
      }
    ],
    "rotalar": [
      {
        "ad": "Düşük Tempo Dayanıklılık",
        "sure": "20 – 30 dakika",
        "mesafe": "Serbest kullanım, haftada 2 seans",
        "zorluk": "Başlangıç",
        "aciklama": "Sabit ve düşük yoğunlukta ilerleyen giriş kademesi. Konuşabildiğiniz bir tempoda yürüyüş, bisiklet ya da eliptik seçersiniz; görevli ısınma ile soğuma bölümlerini sizinle birlikte planlar ve ilk seansta cihaz ayarlarınızı çıkarır."
      },
      {
        "ad": "Aralıklı Çalışma",
        "sure": "30 – 45 dakika",
        "mesafe": "En çok 8 kişi, haftada 2 – 3 seans",
        "zorluk": "Orta",
        "aciklama": "Kısa yüklenme ve toparlanma bölümlerinin dönüşümlü ilerlediği orta kademe. Süreler seviyenize göre düzenlenir; her yüklenmenin ardından tempoyu kendiniz düşürürsünüz. Kürek ergometresi ile dik bisiklet öne çıkar, grup küçük tutulur."
      },
      {
        "ad": "Uzun Süre Seansı",
        "sure": "45 – 60 dakika",
        "mesafe": "En çok 6 kişi, haftada 3 seans",
        "zorluk": "İleri",
        "aciklama": "Dengeli ve kesintisiz bir tempoda ilerleyen en uzun kademe. Düzenli çalışma alışkanlığı olan misafirler içindir; iki ya da üç cihaz arasında dönerek çalışırsınız, ara su ve tempo kontrolü noktaları seans öncesinde belirlenir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/kardiyo-egitmen-tempo-ayari.jpg",
        "ad": "Tempo ayarı"
      },
      {
        "src": "assets/img/ai/aktivite/kardiyo-kurek-ergometresi-detay.jpg",
        "ad": "Kürek ergometresinde çekiş detayı"
      },
      {
        "src": "assets/img/ai/aktivite/kardiyo-cihaz-duzeni.jpg",
        "ad": "Cihazların yerleşim düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/kardiyo-seans-sonu-dinlenme.jpg",
        "ad": "Cephede soluklanma"
      }
    ],
    "video": "assets/video/aktivite-kardiyo.mp4",
    "videoPoster": "assets/img/ai/aktivite/kardiyo-hero.jpg",
    "hazirlik": [
      "Rahat, nefes alan bir spor kıyafeti ve tabanı kavrayan spor ayakkabısı getirin; kaymayan taban özellikle koşu bandı ve eliptik için gereklidir.",
      "Yanınızda kendi suyunuzu bulundurun; alandaki su istasyonundan da doldurabilirsiniz.",
      "Küçük bir havlu alın; cihazı bıraktığınızda oturma ve tutma yüzeylerini silmeniz alan düzeninin bir parçasıdır.",
      "Seansa tok başlamayın; ağır bir öğünün üzerinden en az bir buçuk saat geçmiş olması önerilir.",
      "Cihazı ilk kez kullanacaksanız başlamadan önce görevliden kısa bir tanıtım isteyin; oturuş yüksekliği, tutuş mesafesi ve direnç kademesi baştan ayarlanır."
    ],
    "saglayanlar": [
      "Tesis wellness ve fitness ekibi",
      "Alan görevlisi eğitmenler",
      "Resort resepsiyon ve yer ayırtma birimi",
      "Teknik bakım ve ekipman servisi"
    ],
    "guvenlik": "Bu sayfadaki program içerikleri, süreler ve kontenjanlar temsilîdir; dönem, katılımcı sayısı ve cihaz durumuna göre değişebilir. Bilinen bir sağlık durumunuz, süregelen bir şikâyetiniz veya düzenli kullandığınız ilaçlar varsa seans öncesinde alan görevlisine bilgi vermenizi rica ederiz. Yeni bir hareket programına başlamadan önce hekiminize danışmanız uygun olur; seans sırasında kendinizi rahat hissetmediğinizde ara vermeniz beklenir. Alan ekibi yalnızca egzersiz uygulaması yürütür; tıbbi değerlendirme, teşhis veya tedavi hizmeti vermez.",
    "ilgili": [
      "fitness",
      "studyo-dersleri",
      "spor-kulubu"
    ]
  },
  {
    "id": "pilates",
    "ad": "Pilates",
    "grup": "spor",
    "ustyazi": "Reformer ve Mat Stüdyosu",
    "kisa": "Reformer ve mat stüdyosunda, eğitmen eşliğinde kontrollü hareket ve denge çalışmaları.",
    "hero": "assets/img/ai/aktivite/pilates-hero.jpg",
    "ozet": "Marmara'ya bakan cam cepheli stüdyoda reformer ve mat seansları; küçük gruplarda, eğitmen gözetiminde, kendi temponuzda ilerlediğiniz kontrollü hareket ve duruş farkındalığı çalışmaları.",
    "paragraflar": [
      "Pilates stüdyosu, wellness merkezinin üst katında, yamaca bakan uzun pencerelerin önünde yer alır. Sabah ışığı meşe zemine düştüğünde salon sessizdir; dışarıda çam tepeleri ve puslu Marmara görünür. Altı reformer istasyonu pencere hattı boyunca dizilmiştir, mat alanı ise iç tarafta ayrılmıştır. Her seans küçük bir grupla yürütülür; böylece eğitmen katılımcıların her biriyle tek tek ilgilenebilir.",
      "Çalışmanın merkezinde kontrollü hareket, nefes ritmi ve gövde merkezinin dengeli kullanımı vardır. Reformer üzerinde yay direnci kademeli olarak ayarlanır; mat derslerinde vücut ağırlığıyla ilerlenir. Eğitmen hareketin hızını değil niteliğini izler, gerektiğinde açıyı, tekrar sayısını ya da direnci sizin için yeniden düzenler. Kimseyle yarışmazsınız; kendi temponuzda kalır, zorlandığınız bir harekette dinlenmeyi seçebilirsiniz.",
      "Duruş farkındalığı, programın tekrar eden başlığıdır: omuz hattının, leğen kemiği konumunun ve ayak basışının hareket sırasında nasıl değiştiğini fark etmek üzerine çalışılır. Haftalık bir düzen kurmak isteyen misafirler için kademeler arası geçiş birlikte planlanır. Seans, pencere önünde kısa bir toparlanma bölümüyle biter; ardından ekipman temizlenir ve salon bir sonraki gruba hazırlanır."
    ],
    "bolum": {
      "deneyimGozkasi": "Seans Düzeni",
      "deneyimBaslik": "Bir Pilates Seansı Nasıl Geçer?",
      "rotaGozkasi": "Üç Kademe",
      "rotaBaslik": "Mattan Reformere Üç Kademe",
      "rotaGiris": "Pilates programı üç kademeye ayrılır. Kademeler birbirinin devamıdır; hangisiyle başlayacağınıza ilk seans öncesindeki kısa görüşmede eğitmenle birlikte karar verirsiniz.",
      "rotaNot": "Kademeler arası geçiş için belirli bir süre şartı yoktur; eğitmen, hareketleri rahatça sürdürdüğünüzü gözlemlediğinde bir üst kademeyi önerir. Dilediğiniz zaman bir alt kademede çalışmayı sürdürebilirsiniz. Süreler ve kontenjanlar temsilîdir.",
      "galeriGozkasi": "Reformer Salonundan",
      "galeriBaslik": "Salon, Ekipman ve Seans Anları",
      "videoGozkasi": "Hareket Hâlinde",
      "videoBaslik": "Reformer Hattı Boyunca",
      "videoGiris": "Aşağıdaki kısa çekim, sabah seansının ilk yarısında reformer hattı boyunca ilerleyen tek planlık bir görüntüdür.",
      "ctaGozkasi": "Katılım",
      "ctaBaslik": "Takvimden Bir Seans Seçin",
      "ctaMetin": "Haftalık takvimi ve boş kontenjanları resepsiyondan öğrenebilir, seansınızı iç hat üzerinden ayırtabilirsiniz. İlk kez katılacaksanız, eğitmenle kısa bir görüşme için seans saatinden on beş dakika önce stüdyoda olmanız yeterlidir."
    },
    "bakista": [
      {
        "etiket": "Stüdyo konumu",
        "deger": "Wellness merkezi üst kat; Marmara'ya bakan cam cepheli salon"
      },
      {
        "etiket": "Ders eğitmeni",
        "deger": "Sertifikalı pilates eğitmeni; seans boyunca salonda bulunur"
      },
      {
        "etiket": "Seans talebi",
        "deger": "Resepsiyon ya da iç hat üzerinden, seanstan en geç iki saat önce"
      },
      {
        "etiket": "Seviye şartı",
        "deger": "16 yaş ve üzeri; başlangıç kademesi için önceden deneyim gerekmez"
      }
    ],
    "kunye": [
      {
        "etiket": "Seans süresi",
        "deger": "50–60 dakika"
      },
      {
        "etiket": "Kontenjan",
        "deger": "Kademeye göre 4–8 kişi"
      },
      {
        "etiket": "Seviye",
        "deger": "Başlangıçtan ileriye üç kademe"
      },
      {
        "etiket": "Program sıklığı",
        "deger": "Haftada 2–3 seans; haftalık takvimde planlanır"
      }
    ],
    "rotalar": [
      {
        "ad": "Mat Başlangıç",
        "sure": "50 dakika",
        "mesafe": "8 mat, en çok 8 kişi",
        "zorluk": "Başlangıç",
        "aciklama": "Yer minderinde, vücut ağırlığıyla yapılan temel hareket dizisi. Nefes ritmi, gövde merkezi ve omurga hareketliliği üzerine çalışılır. Ekipman kullanılmaz; daha önce pilates deneyimi olmayan misafirler için uygun bir başlangıç kademesidir."
      },
      {
        "ad": "Reformer Temel",
        "sure": "50 dakika",
        "mesafe": "6 reformer istasyonu, en çok 6 kişi",
        "zorluk": "Orta",
        "aciklama": "Yaylı reformer istasyonunda, düşük ve orta dirençle ilerleyen kontrollü hareket çalışması. Eğitmen her istasyonda direnci ve hareket açısını ayrı ayrı ayarlar. Mat kademesini tamamlamış ya da temel hareketlere aşina misafirler için düzenlenir."
      },
      {
        "ad": "Reformer İleri",
        "sure": "60 dakika",
        "mesafe": "4 reformer istasyonu, en çok 4 kişi",
        "zorluk": "İleri",
        "aciklama": "Daha uzun hareket dizileri, yüksek direnç kademeleri ve denge gerektiren geçişler içerir. Küçük grup sayesinde eğitmen her katılımcıyı yakından izler. Reformer temel kademesinde düzenli çalışmış misafirlere, eğitmen değerlendirmesinin ardından açılır."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/pilates-egitmen-yonlendirme.jpg",
        "ad": "Reformerde yönlendirme"
      },
      {
        "src": "assets/img/ai/aktivite/pilates-yay-detay.jpg",
        "ad": "Ayak barı ve kayış detayı"
      },
      {
        "src": "assets/img/ai/aktivite/pilates-mat-duzeni.jpg",
        "ad": "Ders öncesi hazırlanmış mat alanı"
      },
      {
        "src": "assets/img/ai/aktivite/pilates-seans-sonu.jpg",
        "ad": "Pencere önünde kapanış"
      }
    ],
    "video": "assets/video/aktivite-pilates.mp4",
    "videoPoster": "assets/img/ai/aktivite/pilates-hero.jpg",
    "hazirlik": [
      "Seansa kaymaz tabanlı pilates çorabıyla katılmanız gerekir; stüdyoda yedek çorap bulundurulur.",
      "Hareketi kısıtlamayan, dar paçalı spor kıyafeti tercih edin; bol ve geniş kesimler hareketi zorlaştırır.",
      "Seanstan yaklaşık iki saat öncesine kadar ağır öğün almamaya özen gösterin.",
      "Saat, yüzük ve kolye gibi takılarınızı soyunma dolabında bırakın; kayış ve yaylara temas edebilir.",
      "Kendi matınızı getirebilirsiniz; stüdyoda temizlenmiş mat, halka, küçük top ve direnç bandı hazır bulunur."
    ],
    "saglayanlar": [
      "Reformer istasyonları, mat, pilates halkası, küçük top ve direnç bandı",
      "Sertifikalı pilates eğitmeni ve ilk katılım öncesi kısa seviye görüşmesi",
      "Soyunma dolabı, duş, havlu ve seans sonrası bitki çayı",
      "Kaymaz pilates çorabı temini; her seans sonrası ekipman temizliği ve salon havalandırması"
    ],
    "guvenlik": "Bu sayfadaki seans süreleri, kademeler ve kontenjanlar temsilîdir; güncel takvim ve program içeriği dönemsel olarak değişebilir. Hamilelik, yakın zamanda geçirilmiş bir ameliyat, kas-iskelet sistemine ilişkin bir şikâyet ya da süregelen bir sağlık durumunuz varsa seans öncesinde eğitmene bilgi vermeniz gerekir. Tereddüt ettiğiniz durumlarda katılımdan önce hekiminize danışmanız uygun olur; pilates seansları tıbbi bir uygulama değildir, teşhis veya tedavi amacı taşımaz.",
    "ilgili": [
      "yoga",
      "spor-kulubu",
      "fitness"
    ]
  },
  {
    "id": "yoga",
    "ad": "Yoga",
    "grup": "spor",
    "ustyazi": "Nefes ve Denge",
    "kisa": "Cam cepheli stüdyoda ve seyir terasında, üç kademeli, eğitmen eşliğinde yoga dersleri.",
    "hero": "assets/img/ai/aktivite/yoga-hero.jpg",
    "ozet": "Denize bakan cam cepheli stüdyoda, mevsiminde seyir terasında; nefes ve temel duruşlardan uzun akış derslerine uzanan üç kademede, kendi temponuzda çalışırsınız.",
    "paragraflar": [
      "Yoga stüdyosu, wellness merkezinin üst katında, denize bakan kanatta yer alır; tavan yüksekliği boyunca uzanan camlardan çam ormanı ve Marmara görünür. Dersler sabah ışığında ve akşamüstü olmak üzere günde iki kez açılır. Mevsim uygun olduğunda kapılar açılarak bitişikteki seyir terasında çalışılır. Mat, blok, kayış ve battaniye salonda hazır bulunur; ayakkabılık ve duş bölümü ders alanına doğrudan bağlanır.",
      "Her ders kısa bir oturuş ve nefes çalışmasıyla açılır; eğitmen, katılımcıların o günkü durumunu sorar ve dizilimi buna göre düzenler. Ardından ısınma hareketleri, ayakta duruşlar ve dengeye ayrılan bölüm gelir. Eğitmen salonda dolaşarak sözlü yönlendirme yapar, isteyen misafirlere blok veya kayışla kolaylaştırılmış seçenekler gösterir. Bir duruşta zorlandığınızda dinlenme pozisyonuna dönmek her zaman serbesttir.",
      "Dersler on beş dakikalık sakin bir kapanışla biter; ışık kısılır, battaniyeler dağıtılır, salonda yalnızca nefes sesi kalır. Akşam dersleri daha yavaş ilerler; az sayıda duruş desteklerle uzun süre tutulur. Konaklamanız boyunca aynı saatte tekrar eden bir ders seçmenizi öneririz; düzenli hareket alışkanlığı, resortun uzun soluklu yaşam biçimi yaklaşımının en sade parçasıdır. Ders sonrası termal havuzlarda serbest bir aralık, program akışına uygundur."
    ],
    "bolum": {
      "deneyimGozkasi": "Ders Düzeni",
      "deneyimBaslik": "Nefesten Kapanışa",
      "rotaGozkasi": "Ders Kademeleri",
      "rotaBaslik": "Nefesten Uzun Akışa Üç Kademe",
      "rotaGiris": "Kademeler birbirinin devamıdır; eğitmen ilk derste kısa bir görüşmeyle sizi uygun gruba yönlendirir.",
      "rotaNot": "Ders süreleri, kontenjanlar ve seviye tanımları temsilîdir; ders programı mevsime ve doluluğa göre değişebilir.",
      "galeriGozkasi": "Mat Hattından",
      "galeriBaslik": "Ders Alanında Neler Var?",
      "videoGozkasi": "Mat Üzerinden",
      "videoBaslik": "Sabah Akışı",
      "videoGiris": "Sabah dersinde çekilmiş sesli görüntü; salonun sessizliğini duymak için kulaklığınızı takın.",
      "ctaGozkasi": "İlk Ders",
      "ctaBaslik": "İlk Dersinizi Bizimle Yapın",
      "ctaMetin": "Kırk dakikalık tanışma dersine katılarak salonu, terası ve ders düzenini yerinde görebilirsiniz. Ders öncesinde eğitmenimizle kısa bir görüşme yapılır; hangi kademeyle başlamanın size uygun olacağını birlikte konuşursunuz."
    },
    "bakista": [
      {
        "etiket": "Ders alanı",
        "deger": "Wellness merkezi üst kat, deniz cephesi; mevsiminde seyir terası"
      },
      {
        "etiket": "Ders sorumlusu",
        "deger": "Sertifikalı yoga eğitmeni"
      },
      {
        "etiket": "Ders kaydı",
        "deger": "Aynı gün, aktivite merkezinden veya oda telefonundan"
      },
      {
        "etiket": "Yaş sınırı",
        "deger": "14 yaş ve üzeri; deneyim şartı yok"
      }
    ],
    "kunye": [
      {
        "etiket": "Seans süresi",
        "deger": "45–75 dakika"
      },
      {
        "etiket": "Kontenjan",
        "deger": "12–16 kişi"
      },
      {
        "etiket": "Seviye",
        "deger": "Başlangıçtan ileriye üç kademe"
      },
      {
        "etiket": "Program sıklığı",
        "deger": "Haftada 6 gün, günde iki ders"
      }
    ],
    "rotalar": [
      {
        "ad": "Nefes ve Temel Duruşlar",
        "sure": "45 dakika",
        "mesafe": "En çok 16 kişi",
        "zorluk": "Başlangıç",
        "aciklama": "Oturarak nefes çalışması, basit ayakta duruşlar ve dinlenme pozisyonlarıyla ilerleyen giriş dersi. Tempo yavaştır; her hareketin kolaylaştırılmış seçeneği gösterilir. Daha önce hiç yoga yapmamış misafirler için uygundur."
      },
      {
        "ad": "Akış (Vinyasa)",
        "sure": "60 dakika",
        "mesafe": "En çok 14 kişi",
        "zorluk": "Orta",
        "aciklama": "Duruşların nefesle birbirine bağlandığı, kesintisiz ilerleyen ders. Kuvvet ve denge çalışmaları öne çıkar, tempo giriş kademesine göre belirgin biçimde yüksektir. Temel duruşları tanıyan misafirler için düzenlenir."
      },
      {
        "ad": "Uzun Akış ve Denge",
        "sure": "75 dakika",
        "mesafe": "En çok 12 kişi",
        "zorluk": "İleri",
        "aciklama": "Akış kademesinin duruşlarını daha uzun dizilerde birleştiren, kol ve gövde kuvvetiyle denge bölümlerine geniş yer ayıran ders. Tempo yüksektir ve ara verilmeden ilerler; akış derslerini düzenli sürdüren misafirler için düzenlenir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/yoga-akis-dersi.jpg",
        "ad": "Akış dersi"
      },
      {
        "src": "assets/img/ai/aktivite/yoga-nefes-detay.jpg",
        "ad": "Nefes çalışması"
      },
      {
        "src": "assets/img/ai/aktivite/yoga-mat-duzeni.jpg",
        "ad": "Mat ve destek düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/yoga-kapanis-dinlenme.jpg",
        "ad": "Kapanış dinlenmesi"
      }
    ],
    "video": "assets/video/aktivite-yoga.mp4",
    "videoPoster": "assets/img/ai/aktivite/yoga-akis-dersi.jpg",
    "hazirlik": [
      "Esnek, ter tutmayan rahat spor kıyafeti",
      "Çorap veya yalın ayak; ayakkabı salona alınmaz",
      "Küçük bir havlu ve kapaklı su matarası",
      "Uzun saçlar için toka; saat, yüzük ve kolye ders öncesinde çıkarılır",
      "Dersten yaklaşık iki saat öncesine kadar ağır öğün almamanızı öneririz"
    ],
    "saglayanlar": [
      "Sertifikalı yoga eğitmeni eşliği",
      "Mat, blok, kayış ve battaniye",
      "Mevsiminde terasa açılan alternatif ders alanı",
      "Ders sonrası bitki çayı ikramı"
    ],
    "guvenlik": "Program bilgileri temsilîdir; ders saatleri, kademeler ve kontenjanlar mevsime ve doluluğa göre değişebilir. Hamilelik, yakın zamanda geçirilmiş ameliyat, denge sorunu ya da eklem ve omurga şikâyeti gibi durumlarda katılım öncesinde hekiminize danışınız ve sağlık durumunuz hakkında eğitmeninizi bilgilendiriniz. Ders sırasında kendinizi zorlamayınız; rahatsızlık hissettiğinizde eğitmene haber vererek dinlenme pozisyonuna dönebilir veya dersten ayrılabilirsiniz. Dersler tıbbi bir uygulama değildir, teşhis veya tedavi amacı taşımaz.",
    "ilgili": [
      "pilates",
      "studyo-dersleri",
      "spor-kulubu"
    ]
  },
  {
    "id": "studyo-dersleri",
    "ad": "Stüdyo Dersleri",
    "grup": "spor",
    "ustyazi": "Müzikli Grup Dersleri",
    "kisa": "Cam cepheli stüdyoda, müzik eşliğinde yapılan dans, step ve aerobik temelli grup dersleri.",
    "hero": "assets/img/ai/aktivite/studyo-hero.jpg",
    "ozet": "Marmara'ya bakan cam cepheli stüdyoda, eğitmen eşliğinde koreografili grup dersleri. Üç ayrı ders tipi farklı tempolarda ilerler; herkes kendi temposunda hareket eder, dersler sabah ve akşam kuşağında açılır.",
    "paragraflar": [
      "Stüdyo dersleri, wellness merkezinin üst katındaki cam cepheli grup salonunda yapılır. Salonun bir yüzü çam ormanına ve Marmara'ya bakar; sabah kuşağındaki dersler doğal ışıkla başlar. Ahşap zemin, esnek taban yapısı, uzun ayna duvarı ve ses sistemiyle düzenlenen alan yirmi kişilik kapasiteye sahiptir; ders kontenjanı bundan daha dar tutulur, böylece herkesin hareket alanı korunur. Eğitmen dersi kulaklıklı mikrofonla yönetir.",
      "Program tek bir kalıp yerine üç ders tipinden oluşur. Dans temelli derslerde koreografi kısa bölümler hâlinde öğretilir; step ve aerobik derslerinde tempo daha belirgindir; düşük etkili derslerde ise sıçrama yoktur, hareketler akıcı diziler hâlinde ilerler. Hangi dersle başlayacağınıza ilk katılımdan önce eğitmenle yapacağınız kısa görüşmede birlikte karar verirsiniz; eğitmen her hareketin sade bir alternatifini de gösterir.",
      "Stüdyo derslerinin sosyal yanı, tek başına yapılan çalışmalardan ayrılır: aynı saatte gelen misafirler zamanla birbirini tanır, ders sonrası sohbet salonun bir parçası hâline gelir. Müzik ortak tempoyu belirler, ancak herkes kendi hızında hareket eder; sıra beklemek ya da geride kalmak diye bir durum yoktur. Ders sonunda salon havalandırılır ve ekipman bir sonraki grup için toplanır."
    ],
    "bolum": {
      "deneyimGozkasi": "Ders Kurgusu",
      "deneyimBaslik": "Ders Nasıl Kurgulanır?",
      "rotaGozkasi": "Ders Tipleri",
      "rotaBaslik": "Üç Farklı Ders Tipi",
      "rotaGiris": "Stüdyo programı tek bir kalıptan değil, üç ayrı ders tipinden oluşur. Aşağıdaki sıralama artan tempoya göre düzenlenmiştir; istediğiniz kademeden başlayabilir, aynı hafta içinde üçüne de katılabilirsiniz.",
      "rotaNot": "Ders adları, süreler ve haftalık ders sayıları temsilîdir; sezon çizelgesi doluluk ve eğitmen planlamasına göre değişebilir. Kademeler arasında geçiş için ön şart aranmaz, yönlendirmeyi eğitmen yapar.",
      "galeriGozkasi": "Kareler",
      "galeriBaslik": "Ders Saatinden Kareler",
      "videoGozkasi": "Video",
      "videoBaslik": "Ders Ortasından",
      "videoGiris": "Sabah dersinin ortasından alınmış on saniyelik tek çekim: salonun temposunu, ışığını ve grup düzenini olduğu gibi gösterir.",
      "ctaGozkasi": "Çizelge",
      "ctaBaslik": "Ders Çizelgesini İsteyin",
      "ctaMetin": "Haftalık ders çizelgesini, kademeleri ve stüdyonun tesis içindeki konumunu görmek ya da ilk dersiniz öncesinde eğitmenle kısa bir görüşme ayarlamak isterseniz bizimle iletişime geçebilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Stüdyo",
        "deger": "Wellness merkezi, üst kat grup dersleri salonu"
      },
      {
        "etiket": "Ders ekibi",
        "deger": "Her derste bir grup dersi eğitmeni; yoğun saatlerde ikinci eğitmen destek verir"
      },
      {
        "etiket": "Katılım kaydı",
        "deger": "Resepsiyondan veya misafir uygulamasından, ders saatinden iki saat öncesine kadar"
      },
      {
        "etiket": "Seviye ve yaş",
        "deger": "16 yaş ve üzeri; başlangıç dâhil tüm seviyeler"
      }
    ],
    "kunye": [
      {
        "etiket": "Seans süresi",
        "deger": "45 – 60 dakika"
      },
      {
        "etiket": "Kontenjan",
        "deger": "Ders başına en fazla 18 kişi"
      },
      {
        "etiket": "Seviye",
        "deger": "Başlangıçtan ileriye üç kademe"
      },
      {
        "etiket": "Program sıklığı",
        "deger": "Haftada 9 ders; sabah ve akşam kuşağı"
      }
    ],
    "rotalar": [
      {
        "ad": "Sakin Tempo — Düşük Etkili Ders",
        "sure": "45 dakika",
        "mesafe": "Haftada 3 ders • 16 kişilik kontenjan",
        "zorluk": "Başlangıç",
        "aciklama": "Sıçrama içermeyen, akıcı hareket dizilerinden oluşur. Tempo düşük tutulur ve her hareketin sade bir alternatifi gösterilir. Salonla, müzikle ve grup düzeniyle ilk kez tanışanlar için uygun bir başlangıç dersidir."
      },
      {
        "ad": "Ritim — Dans Temelli Ders",
        "sure": "50 dakika",
        "mesafe": "Haftada 4 ders • 18 kişilik kontenjan",
        "zorluk": "Başlangıç – Orta",
        "aciklama": "Koreografi kısa bölümler hâlinde öğretilir, ardından müzikle birleştirilir. Adımları ezberlemek gerekmez; eğitmen her bölümü tekrar eder. Latin ve pop temelli parçalar arasında geçiş yapılır, ders boyunca tempo dalgalanır."
      },
      {
        "ad": "Tempo — Step ve Aerobik",
        "sure": "60 dakika",
        "mesafe": "Haftada 2 ders • 14 kişilik kontenjan",
        "zorluk": "Orta – İleri",
        "aciklama": "Step platformu ve aerobik dizileri bir arada kullanılır; tempo derse hâkimdir ve hareketler daha uzun tekrarlarla sürer. Ön şart aranmaz, ancak salon düzenine ve tempoya alışmış misafirler için daha uygundur."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/studyo-egitmen-yonlendirme.jpg",
        "ad": "Adımın gösterilmesi"
      },
      {
        "src": "assets/img/ai/aktivite/studyo-ritim-detay.jpg",
        "ad": "Ritim detayı"
      },
      {
        "src": "assets/img/ai/aktivite/studyo-step-duzeni.jpg",
        "ad": "Step platformları hazır"
      },
      {
        "src": "assets/img/ai/aktivite/studyo-ders-sonu.jpg",
        "ad": "Ders sonrası sohbet"
      }
    ],
    "video": "assets/video/aktivite-studyo-dersleri.mp4",
    "videoPoster": "assets/img/ai/aktivite/studyo-hero.jpg",
    "hazirlik": [
      "Zemine tam oturan, kaymayan spor ayakkabı getirin; dans temelli derslerde esnek tabanlı bir model daha rahat olur.",
      "Hareketi kısıtlamayan, ince katmanlı spor kıyafeti tercih edin.",
      "Yanınızda su matarası bulundurun; stüdyo girişinde su ünitesi vardır.",
      "Derse en az on dakika önce gelin ki eğitmen sizi salon düzeninde uygun bir yere yerleştirebilsin.",
      "Sağlık durumunuzla ilgili eğitmenin bilmesi gereken bir şey varsa ders başlamadan önce iletin."
    ],
    "saglayanlar": [
      "Step platformu, hafif el ağırlığı ve mat: derse göre stüdyoda hazır bulunur",
      "Ses sistemi ve eğitmen kulaklığı",
      "Temiz havlu ve stüdyo girişinde su ünitesi",
      "Kilitli dolap, giyinme ve duş alanı: wellness merkezi girişinde"
    ],
    "guvenlik": "Bu sayfadaki ders adları, süreler, kontenjanlar ve haftalık program bilgileri temsilîdir; kesin çizelge tesis açılışında duyurulacaktır. Derslere katılmadan önce bilinen bir sağlık durumunuz varsa hekiminize danışmanızı, ders öncesinde de eğitmeni bilgilendirmenizi rica ederiz. Eğitmen tempoyu ve hareket seçeneklerini katılımcıya göre düzenler; kendinizi zorlanmış hissettiğinizde ara vermeniz beklenir. Stüdyo ekibi yalnızca egzersiz uygulaması yürütür; tıbbi değerlendirme, teşhis veya tedavi hizmeti vermez.",
    "ilgili": [
      "yoga",
      "kardiyo",
      "pilates"
    ]
  }
];
