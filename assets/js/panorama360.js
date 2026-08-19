/* TOR|THERMAL — 360° Panorama Görüntüleyici (saf WebGL, kütüphanesiz)
   Kullanım: <div class="pano360" data-odalar='[{"ad":"Salon","src":"..."},...]'></div>
   Equirectangular panoramayı küresel projeksiyonla gösterir:
   sürükle-bak (fare + dokunmatik), boştayken otomatik dönüş, oda geçiş
   düğmeleri, tam ekran. WebGL yoksa düz kaydırmalı yedeğe düşer. */
(function () {
  "use strict";

  var VS = "attribute vec2 k;void main(){gl_Position=vec4(k,0.0,1.0);}";
  var FS = [
    "precision mediump float;",
    "uniform sampler2D doku;",
    "uniform vec2 boyut;",
    "uniform float yaw;",
    "uniform float pitch;",
    "uniform float fov;",
    "void main(){",
    "  vec2 ndc=(gl_FragCoord.xy/boyut)*2.0-1.0;",
    "  float t=tan(fov*0.5);",
    "  vec3 ray=normalize(vec3(ndc.x*t*(boyut.x/boyut.y), ndc.y*t, -1.0));",
    "  float cp=cos(pitch), sp=sin(pitch);",
    "  ray=vec3(ray.x, ray.y*cp - ray.z*sp, ray.y*sp + ray.z*cp);",
    "  float cy=cos(yaw), sy=sin(yaw);",
    "  ray=vec3(ray.x*cy + ray.z*sy, ray.y, -ray.x*sy + ray.z*cy);",
    "  float lon=atan(ray.x, -ray.z);",
    "  float lat=asin(clamp(ray.y,-1.0,1.0));",
    "  vec2 uv=vec2(lon/6.2831853+0.5, 0.5-lat/3.1415926);",
    "  gl_FragColor=texture2D(doku, uv);",
    "}"
  ].join("\n");

  /* Kap ekrana 300px kala "geldi", çıkınca "gitti" çağrılır.
     IntersectionObserver yoksa hemen başlar (davranış eskisi gibi). */
  function gorunurlukBagla(kap, geldi, gitti) {
    if (typeof window.IntersectionObserver !== "function") { geldi(); return; }
    /* Gözlemci ancak yerleşim oturduktan sonra kurulur; yükleme sırasında
       görseller yerleşmediği için her şey ekrandaymış gibi görünür. */
    function gozlemciKur() {
      try {
        var io = new IntersectionObserver(function (girisler) {
          for (var i = 0; i < girisler.length; i++) {
            if (girisler[i].isIntersecting) geldi(); else gitti();
          }
        }, { rootMargin: "300px 0px", threshold: 0 });
        io.observe(kap);
      } catch (e) { geldi(); }
    }
    if (document.readyState === "complete") gozlemciKur();
    else window.addEventListener("load", function () {
      if (window.requestAnimationFrame) window.requestAnimationFrame(gozlemciKur); else gozlemciKur();
    });
  }

  function kur(kap) {
    var odalar;
    try { odalar = JSON.parse(kap.getAttribute("data-odalar")); } catch (e) { return; }
    if (!odalar || !odalar.length) return;

    kap.classList.add("pano360-hazir");
    var tuval = document.createElement("canvas");
    tuval.className = "pano360-tuval";
    kap.appendChild(tuval);

    var gl = tuval.getContext("webgl", { antialias: true }) || tuval.getContext("experimental-webgl");

    /* ---- WebGL yoksa: düz yatay kaydırmalı yedek ---- */
    if (!gl) {
      tuval.remove();
      var yedek = document.createElement("div");
      yedek.className = "pano360-yedek";
      kap.appendChild(yedek);
      var x = 50, aktifYedek = true, yedekEkranda = false, yedekYuklendi = false;
      /* Görünür değilken ne görsel iner ne de kaydırma döner (pil/veri). */
      setInterval(function () {
        if (!aktifYedek || !yedekEkranda || document.hidden) return;
        x = (x + 0.03) % 100; yedek.style.backgroundPosition = x + "% 50%";
      }, 40);
      yedek.addEventListener("pointerdown", function () { aktifYedek = false; });
      arayuzKur(kap, odalar, function (oda) {
        yedekYuklendi = true;
        yedek.style.backgroundImage = "url('" + oda.src + "')";
      });
      gorunurlukBagla(kap, function () {
        yedekEkranda = true;
        if (!yedekYuklendi) { yedekYuklendi = true; yedek.style.backgroundImage = "url('" + odalar[0].src + "')"; }
      }, function () { yedekEkranda = false; });
      return;
    }

    function derle(tip, kaynak) {
      var s = gl.createShader(tip);
      gl.shaderSource(s, kaynak); gl.compileShader(s);
      return s;
    }
    var prog = gl.createProgram();
    gl.attachShader(prog, derle(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, derle(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog); gl.useProgram(prog);

    var tampon = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    var kOzn = gl.getAttribLocation(prog, "k");
    gl.enableVertexAttribArray(kOzn);
    gl.vertexAttribPointer(kOzn, 2, gl.FLOAT, false, 0, 0);

    var uBoyut = gl.getUniformLocation(prog, "boyut");
    var uYaw = gl.getUniformLocation(prog, "yaw");
    var uPitch = gl.getUniformLocation(prog, "pitch");
    var uFov = gl.getUniformLocation(prog, "fov");

    var doku = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, doku);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([27, 40, 75, 255]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    var yaw = 0, pitch = 0, fov = 75 * Math.PI / 180;
    var hedefYaw = 0, hedefPitch = 0;
    var surukleme = false, sonX = 0, sonY = 0, bosta = true, sonEtkilesim = 0;
    var azHareket = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function yukle(src, bitince) {
      kap.classList.add("pano360-yukluyor");
      var img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = function () {
        gl.bindTexture(gl.TEXTURE_2D, doku);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        kap.classList.remove("pano360-yukluyor");
        if (bitince) bitince();
      };
      img.onerror = function () { kap.classList.remove("pano360-yukluyor"); };
      img.src = src;
    }

    function boyutla() {
      var o = Math.min(window.devicePixelRatio || 1, 2);
      var w = kap.clientWidth, h = kap.clientHeight;
      if (tuval.width !== w * o || tuval.height !== h * o) {
        tuval.width = w * o; tuval.height = h * o;
        gl.viewport(0, 0, tuval.width, tuval.height);
      }
    }

    /* Çizim döngüsü yalnızca kap ekrandayken döner. */
    var ekranda = false, dongudeMi = false;

    function ciz(t) {
      if (!ekranda) { dongudeMi = false; return; }
      boyutla();
      if (!surukleme && bosta && !azHareket && (t - sonEtkilesim > 2600)) hedefYaw += 0.00072; // otomatik yavaş dönüş
      yaw += (hedefYaw - yaw) * 0.12;
      pitch += (hedefPitch - pitch) * 0.12;
      gl.uniform2f(uBoyut, tuval.width, tuval.height);
      gl.uniform1f(uYaw, yaw);
      gl.uniform1f(uPitch, pitch);
      gl.uniform1f(uFov, fov);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(ciz);
    }

    function donguBaslat() {
      if (dongudeMi || !ekranda) return;
      dongudeMi = true;
      requestAnimationFrame(ciz);
    }

    function bas(x, y) { surukleme = true; bosta = false; sonX = x; sonY = y; kap.classList.add("pano360-tutuyor"); }
    function hareket(x, y) {
      if (!surukleme) return;
      hedefYaw += (x - sonX) * 0.0042;
      hedefPitch = Math.max(-1.35, Math.min(1.35, hedefPitch + (y - sonY) * 0.0042));
      sonX = x; sonY = y;
    }
    function birak() { surukleme = false; sonEtkilesim = performance.now(); bosta = true; kap.classList.remove("pano360-tutuyor"); }

    tuval.addEventListener("pointerdown", function (e) { tuval.setPointerCapture(e.pointerId); bas(e.clientX, e.clientY); });
    tuval.addEventListener("pointermove", function (e) { hareket(e.clientX, e.clientY); });
    tuval.addEventListener("pointerup", birak);
    tuval.addEventListener("pointercancel", birak);
    tuval.addEventListener("wheel", function (e) {
      e.preventDefault();
      fov = Math.max(40 * Math.PI / 180, Math.min(95 * Math.PI / 180, fov + e.deltaY * 0.0008));
    }, { passive: false });

    var ilkDokuIstendi = false;
    arayuzKur(kap, odalar, function (oda) {
      ilkDokuIstendi = true; /* kullanıcı oda seçtiyse ilk doku gereksiz */
      yukle(oda.src, function () { hedefYaw = 0; hedefPitch = 0; });
    });

    /* İlk doku ve çizim, kap ekrana yaklaşana kadar ertelenir. */
    gorunurlukBagla(kap, function () {
      ekranda = true;
      if (!ilkDokuIstendi) { ilkDokuIstendi = true; yukle(odalar[0].src); }
      donguBaslat();
    }, function () { ekranda = false; });

    /* Sekme geri geldiğinde döngüyü sürdür (rAF duraklamış olabilir). */
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) donguBaslat();
    });
  }

  /* Oda düğmeleri + tam ekran + ipucu katmanı */
  function arayuzKur(kap, odalar, odaSec) {
    var bar = document.createElement("div");
    bar.className = "pano360-bar";
    odalar.forEach(function (oda, i) {
      var d = document.createElement("button");
      d.type = "button";
      d.className = "pano360-oda" + (i === 0 ? " aktif" : "");
      d.textContent = oda.ad;
      d.setAttribute("aria-label", oda.ad + " panoramasını aç");
      d.addEventListener("click", function () {
        bar.querySelectorAll(".pano360-oda").forEach(function (x) { x.classList.remove("aktif"); });
        d.classList.add("aktif");
        odaSec(oda);
      });
      bar.appendChild(d);
    });
    var tam = document.createElement("button");
    tam.type = "button";
    tam.className = "pano360-tam";
    tam.innerHTML = "⛶";
    tam.setAttribute("aria-label", "Tam ekran");
    tam.addEventListener("click", function () {
      if (document.fullscreenElement) { document.exitFullscreen(); }
      else if (kap.requestFullscreen) { kap.requestFullscreen(); }
    });
    var ipucu = document.createElement("div");
    ipucu.className = "pano360-ipucu";
    ipucu.textContent = "Sürükleyerek etrafınıza bakın · 360°";
    kap.appendChild(bar);
    kap.appendChild(tam);
    kap.appendChild(ipucu);
    kap.addEventListener("pointerdown", function () { ipucu.classList.add("gizli"); }, { once: true });
  }

  document.querySelectorAll(".pano360").forEach(kur);
})();
