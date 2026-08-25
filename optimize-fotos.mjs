/**
 * Redimensiona y comprime todas las fotos de /fotos a 512×512 (JPEG).
 *
 * Uso: node optimize-fotos.mjs
 *
 * - Recorta al centro (cover) a cuadrado 512×512
 * - Guarda como .jpg calidad ~82 (mucho más liviano)
 * - Elimina el archivo original si cambió la extensión
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = path.dirname(fileURLToPath(import.meta.url));
const fotosDir = path.join(root, "fotos");
const SIZE = 512;
const QUALITY = 82;
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function optimizeOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath, path.extname(filePath));
  const outPath = path.join(fotosDir, `${base}.jpg`);
  const before = fs.statSync(filePath).size;

  const buf = await sharp(filePath, { failOn: "none" })
    .rotate() // respeta EXIF orientation
    .resize(SIZE, SIZE, { fit: "cover", position: "centre" })
    .jpeg({ quality: QUALITY, mozjpeg: true, chromaSubsampling: "4:2:0" })
    .toBuffer();

  // Escribir a temp y renombrar para no truncar si falla a medias
  const tmp = `${outPath}.tmp`;
  fs.writeFileSync(tmp, buf);
  if (fs.existsSync(outPath) && path.resolve(filePath) !== path.resolve(outPath)) {
    // ya hay un .jpg distinto del origen; sobrescribir
  }
  fs.renameSync(tmp, outPath);

  if (path.resolve(filePath) !== path.resolve(outPath) && fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      // Windows a veces bloquea el archivo; el cleanup final lo elimina
      if (err.code !== "EPERM" && err.code !== "EBUSY") throw err;
    }
  }

  const after = fs.statSync(outPath).size;
  return { name: path.basename(outPath), before, after };
}

async function main() {
  if (!fs.existsSync(fotosDir)) {
    console.error("No existe carpeta fotos/");
    process.exit(1);
  }

  const files = fs
    .readdirSync(fotosDir)
    .filter((f) => EXTS.has(path.extname(f).toLowerCase()) && !f.endsWith(".tmp"))
    .map((f) => path.join(fotosDir, f));

  // Evitar procesar dos veces el mismo base si hay .png y .jpg
  const byBase = new Map();
  for (const fp of files) {
    const base = path.basename(fp, path.extname(fp)).toLowerCase();
    const prev = byBase.get(base);
    if (!prev) {
      byBase.set(base, fp);
      continue;
    }
    // Preferir el más pesado (mejor calidad de origen) o no-jpg
    const prefer =
      path.extname(fp).toLowerCase() !== ".jpg" && path.extname(prev).toLowerCase() === ".jpg"
        ? fp
        : fs.statSync(fp).size > fs.statSync(prev).size
          ? fp
          : prev;
    const drop = prefer === fp ? prev : fp;
    byBase.set(base, prefer);
    if (drop !== prefer && path.extname(drop).toLowerCase() !== ".jpg") {
      // el sobrante se borrará tras optimizar si no es el out
    }
  }

  const unique = [...byBase.values()];
  let totalBefore = 0;
  let totalAfter = 0;
  let ok = 0;
  let fail = 0;

  console.log(`Optimizando ${unique.length} fotos → ${SIZE}×${SIZE} JPEG q${QUALITY}…\n`);

  for (const fp of unique) {
    try {
      const r = await optimizeOne(fp);
      totalBefore += r.before;
      totalAfter += r.after;
      ok += 1;
      const kb = (n) => `${Math.round(n / 1024)} KB`;
      console.log(`✓ ${r.name}  ${kb(r.before)} → ${kb(r.after)}`);
    } catch (err) {
      fail += 1;
      console.error(`✗ ${path.basename(fp)}: ${err.message}`);
    }
  }

  // Limpiar duplicados no-jpg que quedaron (mismo base)
  for (const f of fs.readdirSync(fotosDir)) {
    const ext = path.extname(f).toLowerCase();
    if (!EXTS.has(ext) || ext === ".jpg") continue;
    const jpg = path.join(fotosDir, `${path.basename(f, path.extname(f))}.jpg`);
    if (fs.existsSync(jpg)) {
      fs.unlinkSync(path.join(fotosDir, f));
      console.log(`– eliminado duplicado ${f}`);
    }
  }

  const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`;
  console.log(`
Listo: ${ok} ok, ${fail} errores
Antes:  ${mb(totalBefore)}
Después:${mb(totalAfter)}
Ahorro: ${mb(Math.max(0, totalBefore - totalAfter))} (${totalBefore ? Math.round((1 - totalAfter / totalBefore) * 100) : 0}%)
`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
