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
  },
  {
    "id": "seyir-teraslari",
    "ad": "Seyir Terasları",
    "grup": "sosyal",
    "ustyazi": "Yamaçtan Marmara'ya",
    "kisa": "Yamacın farklı kotlarına dağılmış ahşap platformlarda Marmara'yı ve karşı kıyıyı seyredebileceğiniz açık alanlar.",
    "hero": "assets/img/ai/aktivite/seyir-hero.jpg",
    "ozet": "Çam ormanının içinden geçen hat üzerinde, üç ayrı kotta konumlanmış ahşap seyir platformları; fünikülerle ulaşılan, gün boyu açık, oturarak vakit geçirilen manzara alanları.",
    "paragraflar": [
      "Seyir terasları, resortun çam ormanıyla kaplı yamacına üç ayrı kottan yerleştirilmiş ahşap platformlardır. Her biri araziye gömülü, ağaç hattını bozmayan bir seviyede durur; zemin ısıl işlem görmüş meşe, korkuluklar ince profilli bronz, oturma birimleri açık kireçtaşı ve krem keten minderdir. Yükseldikçe manzara katmanlanır: önce ormanın tepesi, sonra kıyı çizgisi, en üstte puslu mavi Marmara ve karşıdaki tarihî Bozburun deniz feneri.",
      "Teraslara ulaşım fünikülerle sağlanır; alt istasyondan binip ara duraklarda inebilir, dilerseniz orman patikasından yürüyerek de çıkabilirsiniz. Alanlar gün boyu açıktır ve yer ayırtmak gerekmez; oturma birimleri serbest kullanımdadır. Görevliler gün içinde terasları dolaşarak minder ve battaniye ikmalini yapar, rüzgâra göre şemsiyeleri açar ya da toplar. Sıcak içecek servisi belirli saatlerde alt terastan verilir.",
      "Terasların en kalabalık saati akşamüstüdür. Güneş batıya alçaldıkça ışık çam gövdeleri arasından yatay girer, deniz mat bir gümüşe döner, karşı kıyıdaki fener siluete dönüşür. Bu saatte üst terasta sohbet, orta terasta sessizlik, batı terasında günün son yarım saatini bekleyen uzun bir sıra oluşur. Karanlık bastığında aydınlatma kısılır; ahşap, gündüzden kalan ısısını gece boyunca taşımayı sürdürür."
    ],
    "bolum": {
      "deneyimGozkasi": "Mekân",
      "deneyimBaslik": "Yamaçta Üç Kot, Üç Ayrı Manzara",
      "rotaGozkasi": "Kotlar",
      "rotaBaslik": "Yukarıdan Aşağıya Üç Teras",
      "rotaGiris": "Üç teras aynı yamacın farklı kotlarında yer alır; fünikülerin ara durakları ve orman patikası bunları birbirine bağlar. Aynı adı taşıyan yürüyüş güzergâhıyla karıştırılmamalıdır: orası bir hattır, burası hattın uğradığı platformların kendisidir.",
      "rotaNot": "Konum, kapasite ve açık kalma saatleri temsilîdir; mevsime ve hava koşullarına göre değişebilir.",
      "galeriGozkasi": "Teraslardan",
      "galeriBaslik": "Ahşap, Bronz ve Deniz",
      "ctaGozkasi": "Teras Turu",
      "ctaBaslik": "Üç Terası da Görmeden Karar Vermeyin",
      "ctaMetin": "Ziyaretinizde fünikülerle üç kotu birlikte dolaşalım; sabah ışığında da akşamüstünde de nasıl bir manzara olduğunu anlatalım, hangi terasın size uyduğuna orada karar verin."
    },
    "bakista": [
      {
        "etiket": "Yamaçtaki yeri",
        "deger": "Çam hattı içinde üç ayrı kot"
      },
      {
        "etiket": "Açık saatler",
        "deger": "Her gün 07.00 – 23.00"
      },
      {
        "etiket": "Ulaşım",
        "deger": "Fünikülerin ara durakları ya da orman patikası"
      },
      {
        "etiket": "Giriş koşulu",
        "deger": "Serbest kullanım; çocuklar refakatle"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Yamaç hattı, 3 farklı kot"
      },
      {
        "etiket": "Kapasite",
        "deger": "Toplam yaklaşık 90 kişi"
      },
      {
        "etiket": "Açılış",
        "deger": "Her gün 07.00 – 23.00"
      },
      {
        "etiket": "Mevsim",
        "deger": "Dört mevsim açık"
      }
    ],
    "rotalar": [
      {
        "ad": "Fener Terası",
        "sure": "07.00 – 23.00",
        "mesafe": "Üst kot · 35 kişi",
        "zorluk": "Tüm misafirler",
        "aciklama": "Yamacın en üst kotunda, doğrudan karşı kıyıya bakan geniş platform. Havanın açık olduğu sabahlarda tarihî Bozburun deniz feneri buradan net seçilir; kahvaltısını uzatan misafirlerin ilk tercihidir."
      },
      {
        "ad": "Orman Sekisi",
        "sure": "Gün boyu",
        "mesafe": "Orta kot · 20 kişi",
        "zorluk": "Sessiz alan",
        "aciklama": "Çam gövdelerinin arasına gömülü, denizi ağaç aralıklarından gören küçük seki. Yüksek sesle konuşulmaz, telefon görüşmesi yapılmaz; kitap okumak, çalışmak ya da yalnız kalmak isteyenlere ayrılmıştır."
      },
      {
        "ad": "Gün Batımı Terası",
        "sure": "Akşamüstü – 23.00",
        "mesafe": "Batı kot · 35 kişi",
        "zorluk": "6 yaş ve üzeri",
        "aciklama": "Batıya dönük, basamaklı oturma düzeni olan en hareketli teras. Güneşin denize inişini izlemek için akşamüstü doluluk artar; hava karardıktan sonra aydınlatma kısılır, gökyüzü gözlem hattına buradan geçilir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/seyir-fener-terasi.jpg",
        "ad": "Fener Terası"
      },
      {
        "src": "assets/img/ai/aktivite/seyir-ahsap-doku.jpg",
        "ad": "Ahşap ve korkuluk detayı"
      },
      {
        "src": "assets/img/ai/aktivite/seyir-orman-sekisi.jpg",
        "ad": "Orman Sekisi"
      },
      {
        "src": "assets/img/ai/aktivite/seyir-gun-batimi.jpg",
        "ad": "Gün Batımı Terası"
      }
    ],
    "hazirlik": [
      "Akşamüstü rüzgârı serinletir; yanınıza ince bir hırka veya şal alın.",
      "Ahşap zemin çiy ve yağmurdan sonra kayganlaşır; kaymaz tabanlı ayakkabı tercih edin.",
      "Fünikülerin ara duraklarını kullanacaksanız oda kartınızı yanınızda bulundurun.",
      "Fener manzarası için küçük bir dürbün ya da telefonunuzun yakınlaştırma özelliği işinize yarar.",
      "Orman Sekisi sessiz alandır; telefonunuzu sessize almanız beklenir."
    ],
    "saglayanlar": [
      "Minder, keten yastık ve akşam saatleri için yün battaniye",
      "Hava durumuna göre açılan gölge şemsiyeleri ve rüzgâr paravanları",
      "Alt terasta belirli saatlerde sıcak içecek ve su servisi",
      "Fünikülerle üç kot arasında gün boyu ulaşım"
    ],
    "guvenlik": "Teraslar yamaç kotunda, korkuluklu açık platformlardır; çocukların refakatsiz bırakılmaması, korkuluklara oturulmaması ve tırmanılmaması gerekir. Yükseklik hissinden rahatsız olan ya da denge konusunda tereddüdü bulunan misafirlerimizin üst kotları refakatle kullanmasını öneririz. Belirtilen saatler, kapasiteler ve servis bilgileri temsilîdir; hava koşullarına göre teraslar geçici olarak kapatılabilir.",
    "ilgili": [
      "gokyuzu-gozlem",
      "amfi-tiyatro",
      "ozel-plaj"
    ]
  },
  {
    "id": "ozel-plaj",
    "ad": "Özel Kumsal Plaj",
    "grup": "sosyal",
    "ustyazi": "Denize Sıfır",
    "kisa": "Resortun deniz kotundaki özel kumsalı; şezlong alanı, gölgeli sessiz köşe ve ahşap iskele.",
    "hero": "assets/img/ai/aktivite/plaj-hero.jpg",
    "ozet": "Marmara kıyısındaki özel kumsalımız; şezlong alanı, çamların gölgesindeki sessiz köşe ve ahşap iskeleden denize giriş. Cankurtaran gözetiminde, sakin bir kıyı günü.",
    "paragraflar": [
      "Kumsal, yamacın en alt kotunda, çam ormanının denize indiği yerde açılır. İnce kum ile yer yer düz çakıl birbirini izler, kıyı çizgisi uzun ve girintisizdir. Arkada açık kireçtaşı basamaklar ve gölgelikli bir teras, önde puslu mavi Marmara vardır. Karşı kıyıdaki tarihî Bozburun deniz feneri, havanın açık olduğu günlerde ufuk hattında seçilir.",
      "Gün, sabah erken saatte şezlonglar düzenlenirken başlar. Havlular servis noktasından alınır, şemsiyeler istediğiniz yerde açılır; duşlar ve giyinme kabinleri kumsalın arka hattındadır. Cankurtaran, açılıştan kapanışa kadar kule ve iskele hattında görev yapar. Servis ekibi alanı belirli aralıklarla dolaşır, isteğe bağlı içecek ve ek havlu getirir.",
      "Kumsalın en sevilen aralığı öğleden sonranın ortasıdır: rüzgâr henüz dönmemiştir, deniz düz durur, kum ısısını korur. Sabahın erken saatleri boyuna yüzmek isteyenlere, öğle sıcağı gölgeli köşeye ve teras altına aittir. Akşamüstü şemsiyeler kapanır, kıyı boyunca yürüyenlerin sayısı artar; günün son işi, havluların servis noktasına geri bırakılmasıdır."
    ],
    "bolum": {
      "deneyimGozkasi": "Kıyıda Bir Gün",
      "deneyimBaslik": "Marmara'nın Kıyısında Kendi Kumsalınız",
      "rotaGozkasi": "Kumsalın Şeritleri",
      "rotaBaslik": "Kıyının Üç Alanı",
      "rotaGiris": "Plaj tek bir düzlük değil; kum şeridi boyunca birbirinden farklı üç alana ayrılır. Günün ritmini, gölgeyi ve denize giriş biçimini bu ayrım belirler.",
      "rotaNot": "Alanlar arasında geçiş serbesttir. Sessiz köşede müzik çalınmaz ve telefon görüşmesi yapılmaz; iskele yalnızca cankurtaranın görev saatlerinde denize giriş için açıktır.",
      "galeriGozkasi": "Plajdan",
      "galeriBaslik": "Kum, Gölge ve İskele",
      "ctaGozkasi": "Kıyıyı Tanıyın",
      "ctaBaslik": "Kumsalı Sezon Başlamadan Gezin",
      "ctaMetin": "Deniz kotundaki kumsalı, iskeleyi ve gölgeli sessiz köşeyi ziyaretinizde birlikte gezelim. Sezon takvimini ve günün hangi saatinde nereye oturmanın daha keyifli olduğunu yerinde anlatalım."
    },
    "bakista": [
      {
        "etiket": "Kıyı konumu",
        "deger": "Deniz kotu; füniküler alt istasyonundan 3 dakika"
      },
      {
        "etiket": "Sezon ve saatler",
        "deger": "Haziran – Eylül, 08.00 – 19.30"
      },
      {
        "etiket": "Denize giriş",
        "deger": "Cankurtaran görevdeyken, işaretli alan içinde"
      },
      {
        "etiket": "Havlu ve şezlong",
        "deger": "Ayırtmak gerekmez; yoğun günlerde sabah bildirilebilir"
      }
    ],
    "kunye": [
      {
        "etiket": "Kıyı",
        "deger": "Deniz kotu, resortun özel kıyı şeridi"
      },
      {
        "etiket": "Kapasite",
        "deger": "120 şezlong, 40 şemsiye"
      },
      {
        "etiket": "Açılış",
        "deger": "08.00 – 19.30"
      },
      {
        "etiket": "Mevsim",
        "deger": "Haziran – Eylül; ara dönemde yürüyüş ve oturma alanı"
      }
    ],
    "rotalar": [
      {
        "ad": "Şezlong Alanı",
        "sure": "09.00 – 19.30",
        "mesafe": "Orta bölüm · 120 şezlong, 40 şemsiye",
        "zorluk": "Tüm misafirler",
        "aciklama": "Kumsalın orta bölümü. Sıralı şezlong ve şemsiyeler, servis noktası, duşlar ve giyinme kabinleri buradadır. Ailelerin ve gün boyu kalanların tercih ettiği en canlı alan."
      },
      {
        "ad": "Sessiz Köşe",
        "sure": "08.00 – 19.30",
        "mesafe": "Güney uç · 18 gölgelikli yatak",
        "zorluk": "12 yaş ve üzeri, sessiz alan",
        "aciklama": "Çamların denize indiği uçta, aralıklı yerleştirilmiş gölgelikli yataklar. Müzik çalınmaz, telefon görüşmesi yapılmaz. Kitap okumak ve öğle sıcağını gölgede geçirmek için ayrılmıştır."
      },
      {
        "ad": "İskele ve Deniz Girişi",
        "sure": "09.00 – 18.30",
        "mesafe": "Kuzey uç · 22 metre ahşap iskele",
        "zorluk": "Yüzme bilen misafirler; 12 yaş altı refakatli",
        "aciklama": "Kumsalın kuzeyindeki ahşap iskele. Merdivenden doğrudan derin suya inilir; kıyıdan sığ giriş ayrıca işaretlidir. Yalnızca cankurtaran görevdeyken açıktır, atlama yapılmaz."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/plaj-sessiz-kose.jpg",
        "ad": "Çamların gölgesindeki sessiz köşe"
      },
      {
        "src": "assets/img/ai/aktivite/plaj-iskele-deniz-girisi.jpg",
        "ad": "Ahşap iskele ve deniz girişi"
      },
      {
        "src": "assets/img/ai/aktivite/plaj-havlu-hazirligi.jpg",
        "ad": "Servis noktasında havlu düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/plaj-gun-batimi.jpg",
        "ad": "Kumsalda günün son saati"
      }
    ],
    "hazirlik": [
      "Mayo ve yedek bir üst; kabinler mevcut ama kuru kıyafet günü uzatır.",
      "Şapka ve güneş gözlüğü; öğle saatlerinde gölge dışında ısı yükselir.",
      "Yüksek faktörlü güneş koruyucu; denizden sonra yenilemeyi unutmayın.",
      "Kıyının bazı yerleri çakıllı olduğu için deniz ayakkabısı ya da sandalet.",
      "Oda kartınız; havlu ve şezlong talebi bu kartla açılır."
    ],
    "saglayanlar": [
      "Görev saatleri boyunca kule ve iskele hattında cankurtaran",
      "Şezlong, şemsiye ve günlük temiz plaj havlusu",
      "Tatlı su duşları, giyinme kabinleri ve gölgelikli dinlenme terası",
      "Kumsala eşya taşıma yardımı ve tekerlekli sandalye erişimi"
    ],
    "guvenlik": "Denize giriş yalnızca cankurtaranın görevde olduğu saatlerde ve işaretli alan içinde yapılır; şamandıra hattının dışına çıkılmaz, iskeleden atlanmaz ve rüzgâr ya da dalga nedeniyle kırmızı bayrak çekildiğinde plaj denize kapatılır. Kalp, dolaşım, denge veya solunum ile ilgili bir rahatsızlığı olan, hamile olan ya da düzenli ilaç kullanan misafirlerimizin denize girmeden önce kendi hekimine danışmasını, çocukların su kenarında daima bir yetişkinle bulunmasını rica ederiz. Sayfadaki saat, kapasite ve düzen bilgileri temsilîdir; sezon takvimine ve hava koşullarına göre değişebilir.",
    "ilgili": [
      "acik-havuz",
      "seyir-teraslari",
      "kapali-havuz"
    ]
  },
  {
    "id": "gokyuzu-gozlem",
    "ad": "Gökyüzü Gözlem Alanları",
    "grup": "sosyal",
    "ustyazi": "Karanlığa Açılan Teras",
    "kisa": "Yamacın üst kotunda, ışıktan uzak; çıplak gözle ve teleskopla gökyüzüne ayrılmış gece alanı.",
    "hero": "assets/img/ai/aktivite/gokyuzu-hero.jpg",
    "ozet": "Resortun en üst kotunda, aydınlatması kısılmış bir düzlük. Battaniyeniz ve sıcak içeceğinizle uzanır, mevsimin takımyıldızlarını izler, isterseniz teleskop başında sıranızı beklersiniz.",
    "paragraflar": [
      "Gözlem alanı, resortun en üst kotunda; çam kuşağının üzerinde, konaklama bölgelerinin ışığından ayrılmış bir düzlüktedir. Zemin koyu renkli ahşap kaplama, çevresi rüzgârı kesen alçak taş duvardır. Aydınlatma yere gömülü kısık kırmızı armatürlerle sınırlıdır; gözünüz karanlığa alıştıkça aşağıda Marmara'nın kıyı ışıkları, karşıda Bozburun'un fener çakışı belirir. Rüzgârlı gecelerde kalın yün battaniyeler girişteki sandıklarda hazır bekler.",
      "Alana geldiğinizde girişte battaniye ve sıcak içecek servisi bulunur; gözlem görevlisi o gece gökyüzünün hangi bölgesinin açık olduğunu kısaca anlatır. Kimse sizi bir programa bağlamaz: kimi misafir şezlonga uzanıp yalnızca izler, kimi teleskop sırasına girer, kimi tripodunu kurup uzun poz denemesi yapar. Konuşmalar alçak sesle sürer; beyaz ekran ışığı kullanılmaz, telefonlar kırmızı moda alınır.",
      "En açık geceler, ay ışığının zayıf olduğu yeni ay haftalarıdır; gökyüzü asıl derinliğini ise gece yarısından sonra kazanır. O saatte konuşma seyrelir, şezlongların çoğu boşalır ve alanda yalnızca uzun poz köşesi çalışır. Yaz aylarında Samanyolu güney ufkunda uzanır, kışın Orion ve Ülker öne çıkar. Bulutlu gecelerde platform açık kalır ama teleskop kurulmaz."
    ],
    "bolum": {
      "deneyimGozkasi": "Gece Alanı",
      "deneyimBaslik": "Işıklar Kısıldıktan Sonra",
      "rotaGozkasi": "Üç Bölüm",
      "rotaBaslik": "Gökyüzünü İzlemenin Üç Biçimi",
      "rotaGiris": "Alan, yamacın üst sırtına yayılmış birbirine bağlı üç bölümden oluşur; gece ilerledikçe ağırlık bir bölümden diğerine kayar, dilediğiniz an geçebilirsiniz.",
      "rotaNot": "Saatler, kapasiteler ve gökyüzünde görülebilecekler temsilîdir; mevsime, ay evresine ve hava durumuna göre değişir.",
      "galeriGozkasi": "Geceden",
      "galeriBaslik": "Karanlığa Alışan Gözle",
      "ctaGozkasi": "Gece Daveti",
      "ctaBaslik": "Bir Gece de Siz Yukarı Çıkın",
      "ctaMetin": "Ziyaretinizin akşam bölümünde gözlem alanına çıkın; şezlonga uzanın, teleskop başında sıranızı bekleyin, gerçek karanlığın nasıl bir şey olduğunu yerinde görün."
    },
    "bakista": [
      {
        "etiket": "Yükselti",
        "deger": "Yamacın en üst kotu, orman sınırının üzeri"
      },
      {
        "etiket": "Karanlık saatleri",
        "deger": "Gün batımından 03.00'e kadar"
      },
      {
        "etiket": "Kimler katılabilir",
        "deger": "Tüm misafirler; küçük çocuklar refakatle"
      },
      {
        "etiket": "Teleskop kaydı",
        "deger": "Çıplak göz alanı serbest; teleskop için akşam kaydı"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Yamacın en üst kotu, füniküler son durağının üstü"
      },
      {
        "etiket": "Kapasite",
        "deger": "Aynı anda 40 misafir"
      },
      {
        "etiket": "Açılış",
        "deger": "Hava açık olan tüm geceler"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu; en berrak geceler kış aylarında"
      }
    ],
    "rotalar": [
      {
        "ad": "Çıplak Göz Düzlüğü",
        "sure": "21.00 – 23.00",
        "mesafe": "Deniz tarafı düzlük · 24 şezlong",
        "zorluk": "Tüm misafirler",
        "aciklama": "Alanın denize bakan geniş düzlüğü. Arkalıkları yatırılabilen şezlonglara uzanır, battaniyenize sarılır ve gökyüzünü hiçbir alet olmadan izlersiniz. Görevli, o gece görünen takımyıldızları kısaca gösterir."
      },
      {
        "ad": "Teleskop Platformu",
        "sure": "22.00 – 00.30",
        "mesafe": "Kuzey kenar · 1 sabit, 3 taşınabilir teleskop",
        "zorluk": "8 yaş ve üzeri",
        "aciklama": "Platformun kuzey kenarında sabit teleskop ve yanında taşınabilir üç teleskop bulunur. Görevli eşliğinde sıranız geldiğinde merceğe bakarsınız; mevsime göre Ay yüzeyi, Satürn'ün halkası ya da Andromeda Gökadası gösterilir."
      },
      {
        "ad": "Uzun Poz Köşesi",
        "sure": "00.00 – 03.00",
        "mesafe": "Üst sırt · 12 işaretli tripod noktası",
        "zorluk": "Fotoğrafla ilgilenen misafirler",
        "aciklama": "Gece yarısından sonra açık kalan köşe. İşaretli tripod noktalarına kendi makinenizi kurar, uzun pozla yıldız izlerini kaydedersiniz. Bu saatte konuşma en aza iner, kırmızı ışık dışında aydınlatma kullanılmaz."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/gokyuzu-teleskop.jpg",
        "ad": "Teleskop başında"
      },
      {
        "src": "assets/img/ai/aktivite/gokyuzu-battaniye-ikram.jpg",
        "ad": "Battaniye ve sıcak içecek"
      },
      {
        "src": "assets/img/ai/aktivite/gokyuzu-sezlong-duzeni.jpg",
        "ad": "Şezlong düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/gokyuzu-uzun-poz.jpg",
        "ad": "Uzun poz gecesi"
      }
    ],
    "hazirlik": [
      "Katmanlı ve kalın giyim; yaz gecelerinde bile yamaçta rüzgâr eser.",
      "Kapalı ve tabanı kaymayan ayakkabı.",
      "Telefonunuzu kırmızı ekran moduna alın, flaşı kapatın.",
      "Uzun poz denemesi için kendi fotoğraf makineniz ve tripodunuz.",
      "Gözünüzün karanlığa alışması için ilk yirmi dakikayı ekransız geçirin."
    ],
    "saglayanlar": [
      "Yün battaniye, minder ve rüzgâr paravanı",
      "Sıcak içecek servisi: bitki çayı, sahlep, sade kahve",
      "Sabit ve taşınabilir teleskoplar, gözlem görevlisi eşliği",
      "Alana fünikülerle gece ulaşımı ve kırmızı el feneri"
    ],
    "guvenlik": "Alanda beyaz ışık ve flaş kullanılmaz; karanlıkta yürürken işaretli patikanın dışına çıkmayınız, çocuklarınızı yanınızdan ayırmayınız. Gece havası serindir ve platform açık kottadır; soğuğa duyarlılığı, denge sorunu ya da solunum yolu hassasiyeti olan misafirlerimizin katılım öncesinde kendi hekimine danışmasını öneririz. Bulut, sis ve rüzgâr durumuna göre alan kapatılabilir; buradaki saatler, kapasiteler ve program bilgileri temsilîdir.",
    "ilgili": [
      "seyir-teraslari",
      "acik-hava-sinemasi",
      "amfi-tiyatro"
    ]
  },
  {
    "id": "hamam",
    "ad": "Hamam",
    "grup": "sosyal",
    "ustyazi": "Geleneksel Türk Hamamı",
    "kisa": "Kubbe fil gözlerinden süzülen ışık altında, sıcak mermer ve buharla geçen sakin saatler.",
    "hero": "assets/img/ai/aktivite/hamam-hero.jpg",
    "ozet": "Geleneksel düzende kurulmuş bir Türk hamamı: ortada göbek taşı, çevresinde mermer kurnalar, üstte gün ışığını fil gözleriyle içeri alan yüksek bir kubbe.",
    "paragraflar": [
      "Hamam, wellness kanadının alt katında, kapalı havuz salonunun bir kot altındadır. Ortada geleneksel ölçülerde bir göbek taşı, çevresinde tek tek oyulmuş mermer kurnalar, üstte fil gözleriyle delinmiş bir kubbe bulunur. Gün ışığı bu küçük camlardan ince huzmeler hâlinde iner ve buharın içinde görünür hâle gelir. Mermer ayak altında ılıktır; duyulan tek ses, kurnaya akan sudur.",
      "Mekân kadın ve erkek saatleri ayrı olacak şekilde işletilir. Girişte peştemal, havlu ve takunya verilir; soyunmalıktan sonra ılıklıkta bir süre oturur, ardından sıcaklığa geçersiniz. Sıcak mermer üzerinde uzanır, kurnadan tas ile su alırsınız. Dilerseniz görevli eşliğinde kese ve köpük uygulaması yapılır. Çıkışta soğuklukta oturur, su ya da bitki çayı içersiniz.",
      "Kubbeden düşen ışık öğleye doğru dikleşir; huzmeler o saatte göbek taşının üzerine dik iner ve buharın içinde tek tek seçilir. Mekânın en sessiz aralığı da budur: iki program arasındaki devir saatinin hemen sonrası. Öğleden sonra doluluk artar, kese ve köpük saatleri sıklaşır; akşam programı kapanmadan sıcaklık bir kez daha boşalır ve mermer yalnız kalır."
    ],
    "bolum": {
      "deneyimGozkasi": "Hamamda",
      "deneyimBaslik": "Kubbenin Altında Bir Öğle Vakti",
      "rotaGozkasi": "Üç Kullanım",
      "rotaBaslik": "Hamamı Kullanmanın Üç Yolu",
      "rotaGiris": "Hamamı üç ayrı biçimde kullanabilirsiniz: kendi ritminizde geçen klasik bir sıcaklık ziyareti, görevli eşliğinde kese ve köpük uygulaması ya da soğukluk ve dinlenme odasını da içine alan uzun bir ritüel. Üçü de aynı mekânda geçer; fark, ayırdığınız zamanda ve eşlik biçimindedir.",
      "rotaNot": "Saatler ve süreler temsilîdir; mevsime, doluluğa ve kadın-erkek program düzenine göre değişebilir.",
      "galeriGozkasi": "Hamamdan",
      "galeriBaslik": "Mermer, Buhar ve Işık",
      "ctaGozkasi": "Hamam Saatleri",
      "ctaBaslik": "Hamamı Programınıza Ekleyin",
      "ctaMetin": "Kadın ve erkek saatlerini, kese ve köpük uygulaması için uygun zaman aralıklarını ve kubbe altının en sakin olduğu saatleri resepsiyonla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Kanat ve kat",
        "deger": "Wellness kanadı alt katı, kapalı havuz salonunun bir kot altı"
      },
      {
        "etiket": "Açılış saatleri",
        "deger": "Kadınlar 09.00-14.00, erkekler 15.00-21.00 (temsilî)"
      },
      {
        "etiket": "Kimler kullanabilir",
        "deger": "12 yaş ve üzeri; 6-12 yaş ebeveyn refakatiyle"
      },
      {
        "etiket": "Uygulama kaydı",
        "deger": "Sıcaklık için gerekmez; kese ve köpük için önceden bildirim"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Wellness kanadı, alt kat"
      },
      {
        "etiket": "Kapasite",
        "deger": "Aynı anda 18 misafir"
      },
      {
        "etiket": "Açılış",
        "deger": "09.00-21.00, kadın ve erkek saatleri ayrı"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu açık"
      }
    ],
    "rotalar": [
      {
        "ad": "Klasik Sıcaklık Ziyareti",
        "sure": "40-50 dakika",
        "mesafe": "Sıcaklık bölümü, aynı anda 12 misafir",
        "zorluk": "6 yaş ve üzeri, refakatle",
        "aciklama": "Kendi ritminizde kullanırsınız: ılıklıkta ısınır, göbek taşında uzanır, kurnadan tas ile su alırsınız. Görevli yalnızca mekân düzeni ve peştemal desteği için bulunur. Ayrılmadan önce soğuklukta bir süre oturmanız önerilir."
      },
      {
        "ad": "Kese ve Köpük Uygulaması",
        "sure": "30-35 dakika",
        "mesafe": "Göbek taşı, aynı anda 4 misafir",
        "zorluk": "16 yaş ve üzeri",
        "aciklama": "Görevli eşliğinde ilerler: ısınmanın ardından kese uygulanır, bol köpükle yıkanır ve ılık suyla durulanır. Ön bildirim sırasında kadın ya da erkek görevli tercih edebilirsiniz. Uygulama sonunda kurulama havlusu verilir."
      },
      {
        "ad": "Uzun Ritüel",
        "sure": "2-2,5 saat",
        "mesafe": "Sıcaklık ve soğukluk, aynı anda 6 misafir",
        "zorluk": "Yetişkin misafirler",
        "aciklama": "Hamamı soğukluk ve dinlenme odasıyla birlikte kullanırsınız. Sıcaklık, kese ve köpük, ardından uzun bir dinlenme: sedirlerde oturur, su ve bitki çayı içersiniz. Konuşmalar bu bölümde kısık tutulur."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/hamam-kese-kopuk.jpg",
        "ad": "Kese ve köpük uygulaması"
      },
      {
        "src": "assets/img/ai/aktivite/hamam-kurna-detay.jpg",
        "ad": "Mermer kurna ve su detayı"
      },
      {
        "src": "assets/img/ai/aktivite/hamam-sogukluk-hazirlik.jpg",
        "ad": "Soğukluk ve peştemal düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/hamam-gobek-tasi.jpg",
        "ad": "Göbek taşında son sessizlik"
      }
    ],
    "hazirlik": [
      "Mayo veya deniz şortu; peştemal, havlu ve takunya girişte verilir",
      "Kişisel bakım ürünleriniz için küçük bir çanta",
      "Saçınızı toplamak için toka ya da bone",
      "Hamam sonrası giyeceğiniz rahat, hafif bir kıyafet",
      "Yanınıza su alınız; çıkışta soğuklukta bir süre oturmayı planlayınız"
    ],
    "saglayanlar": [
      "Peştemal, havlu, takunya ve soyunmalık dolabı",
      "Kadın ve erkek saatleri ayrı program düzeni; kadın veya erkek görevli tercihi",
      "Kese, lif ve sabun malzemeleri ile uygulamayı yapan görevli",
      "Soğuklukta su, bitki çayı ve sedirli oturma alanı"
    ],
    "guvenlik": "Hamam zemini ıslak ve kaygandır; lütfen verilen takunyalarla yürüyünüz ve sıcak mermer üzerinde yalnızca peştemalle uzanınız. Hamileyseniz, tansiyon veya kalp rahatsızlığınız varsa ya da hekiminizin sıcak ortam konusunda bir uyarısı varsa hamamı kullanmadan önce hekiminize danışınız ve girişte görevliye durumunuzu bildiriniz. Bu sayfadaki saatler, süreler ve program bilgileri temsilîdir; mevsime, doluluğa ve resort işleyişine göre değişebilir.",
    "ilgili": [
      "kapali-havuz",
      "acik-havuz",
      "seyir-teraslari"
    ]
  },
  {
    "id": "acik-havuz",
    "ad": "Açık Havuz",
    "grup": "sosyal",
    "ustyazi": "Deniz Manzaralı Havuzlar",
    "kisa": "Marmara'ya bakan üç havuz alanı; yüzmek, çocuklarla oyalanmak ve gölgede uzanmak için.",
    "hero": "assets/img/ai/aktivite/acikhavuz-hero.jpg",
    "ozet": "Çam ormanının açıldığı üst kotta, Marmara'ya bakan üç havuz alanı: geniş ana havuz, sığ çocuk havuzu ve yalnızca dinlenmeye ayrılmış sessiz üst teras.",
    "paragraflar": [
      "Açık havuz alanı, çam ormanının seyreldiği üst kotta, yamacın denize döndüğü yerdedir. Ana havuzun taşma kenarı manzaranın önünde kesilir; suyun bittiği yerde Marmara başlar. Zemin açık kireçtaşı, gölgelikler ahşap ve krem kanvastır. Çam kokusu sabah serinliğinde belirgindir, öğleden sonra yerini ısınan taşın kokusuna bırakır. Üç alan alçak duvarlar ve bitki kuşaklarıyla ayrılır.",
      "Sabah görevliler şezlongları açar, minderleri yerleştirir ve havlu dolabını doldurur. Misafirler geldikleri gibi yerleşir; şezlong ayırtılmaz, üzerine bırakılan havlu yeterlidir. Cankurtaran, ana havuz ile çocuk havuzunu birlikte gören yüksek koltukta gün boyu görev yapar. Su sıcaklığı 26-28 derece aralığında tutulur ve düzenli olarak ölçülür. Öğle saatlerinde şemsiyeler açılır; alanda sesli müzik çalınmaz.",
      "Alanın en iyi aralığı kuşluk vaktidir: güneş henüz dikleşmemiş, çam kokusu serinlikte belirgin, su yüzeyi düzdür; boyuna yüzenler havuzu bu saatte neredeyse kendilerine ait bulur. Öğleye doğru şemsiyeler açılır, gölgeliklerin altı dolar ve tempo yükselir. Akşamüstü hareket azalır, üst terasta yalnızca uzananlar kalır; kapanışta şezlonglar tek tek toplanır."
    ],
    "bolum": {
      "deneyimGozkasi": "Havuz Başında",
      "deneyimBaslik": "Denize Bakan Üç Alan",
      "rotaGozkasi": "Havuz Alanları",
      "rotaBaslik": "Havuzun Üç Bölümü",
      "rotaGiris": "Alan, farklı beklentilere göre üç bölüme ayrılmıştır; bölümler arasında geçiş serbesttir, üçü de aynı terasa açılır.",
      "rotaNot": "Ölçüler, kapasiteler ve saatler temsilîdir; sezon, hava koşulları ve doluluk durumuna göre değişebilir.",
      "galeriGozkasi": "Havuz Kenarından",
      "galeriBaslik": "Suyun Kenarında Bir Gün",
      "ctaGozkasi": "Alan Gezisi",
      "ctaBaslik": "Suyun Kenarına Kadar Gelin",
      "ctaMetin": "Havuz alanını gezelim, üst terasa çıkalım; gölgeliklerin altında bir süre oturun, çocuk havuzunun düzenini ve kuşluk saatinin sessizliğini yerinde görün."
    },
    "bakista": [
      {
        "etiket": "Teras kotu",
        "deger": "Wellness kanadının bir kot üstü, deniz cephesi"
      },
      {
        "etiket": "Havuz saatleri",
        "deger": "Havuzlar 09:00-19:00; üst teras 08:00'den gün batımına"
      },
      {
        "etiket": "Kimler girebilir",
        "deger": "Tüm resort misafirleri; çocuk havuzu refakatli"
      },
      {
        "etiket": "Şezlong düzeni",
        "deger": "Ayırtılmaz; şezlong üzerine bırakılan havluyla işaretlenir"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Resort üst kotu, denize bakan teras"
      },
      {
        "etiket": "Kapasite",
        "deger": "Üç alan, yaklaşık 180 misafir"
      },
      {
        "etiket": "Açılış",
        "deger": "Teras 08:00, havuzlar 09:00 – 19:00"
      },
      {
        "etiket": "Mevsim",
        "deger": "Mayıs sonu – Eylül ortası"
      }
    ],
    "rotalar": [
      {
        "ad": "Ana Havuz",
        "sure": "09:00 – 19:00",
        "mesafe": "25 × 12 m, derinlik 1,20–1,60 m",
        "zorluk": "Tüm misafirler",
        "aciklama": "Alanın merkezindeki taşma kenarlı büyük havuz. Boyuna yüzmek isteyenler için iki şerit ayrılır, geri kalan bölüm serbest kullanımdır; kenarında sığ oturma basamağı ve gölgelikli iki oturma adası bulunur."
      },
      {
        "ad": "Çocuk Havuzu",
        "sure": "10:00 – 18:00",
        "mesafe": "Derinlik 0,35 m, gölge yelkeni altında",
        "zorluk": "0–10 yaş, refakatli",
        "aciklama": "Ana havuzun batısında, gölge yelkeninin altındaki sığ havuz. Zemin kaymaz kaplamalıdır, kenarları yuvarlatılmıştır; hemen yanında alçak duş, bebek bakım masası ve ailelerin oturabileceği gölgelikli bir sıra yer alır."
      },
      {
        "ad": "Sessiz Üst Teras",
        "sure": "08:00 – gün batımı",
        "mesafe": "24 şezlong, üst kot deniz cephesi",
        "zorluk": "16 yaş ve üzeri, sessiz alan",
        "aciklama": "Havuzların bir kot üstünde, denize bakan uzun teras. Suya girmek yerine uzanmak, okumak ve manzara izlemek için ayrılmıştır; müzik çalınmaz, telefon görüşmeleri terasın dışında yapılır."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/acikhavuz-cocuk-havuzu.jpg",
        "ad": "Çocuk havuzu"
      },
      {
        "src": "assets/img/ai/aktivite/acikhavuz-su-dokusu.jpg",
        "ad": "Taşma kenarı"
      },
      {
        "src": "assets/img/ai/aktivite/acikhavuz-sezlong-duzeni.jpg",
        "ad": "Şezlong terası"
      },
      {
        "src": "assets/img/ai/aktivite/acikhavuz-golge-saati.jpg",
        "ad": "Öğle gölgeleri"
      }
    ],
    "hazirlik": [
      "Mayo veya bikini — havuz alanına ayrı bir kıyafetle girilir",
      "Kaymaz tabanlı havuz terliği",
      "Yüksek faktörlü güneş koruyucu, şapka ve güneş gözlüğü",
      "Yüzme gözlüğü ve uzun saçlar için bone",
      "Çocuklar için kolluk ya da can yeleği; havuz görevlisinden de istenebilir"
    ],
    "saglayanlar": [
      "Havuz başında görev yapan cankurtaran",
      "Havlu servisi, açık alan duşları ve kilitli dolap",
      "Şezlong, minder ve gölge şemsiyesi",
      "Çocuk havuzu çevresinde gölge yelkeni ve alçak duş"
    ],
    "guvenlik": "Havuz çevresinde koşulmaz; suya yalnızca işaretli bölümden girilir ve alana duş alındıktan sonra geçilir. Cankurtaran görev başında olsa da çocuklar hiçbir saatte refakatsiz bırakılmaz; sıcak saatlerde uzun süre güneşte kalmaktan kaçınınız ve sağlık durumunuza dair bir tereddüdünüz varsa havuzu kullanmadan önce hekiminize danışıp havuz görevlisini bilgilendiriniz. Saatler, ölçüler ve kapasiteler temsilîdir; sezon ve hava koşullarına göre değişebilir.",
    "ilgili": [
      "kapali-havuz",
      "ozel-plaj",
      "hamam"
    ]
  },
  {
    "id": "kapali-havuz",
    "ad": "Kapalı Havuz",
    "grup": "sosyal",
    "ustyazi": "Yıl Boyu Açık",
    "kisa": "Cam çatısı altında yıl boyu ısıtılan, gün içinde üç farklı düzende kullanılan iç havuz.",
    "hero": "assets/img/ai/aktivite/kapalihavuz-hero.jpg",
    "ozet": "Cam çatıdan süzülen gün ışığının altında, su sıcaklığı yıl boyu sabit tutulan kapalı havuz; günün saatine göre serbest yüzmeye, kulvarlara ve çocuklara açılır.",
    "paragraflar": [
      "Kapalı havuz, wellness kanadının giriş katında; üç tarafı ve çatısı camla çevrili tek bir hacimde yer alır. Gün ışığı yukarıdan süzülür, suyun yüzeyinde kırılır ve açık kireçtaşı zeminde dolaşır. Su sıcaklığı yıl boyunca 29-31 derece aralığında tutulur; salon sıcaklığı sudan bir iki derece yüksek ayarlanır. Dışarıda kar yağarken bile içerisi aynı ılıklıktadır.",
      "Havuz beş kulvara bölünebilir; günün büyük bölümünde şeritler toplanır ve alan tek parça kullanılır. Girişte havlu ve dolap anahtarı verilir, soyunma odaları havuza doğrudan bağlanır. Kenar boyunca uzanan şezlonglarda çoğu misafir yüzdükten sonra bir süre oturur; cam duvarın önündeki köşede sıcak içecek servisi yapılır. Görevli salonda sürekli bulunur ve su değerlerini gün içinde düzenli olarak ölçer.",
      "Salonun en sevilen saati, ilk ışıkların cam çatıdan içeri düştüğü erken sabahtır; ortalık sessizdir, su yüzeyi düzdür ve kulvarlar kurulu bekler. Gün ilerledikçe ses artar; öğle aralığında çocuklarla birlikte tempo yükselir, ikindiden sonra yeniden durulur. Akşam kulvarları kurulduğunda cam duvarların ardındaki yamaç turuncuya döner ve salon gün ışığını en son bırakan yer olur."
    ],
    "bolum": {
      "deneyimGozkasi": "Cam Çatının Altında",
      "deneyimBaslik": "Sabahtan Geceye Salonun Hâli",
      "rotaGozkasi": "Günün Ritmi",
      "rotaBaslik": "Günün Üç Kuşağı",
      "rotaGiris": "Aynı havuz gün içinde üç farklı düzende kullanılır; kulvar şeritleri saate göre kurulur veya toplanır.",
      "rotaNot": "Saat aralıkları, kapasite ve düzen bilgileri temsilîdir; yoğunluk ile bakım ve temizlik programına göre değişebilir.",
      "galeriGozkasi": "Salon İçinden",
      "galeriBaslik": "Su, Işık ve Cam",
      "ctaGozkasi": "Salonu Gezin",
      "ctaBaslik": "Suya Girmeden Önce Salonu Görün",
      "ctaMetin": "Ziyaretinizde kapalı havuz salonunu gezebilir; soyunma odalarını, kulvar düzenini ve cam duvarın önündeki dinlenme köşesini yerinde görüp havuz görevlimizle tanışabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Salonun yeri",
        "deger": "Wellness kanadı, giriş kat"
      },
      {
        "etiket": "Kullanım saatleri",
        "deger": "Her gün 07:00 – 22:00"
      },
      {
        "etiket": "Yaş ve refakat",
        "deger": "Tüm misafirler; 12 yaş altı refakatle"
      },
      {
        "etiket": "Salona giriş",
        "deger": "Oda kartıyla; önceden bildirim gerekmez"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Wellness kanadı giriş katı, cam çatılı salon"
      },
      {
        "etiket": "Kapasite",
        "deger": "Aynı anda 40 misafir"
      },
      {
        "etiket": "Açılış",
        "deger": "07:00 – 22:00"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu açık"
      }
    ],
    "rotalar": [
      {
        "ad": "Serbest Yüzme",
        "sure": "09:00 – 12:00 ve 14:00 – 20:00",
        "mesafe": "25 m havuz, 40 kişi",
        "zorluk": "Tüm misafirler",
        "aciklama": "Kulvar şeritlerinin toplandığı, havuzun tek parça kullanıldığı ana kuşak. Kendi temponuzda yüzer, dilediğiniz yerde durur, kenardaki şezlonglarda ara verirsiniz. Günün en uzun ve en esnek bölümüdür; salonda müzik çalmaz."
      },
      {
        "ad": "Kulvar Saati",
        "sure": "07:00 – 09:00 ve 20:00 – 22:00",
        "mesafe": "5 kulvar, kulvar başına 4 kişi",
        "zorluk": "Yüzme bilen misafirler",
        "aciklama": "Sabah erken ve akşam geç saatlerde şeritler kurulur, havuz beş kulvara ayrılır. Mesafe yüzmek isteyen misafirler tek yönlü akışta ilerler; yavaş, orta ve hızlı kulvarlar görevli tarafından ayrılır ve gerektiğinde yeniden düzenlenir."
      },
      {
        "ad": "Çocuk Saati",
        "sure": "12:00 – 14:00",
        "mesafe": "Sığ bölüm, 0,6 – 1,0 m derinlik",
        "zorluk": "Çocuklar; ebeveyn refakatiyle",
        "aciklama": "Öğle aralığında havuzun sığ bölümü çocuklara ayrılır; su üstü oyuncakları çıkarılır, kenarlara kaymaz halı serilir. Bu saatlerde salonda ses seviyesi doğal olarak yükselir; sessizlik arayan misafirler için sabah kuşağı daha uygundur."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/kapalihavuz-kulvarda-yuzme.jpg",
        "ad": "Kulvarda yüzme"
      },
      {
        "src": "assets/img/ai/aktivite/kapalihavuz-su-yuzeyi.jpg",
        "ad": "Su yüzeyi ve ışık"
      },
      {
        "src": "assets/img/ai/aktivite/kapalihavuz-havlu-ve-sezlong.jpg",
        "ad": "Havlu ve şezlong düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/kapalihavuz-sessiz-an.jpg",
        "ad": "Sessizleşen salon"
      }
    ],
    "hazirlik": [
      "Mayo veya yüzme şortu; havuz alanına iç çamaşırıyla girilmez",
      "Bone; suya girerken takılması gerekir",
      "Islak zeminler için kaymaz tabanlı terlik",
      "Oda kartı; giriş ve dolap kullanımı için",
      "Kulvar saatinde yüzecekseniz yüzücü gözlüğü"
    ],
    "saglayanlar": [
      "Girişte temiz havlu ve kilitli dolap",
      "Soyunma odaları, duşlar ve saç kurutma bölümü",
      "Salonda sürekli görev yapan havuz görevlisi",
      "Su değerlerinin gün içinde düzenli ölçümü ve kaydı"
    ],
    "guvenlik": "Havuz alanına girmeden önce duş almanız ve bone takmanız gerekir; ıslak zeminde koşulmaz, havuza atlanmaz ve çocuklar hiçbir saatte refakatsiz bırakılmaz. Yüzme bilmeyen misafirlerin sığ bölümde kalması, sağlık durumuna dair bir tereddüdü olan misafirlerin ise havuzu kullanmadan önce hekimine danışıp görevliyi bilgilendirmesi beklenir. Belirtilen saat aralıkları, kapasite ve düzen bilgileri temsilîdir; yoğunluk ile bakım ve temizlik programına göre değişebilir.",
    "ilgili": [
      "hamam",
      "acik-havuz",
      "ozel-plaj"
    ]
  },
  {
    "id": "golf-konser",
    "ad": "Golf & Konser Alanları",
    "grup": "sosyal",
    "ustyazi": "Yeşilin İki Hâli",
    "kisa": "Gündüz putting green ve kısa vuruş, akşam açık hava konseri için tek geniş çim alan.",
    "hero": "assets/img/ai/aktivite/golf-hero.jpg",
    "ozet": "Resortun güney sekisinde uzanan bakımlı çim; gündüz kısa vuruşlara, akşam sahne fenerleri yandığında açık hava konserlerine ev sahipliği eder. Marmara, her iki saatte de alanın arkasındadır.",
    "paragraflar": [
      "Alan, resortun güneye bakan en düz sekisinde yer alır; arkasında çam kuşağı, önünde yamacın Marmara'ya inen açıklığı vardır. Çim kısa vuruşa uygun sıklıkta biçilir ve biçim izleri gün boyunca görünür kalır; kenarlar kireçtaşı bordür ve alçak zeytin ağaçlarıyla çerçevelenir. Rüzgâr öğleden sonra denizden eser, bu nedenle batı ucunda alçak bir çit ile ahşap gölge kanopisi bulunur.",
      "Gün sakin bir ritimle geçer. Sabahtan ikindiye kadar putting green ve kısa vuruş açıklığı kullanıma açıktır; sopa ile toplar girişteki ahşap dolaptan alınır, dileyen misafir kendi takımını getirir. Akşamüstü bayraklar toplanır, güney yarısına katlanır sandalyeler ve keten minderler dizilir; alan birkaç saat içinde sessizce bir konser çimine dönüşür.",
      "Çimin en güzel saati, gölgelerin uzadığı geç ikindidir: ışık yumuşar, yüzeydeki en küçük eğim bile görünür hâle gelir ve vuruş hattı kendiliğinden okunur. Konser akşamlarında misafirler gün batımından önce yerleşir, ilk notalar hava kararırken duyulur. Ses düzeni gece yarısından önce kapanır; ertesi sabah çim yeniden biçilir ve alan gündüz hâline döner."
    ],
    "bolum": {
      "deneyimGozkasi": "Mekân ve Düzen",
      "deneyimBaslik": "Aynı Çimin İki Yüzü",
      "rotaGozkasi": "Düzenler",
      "rotaBaslik": "Tek Çimde Üç Düzen",
      "rotaGiris": "Alan gün içinde tek parça kalır; yalnızca üzerindeki düzen değişir. Aşağıdaki üç bölüm, aynı çim yüzeyinin sabahtan geceye aldığı hâllerdir.",
      "rotaNot": "Bölüm ölçüleri, kapasite bilgileri ve saat aralıkları temsilîdir; konser akşamlarında yerleşim ve giriş düzeni değişebilir.",
      "galeriGozkasi": "Çimden",
      "galeriBaslik": "Gündüzden Akşama",
      "ctaGozkasi": "Çimde Bir Tur",
      "ctaBaslik": "Sahne Kurulmadan Önce Bir Tur Atın",
      "ctaMetin": "Alanı gündüz ışığında gezelim; putting green'de birkaç vuruş yapın, akşamüstü sahne düzeninin kuruluşunu kenardan izleyin, konser gecelerinin akışını size anlatalım."
    },
    "bakista": [
      {
        "etiket": "Sekideki yeri",
        "deger": "Güney sekisi; wellness merkezinin doğusunda"
      },
      {
        "etiket": "Gündüz ve akşam",
        "deger": "Golf 09:00–18:00 · Konser akşamları 20:00"
      },
      {
        "etiket": "Kimler için",
        "deger": "Tüm misafirler; çocuklar refakatle"
      },
      {
        "etiket": "Erişim",
        "deger": "Konser akşamları için gün içinde yer bildirimi"
      }
    ],
    "kunye": [
      {
        "etiket": "Alan",
        "deger": "Yaklaşık 9.000 m² çim"
      },
      {
        "etiket": "Kapasite",
        "deger": "Konser düzeninde 600 kişi"
      },
      {
        "etiket": "İki kullanım",
        "deger": "Gündüz golf · Akşam sahne"
      },
      {
        "etiket": "Mevsim",
        "deger": "Nisan – Ekim"
      }
    ],
    "rotalar": [
      {
        "ad": "Golf Çimi",
        "sure": "09:00 – 18:00",
        "mesafe": "9 delikli putting green ve 70 m kısa vuruş açıklığı",
        "zorluk": "8 yaş ve üzeri; küçükler refakatle",
        "aciklama": "Alanın kuzey yarısı; dalgalı, kısa biçilmiş putting yüzeyi ve yanındaki açıklık. Sopa ile top girişteki ahşap dolaptan alınır, ilk kez deneyen misafirlere alan görevlisi kısa bir tanıtım yapar."
      },
      {
        "ad": "Konser Çimi",
        "sure": "20:00 – 23:00",
        "mesafe": "600 kişilik oturma düzeni",
        "zorluk": "Tüm misafirler",
        "aciklama": "Güney yarısındaki eğimli çim; alçak sahne sırtını denize verir, izleyici yamacın doğal meylinde yerleşir. Ön tarafa keten minder, arkaya katlanır sandalye dizilir; ses düzeni 23:00'te kapatılır."
      },
      {
        "ad": "Karşılama Terası",
        "sure": "Program boyunca açık",
        "mesafe": "Doğu girişi; gölgelikli ahşap teras",
        "zorluk": "Ailelere uygun; sohbet alanı",
        "aciklama": "Doğu girişindeki gölgelikli teras. Gündüz su ve soğuk içecek, konser akşamlarında hafif atıştırmalık buradan verilir. Oturma grupları sahnenin sesinden uzak, konuşmaya elverişli bir köşe oluşturur."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/golf-putting-green.jpg",
        "ad": "Putting green'de ikindi vuruşu"
      },
      {
        "src": "assets/img/ai/aktivite/golf-cim-dokusu.jpg",
        "ad": "Biçim izleri ve kireçtaşı bordür"
      },
      {
        "src": "assets/img/ai/aktivite/golf-sahne-kurulumu.jpg",
        "ad": "Konser öncesi oturma düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/golf-konser-aksami.jpg",
        "ad": "Işıklar yandığında konser çimi"
      }
    ],
    "hazirlik": [
      "Çim üzerinde rahat eden düz tabanlı ayakkabı; dikenli golf ayakkabısı gerekmez",
      "İkindi güneşi için şapka ve güneş gözlüğü",
      "Akşamüstü denizden esen rüzgâr için ince bir hırka",
      "Kendi golf takımınızı getirecekseniz alan girişindeki görevliye haber verin",
      "Konser akşamlarında yer bildiriminizi gün içinde tamamlayın"
    ],
    "saglayanlar": [
      "Putter, kısa vuruş sopası ve top (girişteki ahşap dolaptan)",
      "Keten minder, katlanır sandalye ve akşam için örtü",
      "Gölge kanopisi ve soğuk içme suyu",
      "Konser akşamlarında ses düzeni ve sahne aydınlatması"
    ],
    "guvenlik": "Kısa vuruş alanında sopa sallayan misafirin önüne geçilmez; toplar yalnızca işaretli hatta doğru vurulur ve çocuklar bu bölümde refakatsiz bulunmaz. Uzun süre güneş altında kalmak ya da yüksek ses düzeyi sizin için uygun değilse katılım öncesinde hekiminize danışmanızı, alan görevlisini de bilgilendirmenizi rica ederiz. Bölüm ölçüleri, kapasite ve konser saatleri temsilîdir; hava koşullarına ve program akışına göre değişebilir.",
    "ilgili": [
      "amfi-tiyatro",
      "acik-hava-sinemasi",
      "seyir-teraslari"
    ]
  },
  {
    "id": "acik-hava-sinemasi",
    "ad": "Açık Hava Sineması",
    "grup": "sosyal",
    "ustyazi": "Çamların Arasında Perde",
    "kisa": "Çamların arasına gerilmiş perde, minderli sekiler ve yün battaniyeyle akşamüstü açık hava gösterimi.",
    "hero": "assets/img/ai/aktivite/sinema-hero.jpg",
    "ozet": "Yamacın düzlüğünde, çam gövdelerinin arasına gerilmiş bir perde. Alacakaranlıkta minderli sekilere yerleşir, battaniyenizi alır, denizin üstünde kararan gökyüzüyle birlikte gösterimi izlersiniz.",
    "paragraflar": [
      "Sinema alanı, resortun orta kotunda çam ormanının açıldığı doğal bir düzlükte yer alır. Perde iki yaşlı çam gövdesinin arasına gerilmiştir; arkasında ağaçlar, onların ötesinde Marmara'nın puslu çizgisi görünür. Oturma düzeni kademeli sekiler hâlinde inşa edilmiş, keten kaplı minderler ve alçak şezlonglarla döşenmiştir. Yandaki küçük ikram köşesinde sıcak içecekler ve katlanmış yün battaniyeler hazır bekler.",
      "Akşam yaklaştığında alan sessizce dolar. Yer numarası verilmez; misafirler istedikleri sekiye yerleşir, minderleri kendilerine göre düzenler. Görevliler battaniye ve sıcak içeceği oturduğunuz yere getirir. Işıklar kısıldıktan sonra yalnızca yürüyüş yolunu belirleyen alçak zemin lambaları yanar. Gösterim bittiğinde aynı yoldan, aydınlatma eşliğinde konaklama birimlerine dönülür.",
      "Alanın kendine has saati, hava tamamen karardıktan sonra başlayan geç gösterimdir; perdenin ışığı çam gövdelerine vurur, reçine kokusu serinlikle birlikte belirginleşir, konuşma neredeyse tümüyle kesilir. Alacakaranlıkta yerleşenler bu sessizliği en baştan yakalar. Gösterim bitince ışıklar bir anda değil, kademe kademe açılır; alan boşalana kadar sekilerde oturmaya devam edebilirsiniz."
    ],
    "bolum": {
      "deneyimGozkasi": "Alanın Havası",
      "deneyimBaslik": "Perde Gerildiğinde",
      "rotaGozkasi": "Akşamın Bölümleri",
      "rotaBaslik": "Akşamın Üç Gösterimi",
      "rotaGiris": "Sinema alanı akşam boyunca tek bir düzende çalışmaz. Hava kararmadan gece yarısına uzanan üç ayrı kullanım vardır; her biri farklı bir kitleye ve farklı bir tempoya göre kurulur.",
      "rotaNot": "Saat aralıkları ve oturma düzenleri temsilîdir; gösterim programı mevsime, hava durumuna ve resort takvimine göre değişir.",
      "galeriGozkasi": "Perdenin Önünden",
      "galeriBaslik": "Alacakaranlıktan Gece Yarısına",
      "ctaGozkasi": "Program ve Yer",
      "ctaBaslik": "Bu Haftanın Gösterimlerini Sorun",
      "ctaMetin": "Haftalık gösterim programını, özel gösterim taleplerini ve alanın kullanım koşullarını misafir ilişkileri ekibimizden öğrenebilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Orman içindeki yeri",
        "deger": "Orta kot çam düzlüğü; füniküler ara durağından dört dakika"
      },
      {
        "etiket": "Gösterim saatleri",
        "deger": "Gün batımından itibaren; son gösterim gece yarısına kadar"
      },
      {
        "etiket": "Kimler için uygun",
        "deger": "Tüm misafirler; erken gösterim çocuklu ailelere göre düzenlenir"
      },
      {
        "etiket": "Yer bildirimi",
        "deger": "Aile ve geç gösterimde gerekmez; özel gösterim önceden talep edilir"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Orta kot çam düzlüğü, deniz cephesi"
      },
      {
        "etiket": "Kapasite",
        "deger": "Kademeli sekilerde yaklaşık 90 kişi"
      },
      {
        "etiket": "Açılış",
        "deger": "Akşamüstü hazırlık, gün batımıyla ilk gösterim"
      },
      {
        "etiket": "Mevsim",
        "deger": "Mayıs – Ekim; yağışta kapalı salon"
      }
    ],
    "rotalar": [
      {
        "ad": "Aile Gösterimi",
        "sure": "20:00 – 21:30",
        "mesafe": "Ön sekiler; yaklaşık 40 kişilik minder alanı",
        "zorluk": "Tüm misafirler; çocuklu aileler dâhil",
        "aciklama": "Hava tam kararmadan başlar. Ön sekilere yer minderleri serilir, çocuklar oturarak ya da uzanarak izler. Ses düzeyi düşük tutulur, ortada kısa bir ara verilir; ara boyunca ikram köşesi açık kalır."
      },
      {
        "ad": "Geç Gösterim",
        "sure": "22:00 – 00:00",
        "mesafe": "Tüm seki düzeni; şezlonglu üst kademe",
        "zorluk": "Yetişkin misafirler; sessiz alan",
        "aciklama": "Alan tamamen karanlıkta çalışır. Üst kademedeki şezlonglara battaniye ve sıcak içecek getirilir. Konuşma asgaride tutulur, telefon ekranları kapalı kalır; geç gelenler kenardaki yoldan sessizce yerleşir."
      },
      {
        "ad": "Özel Gösterim",
        "sure": "Talebe göre, iki saate kadar",
        "mesafe": "Alanın tamamı ya da 12 kişilik yan seki",
        "zorluk": "Özel gruplara ayrılır",
        "aciklama": "Küçük gruplara kapalı düzen kurulur. Oturma yerleşimi, ikram servisi ve başlama saati grubun isteğine göre ayrıca belirlenir; alan bu süre boyunca diğer misafirlere kapalıdır."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/sinema-battaniyeli-misafirler.jpg",
        "ad": "Alacakaranlıkta sekilere yerleşen misafirler"
      },
      {
        "src": "assets/img/ai/aktivite/sinema-keten-minder-dokusu.jpg",
        "ad": "Keten minder ve katlanmış yün battaniye"
      },
      {
        "src": "assets/img/ai/aktivite/sinema-aksam-hazirligi.jpg",
        "ad": "Gösterim öncesi seki ve ikram düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/sinema-gosterim-sonu.jpg",
        "ad": "Zemin lambalarıyla aydınlanan dönüş yolu"
      }
    ],
    "hazirlik": [
      "Alana orman patikasından yürünür; kaymayan tabanlı rahat ayakkabı tercih edin",
      "Battaniye, minder ve sıcak içecek alanda hazırdır; yanınıza ayrıca bir şey almanız gerekmez",
      "Karanlıkta parlayan telefon ekranı diğer misafirleri rahatsız eder; cihazınızı sessize alın",
      "Akşam yemeğini erken bitirmek, alacakaranlığı kaçırmadan yerleşmenizi sağlar",
      "Özel gösterim düşünüyorsanız talebinizi en az bir gün önce iletin"
    ],
    "saglayanlar": [
      "Keten kaplı minderler, alçak şezlonglar ve yün battaniyeler",
      "Oturduğunuz yere getirilen sıcak içecek servisi",
      "Yürüyüş yolunu belirleyen alçak zemin aydınlatması",
      "Yağışlı havalarda kapalı salona alınan alternatif düzen"
    ],
    "guvenlik": "Sekiler arasındaki basamaklar karanlıkta belirginliğini yitirir; lütfen yalnızca aydınlatılmış yolları kullanınız ve çocukların yanınızda kalmasına özen gösteriniz. Gece serinliği, uzun süre hareketsiz oturmak ya da alana yürüyerek gelmek sizin için uygun değilse ekibimize bildiriniz; görme veya işitmeyle ilgili bir durumunuz varsa oturma yerinizi buna göre düzenleyelim. Bu sayfadaki saatler, kapasite ve program bilgileri temsilîdir; güncel düzen resort takvimine ve hava koşullarına göre değişir.",
    "ilgili": [
      "amfi-tiyatro",
      "golf-konser",
      "gokyuzu-gozlem"
    ]
  },
  {
    "id": "amfi-tiyatro",
    "ad": "Amfi Tiyatro",
    "grup": "sosyal",
    "ustyazi": "Yamaçta Açık Sahne",
    "kisa": "Yamaca oyulmuş taş basamaklar; sahnenin arkasında perde değil, Marmara'nın açık ufku uzanır.",
    "hero": "assets/img/ai/aktivite/amfi-hero.jpg",
    "ozet": "Resortun eğimini izleyen kireçtaşı basamaklar, ahşap sahne ve arkasında açık ufuk. Gün batımına dönük bu alan akşam konserlerine, çocuk gösterilerine ve söyleşilere ev sahipliği yapar.",
    "paragraflar": [
      "Amfi tiyatro, yamacın doğal eğimine oyulmuş yarım daire basamaklardan oluşur. Kireçtaşı sıraların üzerine keten minderler serilir; en üst sıradan bakıldığında sahne, arkasındaki çam tepeleri ve Marmara aynı karede birleşir. Sahne zemini sıcak dokulu ahşaptır, kanatlarında akşam serinliğinde yakılan alçak fenerler dizilidir. Yapıda perde, tavan ya da duvar yoktur; alanın çerçevesi manzaranın kendisidir.",
      "Alan gün içinde farklı biçimlerde kullanılır ve program haftalık olarak duyurulur. Cumartesi sabahları alt sıralar çocuklara ayrılır; hafta boyunca öğleden sonraları basamaklar boş bırakılır, misafirler kitaplarıyla oturur. Akşamüstü teknik ekip sahneyi hazırlar, ses düzeni gölgede denenir, minderler sıralara yerleştirilir. Kapı saatinden yarım saat önce basamaklar açılır; oturma serbesttir, numara verilmez.",
      "Alanın en güzel saati gün batımıdır. Güneş karşı kıyıya, Bozburun fenerinin bulunduğu hatta doğru alçalırken sahnenin arkasındaki gökyüzü turuncudan laciverte döner; ışık kendiliğinden değişir, ayrıca aydınlatmaya gerek kalmaz. Program bittiğinde çoğu misafir hemen kalkmaz, basamaklarda oturup karanlığa alışan denizi izler. Sahne fenerleri her akşam en son söndürülür."
    ],
    "bolum": {
      "deneyimGozkasi": "Akşamın Ritmi",
      "deneyimBaslik": "Basamaklarda Bir Akşam",
      "rotaGozkasi": "Haftalık Düzen",
      "rotaBaslik": "Aynı Basamaklar, Üç Program",
      "rotaGiris": "Aynı yarım daire, haftanın farklı saatlerinde farklı bir düzene açılır; aşağıdaki üç program, alanın takviminde en sık tekrarlananlardır.",
      "rotaNot": "Gün, saat ve kapasite bilgileri temsilîdir; haftalık program hava koşullarına ve resort takvimine göre değişebilir.",
      "galeriGozkasi": "Amfiden",
      "galeriBaslik": "Basamaklardan ve Sahneden",
      "ctaGozkasi": "Ziyaret Planı",
      "ctaBaslik": "Gün Batımına Denk Gelen Bir Saat Seçin",
      "ctaMetin": "Amfinin haftalık akışını size iletelim; ziyaretinizi konser, çocuk gösterisi ya da söyleşi saatlerinden birine denk getirin, akustiği üst sıradan kendiniz dinleyin."
    },
    "bakista": [
      {
        "etiket": "Amfinin yeri",
        "deger": "Üst teras kotu; fünikülerin bir üst durağı"
      },
      {
        "etiket": "Program saatleri",
        "deger": "Cumartesi 11:00 · Akşam programları 18:30'dan itibaren"
      },
      {
        "etiket": "Kimler gelebilir",
        "deger": "Tüm misafirler ve daire sahipleri; konserlerde yer bildirimi önerilir"
      },
      {
        "etiket": "Yürüyüş bağlantısı",
        "deger": "Fünikülerle üst istasyona, oradan teras yolu"
      }
    ],
    "kunye": [
      {
        "etiket": "Yapı",
        "deger": "Yarım daire kireçtaşı basamaklar"
      },
      {
        "etiket": "Kapasite",
        "deger": "Yaklaşık 320 kişi"
      },
      {
        "etiket": "Takvim",
        "deger": "Haftalık; konser, çocuk gösterisi, söyleşi"
      },
      {
        "etiket": "Mevsim",
        "deger": "Mayıs – Ekim, açık hava"
      }
    ],
    "rotalar": [
      {
        "ad": "Akşam Konseri",
        "sure": "20:00 – 21:45",
        "mesafe": "320 kişilik basamak oturumu",
        "zorluk": "Tüm misafirler",
        "aciklama": "Akustik bir üçlü ya da solo piyano; program gün batımına denk gelecek biçimde başlar. Ses yükseltimi düşük tutulur, sahne ışığı hava karardıkça açılır. Minder ve ince örtü basamaklarda hazır bulundurulur."
      },
      {
        "ad": "Çocuk Gösterisi",
        "sure": "Cumartesi 11:00 – 12:00",
        "mesafe": "Alt üç sıra; yaklaşık 60 çocuk",
        "zorluk": "3 yaş ve üzeri",
        "aciklama": "Kukla, gölge oyunu ve kısa masal anlatımı dönüşümlü sahnelenir. Alt üç sıra çocuklara ayrılır, aileler hemen arkalarında oturur. Gösteri kısa tutulur; sonunda sahne önü çocukların serbest kullanımına açılır."
      },
      {
        "ad": "Söyleşi Saati",
        "sure": "18:30 – 19:45",
        "mesafe": "Orta sıralar; yaklaşık 80 kişi",
        "zorluk": "Sessiz alan",
        "aciklama": "Davetli bir konukla sohbet düzeninde, mikrofonlu ama sakin bir buluşma. Katılım orta sıralarla sınırlı tutulur, soru bölümü açık bırakılır; giriş çıkış yalnızca aralarda yapılır."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/amfi-aksam-konseri.jpg",
        "ad": "Gün batımında akşam konseri"
      },
      {
        "src": "assets/img/ai/aktivite/amfi-tas-doku.jpg",
        "ad": "Kireçtaşı basamak ve keten minder"
      },
      {
        "src": "assets/img/ai/aktivite/amfi-sahne-hazirlik.jpg",
        "ad": "Program öncesi sahne hazırlığı"
      },
      {
        "src": "assets/img/ai/aktivite/amfi-son-isik.jpg",
        "ad": "Günün son ışığında basamaklar"
      }
    ],
    "hazirlik": [
      "Taş basamaklarda oturmak için ince bir örtü ya da şal",
      "Basamaklar diktir; kaygan olmayan, iyi tutan tabanlı ayakkabı seçin",
      "Dönüş yolu loş aydınlatmalıdır; küçük bir el feneri işinize yarar",
      "Program başlamadan telefon sesini kapatmanızı rica ederiz",
      "Çocuklu misafirler cumartesi sabahı alt sıralara erken yerleşebilir"
    ],
    "saglayanlar": [
      "Keten minder ve ince örtü desteği",
      "Basamak kenarlarında gizli zemin aydınlatması",
      "Akustik ses düzeni ve sahne aydınlatması",
      "Ara verildiğinde sıcak içecek servisi"
    ],
    "guvenlik": "Basamaklar taştır ve akşam nemiyle kayganlaşabilir; iniş çıkışlarda korkuluklu orta koridoru kullanınız, çocukları basamaklarda yalnız bırakmayınız. Denge, görme ya da hareket güçlüğü yaşayan misafirlerimiz için alt kotta düz zeminli oturma alanı ayrılır; talebinizi önceden iletmeniz yeterlidir. Program, saat ve kapasite bilgileri temsilîdir; hava koşullarına göre kapalı salona alınabilir veya ertelenebilir.",
    "ilgili": [
      "acik-hava-sinemasi",
      "golf-konser",
      "seyir-teraslari"
    ]
  },

  /* ---------- Çocuklara Yönelik Aktiviteler (grup: cocuk) ---------- */
  {
    "id": "interaktif-egitim",
    "ad": "İnteraktif Eğitim Atölyeleri",
    "grup": "cocuk",
    "ustyazi": "Bilim, Sanat ve Teknoloji Atölyeleri",
    "kisa": "Bilim, sanat ve teknolojiyle öğrenmeyi eğlenceli kılar.",
    "hero": "assets/img/ai/uzay-kulubu.jpg",
    "video": "assets/video/aktivite-interaktif-egitim.mp4",
    "videoPoster": "assets/img/ai/aktivite/interaktif-egitim-deney-masasi.jpg",
    "ozet": "Deney masaları, mikroskop tezgâhı ve uzay temalı bir keşif köşesiyle kurulmuş atölye salonu: çocuklar burada anlatılanı dinlemek yerine kendi elleriyle dener, ölçer ve bulduklarını anlatır.",
    "paragraflar": [
      "Atölye salonu, çocuk kanadının güneş alan cephesinde, oyun odasıyla kütüphane arasındaki geniş bölümdedir. Ortada silinebilir yüzeyli dört deney masası, kenarda mikroskopların ve büyüteçlerin durduğu alçak bir tezgâh vardır. Salonun ucu uzay ve gökyüzü temalı bir keşif köşesine ayrılmıştır: duvarda gezegen kartları, tezgâhta dönen bir Dünya-Ay modeli, raflarda takımyıldız kartonları ve küçük bir yıldız haritası bulunur. Malzemeler açık raflarda, çocuk boyunda durur; her kutunun üzerinde resimli bir etiket vardır. Zemin yıkanabilir, masaların altı boya ve tutkal için hazırdır.",
      "Her oturum tek bir soruyla başlar: suyun içine damlatılan boya neden dağılır, bir yaprağın altında ne var, ay neden her gece aynı görünmez. Eğitmen önce soruyu masaya bırakır, sonra çocuklar küçük ekipler hâlinde denemeye geçer. Malzeme dağıtımı ve ölçüm kısımları eğitmen ve yardımcı eğitmen gözetiminde yapılır; kesici, ısıtıcı ya da elektrikli hiçbir ekipmanı çocuklar tek başına kullanmaz. Denemenin sonunda her ekip bulduğunu kendi cümleleriyle anlatır; doğru cevaptan çok, denenen yolun anlatılması istenir. Yapılan iş bir karta yazılır ve panoya asılır.",
      "Hava kararmaya yakın keşif köşesinin perdeleri çekilir ve gökyüzü kartları, yıldız haritası, gezegen modelleri öne çıkar; bu bölüm çocukların akşamki gökyüzü gözlemine hazırlandığı kısımdır. Ondan birkaç saat önce, öğleden sonra kuşağında salon sesini yükseltir: boya, kâğıt ve makas kısımları o saate denk gelir, masalar arasında ekipler birbirinin işine bakmaya gider. Günün ilk oturumu ise sakin ve gözlem ağırlıklı geçer; mikroskop tezgâhı en çok o saatte kullanılır. Gün sonunda masalar birlikte toplanır, panodaki kartlar ertesi güne kalır."
    ],
    "bolum": {
      "videoGozkasi": "Deney Masasından",
      "videoBaslik": "Atölyenin İçinden Bir An",
      "videoGiris": "Deney masasının başında çekilmiş sesli görüntü — cam şişelerin tıkırtısını ve keşfin uğultusunu dinleyin.",
      "deneyimGozkasi": "Deney Salonunda",
      "deneyimBaslik": "Masaya Bırakılan Soru",
      "rotaGozkasi": "Atölye Kolları",
      "rotaBaslik": "Aynı Salon, Değişen Ekipman",
      "rotaGiris": "Atölye üç yaş kademesine ayrılmıştır: keşif köşesinde dokunarak ilerleyen küçük yaş kolu, deney masalarında ölçüm ve gözlem yapan orta yaş kolu ve uzay temasıyla kendi düzeneğini kuran büyük yaş kolu. Üçü de aynı salonda toplanır; fark, ekipmanın karmaşıklığında, oturum süresinde ve çocuğun ne kadarını kendi başına yaptığındadır.",
      "rotaNot": "Buradaki rakamlar temsilîdir: oturum süresi, kontenjan ve yaş aralığı sezona, katılım sayısına ve atölyenin haftalık konu programına göre değişebilir.",
      "galeriGozkasi": "Deney Masasından",
      "galeriBaslik": "Mercek Altında Kalanlar",
      "ctaGozkasi": "Atölye Programı",
      "ctaBaslik": "Haftanın Konusunu Birlikte Seçin",
      "ctaMetin": "Haftalık konu takvimini, çocuğunuzun yaşına uygun kolu ve gökyüzü köşesinin akşam gözlem saatiyle birleştiği oturumları resepsiyonla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Kanat ve kat",
        "deger": "Çocuk kanadı, oyun odası ile kütüphane arasındaki atölye salonu"
      },
      {
        "etiket": "Oturum saatleri",
        "deger": "10.00-12.00, 14.00-16.00 ve 17.00-18.30 kuşakları (temsilî)"
      },
      {
        "etiket": "Yaş aralığı",
        "deger": "5-12 yaş; 5-6 yaş oturumlarında ebeveyn salonda kalabilir"
      },
      {
        "etiket": "Katılım kaydı",
        "deger": "Kontenjan sınırlı olduğu için bir gün önceden kayıt"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Çocuk kanadı, atölye salonu"
      },
      {
        "etiket": "Kapasite",
        "deger": "Oturum başına 8-12 çocuk"
      },
      {
        "etiket": "Gözetim",
        "deger": "Bir eğitmen ve bir yardımcı eğitmen"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu; kapalı atölye salonunda"
      }
    ],
    "rotalar": [
      {
        "ad": "Küçük Kâşifler Kolu",
        "sure": "45-55 dakika",
        "mesafe": "Keşif köşesi, 10 çocuk",
        "zorluk": "5-6 yaş",
        "aciklama": "Dokunarak ilerleyen bir oturumdur: renk karışımları, su ve yağ denemeleri, büyüteçle yaprak ve tüy incelemesi. Malzemeler önceden ölçülüp kaplara ayrılmış hâlde gelir, çocuk yalnızca birleştirir ve gözlemler. Ebeveyn dilerse salonda kalabilir; oturum, herkesin kendi kartına bir çizim yapmasıyla biter."
      },
      {
        "ad": "Deney Masası Kolu",
        "sure": "60-75 dakika",
        "mesafe": "Atölye salonu, 12 çocuk",
        "zorluk": "7-9 yaş",
        "aciklama": "Dörder kişilik ekipler kurulur ve her ekip aynı soruyu farklı bir yoldan dener. Mikroskop tezgâhında hazır lamlarla gözlem yapılır, basit ölçümler deftere yazılır, sonuçlar masalar arasında karşılaştırılır. Eğitmen ölçüm ve dağıtım kısımlarında masada durur; oturum, her ekibin bulduğunu iki cümleyle anlatmasıyla kapanır."
      },
      {
        "ad": "Uzay ve Mucitlik Kolu",
        "sure": "80-90 dakika",
        "mesafe": "Gökyüzü köşesi ve maker tezgâhı, 8 çocuk",
        "zorluk": "10-12 yaş",
        "aciklama": "Çocuklar kendi düzeneklerini kurar: karton roket, basit devreli gece lambası, takımyıldız kartı ya da Ay evrelerini gösteren dönen model. Uzay köşesinin haritaları ve gezegen kartları çalışmanın kaynağıdır; akşam gökyüzü gözlemine katılacak çocuklar burada ne arayacağını önceden not eder. Yapılan iş oturumun sonunda panoya asılır ve hafta boyunca sergide kalır."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/interaktif-egitim-deney-masasi.jpg",
        "ad": "Deney masasında ekip çalışması"
      },
      {
        "src": "assets/img/ai/aktivite/interaktif-egitim-mikroskop-kesfi.jpg",
        "ad": "Mikroskop tezgâhında gözlem"
      },
      {
        "src": "assets/img/ai/aktivite/interaktif-egitim-uzay-kosesi.jpg",
        "ad": "Uzay ve gökyüzü keşif köşesi"
      },
      {
        "src": "assets/img/ai/aktivite/interaktif-egitim-sunum-ani.jpg",
        "ad": "Bulunanın anlatıldığı kapanış"
      }
    ],
    "hazirlik": [
      "Boyanabilecek, rahat bir kıyafet; önlük atölyede verilir",
      "Değişiklik ihtimaline karşı yedek bir tişört",
      "Küçük bir su matarası",
      "Varsa çocuğunuzun kendi defteri ya da kalem kutusu",
      "Alerji, ilaç kullanımı veya dikkat edilmesi gereken bir durum varsa kayıt sırasında görevliye bildiriniz"
    ],
    "saglayanlar": [
      "Bir eğitmen ve bir yardımcı eğitmen eşliğinde yaş grubuna göre kurgulanmış oturum programı",
      "Önlük, koruyucu gözlük, deney kapları, mikroskop ve hazır gözlem lamları",
      "Boya, kâğıt, karton, tutkal ve maker tezgâhı malzemeleri; künt uçlu çocuk makasları",
      "Uzay köşesi materyalleri, yıldız haritası, gezegen kartları ve haftalık konu takvimi"
    ],
    "guvenlik": "Atölyede kesici, ısıtıcı ve elektrikli ekipmanlar yalnızca eğitmen tarafından kullanılır; çocuklara verilen malzemeler yaş grubuna göre seçilir, makaslar künt uçludur ve deney maddeleri gıda güvenliği ölçütlerine uygun, tahriş etmeyen malzemelerden oluşur. Her oturumda bir eğitmen ve bir yardımcı eğitmen salonda bulunur, çocuklar salondan tek başına ayrılmaz ve teslim alma yalnızca kayıtta belirtilen refakatçiye yapılır. Atölye öğrenmeyi ve merakı destekleyen bir etkinliktir; herhangi bir eğitsel ya da gelişimsel değerlendirme, tanı veya terapi hizmeti değildir. Çocuğunuzun alerjisi, kronik bir rahatsızlığı ya da hekim uyarısı varsa katılımdan önce hekiminize danışınız ve durumu görevliye bildiriniz. Bu sayfadaki süreler, saatler, kontenjanlar ve yaş aralıkları temsilîdir; resort işleyişine ve haftalık konu programına göre değişebilir.",
    "ilgili": [
      "robotik-kodlama",
      "muzik-odasi",
      "gokyuzu-gozlem"
    ]
  },
  {
    "id": "robotik-kodlama",
    "ad": "Robotik Kodlama",
    "grup": "cocuk",
    "ustyazi": "Robot Kurma ve Kodlama Salonu",
    "kisa": "Robot tasarlayıp kodlayarak problem çözme becerileri kazanın.",
    "hero": "assets/img/ai/robotik-atolye.jpg",
    "video": "assets/video/aktivite-robotik-kodlama.mp4",
    "videoPoster": "assets/img/ai/aktivite/robotik-kodlama-parkur-testi.jpg",
    "ozet": "Çocukların motor ve sensör kitleriyle kendi robotlarını kurduğu, ekranda blok blok kod yazıp bu kodu masadaki parkurda denediği bir atölye.",
    "paragraflar": [
      "Uzun ahşap masaların üzerinde dokunmatik ekranlı bilgisayarlar, yanlarında tekerleri, dişlileri, mesafe ve çizgi sensörleri ayrı ayrı kutulanmış kitler durur. Salon, çocuk kulübünün bitişiğindeki çalışma bölümüdür. Ortadaki zemin, üzerine bant çizgileri ve engelleri yerleştirilebilen düz bir test parkuruna ayrılmıştır. Duvarda, o hafta üzerinde çalışılan görevin adımlarını gösteren büyük bir pano asılıdır. Işık masa üstlerine yönlendirilmiştir; parçalar dağıldığında bile küçük vidalar görünür kalır.",
      "Seans, panodaki görevin birlikte okunmasıyla başlar: robotun ne yapması isteniyor, hangi parça bu işe yarar. Çocuklar ikişerli çalışır; biri gövdeyi kurarken diğeri motor ve sensör bağlantılarını yapar, sonra rolleri değiştirirler. Kod ekranda blok sürükleyerek yazılır: ileri git, engeli gördüğünde dur, çizgiyi takip et. Yazılan kod robota gönderilir ve doğrudan parkurda denenir; robot durması gereken yerde durmazsa masaya dönülür, blok tek tek gözden geçirilir. Eğitmen cevabı söylemez, hangi bloğun ne yaptığını sorarak ilerletir.",
      "Haftanın son seansında masalar kenara çekilir, parkur ortada bırakılır ve küçük bir tur düzenlenir: sırayla robotlar bırakılır, süre tutulur, biten takım kendi kodunu anlatır. Tur sonunda dereceden çok, en çok kez denenip düzeltilmiş kod konuşulur. Sıradan günlerde salonun temposu saate göre değişir: erken seanslarda parçalar ayrılır ve gövde kurulur, öğleden sonra parkur kalabalıklaşır, iki üç robot aynı anda çizgide dener ve salonda kısa bir uğultu oluşur. Her seansın sonunda kutular kapatılır, parçalar bölmelerine geri sayılarak yerleştirilir."
    ],
    "bolum": {
      "videoGozkasi": "Parkur Kenarından",
      "videoBaslik": "Robot Parkurda",
      "videoGiris": "Test parkurunun kenarından çekilmiş sesli görüntü — servo motorların vızıltısı eşliğinde robotun ilk turu.",
      "deneyimGozkasi": "Çalışma Salonunda",
      "deneyimBaslik": "Robot Neden Orada Durmadı?",
      "rotaGozkasi": "Kademeli Kulvarlar",
      "rotaBaslik": "Bloktan Metne Uzanan Kulvarlar",
      "rotaGiris": "Atölye üç yaş kademesinde ilerler. Küçük yaş grubu hazır gövdelerle ve büyük bloklarla başlar, orta grup kendi robotunu kurup sensör okumalarıyla çalışır, büyük grup blok arayüzünden metin tabanlı koda geçer. Kademeler birbirinin üzerine binmez; bir çocuk yaşına uygun kulvarda başlar, hazır olduğunda eğitmenin önerisiyle bir üst kulvara geçer.",
      "rotaNot": "Sayfadaki rakamlar temsilî verilmiştir; kademe süresi, masa kontenjanı ve yaş aralığı dönem programına, katılımcı sayısına ve grubun ilerleyişine göre değişebilir.",
      "galeriGozkasi": "Parkur Kenarından",
      "galeriBaslik": "Ekranda Yazılan, Masada Denenen",
      "ctaGozkasi": "Seans Düzeni",
      "ctaBaslik": "Kademeye Uygun Seansı Belirleyin",
      "ctaMetin": "Yaş kademesine uygun seansı, haftalık gün ve saat düzenini ve turun yapıldığı kapanış seansını çocuk kulübü resepsiyonuyla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Yerleşim",
        "deger": "Çocuk kulübü yanı, çalışma salonu ve zemin test parkuru"
      },
      {
        "etiket": "Yaş aralığı",
        "deger": "7-15 yaş; üç ayrı kademede yürütülür"
      },
      {
        "etiket": "Seans düzeni",
        "deger": "Haftada üç gün, sabah ve öğleden sonra iki kuşak (temsilî)"
      },
      {
        "etiket": "Kayıt",
        "deger": "Kontenjan sınırlı; bir gün önceden çocuk kulübüne bildirim"
      }
    ],
    "kunye": [
      {
        "etiket": "Alan",
        "deger": "Çalışma salonu, 8 çalışma masası"
      },
      {
        "etiket": "Kontenjan",
        "deger": "Seans başına 12 çocuk, 2 eğitmen"
      },
      {
        "etiket": "Süre",
        "deger": "60-90 dakika, kademeye göre"
      },
      {
        "etiket": "Mevsim",
        "deger": "Dört mevsim, iç mekânda"
      }
    ],
    "rotalar": [
      {
        "ad": "İlk Bloklar",
        "sure": "60 dakika",
        "mesafe": "Çalışma salonu, 12 çocuk",
        "zorluk": "7-9 yaş",
        "aciklama": "Gövdesi hazır gelen küçük robotlarla başlanır; çocuklar tekerlek, motor ve tek bir mesafe sensörünü kendileri takar. Kod ekranda büyük renkli bloklarla kurulur: ileri git, dön, dur. Parkurda düz bir hat ve tek bir engel vardır, böylece her deneme kısa sürede sonuç verir. Eğitmen bu kademede masa başında sürekli bulunur."
      },
      {
        "ad": "Sensörlü Robot Kurma",
        "sure": "75 dakika",
        "mesafe": "Çalışma salonu ve test parkuru, 10 çocuk",
        "zorluk": "10-12 yaş",
        "aciklama": "Robot kutudan tamamen boş çıkar; gövde, dişli aktarımı ve kablo düzeni çocuklara aittir. Çizgi izleme ve mesafe sensörünün okuduğu değerler ekranda izlenir, koşullu bloklarla karar verdirilir. Parkura viraj ve dar geçiş eklenir; takımlar denemelerini not defterine yazar. İkili çalışma sürer, roller seans ortasında değişir."
      },
      {
        "ad": "Metin Tabanlı Kodlama",
        "sure": "90 dakika",
        "mesafe": "Çalışma salonu, 8 çocuk",
        "zorluk": "13-15 yaş",
        "aciklama": "Blok arayüzü bırakılır, aynı davranışlar metin tabanlı kodla yazılır; değişken, döngü ve fonksiyon bu kademede girer. Sensör verisi sayıyla okunur ve kod içinde eşik değerleri denenerek ayarlanır. Kapanış seansındaki parkur turunda süre tutulur, her takım kendi çözümünü kısaca anlatır. Eğitmen yönlendirir, çözümü yazmaz."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/robotik-kodlama-kodlama-ekrani.jpg",
        "ad": "Ekranda blokların sıralanması"
      },
      {
        "src": "assets/img/ai/aktivite/robotik-kodlama-robot-montaji.jpg",
        "ad": "Motor ve sensör montajı"
      },
      {
        "src": "assets/img/ai/aktivite/robotik-kodlama-parkur-testi.jpg",
        "ad": "Parkurda ilk deneme turu"
      },
      {
        "src": "assets/img/ai/aktivite/robotik-kodlama-takim-calismasi.jpg",
        "ad": "İkili takım çalışması"
      }
    ],
    "hazirlik": [
      "Kirlenmeyi dert etmeyeceğiniz rahat kıyafet ve kapalı ayakkabı",
      "Not almak için küçük bir defter ve kalem",
      "Uzun saçlar için toka; dişli ve tekerlek çalışmasında toplanması gerekir",
      "Su matarası; seans arasında salonda içilir",
      "Varsa gözlük ve alerji bilgisi notu, kayıt sırasında eğitmene iletilir"
    ],
    "saglayanlar": [
      "Robot kitleri, motorlar, mesafe ve çizgi sensörleri, yedek parça kutuları",
      "Kodlama ekranları ve kademeye göre blok ya da metin tabanlı çalışma ortamı",
      "İki eğitmen eşliği; küçük yaş grubunda masa başında sürekli gözetim",
      "Zemin test parkuru, engel setleri ve kapanış turunda süre tutma düzeni"
    ],
    "guvenlik": "Küçük parçalar, vidalar ve piller yalnızca eğitmen tarafından dağıtılır ve seans sonunda sayılarak kutulara geri konur; hiçbir çocuk salonda gözetimsiz kalmaz. Robotlar düşük gerilimli pil paketleriyle çalışır, şarj ve kablo bağlantıları çocuklara bırakılmaz; dönen dişli ve tekerleklerde parmak sıkışmasını önlemek için uzun saçların toplanması ve bol kollu kıyafetlerden kaçınılması istenir. Ekran karşısında geçen süre kademeye göre sınırlıdır ve her seansın ortasında salon dışında kısa bir ara verilir. Bu atölye bir eğitim ve deneyim etkinliğidir; hiçbir gelişimsel değerlendirme ya da yönlendirme iddiası taşımaz, çocuğunuzla ilgili bir sağlık durumu varsa hekiminize danışınız ve kayıt sırasında görevliye bildiriniz. Sayfadaki süreler, yaş aralıkları ve kontenjanlar temsilî değerlerdir; dönem programına ve grubun ilerleyişine göre farklılaşabilir.",
    "ilgili": [
      "interaktif-egitim",
      "seramik-atolyesi",
      "spor-kulubu"
    ]
  },
  {
    "id": "paintball",
    "ad": "Paintball",
    "grup": "cocuk",
    "ustyazi": "Düşük Etkili Takım Oyunu",
    "kisa": "Güvenlik ekipmanlarıyla takım ruhunu geliştiren heyecanlı oyunlar.",
    "hero": "assets/img/ai/paintball.jpg",
    "video": "assets/video/aktivite-cocuk-paintball.mp4",
    "videoPoster": "assets/img/ai/aktivite/paintball-oyun-ani.jpg",
    "ozet": "Çam ormanının kenarında, doğal engellerle bölünmüş açık bir arena. Oyunlar tam donanımlı ekipmanla, gözetmen hakem eşliğinde ve yaş kademesine göre ayarlanmış düşük basınçlı işaretleyicilerle oynanır.",
    "paragraflar": [
      "Arena, çam sırasının hemen kenarında, ağaçların ve yükselti farkının alanı kendiliğinden böldüğü açık bir düzlükte kuruludur. Toprak zemine ahşap paletler, saman balyaları ve bel hizasında alçak siperler yerleştirilmiş; kenarlar yüksek koruma filesiyle çevrilmiştir. Sahanın iki ucunda birer takım üssü, ortada tek bir bayrak direği bulunur. Girişte üstü kapalı bir ekipman kabini vardır: maskeler, yelekler ve işaretleyiciler burada boy sırasına göre dizilidir. Kabinin yanındaki tahta pano üzerinde saha kuralları büyük harflerle asılıdır.",
      "Her oyun, sahaya çıkmadan önce ekipman kabininin önünde yapılan kısa bir brifingle başlar. Gözetmen hakem kuralları anlatır, çocuklara maske, boyun koruması ve yelek takılır; maskenin oyun alanı içinde hiçbir koşulda çıkarılmayacağı ayrıca tekrar edilir. İşaretleyicilerin çıkış hızı sahaya girmeden önce kronografla ölçülür ve yaş kademesine göre düşük değerde sabitlenir; on üç yaşına kadar olan gruplarda yumuşak kapsüllü, düşük etkili varyant kullanılır. Namlu tıpaları yalnızca hakem düdüğünden sonra çıkarılır, oyun bitiminde ilk iş olarak geri takılır. Takımlar üsse çekilir, hakem sayar ve düdükle oyunu başlatır; her turda saha içinde en az bir hakem oyuncularla birlikte hareket eder.",
      "İkindiden sonra hava yumuşar ve saha en kalabalık hâlini alır; orta ve büyük yaş kademeleri arka arkaya turlara girer. Günün ilk kuşağında zemin serindir ve toz azdır, çam gölgesi sahanın yarısını kaplar; küçük yaş grupları çoğunlukla o saatte oynar. Öğleye doğru gölge çekilir, oyunlar kısalır ve aralar uzar; su molası artık zorunlu bir duraktır. Günün sonunda oyuncular kabinin önünde toplanır, ekipmanı teslim eder ve sayım tahtası silinir. Boya izleri ertesi sabaha kadar toprakta durur; siperlerin arkası günün en çok konuşulan yeri olarak kalır."
    ],
    "bolum": {
      "videoGozkasi": "Siper Arkasından",
      "videoBaslik": "Arenada On Saniye",
      "videoGiris": "Siperin hemen arkasından çekilmiş sesli görüntü — rüzgârın çam dallarındaki sesi ve oyunun uzak uğultusu.",
      "deneyimGozkasi": "Arenada",
      "deneyimBaslik": "Hakem Düdüğüyle Başlayan On Dakika",
      "rotaGozkasi": "Saha Düzenleri",
      "rotaBaslik": "Donanım ve Saha Kademeye Göre Değişir",
      "rotaGiris": "Arena tek bir alan olsa da oyun düzeni yaş kademesine göre değişir: kullanılan işaretleyici tipi, sahanın açılan bölümü, tur süresi ve takım büyüklüğü her kademede ayrı ayarlanır. Küçük yaş grubunda düşük etkili donanım ve dar bir saha bölümü kullanılır; kademe yükseldikçe alan genişler ve tur sayısı artar. Kademeler ayrı saatlerde oynatılır, farklı yaş grupları aynı turda karşı karşıya getirilmez.",
      "rotaNot": "Tur süresi, oyuncu sayısı ve yaş aralığı temsilî değerlerdir; grup büyüklüğüne, hava durumuna ve o gün sahada görevli gözetmen sayısına göre değişebilir.",
      "galeriGozkasi": "Sahadan",
      "galeriBaslik": "Ekipman Kabininden Siperlerin Arasına",
      "ctaGozkasi": "Arena Saatleri",
      "ctaBaslik": "Grubunuz İçin Bir Saat Bloğu Açtırın",
      "ctaMetin": "Çocuğunuzun yaş kademesine uygun oyun saatini, grup kontenjanını ve düşük etkili donanım talebinizi resepsiyonla birlikte planlayabilirsiniz. Doğum günü ve grup organizasyonları için ayrı saat blokları açılabilir."
    },
    "bakista": [
      {
        "etiket": "Konum",
        "deger": "Çam ormanı kenarı, doğal engelli açık arena"
      },
      {
        "etiket": "Açılış saatleri",
        "deger": "10.00-18.00, yaş kademeleri ayrı saat bloklarında (temsilî)"
      },
      {
        "etiket": "Kimler katılabilir",
        "deger": "8 yaş ve üzeri; 8-13 yaş yalnızca düşük etkili donanımla"
      },
      {
        "etiket": "Kayıt",
        "deger": "Önceden kayıt gerekir; veli onay formu girişte imzalanır"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Açık arena ve üstü kapalı ekipman kabini"
      },
      {
        "etiket": "Kapasite",
        "deger": "Turda 16 oyuncu, sahada en az iki gözetmen hakem"
      },
      {
        "etiket": "Açılış",
        "deger": "10.00-18.00, hava koşullarına bağlı"
      },
      {
        "etiket": "Mevsim",
        "deger": "İlkbahardan sonbahara; yağışta kapalı"
      }
    ],
    "rotalar": [
      {
        "ad": "Düşük Etkili Tanışma Oyunu",
        "sure": "45-55 dakika",
        "mesafe": "Arenanın küçük bölümü, 10 çocuk",
        "zorluk": "8-10 yaş",
        "aciklama": "Sahanın file ile ayrılmış dar bölümünde, yumuşak kapsüllü düşük etkili donanımla oynanır. Turlar kısadır ve her turun başında hakem kuralları yeniden hatırlatır. Amaç bayrak kapmak değil, hedefe isabet ve sipere doğru geçiş alışkanlığı kazanmaktır; oyun süresince iki hakem çocuklarla birlikte sahada durur."
      },
      {
        "ad": "Orta Kademe Bayrak Oyunu",
        "sure": "60-75 dakika",
        "mesafe": "Arenanın orta bölümü, 12 çocuk",
        "zorluk": "11-13 yaş",
        "aciklama": "İki takım kendi üssünden başlar ve ortadaki tek bayrağı almaya çalışır. Bu kademede de yumuşak kapsüllü düşük etkili donanım kullanılır; işaretleyici çıkış hızı kronografla ölçülüp düşük değerde sabitlenir ve tur arası su molası zorunludur. Takım içi görev dağılımı brifingte konuşulur; isabet alan oyuncu elini kaldırıp sahadan çıkar ve bir sonraki turda geri döner."
      },
      {
        "ad": "Büyük Yaş Turnuva Formatı",
        "sure": "90 dakika",
        "mesafe": "Tam arena, 16 oyuncu",
        "zorluk": "14-16 yaş",
        "aciklama": "Sahanın tamamı açılır ve turlar puanlı bir sıralamayla arka arkaya oynanır. Her tur arasında takımlar üs değiştirir, hakem puanları sayım tahtasına yazar. Donanım yine düşük basınçlıdır; kural ihlalinde oyuncu bir tur dışarıda bekler. Format grup organizasyonlarına ve doğum günlerine uyarlanabilir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/paintball-ekipman-donanimi.jpg",
        "ad": "Maske, boyun koruması ve yelek dağıtımı"
      },
      {
        "src": "assets/img/ai/aktivite/paintball-arena-siperleri.jpg",
        "ad": "Doğal engelli arena ve ahşap siperler"
      },
      {
        "src": "assets/img/ai/aktivite/paintball-takim-brifingi.jpg",
        "ad": "Oyun öncesi takım brifingi"
      },
      {
        "src": "assets/img/ai/aktivite/paintball-oyun-ani.jpg",
        "ad": "Siper arkasında bir oyun anı"
      }
    ],
    "hazirlik": [
      "Kirlenebilecek uzun kollu üst ve uzun pantolon; boya izi kalabilir",
      "Kapalı burunlu, tabanı tutan spor ayakkabı",
      "Yedek kıyafet ve ıslak mendil için küçük bir çanta",
      "Gözlük kullanan çocuklar için maske altına giren ince çerçeve",
      "Yanınıza su alınız; veli onay formu için kimlik bilgisi hazır bulunsun"
    ],
    "saglayanlar": [
      "Tam yüz maskesi, boyun koruması ve gövde yeleği; her kullanımdan sonra temizlenir",
      "Yaş kademesine göre ayarlanmış, kronografla ölçülen düşük basınçlı işaretleyici ve namlu tıpası",
      "Saha içinde oyuncularla birlikte hareket eden gözetmen hakem ve brifing eğitmeni",
      "Su istasyonu, gölgeli bekleme alanı ve ilk yardım çantası bulunan görevli noktası"
    ],
    "guvenlik": "Maske, oyun alanı içinde hiçbir koşulda çıkarılmaz; namlu tıpası yalnızca hakem düdüğünden sonra sökülür ve tur biter bitmez geri takılır. İşaretleyicilerin çıkış hızı her turdan önce kronografla ölçülerek yaş kademesine uygun düşük değerde sabitlenir, 8-13 yaş gruplarında yumuşak kapsüllü düşük etkili donanım kullanılır ve yakın mesafeden atış yapılmaz. Katılım 8 yaş ve üzeri içindir; 18 yaş altı için veli onay formu girişte imzalanır. Çocuğunuzun astım, göz, işitme veya kas-iskelet sistemiyle ilgili bir durumu varsa ya da hekiminin yoğun fiziksel aktivite konusunda bir uyarısı varsa katılımdan önce hekiminize danışınız ve durumu brifing sırasında gözetmene bildiriniz. Buradaki tur süreleri, kontenjanlar, yaş aralıkları ve saatler temsilîdir; hava koşulları, grup büyüklüğü ve o gün sahadaki gözetmen sayısı bunları değiştirebilir.",
    "ilgili": [
      "aqua-park",
      "glamping",
      "macera-parkuru"
    ]
  },
  {
    "id": "aqua-park",
    "ad": "Aqua Park",
    "grup": "cocuk",
    "ustyazi": "Çocuklara Özel Su Oyun Alanı",
    "kisa": "Cankurtaran gözetiminde işleyen, kaydıraklı ve sığ havuzlu ayrı bir çocuk su alanı.",
    "hero": "assets/img/ai/morf-aquapark.jpg",
    "video": "assets/video/aktivite-aqua-park.mp4",
    "videoPoster": "assets/img/ai/aktivite/aqua-park-kaydirak-hatti.jpg",
    "ozet": "Kaydırak hattı, sığ çocuk havuzu ve su oyun kalesinden oluşan, yalnızca çocuklar için kurulmuş ayrı bir su alanı. Termal havuzlardan bağımsız bir bölgede, cankurtaran gözetiminde işletilir.",
    "paragraflar": [
      "Alan üç parçadan oluşur: birbirine paralel inen kaydırak hattı, kenarı yumuşak eğimle inen sığ çocuk havuzu ve ortada duran çok katlı su oyun kalesi. Bu üçlü, sosyal alanın deniz tarafındaki çim düzlükte, termal havuz bölgesinden ayrı bir kotta kurulmuştur. Zemin boydan boya kaymayı azaltan dokulu kaplamayla döşenmiştir; havuz kenarları keskin köşe bırakmayacak biçimde yuvarlatılmıştır. Suyu termal kaynaktan gelmez; kendi devresinde ısıtılır ve gün boyu filtrelenerek dolaştırılır. Çevresinde gölgelikli oturma grupları ve ebeveynlerin alanın tamamını görebildiği bir bekleme terası bulunur.",
      "Girişte her çocuğa renkli bir bileklik takılır; bileklik rengi çocuğun hangi bölümü kullanabileceğini gösterir. Kaydırak hattının başında bir boy çıtası vardır ve çıtanın altında kalan çocuklar bu hatta yönlendirilmez, sığ havuza ya da kaleye geçer. Sığ alan, derin bölümden hem şamandıra hattı hem de fiziksel bir bordürle ayrılmıştır; iki alan arasında geçiş yalnızca görevlinin bulunduğu kapıdan yapılır. Kaydırak tepesinde bir görevli sırayı yönetir, aşağıda ikinci bir görevli çıkış havuzunu boşaltır; kule üstündeki cankurtaran alanın tamamını görür. Yüzme bilmeyen çocuklar için can yeleği ve kolluk girişte verilir, kullanımı sığ alanda zorunludur.",
      "Öğleye doğru kaydırak hattında sıra uzar, kalenin üstündeki devrilen kova düzenli aralıklarla boşalır ve alanın sesi yükselir. Öğleden sonra iki kısa ara verilir: bu aralarda havuz boşaltılır, su ölçümü yapılır ve zemin yıkanır. Akşamüstü güneş çam ormanının arkasına indiğinde ışık kaydırakların üzerinden yatık gelir, kalabalık seyrelir ve alan yeniden küçük yaş grubuna kalır. Günün en sessiz aralığı ise açılıştan hemen sonrasıdır; sığ havuzu o kuşakta çoğunlukla en küçükler kullanır."
    ],
    "bolum": {
      "videoGozkasi": "Havuz Kenarından",
      "videoBaslik": "Kaydırakların Sesi",
      "videoGiris": "Sığ havuzun kenarından çekilmiş sesli görüntü — akan suyun ve neşeli su seslerinin arasında bir öğle vakti.",
      "deneyimGozkasi": "Aqua Parkta",
      "deneyimBaslik": "Kuleden Bakınca Alanın Tamamı",
      "rotaGozkasi": "Boy ve Yaş Ayrımı",
      "rotaBaslik": "Bileklik Rengi Hangi Bölümü Açar?",
      "rotaGiris": "Alan üç yaş kademesine ayrılır ve girişte takılan bilekliğin rengi çocuğun hangi bölümde başlayacağını gösterir: en küçükler sığ havuzda, orta yaş grubu su oyun kalesinde, büyükler kaydırak hattında. Bileklik verilirken yaşın yanında boy çıtası ölçüsüne de bakılır; iki ölçü birden tutmuyorsa çocuk bir alt bölüme yönlendirilir. Aynı ailedeki farklı yaştaki çocuklar bitişik bölümlerde oynayabilir, böylece ebeveyn tek bir noktadan hepsini görebilir.",
      "rotaNot": "Bu karttaki süreler, kontenjanlar ve yaş aralıkları temsilîdir; mevsime, hava koşullarına ve günün doluluğuna göre değişebilir. Bölüm ayrımında son karar girişteki görevliye aittir.",
      "galeriGozkasi": "Alandan",
      "galeriBaslik": "Kovanın Devrildiği Anlar",
      "ctaGozkasi": "Kuşak Düzeni",
      "ctaBaslik": "Havuz Gününü Kuşaklara Göre Planlayın",
      "ctaMetin": "Yaş kademelerine ayrılmış kuşakları, bakım aralarının saatlerini ve alanın en sakin olduğu zaman dilimlerini resepsiyonla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Konum",
        "deger": "Sosyal alanın deniz tarafı, termal havuz bölgesinden ayrı kot"
      },
      {
        "etiket": "Açılış saatleri",
        "deger": "10.00-18.00, iki bakım arasıyla (temsilî)"
      },
      {
        "etiket": "Kimler kullanabilir",
        "deger": "3-13 yaş; kaydırak hattı için boy çıtası koşulu"
      },
      {
        "etiket": "Gözetim",
        "deger": "Kule cankurtaranı ve bölüm görevlileri, açık olduğu her saat"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Çim düzlük, açık alan"
      },
      {
        "etiket": "Kapasite",
        "deger": "Aynı anda 60 çocuk"
      },
      {
        "etiket": "Su",
        "deger": "Termal değil; ısıtmalı ve sürekli filtreli devre"
      },
      {
        "etiket": "Mevsim",
        "deger": "Haziran-Eylül arası açık"
      }
    ],
    "rotalar": [
      {
        "ad": "Sığ Havuz Kuşağı",
        "sure": "45-60 dakika",
        "mesafe": "Sığ çocuk havuzu, aynı anda 20 çocuk",
        "zorluk": "3-5 yaş",
        "aciklama": "En küçükler için ayrılmış, dibi kademeli yükselen sığ havuzda geçer. Su derinliği bu bölümde diz hizasını aşmaz; alan derin bölümden bordür ve şamandıra hattıyla ayrılmıştır. Ebeveyn refakati zorunludur ve kolluk ile can yeleği girişte verilir. Bölümde sürekli bir görevli bulunur, çocuk sayısı kontenjanı aşarsa giriş sıraya alınır."
      },
      {
        "ad": "Su Oyun Kalesi Turu",
        "sure": "60-75 dakika",
        "mesafe": "Su oyun kalesi ve çevresi, aynı anda 24 çocuk",
        "zorluk": "6-9 yaş",
        "aciklama": "Çok katlı kalede fıskiyeler, su tabancaları, kısa tüneller ve üstteki devrilen kova bulunur. Basamaklar ve platformlar kaymaz kaplamalıdır, korkuluklar çocuk boyuna göre alçaltılmıştır. Grup, bir animasyon görevlisi eşliğinde oyun turlarına katılır; kalenin altındaki su birikintisi ayak bileği derinliğindedir. Yüzme bilmeyen çocuklar bu bölümü de kullanabilir."
      },
      {
        "ad": "Kaydırak Hattı Programı",
        "sure": "75-90 dakika",
        "mesafe": "Kaydırak hattı, aynı anda 16 çocuk",
        "zorluk": "10-13 yaş",
        "aciklama": "Paralel inen kaydıraklarda, tepede sıra yöneten bir görevli ve altta çıkış havuzunu boşaltan ikinci bir görevli eşliğinde ilerler. Hatta girmek için boy çıtasını geçmek ve yüzme biliyor olmak gerekir. İniş tek tek yapılır; bir sonraki çocuk, öndeki çıkış havuzundan ayrılmadan bırakılmaz. Çıkış havuzunun derinliği ayakta durulabilecek ölçüdedir ve kenarında tutunma barı vardır."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/aqua-park-kaydirak-hatti.jpg",
        "ad": "Paralel inen kaydırak hattı"
      },
      {
        "src": "assets/img/ai/aktivite/aqua-park-sig-cocuk-havuzu.jpg",
        "ad": "Sığ çocuk havuzu ve kademeli kenar"
      },
      {
        "src": "assets/img/ai/aktivite/aqua-park-su-oyun-kalesi.jpg",
        "ad": "Su oyun kalesi ve devrilen kova"
      },
      {
        "src": "assets/img/ai/aktivite/aqua-park-cankurtaran-gozetimi.jpg",
        "ad": "Kuleden cankurtaran gözetimi"
      }
    ],
    "hazirlik": [
      "Çocuğunuz için mayo ya da deniz şortu ve yedek bir takım",
      "Sudan çıkışta kurulanmak için havlu ve rahat bir değişim kıyafeti",
      "Şapka ve çocuklar için uygun, suya dayanıklı güneş koruyucu",
      "Havuz kenarında giyilecek kaymaz tabanlı terlik",
      "Varsa çocuğunuzun kendi kolluk ya da can yeleği; alanda da verilir"
    ],
    "saglayanlar": [
      "Kule cankurtaranı ile kaydırak, kale ve sığ havuz bölüm görevlileri",
      "Yaşa göre renkli giriş bilekliği, boy çıtası ölçümü ve bölüm yönlendirmesi",
      "Kolluk, can yeleği ve simit; kullanım öncesi kontrol edilerek verilir",
      "Gölgelikli ebeveyn terası, su sebili ve alan içinde ilk yardım noktası"
    ],
    "guvenlik": "Su alanında koşulmaz ve kaymaz tabanlı terlik kullanılması istenir; zemin dokulu kaplamalı olsa da ıslak yüzey her zaman kayma riski taşır. Sığ alan derin bölümden ayrılmış olsa da burası hiçbir koşulda refakatsiz bırakılacak bir yer değildir: cankurtaran gözetimi ebeveyn gözetiminin yerine geçmez, çocuğunuzu görebileceğiniz bir noktada kalınız. Kaydırak hattında boy çıtası ve yüzme bilme koşulu görevli tarafından uygulanır; kulak tüpü, işitme cihazı, açık yara, ateş ya da bulaşıcı bir durum söz konusuysa suya girmeden önce hekiminize danışınız ve girişte görevliye bildiriniz. Bu alan termal havuzlardan bağımsızdır ve suyu termal kaynaktan gelmez. Sayfada verilen saat, süre, kontenjan ve yaş bilgileri kesin taahhüt değil, temsilî değerlerdir; mevsime ve hava koşullarına göre değişir.",
    "ilgili": [
      "paintball",
      "cocuk-wellness",
      "acik-havuz"
    ]
  },
  {
    "id": "cocuk-wellness",
    "ad": "Çocuk Wellness Programları",
    "grup": "cocuk",
    "ustyazi": "Yumuşak Zeminde Sakin Mola",
    "kisa": "Yoga, pilates ve nefes çalışmalarıyla beden-zihin dengesini destekleyen çocuk seansları.",
    "hero": "assets/img/ai/cocuk-wellness.jpg",
    "video": "assets/video/aktivite-cocuk-wellness.mp4",
    "videoPoster": "assets/img/ai/aktivite/cocuk-wellness-denge-durusu.jpg",
    "ozet": "Çocuk ölçüsünde matlar, köpük bloklar ve halka biçiminde dizilen minderlerle kurulmuş bir stüdyo. Yoga, pilates ve nefes çalışmaları burada oyunlaştırılmış bir düzende, eğitmen eşliğinde yapılır.",
    "paragraflar": [
      "Zemin yumuşak mantar kaplamadır ve salona ayakkabıyla girilmez; duvar dibindeki alçak dolaplarda çocuk ölçüsünde matlar, köpük bloklar, denge yastıkları ve hafif tüy topları durur. Stüdyo, wellness kanadının üst katında, çam ormanına bakan cam cepheli bir salondur. Salonun bir yüzü bilerek aynasız bırakılmıştır; çocuklar birbirini değil, kendi hareketini takip eder. Ortada halka biçiminde dizilebilen on dört minder vardır ve her seans bu halkanın kurulmasıyla başlar. Ses yalıtımı yapılmış kapı kapandığında salonda duyulan tek şey, camın ardındaki çam dallarının sesidir.",
      "Seanslar bir eğitmen ve bir yardımcı eşliğinde, yaş kademesine ayrılmış küçük gruplarla ilerler. Isınma bölümünde hareketler hayvan adlarıyla anılır: kedi esnemesi, kaplumbağa toplanması, leylek duruşu. Ardından denge yastıkları ve köpük bloklarla kurulan kısa oyun turları gelir; çocuklar sırayla dener, kimse yarıştırılmaz. Kapanışta ışık kısılır, halka yeniden kurulur ve birkaç dakikalık sakin bir nefes molası verilir. Katılım gönüllüdür; isteyen çocuk halkanın kenarında oturup izleyebilir, dilediğinde aradan girebilir.",
      "Akşamüstü tempo kendiliğinden düşer; son seans genelde uzun bir nefes molasıyla biter ve çocuklar ailelerine sakinleşmiş bir hâlde teslim edilir. Öğleden sonraki kuşakta salon kalabalıklaşır, hareket turları uzar, minderler bir iki kez toplanıp yeniden dizilir. Günün ilk seansı ise en sessiz aralıktır: ışık camdan yatık girer, matlar henüz düzgün dizilidir, gruplar küçüktür. Salon kapandığında matlar üst üste konur, halka bozulur ve stüdyo ertesi sabaha hazır bırakılır."
    ],
    "bolum": {
      "videoGozkasi": "Stüdyodan",
      "videoBaslik": "Denge Anı",
      "videoGiris": "Stüdyonun sessizliğinde çekilmiş görüntü — tek ayak üzerinde sallanan minik dengeler ve kısık bir kıkırdama.",
      "deneyimGozkasi": "Stüdyoda",
      "deneyimBaslik": "Minderler Dizilir, Tempo Düşer",
      "rotaGozkasi": "Halka Düzeni",
      "rotaBaslik": "Halka Büyüdükçe Seans Uzar",
      "rotaGiris": "Program üç yaş kademesine ayrılır; her kademenin süresi, kontenjanı ve hareket dağarcığı farklıdır. Küçüklerde oyun ağırlıklı kısa turlar, orta yaşlarda denge ve esneme çalışmaları, büyüklerde daha uzun bir akış ve nefes molası öne çıkar. Üçü de aynı salonda ve aynı eğitmen düzeninde geçer; fark, sürede ve hareketlerin ayrıntısındadır.",
      "rotaNot": "Kademelere ait süre, kontenjan ve yaş bilgileri temsilîdir; grup mevcuduna, sezona ve eğitmen programına göre değişebilir.",
      "galeriGozkasi": "Salondan",
      "galeriBaslik": "Halkanın İçinden",
      "ctaGozkasi": "Seans Planı",
      "ctaBaslik": "Tanışma Seansıyla Başlayın",
      "ctaMetin": "Yaş kademesine uygun günü ve saati, grup mevcudunu ve çocuğunuz ilk kez katılıyorsa tanışma seansını resepsiyonla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Kanat ve kat",
        "deger": "Wellness kanadı üst katı, ormana bakan cam cepheli stüdyo"
      },
      {
        "etiket": "Seans saatleri",
        "deger": "10.00, 14.00 ve 17.00 kuşakları (temsilî)"
      },
      {
        "etiket": "Kimler katılabilir",
        "deger": "5-13 yaş; 5-6 yaşta ebeveyn salonda kalabilir"
      },
      {
        "etiket": "Kayıt",
        "deger": "Aynı gün resepsiyondan; ilk katılımda kısa bilgi formu"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Wellness kanadı, üst kat çocuk stüdyosu"
      },
      {
        "etiket": "Kapasite",
        "deger": "Seans başına en çok 14 çocuk"
      },
      {
        "etiket": "Gözetim",
        "deger": "Bir eğitmen ve bir yardımcı, seans boyunca salonda"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu, kapalı salonda"
      }
    ],
    "rotalar": [
      {
        "ad": "Küçük Halka: Hareket Oyunları",
        "sure": "30-40 dakika",
        "mesafe": "Çocuk stüdyosu, 10 çocuk",
        "zorluk": "5-6 yaş",
        "aciklama": "Hayvan adlarıyla anılan basit duruşlar, köpük bloklarla kurulan kısa turlar ve yer değiştirme oyunları vardır. Sıra beklemek ve minderine dönmek oyunun parçasıdır. Bu kademede ebeveyn salonun arka tarafında oturarak kalabilir."
      },
      {
        "ad": "Orta Halka: Denge ve Esneme",
        "sure": "45-55 dakika",
        "mesafe": "Çocuk stüdyosu, 12 çocuk",
        "zorluk": "7-9 yaş",
        "aciklama": "Denge yastıkları ve mat üzerinde ikişerli esneme çalışmalarına yer verilir; hareketler çocuk ölçüsüne uyarlanmış pilates ve yoga duruşlarından seçilir. Eğitmen her turda tek tek dolaşır ve hareketi elle değil, tarif ederek göstermeyi tercih eder. Seans, halkada üç dakikalık bir nefes molasıyla kapanır."
      },
      {
        "ad": "Büyük Halka: Akış ve Nefes Molası",
        "sure": "60-70 dakika",
        "mesafe": "Stüdyo ve yan teras, 14 çocuk",
        "zorluk": "10-13 yaş",
        "aciklama": "Duruşlar kesintisiz bir akış hâlinde birleştirilir, aralarda kısa dinlenmeler verilir. Hava uygunsa son bölüm yan terasa taşınır ve nefes molası açık havada yapılır. Bu kademede çocuklar kendi matını serip toplamaktan da sorumludur."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/cocuk-wellness-nefes-molasi.jpg",
        "ad": "Halkada nefes molası"
      },
      {
        "src": "assets/img/ai/aktivite/cocuk-wellness-denge-durusu.jpg",
        "ad": "Denge yastığında leylek duruşu"
      },
      {
        "src": "assets/img/ai/aktivite/cocuk-wellness-esneme-oyunu.jpg",
        "ad": "İkişerli esneme oyunu"
      },
      {
        "src": "assets/img/ai/aktivite/cocuk-wellness-kapanis-halkasi.jpg",
        "ad": "Işık kısıldığında kapanış halkası"
      }
    ],
    "hazirlik": [
      "Hareketi kısıtlamayan rahat bir eşofman ya da tayt",
      "Kaymaz tabanlı çorap; salonda ayakkabıyla yürünmez",
      "Kapağı sızdırmayan, üzerine adı yazılmış küçük bir su şişesi",
      "Saçı toplamak için toka ya da lastik",
      "Seans sonrası giymek üzere ince bir hırka veya sweatshirt"
    ],
    "saglayanlar": [
      "Çocuk ölçüsünde mat, köpük blok, denge yastığı ve hafif toplar",
      "Yaş kademesine göre ayrılmış küçük gruplar ve seans boyunca salonda kalan eğitmen ile yardımcı",
      "Ayakkabılık, isimlik ve kişisel eşya için numaralı küçük dolap",
      "Seans sonunda su ve salon dışındaki bekleme köşesinde oturma alanı"
    ],
    "guvenlik": "Programlar bir tedavi, terapi ya da düzeltme uygulaması değildir; beden-zihin dengesine eşlik eden, oyunlaştırılmış bir hareket ve dinlenme molasıdır. Çocuğunuzun bilinen bir sağlık durumu, yakın zamanda geçirdiği bir yaralanma ya da hareket kısıtı varsa katılımdan önce hekiminize danışınız ve kayıt sırasında eğitmene bildiriniz. Salonda ayakkabıyla yürünmez, hareketler yalnızca eğitmenin tarif ettiği biçimde ve mat üzerinde yapılır; çocuklar seans boyunca eğitmen ve yardımcı gözetiminde kalır, salona giriş çıkış tek kapıdan yapılır. Süreler, kontenjanlar, seans saatleri ve yaş aralıkları burada temsilî olarak verilmiştir; grup mevcudu ve eğitmen programı bunları değiştirebilir.",
    "ilgili": [
      "muzik-odasi",
      "hobi-bahcesi",
      "yoga"
    ]
  },
  {
    "id": "hobi-bahcesi",
    "ad": "Hobi Bahçesi",
    "grup": "cocuk",
    "ustyazi": "Yükseltilmiş Yataklarda Ekim Bahçesi",
    "kisa": "Toprağa dokunarak ekim, bakım ve hasadı deneyimleyin.",
    "hero": "assets/img/ai/hobi-bahcesi.jpg",
    "video": "assets/video/aktivite-hobi-bahcesi.mp4",
    "videoPoster": "assets/img/ai/aktivite/hobi-bahcesi-sulama-zamani.jpg",
    "ozet": "Çam ormanının açıldığı güneşli bir yamaçta, ahşap çerçeveli yükseltilmiş yataklardan kurulu bir ekim bahçesi. Çocuklar kendi boylarına göre yapılmış aletlerle tohum eker, fide bakar ve mevsimi gelince hasat sepetini doldurur.",
    "paragraflar": [
      "Hobi bahçesi, sosyal alanların doğu ucunda, ormanın seyreldiği güneşli bir düzlükte kuruludur. Zemine değil, ahşap çerçeveli yükseltilmiş yataklara ekim yapılır; yatakların üst kenarı çocuk beline gelecek yükseklikte tutulmuştur, böylece eğilmeden çalışılır. Yatakların arası geniş bırakılmış, yürüyüş yolları çakıl yerine ince talaşla kaplanmıştır. Bir köşede alet dolabı, yanında omuz yüksekliğinde bir yıkama tezgâhı ve damlama hattının vanası bulunur. Alet dolabındaki kürek, tırmık ve sulama kabı yetişkin ekipmanının küçültülmüş hâli değil, çocuk eli için ayrıca yapılmış saplı takımlardır.",
      "Her seans alet dolabının önünde toplanarak başlar: eğitmen o gün hangi yatağın sırası olduğunu söyler, eldivenler dağıtılır ve aletler tek tek elden ele verilir. Ekim haftalarında tohum derinliği ve sıra aralığı ip ve çubukla işaretlenir; bakım haftalarında yabani otlar ayıklanır, fideler bağlanır ve damlama hattı kontrol edilir. Her çocuğun kendi adının yazılı olduğu bir etiket vardır ve o etiket sezon boyunca aynı sırada durur, böylece kimin neyi ektiği takip edilebilir. Hasat zamanı toplanan ürün yıkama tezgâhında durulanır, hasır sepete yerleştirilir ve tartılır. Seans, aletlerin sayılarak dolaba geri konmasıyla biter.",
      "Bahçenin en hareketli saati sabahın erken saatidir: sulama o kuşakta yapılır, toprak henüz serindir ve yapraklarda gecenin nemi durur. Öğleye doğru güneş dikleşince çalışma yatakların gölgeli tarafına kayar, çocuklar tenteli tezgâhın altında tohum ayıklar ya da etiket yazar. Geç ikindi hasat için ayrılmıştır; sepetler o saatte dolar ve mutfağa doğru yola çıkar. Toplanan ürünün bir bölümü pişirme dersleri programına gider, kalanı çocukların kendi paylarına ayrılır. Sezon ilerledikçe aynı yatağın hâli değişir: ilkbaharda düz toprak, yazın omuz hizasında yeşil bir duvar, sonbaharda boşalmış ve dinlenmeye bırakılmış bir çerçeve."
    ],
    "bolum": {
      "videoGozkasi": "Yatakların Arasından",
      "videoBaslik": "Sulama Saati",
      "videoGiris": "Ekim yataklarının arasından çekilmiş sesli görüntü — süzülen suyun ve sabah kuşlarının sesi.",
      "deneyimGozkasi": "Bahçede",
      "deneyimBaslik": "Tohumdan Sepete Giden Yol",
      "rotaGozkasi": "Sorumluluk Kademeleri",
      "rotaBaslik": "Tanışma Saati, Bakım Saati, Hasat Saati",
      "rotaGiris": "Bahçe saatleri üç yaş kademesine ayrılmıştır ve kademeler birbirinin üzerine binmez. Küçük yaş grubu alçak yataklarda kısa ve gözetimli bir tanışma saati geçirir; orta yaş grubu ekim ve bakım işlerini baştan sona üstlenir; büyük yaş grubu ise hasat, ölçüm ve mutfağa teslim aşamasını yürütür. Üç kademe de aynı bahçede, aynı aletlerle çalışır; değişen şey sorumluluğun kapsamı ve seansın uzunluğudur.",
      "rotaNot": "Buradaki seans uzunlukları, kontenjanlar ve yaş aralıkları temsilîdir; ekim takvimine, mevsime ve grup doluluğuna göre değişebilir.",
      "galeriGozkasi": "Bahçeden",
      "galeriBaslik": "Sepet Dolmadan Önce",
      "ctaGozkasi": "Bahçe Programı",
      "ctaBaslik": "Bahçede Bir Sıra Sahiplenin",
      "ctaMetin": "Yaş kademesine uygun bahçe saatini, mevsimin ekim ya da hasat haftasına denk gelip gelmediğini ve hasadın pişirme dersleriyle aynı güne alınıp alınamayacağını resepsiyondaki sezon takviminden öğrenebilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Konum",
        "deger": "Sosyal alanların doğu ucu, ormanın açıldığı güneşli düzlük"
      },
      {
        "etiket": "Bahçe saatleri",
        "deger": "Sulama 08.00-10.00, atölye 11.00-13.00, hasat 16.00-18.00 (temsilî)"
      },
      {
        "etiket": "Yaş aralığı",
        "deger": "4-13 yaş; 4-6 yaş ebeveyn ya da eğitmen refakatiyle"
      },
      {
        "etiket": "Kayıt",
        "deger": "Seans başına ön kayıt; sezonluk yatak sahiplenme ayrı listeden"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Doğu bahçe düzlüğü, açık alan"
      },
      {
        "etiket": "Kapasite",
        "deger": "Aynı anda 12 çocuk, 2 eğitmen"
      },
      {
        "etiket": "Kurulum",
        "deger": "18 yükseltilmiş yatak, damlama sulama hattı, çocuk boyu alet takımı"
      },
      {
        "etiket": "Mevsim",
        "deger": "Mart-Kasım; kış aylarında sera köşesinde sınırlı program"
      }
    ],
    "rotalar": [
      {
        "ad": "Filizler Saati",
        "sure": "40-50 dakika",
        "mesafe": "Alçak yataklar bölümü, 10 çocuk",
        "zorluk": "4-6 yaş, refakatle",
        "aciklama": "Toprakla ilk tanışma saatidir. Çocuklar eldivenle toprağı elleyip kokusunu tanır, iri taneli tohumları parmak deliğine bırakır ve küçük sulama kabıyla kendi sıralarını sular. Kesici alet verilmez; kullanılan tek takım küçük plastik kürek ve sulama kabıdır. Seans, herkesin kendi adını yazdığı etiketi yatağa saplamasıyla biter."
      },
      {
        "ad": "Bahçe Bakıcıları",
        "sure": "60-75 dakika",
        "mesafe": "Orta yataklar ve fidelik, 12 çocuk",
        "zorluk": "7-9 yaş",
        "aciklama": "Ekim ve bakım işlerinin tamamı bu kademede yürütülür. İple sıra çekilir, tohum derinliği çubukla ölçülür, fideler saksıdan yatağa aktarılır ve gövdeler bez şeritle sırığa bağlanır. Yabani ot ayıklama ve damlama hattı kontrolü her seansın sabit iki işidir. Küt uçlu el tırmığı ve mala eğitmen gözetiminde dağıtılır, seans sonunda sayılarak toplanır."
      },
      {
        "ad": "Hasat Ekibi",
        "sure": "90 dakika",
        "mesafe": "Hasat parselleri ve yıkama tezgâhı, 8 çocuk",
        "zorluk": "10-13 yaş",
        "aciklama": "Olgunluk kontrolünden mutfağa teslime kadar olan bölüm bu gruba aittir. Hangi ürünün toplanmaya hazır olduğuna renk ve sertlikten karar verilir, hasat küt uçlu makasla yapılır ve makas yalnız bu kademede, eğitmen elinden alınıp eğitmen eline geri verilir. Toplanan ürün tezgâhta durulanır, tartılır ve sezon defterine kaydedilir. Sepetin mutfağa götürülmesi de ekibin işidir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/hobi-bahcesi-ekim-yataklari.jpg",
        "ad": "Yükseltilmiş ekim yatakları"
      },
      {
        "src": "assets/img/ai/aktivite/hobi-bahcesi-fide-dikimi.jpg",
        "ad": "Fidelerin yatağa aktarılması"
      },
      {
        "src": "assets/img/ai/aktivite/hobi-bahcesi-sulama-zamani.jpg",
        "ad": "Sabah sulama kuşağı"
      },
      {
        "src": "assets/img/ai/aktivite/hobi-bahcesi-hasat-sepeti.jpg",
        "ad": "Tezgâhta dolan hasat sepeti"
      }
    ],
    "hazirlik": [
      "Kirlenebilecek rahat kıyafet ve kapalı burunlu ayakkabı",
      "Geniş siperlikli şapka ve çocuk cildine uygun koruyucu krem",
      "Yedek çorap ile ince bir mont ya da hırka; sabah kuşağında yataklar nemli olur",
      "Sıcakta uzun süre kalınacağı için yeterli miktarda su; kabın üzerine adını yazınız",
      "Bilinen bir polen, arı sokması ya da bitki hassasiyeti varsa girişte eğitmene bildirilecek kısa bir not"
    ],
    "saglayanlar": [
      "Çocuk boyuna göre yapılmış küt uçlu kürek, tırmık, mala ve sulama kabı takımı",
      "Çocuk bedeninde bahçe eldiveni, önlük ve isim etiketi",
      "Tohum, fide, harç toprağı, bez bağ şeridi ve hasır hasat sepeti",
      "İki eğitmen eşliği, gölge tentesi, yıkama tezgâhı ve ilk yardım dolabı"
    ],
    "guvenlik": "Bahçede kesici alet kullanımı yaş kademesine bağlıdır: 4-6 yaş grubuna yalnızca plastik kürek ve sulama kabı verilir, el tırmığı ve mala 7 yaşından itibaren eğitmen gözetiminde, küt uçlu hasat makası ise yalnız 10 yaş ve üzerinde eğitmen elinden teslim alınarak kullanılır; aletler her seans sonunda sayılarak dolaba kilitlenir. Yataklarda kimyasal gübre ve ilaç kullanılmaz, çalışma sonrası eller tezgâhta sabunla yıkanır ve toplanan ürün yıkanmadan yenmez. Bahçe açık alandadır; arı, polen ya da bitki teması konusunda bilinen bir hassasiyet varsa lütfen kayıt sırasında bildiriniz ve gerekiyorsa önceden hekiminize danışınız. Ekim takvimi, seans uzunlukları, kontenjanlar ve yaş aralıkları temsilî olarak yazılmıştır; bahçenin gerçek programı mevsimin gidişine ve hava koşullarına bağlıdır.",
    "ilgili": [
      "pisirme-dersleri",
      "seramik-atolyesi",
      "trekking"
    ]
  },
  {
    "id": "pisirme-dersleri",
    "ad": "Pişirme Dersleri",
    "grup": "cocuk",
    "ustyazi": "Şef Eşliğinde Çocuk Mutfağı",
    "kisa": "Şef eşliğinde eğlenceli ve öğretici mutfak atölyeleri.",
    "hero": "assets/img/ai/pisirme-dersi.jpg",
    "video": "assets/video/aktivite-pisirme-dersleri.mp4",
    "videoPoster": "assets/img/ai/aktivite/pisirme-dersleri-hamur-yogurma.jpg",
    "ozet": "Çocuk boyuna göre alçaltılmış tezgâhlar, kendi önlüğü ve ölçü kabıyla çalışan küçük eller; ocak ve fırın işini üstlenen bir şef eşliğinde ilerleyen mutfak atölyeleri.",
    "paragraflar": [
      "Tezgâhlar çocuk boyuna göre alçaltılmıştır ve her çocuğa bir ölçü kabı, bir tahta ve kendi adının yazıldığı bir tarif kartı düşer. Salon, çocuk kulübüne bir koridorla bağlanır ve pencereleri servis avlusuna bakar. Ocak, fırın ve keskin aletler tek bir şef tezgâhında toplanmıştır; oradaki her iş görevli şefe aittir. Salonun bir yanında cam bölmeli bir bekleme alanı vardır, veliler atölyeyi buradan izleyebilir. Duvardaki panoda o günkü tarif ve içindeki malzemeler büyük harflerle asılıdır.",
      "Kayıt sırasında alerjen bildirim formu doldurulur; bu form zorunludur ve her atölye öncesi şefle birlikte tek tek gözden geçirilir. Çocuklar salona girince önlük ve saç bonesi giyer, tezgâha geçmeden önce ellerini yıkar. Kesme işleri yaş grubuna göre dişsiz plastik ya da uçları küt çocuk bıçaklarıyla yapılır; sıcak tencere, tepsi ve fırın kapağına yalnızca şef dokunur. Şef her adımı önce kendi tezgâhında gösterir, sonra çocuklar aynı adımı kendi tezgâhlarında tekrarlar. Bekleme süresi olan tariflerde ara verilir ve o aralıkta mutfak düzeni birlikte toplanır.",
      "Öğleden sonraki atölyelerde malzemenin bir bölümü Hobi Bahçesi'nden gelir: sabah toplanan maydanoz, domates ya da nane sepetle mutfağa iner ve tarifin içine girer. Günün ilk atölyesi ise genellikle hamur işidir; un serpilen tezgâhlarda gürültü yüksektir, herkes kendi hamurunu yoğurur. Fırın açıldığında salonun kokusu değişir ve konuşmalar bir anlığına kesilir. Her oturumun son bölümü tabak sunumudur: herkes kendi tabağını süsler, fotoğrafını çektirir ve tarif kartını yanında götürür. Akşam servisine yakın saatlerde mutfak sessizleşir, tezgâhlar ertesi günün atölyesi için yeniden kurulur."
    ],
    "bolum": {
      "videoGozkasi": "Tezgâh Başından",
      "videoBaslik": "Hamurun Ritmi",
      "videoGiris": "Mutfak tezgâhının başından çekilmiş sesli görüntü — hamurun tezgâha vuruşu ve un bulutunun kahkahası.",
      "deneyimGozkasi": "Mutfakta",
      "deneyimBaslik": "Herkese Bir Tezgâh, Herkese Bir İş",
      "rotaGozkasi": "Mutfakta Roller",
      "rotaBaslik": "Tezgâh Kimin, Ocak Kimin",
      "rotaGiris": "Atölyeler üç yaş kademesinde açılır ve her kademede çocuğun kendi yaptığı iş ile şefin üstlendiği iş farklıdır. Küçük yaşta ölçme, karıştırma ve süsleme öne çıkar; orta yaşta güvenli bıçak kullanımı ve hamur işi eklenir; büyük yaşta ise çok adımlı bir tarif ve tabak sunumu üzerinde çalışılır. Üç kademede de ocak, fırın ve keskin aletler şef tezgâhında kalır.",
      "rotaNot": "Süreler, kontenjanlar ve yaş aralıkları temsilîdir; mevsime, doluluğa ve o günkü tarife göre değişebilir. Katılım için alerjen bildirim formunun doldurulması her kademede zorunludur.",
      "galeriGozkasi": "Mutfaktan",
      "galeriBaslik": "Un Bulaşmış Eller",
      "ctaGozkasi": "Tarif Takvimi",
      "ctaBaslik": "Mutfak Atölyesine Katılın",
      "ctaMetin": "Yaş kademesine uygun atölye saatlerini, o hafta çalışılacak tarifleri ve alerjen bildirim formunu çocuk kulübü resepsiyonuyla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Yerleşim",
        "deger": "Çocuk kulübü yanı, servis avlusuna bakan atölye mutfağı"
      },
      {
        "etiket": "Atölye saatleri",
        "deger": "10.00-12.00 ve 15.00-17.00 arası iki oturum (temsilî)"
      },
      {
        "etiket": "Yaş aralığı",
        "deger": "5-13 yaş; kademelere ayrılmış gruplar hâlinde"
      },
      {
        "etiket": "Alerjen bildirimi",
        "deger": "Zorunlu; kayıt sırasında form doldurulur ve şefle gözden geçirilir"
      }
    ],
    "kunye": [
      {
        "etiket": "Alan",
        "deger": "Atölye mutfağı ve cam bölmeli veli bekleme alanı"
      },
      {
        "etiket": "Kontenjan",
        "deger": "Oturum başına en çok 12 çocuk"
      },
      {
        "etiket": "Gözetim",
        "deger": "Bir şef ve bir atölye görevlisi; ocak ve fırın yalnızca şefte"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu; malzemenin bir bölümü mevsime göre değişir"
      }
    ],
    "rotalar": [
      {
        "ad": "Mini Şefler Tezgâhı",
        "sure": "45-60 dakika",
        "mesafe": "Atölye mutfağı, 8 çocuk",
        "zorluk": "5-6 yaş",
        "aciklama": "Kesme ve ısı işi yoktur; ölçme, karıştırma, kalıp basma ve süsleme üzerine kuruludur. Çocuklar hazır bekleyen soğuk malzemelerle çalışır, fırına giren ve fırından çıkan her tepsiyi şef taşır. Oturum sonunda herkes kendi kurabiyesini kutusuyla birlikte götürür."
      },
      {
        "ad": "Güvenli Kesim ve Hamur",
        "sure": "60-75 dakika",
        "mesafe": "Atölye mutfağı, 12 çocuk",
        "zorluk": "7-9 yaş",
        "aciklama": "Uçları küt çocuk bıçaklarıyla güvenli kesim, hamur yoğurma ve basit soslar bu kademede öğrenilir. Şef önce kendi tezgâhında gösterir, ardından her çocuk aynı adımı kendi tahtasında tekrarlar. Sıcak tencere ve tepsi taşıma işi yine şefe aittir."
      },
      {
        "ad": "Baştan Sona Bir Menü",
        "sure": "90 dakika",
        "mesafe": "Şef tezgâhı çevresi, 10 çocuk",
        "zorluk": "10-13 yaş",
        "aciklama": "Çok adımlı tek bir tarif baştan sona birlikte kurulur: malzeme hazırlığı, pişirme ve tabak sunumu. Ocak başındaki adımlar şefin hemen yanında ve tek tek sırayla yapılır. Katılımcılar tarif kartını ve kendi tabağının fotoğrafını yanlarında götürür."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/pisirme-dersleri-hamur-yogurma.jpg",
        "ad": "Un serpilmiş tezgâhta hamur yoğurma"
      },
      {
        "src": "assets/img/ai/aktivite/pisirme-dersleri-malzeme-hazirligi.jpg",
        "ad": "Ölçü kaplarında malzeme hazırlığı"
      },
      {
        "src": "assets/img/ai/aktivite/pisirme-dersleri-sef-esliginde.jpg",
        "ad": "Şef eşliğinde adım adım anlatım"
      },
      {
        "src": "assets/img/ai/aktivite/pisirme-dersleri-tabak-sunumu.jpg",
        "ad": "Kendi tabağını sunan genç şef"
      }
    ],
    "hazirlik": [
      "Doldurulmuş alerjen bildirim formu; besin hassasiyeti varsa kayıt sırasında mutlaka belirtiniz",
      "Kolları kısa ya da sıvanabilen, kirlenmesinde sakınca olmayan bir kıyafet",
      "Kapalı burunlu, kaymayan ayakkabı",
      "Saçı toplamak için lastik; önlük ve bone atölyede verilir",
      "Sunum sonrası götürmek isterseniz küçük bir taşıma kabı"
    ],
    "saglayanlar": [
      "Çocuk bedenine uygun önlük, saç bonesi ve adına yazılmış tarif kartı",
      "Yaş kademesine göre dişsiz plastik ya da uçları küt çocuk bıçakları, ölçü kabı ve kesme tahtası",
      "Tarifin tüm malzemeleri, içerik listesi ve alerjen bilgisiyle birlikte panoda ilan edilir",
      "Bir şef ve bir atölye görevlisi; ocak, fırın ve sıcak tepsi işlerinin tamamı görevlilerde"
    ],
    "guvenlik": "Ocak, fırın, keskin aletler ve sıcak tepsiler görevli şefin tezgâhında toplanmıştır; çocuklar bu bölüme yaklaşmaz. Zemin un ve su nedeniyle kayganlaşabilir, bu yüzden kapalı burunlu ve kaymayan ayakkabı isteriz. Besin alerjisi bir güvenlik konusudur: kayıt sırasında verilen alerjen bildirim formu zorunludur, atölye öncesi şefle birlikte gözden geçirilir ve gerekiyorsa tarif ya da malzeme değiştirilir; formda beyan edilmeyen bir hassasiyet için önlem alınamaz. Herhangi bir sağlık durumu, ilaç kullanımı veya beslenme kısıtı söz konusuysa katılımdan önce hekiminize danışınız ve durumu görevliye bildiriniz. Atölye saatleri, süreler, kontenjanlar ve yaş aralıkları temsilîdir; o günkü tarif ve doluluk bu bilgileri değiştirebilir.",
    "ilgili": [
      "hobi-bahcesi",
      "interaktif-egitim",
      "acik-hava-sinemasi"
    ]
  },
  {
    "id": "muzik-odasi",
    "ad": "Müzik Odası",
    "grup": "cocuk",
    "ustyazi": "Ritim Çemberi ve Enstrüman Odası",
    "kisa": "Enstrümanlarla tanışma ve ritim atölyeleri.",
    "hero": "assets/img/ai/muzik-odasi.jpg",
    "video": "assets/video/aktivite-muzik-odasi.mp4",
    "videoPoster": "assets/img/ai/aktivite/muzik-odasi-ritim-cemberi.jpg",
    "ozet": "Sesi dışarı taşımayan, yalıtımlı duvarlarla kurulmuş bir çocuk müzik odası: ortada ritim çemberi, duvar boyunca askıda ve rafta duran enstrümanlar, köşede küçük bir dinleme ve kayıt bölümü.",
    "paragraflar": [
      "Kapı kapandığında koridordan içeri ses girmez, içeriden de dışarı çıkmaz; oda bu yüzden çocuk atölyeleri koridorunun en ucuna, komşusu az olan bir noktaya yerleştirilmiştir. Zeminde halı, ortada çocukların oturduğu bir ritim çemberi, çember çevresinde farklı boyda darbuka, bendir, marakas ve ksilofonlar bulunur. Duvarın bir yüzünde çocuk ölçülerine göre seçilmiş gitarlar ve ukulele askıda, karşı tarafta bir duvar piyanosu ve tabure durur. Köşedeki cam bölmeli bölüm dinleme ve kayıt için ayrılmıştır: bir mikrofon, bir hoparlör çifti ve çocukların kendi çaldıklarını geri dinlediği küçük bir düzenek vardır.",
      "Atölye eğitmen eşliğinde ve yaş kademesine göre işler; her seansın başında enstrümanlar isimleriyle tanıtılır, nasıl tutulacağı ve nasıl bırakılacağı gösterilir. İlk bölüm çoğunlukla ritimle geçer: eğitmen bir kalıp verir, çocuklar sırayla tekrarlar, sonra çember hâlinde birlikte çalarlar. İkinci bölümde çocuklar sırayla farklı enstrümanların başına geçer; kimse tek bir enstrümanda kalmaz, herkes en az üç sesi denemiş olur. Kapanışta kısa bir toplu çalma yapılır ve isteyen gruplar bunu kayıt köşesinde bir kez daha çalıp geri dinler. Bu kısa kayıtlar, Amfi Tiyatro'da düzenlenen küçük gösterilerin de provası hâline gelebilir.",
      "Odanın sesi gün içinde birkaç kez değişir. Erken seanslarda en küçük grup çalar; vuruş ve gülüşme sesi birbirine karışır. Öğleden sonra tempo değişir, tek tek çalınan notalar ve durup dinlenen aralıklar çoğalır. Akşamüstü büyük yaş grubu prova için toplandığında oda en düzenli hâline gelir: sandalyeler yarım daire dizilir, nota sehpaları çıkarılır ve aynı parça baştan sona birkaç kez tekrarlanır. Kapı kapandığında dışarıdan yalnızca boğuk bir ritim duyulur; koridorda bekleyen ebeveynler için oda kendi sesini içinde tutar."
    ],
    "bolum": {
      "videoGozkasi": "Çemberin İçinden",
      "videoBaslik": "İlk Ritim",
      "videoGiris": "Ritim çemberinin içinden çekilmiş sesli görüntü — kulaklığınızı takın, darbukaların ilk ortak vuruşunu yakalayın.",
      "deneyimGozkasi": "Müzik Odasında",
      "deneyimBaslik": "Enstrümanlar Elden Ele",
      "rotaGozkasi": "Yaş Basamakları",
      "rotaBaslik": "Odada Kim Ne Çalar?",
      "rotaGiris": "Oda üç ayrı yaş kademesine göre programlanır: en küçüklerde ritim ve vuruş, orta yaşta enstrümanla birebir tanışma, büyük yaşta ise birlikte çalma ve prova öne çıkar. Üçü de aynı odada, aynı eğitmen düzeniyle geçer; fark, seansın uzunluğunda, grup büyüklüğünde ve çocuktan beklenen dikkat süresindedir.",
      "rotaNot": "Süreler, kontenjanlar ve yaş aralıkları temsilîdir; grup mevcuduna, sezona ve eğitmen programına göre değişebilir. Kayıt sırasında çocuğunuzun yaşına en uygun kademe resepsiyonla birlikte belirlenir.",
      "galeriGozkasi": "Enstrüman Köşesinden",
      "galeriBaslik": "Vuruş, Tel ve Tuş",
      "ctaGozkasi": "Müzik Saatleri",
      "ctaBaslik": "Çocuğunuzu Müzik Odasına Yazdırın",
      "ctaMetin": "Yaş kademesine uygun seans saatlerini, deneme atölyesi imkânını ve Amfi Tiyatro'daki küçük gösteri takvimini resepsiyonla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Kanat ve kat",
        "deger": "Çocuk atölyeleri koridoru, en uçtaki yalıtımlı bölüm"
      },
      {
        "etiket": "Seans saatleri",
        "deger": "Hafta içi 10.00-18.00, hafta sonu 10.00-19.00 (temsilî)"
      },
      {
        "etiket": "Kimler katılabilir",
        "deger": "5-14 yaş; 5-7 yaş seanslarında ebeveyn odada bekleyebilir"
      },
      {
        "etiket": "Kayıt",
        "deger": "Kontenjan sınırlı olduğu için seans öncesi kayıt gerekir"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Çocuk atölyeleri koridoru, akustik yalıtımlı oda"
      },
      {
        "etiket": "Kapasite",
        "deger": "Seans başına en fazla 12 çocuk"
      },
      {
        "etiket": "Gözetim",
        "deger": "Her seansta bir müzik eğitmeni ve bir atölye görevlisi"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu, kapalı alanda"
      }
    ],
    "rotalar": [
      {
        "ad": "Ritim Çemberi",
        "sure": "40-45 dakika",
        "mesafe": "Ritim çemberi, 10 çocuk",
        "zorluk": "5-7 yaş",
        "aciklama": "Çocuklar halının üzerinde çember olur; eğitmen basit bir vuruş kalıbı verir, herkes sırayla tekrarlar ve ardından birlikte çalarlar. Darbuka, bendir, marakas ve küçük ksilofon gibi tutması kolay enstrümanlar kullanılır. Seans boyunca oturma düzeni bozulmaz, böylece her çocuk eğitmenin görüş alanında kalır."
      },
      {
        "ad": "Enstrümanla Tanışma",
        "sure": "55-60 dakika",
        "mesafe": "Enstrüman köşesi, 8 çocuk",
        "zorluk": "8-10 yaş",
        "aciklama": "Her çocuk seans içinde en az üç enstrümanın başına geçer: ukulele, duvar piyanosu ve bir perküsyon. Enstrümanın nasıl tutulacağı, nasıl kurulacağı ve seans sonunda nereye bırakılacağı tek tek gösterilir. Kapanışta çocuklar en çok sevdikleri sesi seçer ve o enstrümanla kısa bir bölüm çalar."
      },
      {
        "ad": "Küçük Topluluk Provası",
        "sure": "75-90 dakika",
        "mesafe": "Prova alanı, 12 çocuk",
        "zorluk": "11-14 yaş",
        "aciklama": "Sandalyeler yarım daire dizilir, nota sehpaları çıkarılır ve grup tek bir parça üzerinde çalışır. Girişler, duraklar ve bitiş birlikte denenir; eğitmen tempoyu sayar, gerektiğinde bölümü baştan aldırır. Prova sonunda kayıt köşesinde bir deneme çalışı alınır ve grup kendi çaldığını geri dinler; hazır hisseden gruplar bunu Amfi Tiyatro'daki küçük gösteriye taşıyabilir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/muzik-odasi-ritim-cemberi.jpg",
        "ad": "Ritim çemberinde ilk vuruşlar"
      },
      {
        "src": "assets/img/ai/aktivite/muzik-odasi-enstruman-tanisma.jpg",
        "ad": "Enstrümanların tanıtıldığı köşe"
      },
      {
        "src": "assets/img/ai/aktivite/muzik-odasi-kucuk-topluluk.jpg",
        "ad": "Yarım daire düzeninde topluluk provası"
      },
      {
        "src": "assets/img/ai/aktivite/muzik-odasi-kayit-kosesi.jpg",
        "ad": "Kayıt köşesinde geri dinleme"
      }
    ],
    "hazirlik": [
      "Kolları rahat hareket ettiren, bol bir kıyafet",
      "Halıda oturulduğu için çorap; ayakkabılar kapı önünde bırakılır",
      "Bileklerde takı ve saat bulunmaması; saç uzunsa toplanmış olması",
      "Küçük bir su matarası; oda içinde başka yiyecek bulundurulmaz",
      "Varsa çocuğunuzun kendi enstrümanı ve kulak koruyucusuna dair notunuz"
    ],
    "saglayanlar": [
      "Yaşa göre seçilmiş perküsyon, ukulele, gitar ve duvar piyanosu ile nota sehpaları",
      "Müzik eğitmeni eşliği ve her seansta bir atölye görevlisi",
      "Akustik yalıtımlı oda, halı zemin ve çocuk ölçülerine göre oturma düzeni",
      "Kayıt köşesinde mikrofon, hoparlör ve geri dinleme düzeneği"
    ],
    "guvenlik": "Enstrümanlar yalnızca eğitmen gösterdikten sonra elden ele geçer ve seans sonunda görevli tarafından yerine kaldırılır; çocuklar odaya yalnız girmez, seans baştan sona eğitmen ve görevli gözetiminde yürütülür. Ses seviyesi çocuk kulağına uygun aralıkta tutulur, yüksek sesli bölümlerde isteyen çocuğa kulak koruyucu verilir; kaldıramayacağı ağırlıkta ya da boyunda enstrüman hiçbir yaş grubunda kullandırılmaz. İşitmeyle ilgili bir durumu, alerjisi ya da düzenli kullandığı bir ilacı varsa kayıt sırasında görevliye bildiriniz ve gerekiyorsa önceden hekiminize danışınız; atölye bir eğitim ve deneyim etkinliğidir, herhangi bir tedavi ya da terapi programı değildir. Seans süreleri, saatler, kontenjanlar ve yaş aralıkları temsilî olarak paylaşılmıştır; kesin program kayıt sırasında bildirilir.",
    "ilgili": [
      "seramik-atolyesi",
      "interaktif-egitim",
      "amfi-tiyatro"
    ]
  },
  {
    "id": "seramik-atolyesi",
    "ad": "Seramik Atölyesi",
    "grup": "cocuk",
    "ustyazi": "Elle Şekillendirme ve Torna Atölyesi",
    "kisa": "Çamura şekil vererek el becerisi ve yaratıcılığı geliştirin.",
    "hero": "assets/img/ai/seramik-atolyesi.jpg",
    "video": "assets/video/aktivite-seramik-atolyesi.mp4",
    "videoPoster": "assets/img/ai/aktivite/seramik-atolyesi-torna-basinda.jpg",
    "ozet": "Islak çamurun yoğrulmasından fırından çıkmış sert seramiğe kadar bütün aşamaların çocukların kendi elleriyle geçtiği, eğitmen gözetiminde çalışan küçük bir atölye.",
    "paragraflar": [
      "Atölye, kulüp binasının arka avlusuna açılan tek katlı bir yapıdadır ve kuzeye bakan geniş camlardan gün boyu dengeli bir ışık alır. İçeride alçak tabureli altı çalışma masası, duvar boyunca uzanan kuruma rafları ve pencere hizasına yerleştirilmiş üç elektrikli torna bulunur. Masaların ucundaki kapaklı kovalarda ıslak çamur, yanlarındaki tahta kutularda ise tahta ve tel araçlar durur. Zemin kolay silinen dökme malzemedir; her masanın yanında bir lavabo ve çamur tutucu süzgeç vardır. Fırın, ayrı bir odada ve yalnızca eğitmenlerin girdiği kapalı bir bölümdedir.",
      "Seans önlük ve kolluk giyilerek başlar; her çocuğa avuç içi büyüklüğünde bir çamur topu verilir. İlk iş çamuru masaya vurarak yoğurmak, içindeki hava boşluklarını çıkarmaktır. Ardından yaş kademesine göre elle şekillendirme ya da torna başında çalışma gelir: küçükler çimdik ve fitil tekniğiyle kâse, tabak ya da küçük figürler yapar, büyükler tornada merkezleme ve çekme denemesi yapar. Eser bittiğinde çocuk altına kendi işaretini kazır, isim etiketi iliştirilir ve iş kuruma rafına kaldırılır. Eğitmen her masada dolaşır; tornaya ve kesici araçlara yalnızca kendi gözetiminde izin verilir.",
      "Masalar gün boyunca el değiştirir: ilk seansta küçükler oturur, salon kalabalıktır ama tempo yavaştır. Öğleden sonra tornaların çalıştığı saatlerde çarkın uğultusu ve su sesi baskındır, akşam kapanışına doğru raflar dolduğu için atölye sessizleşir. Günün sonunda hiçbir eser sahibine verilmez; bu atölyenin en çok sorulan ayrıntısı da budur. Çamurun kendiliğinden kuruması iki-üç gün, ardından gelen ilk pişirim ve soğuma bir gün, sırlama ve ikinci pişirim ise bir gün daha sürer. Bu yüzden eserler seanstan yaklaşık dört-altı gün sonra teslim edilir; ayrılış tarihiniz daha önceyse resepsiyon işleri paketleyip adresinize gönderir ya da bir sonraki ziyaretinize kadar saklar."
    ],
    "bolum": {
      "videoGozkasi": "Torna Başından",
      "videoBaslik": "Çamurun Yükselişi",
      "videoGiris": "Tornanın hemen yanından çekilmiş sesli görüntü — çarkın uğultusu ve ıslak çamurun avuçtaki sesi.",
      "deneyimGozkasi": "Atölyede",
      "deneyimBaslik": "Atölyede İki Saat, Fırında Üç Gün",
      "rotaGozkasi": "Çalışma Masaları",
      "rotaBaslik": "Her Yaşın Kendi Çamuru",
      "rotaGiris": "Atölye tek salonda çalışır ama masalar yaş kademesine göre ayrılır: en küçükler elleriyle şekillendirir, ortancalar torna başında ilk denemesini yapar, büyükler kuruyan işleri sırlayıp bitirir. Üç program da aynı malzemeyle ve aynı eğitmen kadrosuyla ilerler; fark, kullanılan araçta ve çocuktan beklenen sabırdadır.",
      "rotaNot": "Süreler, kontenjanlar ve pişirim-teslim günleri temsilîdir; doluluğa, çamurun kuruma hızına ve fırın programına göre değişebilir.",
      "galeriGozkasi": "Atölyeden",
      "galeriBaslik": "Çamur, Torna ve Sır",
      "ctaGozkasi": "Fırın Takvimi",
      "ctaBaslik": "Fırın Gününü Konaklamanızla Eşleştirin",
      "ctaMetin": "Yaş grubuna uygun seans saatini, torna kontenjanını ve eserin fırından çıkacağı günü konaklama tarihlerinizle birlikte resepsiyonda planlayabilirsiniz; ayrılışınız pişirimden önceyse teslim biçimini de aynı görüşmede belirleyebilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Konum",
        "deger": "Kulüp binasının arka avlusundaki tek katlı atölye yapısı"
      },
      {
        "etiket": "Seans saatleri",
        "deger": "10.00-12.00 ve 14.00-17.30 arası, günde üç seans (temsilî)"
      },
      {
        "etiket": "Yaş aralığı",
        "deger": "4-14 yaş; 4-6 yaş ebeveyn refakatiyle"
      },
      {
        "etiket": "Eserin teslimi",
        "deger": "Pişirim ve soğuma sonrası, seanstan yaklaşık 4-6 gün sonra"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Kulüp arka avlusu, tek katlı atölye"
      },
      {
        "etiket": "Kapasite",
        "deger": "Seans başına 12 çocuk, 3 torna"
      },
      {
        "etiket": "Gözetim",
        "deger": "Her seansta iki atölye eğitmeni"
      },
      {
        "etiket": "Mevsim",
        "deger": "Yıl boyu açık"
      }
    ],
    "rotalar": [
      {
        "ad": "Elle Şekillendirme Masası",
        "sure": "45-60 dakika",
        "mesafe": "Atölye salonu, 10 çocuk",
        "zorluk": "4-6 yaş",
        "aciklama": "Torna kullanılmaz; çocuklar çamuru avuçlarında yoğurup çimdik ve fitil tekniğiyle küçük kâse, tabak ya da figür yapar. Araçlar yalnızca tahta ve plastik uçlardan oluşur, kesici alet verilmez. Bu yaş grubunda bir ebeveynin masada bulunması istenir; seans sonunda eser isimlendirilip kuruma rafına kaldırılır."
      },
      {
        "ad": "Torna Başında İlk Deneme",
        "sure": "75 dakika",
        "mesafe": "Torna bölümü, 8 çocuk",
        "zorluk": "7-10 yaş",
        "aciklama": "Seansın ilk yarısı masada geçer: çamuru yoğurma, top hâline getirme ve merkezleme çalışılır. İkinci yarıda çocuklar sırayla tornaya oturur, eğitmen elleriyle yönlendirerek ilk çekme denemesini yaptırır. Torna dönerken eğitmen her zaman çocuğun yanında durur ve pedal kontrolü onda kalır."
      },
      {
        "ad": "Sırlama ve Bitirme Seansı",
        "sure": "90 dakika",
        "mesafe": "Sırlama masası, 8 çocuk",
        "zorluk": "11-14 yaş",
        "aciklama": "Daha önce yapılıp kurumuş ve ilk pişirimden geçmiş işler üzerinde çalışılır: yüzey zımparalanır, sır seçilir, fırça ya da daldırma ile uygulanır. Kullanılan sırlar kurşunsuz ve gıdaya uygun türdendir. Seans sonunda işler ikinci pişirim için fırın odasına teslim edilir; bu program ancak atölyeye en az iki kez gelen misafirler için anlamlıdır."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/seramik-atolyesi-torna-basinda.jpg",
        "ad": "Eğitmen eşliğinde torna başında ilk deneme"
      },
      {
        "src": "assets/img/ai/aktivite/seramik-atolyesi-sekillendirme.jpg",
        "ad": "Masada elle şekillendirme çalışması"
      },
      {
        "src": "assets/img/ai/aktivite/seramik-atolyesi-firin-oncesi.jpg",
        "ad": "Kuruma rafında pişirim sırasını bekleyen işler"
      },
      {
        "src": "assets/img/ai/aktivite/seramik-atolyesi-sirlama-masasi.jpg",
        "ad": "Sırlama masası ve renk denemeleri"
      }
    ],
    "hazirlik": [
      "Kirlenmesinde sakınca olmayan kıyafet; önlük ve kolluk atölyede verilir",
      "Seans sonrası giyilecek yedek bir üst ya da tişört",
      "Tırnakların kısa kesilmiş, saçın toplanmış olması çamur işini kolaylaştırır",
      "Ayrılış tarihiniz ve eserin gönderileceği adres bilgisi",
      "Kapalı, tabanı kaymayan ayakkabı"
    ],
    "saglayanlar": [
      "Çocuk bedenine uygun önlük, kolluk ve el havlusu",
      "Çamur, tahta ve tel araçlar, sünger, kurşunsuz sır malzemeleri",
      "Her seansta iki atölye eğitmeni ve torna başında birebir gözetim",
      "Kuruma, iki aşamalı pişirim, paketleme ve teslim ya da adrese gönderim"
    ],
    "guvenlik": "Torna yalnızca eğitmen gözetiminde ve pedal kontrolü eğitmende kalarak çalıştırılır; kesici tel ve metal araçlar 4-6 yaş masasında hiç kullanılmaz. Fırın odası ayrı bir bölümdedir ve çocukların girişine kapalıdır; pişirim işlemleri seans saatleri dışında yapılır. Çocuğunuzun cilt hassasiyeti, toz alerjisi ya da hekiminizin uyardığı bir durumu varsa kayıt sırasında eğitmene bildiriniz ve gerekiyorsa önceden hekiminize danışınız. Saatler, kontenjanlar, yaş aralıkları ve pişirim-teslim süreleri temsilîdir; fırın programı ve atölye doluluğu bu süreleri uzatabilir ya da kısaltabilir.",
    "ilgili": [
      "muzik-odasi",
      "pisirme-dersleri",
      "studyo-dersleri"
    ]
  },
  {
    "id": "glamping",
    "ad": "Glamping Alanları",
    "grup": "cocuk",
    "ustyazi": "Ailece Kurulu Çadır Konaklaması",
    "kisa": "Konforlu çadırlarda ailece doğayla iç içe kamp deneyimi.",
    "hero": "assets/img/ai/glamping.jpg",
    "video": "assets/video/aktivite-glamping.mp4",
    "videoPoster": "assets/img/ai/aktivite/glamping-kamp-atesi-aksami.jpg",
    "ozet": "Çam ormanının kıyısındaki düzlükte, ahşap platformlar üzerine kurulmuş kanvas aile çadırları. Kamp kurma zahmeti olmadan, gerçek yatakta uyunan ve akşamı ateş başında geçirilen bir doğa gecesi.",
    "paragraflar": [
      "Glamping alanı, yerleşkenin kuzeyinde, çam ormanının başladığı yerdeki hafif eğimli düzlüktedir. Sekiz kanvas çadır birbirini görmeyecek biçimde ağaçların arasına yerleştirilmiş, her biri ahşap bir platformun üzerine kurulmuştur. Çadırların içinde gerçek yatak, yatak takımı, gece lambası ve küçük bir saklama dolabı bulunur; girişte iki kişilik ahşap bir oturma köşesi vardır. Alanın ortasında taşla çevrilmiş bir ateş çukuru ve çevresinde kütük oturaklar yer alır. Ormanın sınırında, gökyüzünün açık göründüğü bir düzlük gözlem alanı olarak boş bırakılmıştır.",
      "Giriş öğleden sonra yapılır: görevli aileyi çadırına götürür, alanın sınırlarını, ortak duş-tuvalet birimini ve ateş çukurunun kurallarını birlikte gezerek anlatır. Akşamüstü ateş görevli tarafından yakılır; çocuklar ateşin çevresindeki işaretli hattın dışında oturur, ikramlıklar uzun saplı şişlerle yetişkin eşliğinde hazırlanır. Hava karardıktan sonra isteyen aileler gözlem düzlüğüne geçer; burada Gökyüzü Gözlem programının teleskopları kurulur ve aynı görevli iki alanı birlikte yürütür. Gece boyunca alanda bir güvenlik görevlisi bulunur, ateş yatmadan önce söndürülür. Sabah kahvaltısı çadırların önündeki uzun ortak masaya kurulur.",
      "Günün en hareketli aralığı gün batımından hemen önceki saattir: çocuklar ağaçların arasında koşar, aileler oturma köşelerine yerleşir, ateşin ilk dumanı çamların arasından yükselir. Karanlık bastıktan sonra alan kendiliğinden sessizleşir; konuşmalar kısılır, tek ses ateşin çıtırtısı ve uzaktan gelen deniz uğultusu olur. Yaz gecelerinde Marmara üzerinden esen serin bir hava çadırların arasından geçer, bu yüzden akşam için ince bir kat kıyafet önerilir. Sabah ise ormanın kuş sesleriyle erken açılır; kahvaltı masası kurulurken çadırların kanvası üzerinde çiy tabakası görünür."
    ],
    "bolum": {
      "videoGozkasi": "Ateşin Başından",
      "videoBaslik": "Akşamın Çıtırtısı",
      "videoGiris": "Kamp ateşinin başından çekilmiş sesli görüntü — çıtırdayan odun, cırcır böcekleri ve çam esintisi.",
      "deneyimGozkasi": "Çadır Alanında",
      "deneyimBaslik": "Sekiz Çadır ve Tek Bir Ateş",
      "rotaGozkasi": "Konaklama Biçimleri",
      "rotaBaslik": "Bir Akşam, Bir Gece ve Gözlem Düzeni",
      "rotaGiris": "Alanı üç ayrı biçimde kullanabilirsiniz: yalnızca akşam saatlerini kapsayan bir kamp ateşi buluşması, çadırda geçirilen tam bir aile gecesi ya da gece geç saatlere uzayan bir gökyüzü gözlem programı. Üçü de aynı düzlükte geçer; fark, kaldığınız süre ve çocukların yaşına göre önerilen kademededir.",
      "rotaNot": "Saatler, kontenjanlar ve yaş aralıkları temsilîdir; mevsime, hava durumuna ve alan doluluğuna göre değişebilir.",
      "galeriGozkasi": "Ateşin Çevresinden",
      "galeriBaslik": "Kanvas, Ateş ve Yıldızlar",
      "ctaGozkasi": "Çadır Planlaması",
      "ctaBaslik": "Ailece Bir Doğa Gecesi Ayırtın",
      "ctaMetin": "Uygun çadır tarihlerini, çocuklarınızın yaşına göre önerilen programı ve gökyüzünün en açık göründüğü geceleri resepsiyonla birlikte planlayabilirsiniz."
    },
    "bakista": [
      {
        "etiket": "Konum",
        "deger": "Yerleşkenin kuzeyi, çam ormanının kıyısındaki düzlük"
      },
      {
        "etiket": "Çadır düzeni",
        "deger": "Ahşap platform üzerinde 8 kanvas aile çadırı, her biri 4 kişilik"
      },
      {
        "etiket": "Kimler katılabilir",
        "deger": "Programa göre 4 yaş ve üzeri; 12 yaş altı çocuklar için ebeveyn refakati zorunlu"
      },
      {
        "etiket": "Kayıt",
        "deger": "Konaklamalı programlar için önceden rezervasyon; kamp ateşi akşamı aynı gün bildirimle"
      }
    ],
    "kunye": [
      {
        "etiket": "Yerleşim",
        "deger": "Kuzey düzlüğü, orman sınırı"
      },
      {
        "etiket": "Kapasite",
        "deger": "8 çadır, toplam 32 misafir"
      },
      {
        "etiket": "Giriş ve çıkış",
        "deger": "Giriş 16.00, çıkış ertesi gün 11.00 (temsilî)"
      },
      {
        "etiket": "Mevsim",
        "deger": "Nisan-Ekim arası açık"
      }
    ],
    "rotalar": [
      {
        "ad": "Kamp Ateşi Akşamı",
        "sure": "18.30-21.30 arası yaklaşık 3 saat",
        "mesafe": "Ateş çukuru alanı, 8 aile",
        "zorluk": "4 yaş ve üzeri, ebeveyn refakatiyle",
        "aciklama": "Konaklama içermeyen kısa programdır. Ateş görevli tarafından yakılır, çocuklar işaretli oturma hattının dışında kalır ve şişte ikramlıklar yetişkin eşliğinde hazırlanır. Küçük yaş grubu için en uygun kademe budur; program karanlık iyice bastırmadan biter ve aileler kendi konutlarına döner."
      },
      {
        "ad": "Tek Gece Aile Konaklaması",
        "sure": "16.00 girişten ertesi gün 11.00 çıkışa",
        "mesafe": "Kurulu aile çadırı, 2 yetişkin ve 2 çocuk",
        "zorluk": "6 yaş ve üzeri çocuklar için önerilir",
        "aciklama": "Alanın tam programıdır: yerleşme, alan tanıtımı, akşam ateşi ve çadırda geçen bir gece. Yataklar hazır kurulu gelir, yatak takımı ve ek battaniye çadırda bulunur. Sabah kahvaltısı ortak masada verilir; aileler dilerse öğleden önce ormana kısa bir yürüyüşle günü tamamlar."
      },
      {
        "ad": "Yıldız İzleme Gecesi",
        "sure": "22.00-00.30 arası yaklaşık 2,5 saat",
        "mesafe": "Gözlem düzlüğü, 20 kişi",
        "zorluk": "8 yaş ve üzeri",
        "aciklama": "Konaklamaya eklenen ya da ayrı katılınabilen geç saatli programdır. Gökyüzü Gözlem ekibi teleskopları düzlüğe kurar, alan ışıkları kısılır ve el fenerleri kırmızı filtreyle kullanılır. Uyku düzeni geç saate uygun olan büyük yaş grubu için düşünülmüştür; bulutlu gecelerde program ateş başında anlatıma çevrilir."
      }
    ],
    "galeri": [
      {
        "src": "assets/img/ai/aktivite/glamping-cadir-ici-duzen.jpg",
        "ad": "Çadır içi yatak ve oturma düzeni"
      },
      {
        "src": "assets/img/ai/aktivite/glamping-kamp-atesi-aksami.jpg",
        "ad": "Ateş çukurunda akşam buluşması"
      },
      {
        "src": "assets/img/ai/aktivite/glamping-kahvalti-masasi.jpg",
        "ad": "Çadırların önünde ortak kahvaltı masası"
      },
      {
        "src": "assets/img/ai/aktivite/glamping-yildizli-gece.jpg",
        "ad": "Gözlem düzlüğünde yıldızlı gece"
      }
    ],
    "hazirlik": [
      "Gece serinliği için katmanlı kıyafet ve ince bir polar veya mont",
      "Kapalı, kaymaz tabanlı ayakkabı; çadır içinde kullanmak üzere kalın çorap",
      "Çocuklara ait ilaçlar, varsa alerji notu ve kişisel bakım ürünleri",
      "Küçük bir el feneri ya da kafa lambası; gözlem sırasında kırmızı ışık tercih edilir",
      "Uyku düzenini kolaylaştıran tanıdık bir oyuncak, battaniye ya da kitap"
    ],
    "saglayanlar": [
      "Kurulu kanvas çadır: gerçek yatak, yatak takımı, yastık ve ek battaniye",
      "Çadır başına gece lambası, priz hattı ve kilitlenebilir saklama dolabı",
      "Ateş çukurunda görevli eşliğinde yakılan kamp ateşi, şiş ve ikramlık düzeni",
      "Gece boyunca alanda bulunan görevli ile ortak sıcak duş ve tuvalet birimi"
    ],
    "guvenlik": "Glamping alanı yerleşke sınırları içindedir; çevresi çitle ayrılmış, girişi kontrollüdür ve gece boyunca alanda bir görevli bulunur. Ateş yalnızca görevli tarafından yakılır ve söndürülür; çocuklar ateş çukurunun çevresindeki işaretli hattın dışında kalır, şişle ikramlık hazırlama her zaman yetişkin eşliğinde yapılır. Çadırlarda açık alev, ısıtıcı ve mum kullanımı yasaktır. On iki yaş altındaki çocukların gece boyunca ebeveyn refakatinde olması zorunludur; çadır dışında dolaşılacaksa görevliye haber verilmesi rica olunur. Uyku düzeni, alerji ya da sağlık durumu konusunda bir tereddüdünüz varsa katılım öncesinde hekiminize danışınız ve girişte görevliyi bilgilendiriniz. Giriş-çıkış saatleri, çadır kontenjanı ve yaş sınırları temsilî olarak verilmiştir; kesin bilgi rezervasyon sırasında paylaşılır.",
    "ilgili": [
      "hobi-bahcesi",
      "gokyuzu-gozlem",
      "trekking"
    ]
  }
];
