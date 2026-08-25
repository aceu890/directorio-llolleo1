/**
 * Sube la carpeta local /fotos al bucket Supabase `fotos-miembros`.
 *
 * Requisitos:
 * 1. Ejecutar supabase/storage-fotos.sql en el SQL Editor
 * 2. Service role / secret key:
 *      PowerShell:  $env:SUPABASE_SERVICE_ROLE_KEY="sb_secret_..."
 * 3. node upload-fotos-supabase.mjs
 *
 * Las fotos locales NO se borran. En Storage se guardan sin tildes
 * (Supabase no acepta á/é/ñ/, en el nombre del objeto).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const fotosDir = path.join(root, "fotos");
const BUCKET = "fotos-miembros";

function loadConfig() {
  const cfgPath = path.join(root, "supabase-config.js");
  const src = fs.readFileSync(cfgPath, "utf8");
  const url = src.match(/url:\s*["']([^"']+)["']/)?.[1];
  if (!url) throw new Error("No se encontró url en supabase-config.js");
  return { url: url.replace(/\/$/, "") };
}

/** Misma regla que window.fotoStorageKey en supabase-config.js */
function storageKey(filename) {
  const extMatch = String(filename).match(/(\.[a-z0-9]+)$/i);
  const ext = extMatch ? extMatch[1].toLowerCase() : "";
  const base = extMatch ? filename.slice(0, -ext.length) : filename;
  const safe = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._\s-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `${safe}${ext}`;
}

function contentType(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  if (ext === ".gif") return "image/gif";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  return "application/octet-stream";
}

async function uploadOne({ url, key }, objectName, body, contentTypeHeader) {
  const objectPath = encodeURIComponent(objectName).replace(/%2F/gi, "/");
  const endpoint = `${url}/storage/v1/object/${BUCKET}/${objectPath}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": contentTypeHeader,
      "x-upsert": "true",
    },
    body,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${response.status} ${text.slice(0, 200)}`);
  }
}

async function main() {
  const serviceKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  if (!serviceKey) {
    console.error(`
Falta SUPABASE_SERVICE_ROLE_KEY.

PowerShell:
  $env:SUPABASE_SERVICE_ROLE_KEY="sb_secret_..."
  node upload-fotos-supabase.mjs
`);
    process.exit(1);
  }

  const { url } = loadConfig();
  const files = fs
    .readdirSync(fotosDir)
    .filter((f) => fs.statSync(path.join(fotosDir, f)).isFile())
    .sort((a, b) => a.localeCompare(b, "es"));

  console.log(`Subiendo ${files.length} fotos → ${url}/storage/v1/object/public/${BUCKET}/`);

  let ok = 0;
  let fail = 0;
  for (const file of files) {
    const keyName = storageKey(file);
    const body = fs.readFileSync(path.join(fotosDir, file));
    try {
      await uploadOne({ url, key: serviceKey }, keyName, body, contentType(file));
      ok++;
      const note = keyName !== file ? ` → ${keyName}` : "";
      console.log(`  ✓ ${file}${note}`);
    } catch (err) {
      fail++;
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\nListo: ${ok} subidas, ${fail} errores.`);
  if (files[0]) {
    console.log(
      `URL ejemplo: ${url}/storage/v1/object/public/${BUCKET}/${encodeURIComponent(storageKey(files[0]))}`
    );
  }
  console.log("Las copias locales en /fotos se mantienen.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
