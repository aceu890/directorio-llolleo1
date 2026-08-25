/**
 * Vigila la carpeta /fotos y resincroniza índices automáticamente
 * cuando agregas, renombras o cambias extensiones (png → jpg, etc.).
 *
 * Uso:
 *   node watch-fotos.mjs
 *
 * Déjalo corriendo mientras editas fotos. Ctrl+C para detener.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const root = path.dirname(fileURLToPath(import.meta.url));
const fotosDir = path.join(root, "fotos");
const syncScript = path.join(root, "sync-orgs-fotos.mjs");

let timer = null;
let running = false;
let pending = false;

function runSync(reason) {
  if (running) {
    pending = true;
    return;
  }
  running = true;
  console.log(`\n[${new Date().toLocaleTimeString()}] Cambio detectado (${reason}). Sincronizando…`);
  const child = spawn(process.execPath, [syncScript], {
    cwd: root,
    stdio: "inherit",
  });
  child.on("exit", (code) => {
    running = false;
    if (code === 0) {
      console.log(`[${new Date().toLocaleTimeString()}] Listo. Recarga el directorio (Ctrl+F5).`);
    } else {
      console.error(`[${new Date().toLocaleTimeString()}] Sync terminó con código ${code}`);
    }
    if (pending) {
      pending = false;
      runSync("cambios pendientes");
    }
  });
}

function schedule(reason) {
  clearTimeout(timer);
  timer = setTimeout(() => runSync(reason), 600);
}

if (!fs.existsSync(fotosDir)) {
  console.error("No existe la carpeta fotos/");
  process.exit(1);
}

console.log("Vigilando fotos/ … (png↔jpg se actualiza solo)");
console.log("Deja esta ventana abierta mientras reemplazas imágenes.");
runSync("inicio");

try {
  fs.watch(fotosDir, { recursive: false }, (eventType, filename) => {
    if (!filename) {
      schedule(eventType);
      return;
    }
    if (filename.includes("sin nombre")) return;
    schedule(`${eventType}: ${filename}`);
  });
} catch (err) {
  console.error("No se pudo vigilar la carpeta:", err.message);
  process.exit(1);
}
