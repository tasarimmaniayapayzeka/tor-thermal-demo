/* TOR|THERMAL — yerel statik önizleme sunucusu (port 8060) */
const http = require("http");
const fs = require("fs");
const path = require("path");

const KOK = __dirname;
const PORT = process.argv[2] ? parseInt(process.argv[2], 10) : 8060;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png",
  ".svg": "image/svg+xml", ".webp": "image/webp", ".ico": "image/x-icon",
  ".mp4": "video/mp4", ".webm": "video/webm",
  ".woff2": "font/woff2", ".pdf": "application/pdf"
};

http.createServer((req, res) => {
  let yol = decodeURIComponent(req.url.split("?")[0]);
  if (yol === "/") yol = "/index.html";
  const dosya = path.join(KOK, yol);
  if (!dosya.startsWith(KOK)) { res.writeHead(403); return res.end("Yasak"); }
  fs.stat(dosya, (hata, st) => {
    if (hata || !st.isFile()) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("Bulunamadı: " + yol); }
    const uz = path.extname(dosya).toLowerCase();
    const tip = MIME[uz] || "application/octet-stream";
    // Video için Range desteği (tarayıcı oynatma)
    const range = req.headers.range;
    if (range && uz === ".mp4") {
      const [b, s] = range.replace(/bytes=/, "").split("-");
      const bas = parseInt(b, 10) || 0;
      const son = s ? parseInt(s, 10) : st.size - 1;
      res.writeHead(206, {
        "Content-Range": `bytes ${bas}-${son}/${st.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": son - bas + 1,
        "Content-Type": tip
      });
      fs.createReadStream(dosya, { start: bas, end: son }).pipe(res);
    } else {
      res.writeHead(200, { "Content-Type": tip, "Content-Length": st.size });
      fs.createReadStream(dosya).pipe(res);
    }
  });
}).listen(PORT, () => console.log("TOR Thermal önizleme: http://localhost:" + PORT));
