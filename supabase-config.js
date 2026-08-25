/* Configuración de Supabase — Directorio Llo-Lleo */
window.SUPABASE_CONFIG = {
  url: "https://tpwfljbbxrkszydovhiz.supabase.co",
  anonKey: "sb_publishable_hInOh-T0AqDLiquyriXH9g_mq67qKxG",
  /** Bucket público de fotos (ver supabase/storage-fotos.sql) */
  fotosBucket: "fotos-miembros",
};

/** Extensiones que se prueban al cambiar png↔jpg↔jpeg sin re-sincronizar a mano */
window.FOTO_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

/**
 * Normaliza el nombre de archivo de foto (sin ruta).
 * Acepta filename, ./fotos/x, o URL completa de Storage.
 */
window.fotoFilename = function fotoFilename(value) {
  let name = String(value || "").trim();
  if (!name) return "";
  if (/^https?:\/\//i.test(name)) {
    try {
      const u = new URL(name);
      const parts = u.pathname.split("/").filter(Boolean);
      const idx = parts.findIndex((p) => p === "fotos-miembros" || p === "public");
      if (idx >= 0 && parts[idx + 1]) {
        name = parts.slice(idx + (parts[idx] === "public" ? 2 : 1)).join("/");
      } else {
        name = parts[parts.length - 1] || "";
      }
    } catch {
      /* keep */
    }
  }
  name = name.replace(/^(\.\/)?fotos\//i, "").replace(/^\/+/, "");
  try {
    name = decodeURIComponent(name);
  } catch {
    /* keep */
  }
  return name;
};

/**
 * Clave válida para Supabase Storage (sin tildes ni caracteres raros).
 */
window.fotoStorageKey = function fotoStorageKey(value) {
  const name = window.fotoFilename(value);
  if (!name) return "";
  const extMatch = name.match(/(\.[a-z0-9]+)$/i);
  const ext = extMatch ? extMatch[1].toLowerCase() : "";
  const base = extMatch ? name.slice(0, -ext.length) : name;
  const safe = base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._\s-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return `${safe}${ext}`;
};

/** Candidatos locales por si cambió la extensión (png → jpg, etc.). */
window.fotoAltCandidates = function fotoAltCandidates(value) {
  const name = window.fotoFilename(value);
  if (!name) return [];
  const extMatch = name.match(/(\.[a-z0-9]+)$/i);
  const base = extMatch ? name.slice(0, -extMatch[1].length) : name;
  const exts = window.FOTO_EXTS || [".jpg", ".jpeg", ".png", ".webp", ".gif"];
  const out = [];
  const push = (f) => {
    if (f && !out.includes(f)) out.push(f);
  };
  push(name);
  for (const ext of exts) push(`${base}${ext}`);
  return out;
};

/** URL local (carpeta /fotos del sitio). */
window.fotoLocalUrl = function fotoLocalUrl(value) {
  const raw = String(value || "").trim();
  if (/^(\.\/)?fotos\//i.test(raw) && !/%25/i.test(raw)) {
    return raw.startsWith("./") || raw.startsWith("/") ? raw : `./${raw}`;
  }
  const name = window.fotoFilename(value);
  if (!name) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  return `./fotos/${name
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/\?/g, "%3F")
    .replace(/ /g, "%20")}`;
};

/** URL pública en Supabase Storage. */
window.fotoCloudUrl = function fotoCloudUrl(value) {
  const cfg = window.SUPABASE_CONFIG || {};
  const base = String(cfg.url || "").trim().replace(/\/$/, "");
  const bucket = String(cfg.fotosBucket || "fotos-miembros").trim() || "fotos-miembros";
  const raw = String(value || "").trim();
  if (/^https?:\/\//i.test(raw) && raw.includes("/storage/")) {
    return raw;
  }
  const name = window.fotoStorageKey(value);
  if (!base || !name) return "";
  return `${base}/storage/v1/object/public/${bucket}/${encodeURIComponent(name)}`;
};

/**
 * Fallback en cascada:
 * 1) otras extensiones locales (png→jpg→jpeg…)
 * 2) nube (mismas variantes)
 * 3) avatar anónimo
 *
 * data-candidates="a.png|a.jpg|a.jpeg"
 * data-cloud-candidates opcionales; si no, se derivan
 */
window.fotoImgFallback = function fotoImgFallback(img) {
  if (!img) return;
  const anon = img.dataset.anon || "./icons/avatar-anon.png";
  const localCands = String(img.dataset.candidates || "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  let idx = Number(img.dataset.candIndex || 0);

  // Siguiente candidato local
  if (idx + 1 < localCands.length) {
    idx += 1;
    img.dataset.candIndex = String(idx);
    img.dataset.fotoStage = "local";
    const next = localCands[idx];
    img.src =
      typeof window.fotoLocalUrl === "function"
        ? window.fotoLocalUrl(next)
        : `./fotos/${encodeURIComponent(next)}`;
    return;
  }

  // Candidatos en la nube
  let cloudCands = String(img.dataset.cloudCandidates || "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  if (!cloudCands.length && typeof window.fotoCloudUrl === "function") {
    cloudCands = localCands
      .map((f) => window.fotoCloudUrl(f))
      .filter(Boolean);
    // unique
    cloudCands = [...new Set(cloudCands)];
  }
  let cloudIdx = Number(img.dataset.cloudIndex || -1);
  if (cloudIdx + 1 < cloudCands.length) {
    cloudIdx += 1;
    img.dataset.cloudIndex = String(cloudIdx);
    img.dataset.fotoStage = "cloud";
    img.src = cloudCands[cloudIdx];
    return;
  }

  img.onerror = null;
  img.src = anon;
};
