/* Reconocimiento facial — compara una foto subida con el directorio (face-api en el navegador) */

const FOTO_ANON = "./icons/avatar-anon.png";
const MODEL_URL =
  "https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.15/model";
const MATCH_THRESHOLD = 0.52;
const CACHE_KEY = "face-descriptors-v1";

function detectOptions() {
  return new faceapi.TinyFaceDetectorOptions({
    inputSize: 416,
    scoreThreshold: 0.35,
  });
}

const statusDot = document.getElementById("faceStatusDot");
const statusLabel = document.getElementById("faceStatusLabel");
const statusMeta = document.getElementById("faceStatusMeta");
const progressWrap = document.getElementById("faceProgress");
const progressBar = document.getElementById("faceProgressBar");
const faceFile = document.getElementById("faceFile");
const faceDrop = document.getElementById("faceDrop");
const previewWrap = document.getElementById("facePreviewWrap");
const preview = document.getElementById("facePreview");
const overlay = document.getElementById("faceOverlay");
const analyzeBtn = document.getElementById("faceAnalyzeBtn");
const clearBtn = document.getElementById("faceClearBtn");
const results = document.getElementById("faceResults");
const resultsSummary = document.getElementById("faceResultsSummary");
const matchesEl = document.getElementById("faceMatches");

const navOpen = document.getElementById("navOpen");
const sideMenu = document.getElementById("sideMenu");
const sideMenuClose = document.getElementById("sideMenuClose");
const sideMenuBackdrop = document.getElementById("sideMenuBackdrop");

let hermanos = [];
let faceMatcher = null;
let ready = false;
let analyzing = false;
let currentObjectUrl = null;

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function resolveFotoArchivo(filename) {
  const name = String(filename || "").trim();
  return name || null;
}

function fotoUrl(filename) {
  return `./fotos/${encodeURIComponent(filename)}`;
}

function mapMiembroRow(row, index) {
  const fotoArchivo = resolveFotoArchivo(row.foto);
  const foto = fotoArchivo ? fotoUrl(fotoArchivo) : FOTO_ANON;
  return {
    id: row.id ?? index,
    nombre: row.nombre || "",
    organizacion: row.organizacion || "",
    telefono: row.telefono || "",
    foto,
    tieneFoto: !!(fotoArchivo && foto !== FOTO_ANON),
  };
}

function getSupabaseConfig() {
  const cfg = window.SUPABASE_CONFIG || {};
  const url = String(cfg.url || "").trim().replace(/\/$/, "");
  const anonKey = String(cfg.anonKey || "").trim();
  if (!url || !anonKey) return null;
  return { url, anonKey };
}

async function fetchMiembros() {
  const cfg = getSupabaseConfig();
  if (cfg) {
    try {
      const endpoint = `${cfg.url}/rest/v1/miembros?select=id,nombre,organizacion,telefono,foto&order=nombre.asc`;
      const response = await fetch(endpoint, {
        headers: {
          apikey: cfg.anonKey,
          Authorization: `Bearer ${cfg.anonKey}`,
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const rows = await response.json();
        if (Array.isArray(rows) && rows.length) return rows;
      }
    } catch (error) {
      console.warn("[face] Supabase no disponible, usando JSON local.", error);
    }
  }

  const response = await fetch("./data/miembros.json", { cache: "no-cache" });
  if (!response.ok) throw new Error(`No se pudo cargar el directorio (${response.status})`);
  const rows = await response.json();
  if (!Array.isArray(rows) || !rows.length) throw new Error("Directorio vacío");
  return rows;
}

function setStatus(state, label, meta) {
  if (statusDot) statusDot.dataset.state = state;
  if (statusLabel) statusLabel.textContent = label;
  if (statusMeta) statusMeta.textContent = meta || "";
}

function setProgress(current, total) {
  if (!progressWrap || !progressBar) return;
  if (!total) {
    progressWrap.hidden = true;
    return;
  }
  progressWrap.hidden = false;
  const pct = Math.round((current / total) * 100);
  progressBar.style.width = `${pct}%`;
}

function loadImageFromUrl(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`No se pudo cargar ${url}`));
    img.src = url;
  });
}

function descriptorFingerprint(members) {
  return members
    .map((m) => `${m.id}|${m.nombre}|${m.foto}`)
    .sort()
    .join("\n");
}

function saveDescriptorCache(fingerprint, labeled) {
  try {
    const payload = {
      fingerprint,
      savedAt: Date.now(),
      entries: labeled.map((item) => ({
        label: item.label,
        descriptors: item.descriptors.map((d) => Array.from(d)),
      })),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn("[face] No se pudo guardar caché de rostros.", error);
  }
}

function loadDescriptorCache(fingerprint) {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const payload = JSON.parse(raw);
    if (!payload || payload.fingerprint !== fingerprint) return null;
    if (!Array.isArray(payload.entries) || !payload.entries.length) return null;
    return payload.entries.map(
      (entry) =>
        new faceapi.LabeledFaceDescriptors(
          entry.label,
          entry.descriptors.map((arr) => new Float32Array(arr))
        )
    );
  } catch (error) {
    console.warn("[face] Caché de rostros inválida.", error);
    return null;
  }
}

async function detectDescriptor(img) {
  return faceapi
    .detectSingleFace(img, detectOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();
}

async function detectAllDescriptors(img) {
  return faceapi
    .detectAllFaces(img, detectOptions())
    .withFaceLandmarks()
    .withFaceDescriptors();
}

async function buildLabeledDescriptors(membersWithPhoto) {
  const fingerprint = descriptorFingerprint(membersWithPhoto);
  const cached = loadDescriptorCache(fingerprint);
  if (cached) {
    setStatus("ready", "Índice facial listo", `${cached.length} rostros desde caché local`);
    setProgress(0, 0);
    return cached;
  }

  const labeled = [];
  const total = membersWithPhoto.length;
  setStatus("loading", "Indexando fotos del directorio…", "Detectando rostros en el padrón");

  for (let i = 0; i < total; i++) {
    const member = membersWithPhoto[i];
    setProgress(i + 1, total);
    setStatus(
      "loading",
      "Indexando fotos del directorio…",
      `${i + 1} / ${total} · ${member.nombre}`
    );
    try {
      const img = await loadImageFromUrl(member.foto);
      const detection = await detectDescriptor(img);
      if (detection?.descriptor) {
        labeled.push(
          new faceapi.LabeledFaceDescriptors(member.nombre, [detection.descriptor])
        );
      }
    } catch (error) {
      console.warn(`[face] Sin rostro usable: ${member.nombre}`, error);
    }
    // Yield so the UI can update on mobile
    await new Promise((r) => setTimeout(r, 0));
  }

  setProgress(0, 0);
  if (labeled.length) saveDescriptorCache(fingerprint, labeled);
  return labeled;
}

function byNombre(nombre) {
  const key = normalize(nombre);
  return hermanos.find((h) => normalize(h.nombre) === key) || null;
}

function confidenceFromDistance(distance) {
  const score = Math.max(0, Math.min(1, 1 - distance / Math.max(MATCH_THRESHOLD * 1.35, 0.01)));
  return Math.round(score * 100);
}

function drawDetections(detections, matches) {
  if (!preview || !overlay) return;
  const displayW = preview.clientWidth;
  const displayH = preview.clientHeight;
  const naturalW = preview.naturalWidth || 1;
  const naturalH = preview.naturalHeight || 1;
  if (!displayW || !displayH) return;

  overlay.width = displayW;
  overlay.height = displayH;
  const ctx = overlay.getContext("2d");
  ctx.clearRect(0, 0, displayW, displayH);

  const scale = Math.min(displayW / naturalW, displayH / naturalH);
  const drawnW = naturalW * scale;
  const drawnH = naturalH * scale;
  const offsetX = (displayW - drawnW) / 2;
  const offsetY = (displayH - drawnH) / 2;

  detections.forEach((det, index) => {
    const box = det.detection.box;
    const match = matches[index];
    const known = match && match.label !== "unknown";
    const x = offsetX + box.x * scale;
    const y = offsetY + box.y * scale;
    const w = box.width * scale;
    const h = box.height * scale;

    ctx.strokeStyle = known ? "rgba(61, 222, 140, 0.95)" : "rgba(240, 164, 58, 0.95)";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(x, y, w, h);

    const label = known
      ? `${match.label} · ${confidenceFromDistance(match.distance)}%`
      : "No reconocido";
    ctx.font = "600 13px Rajdhani, system-ui, sans-serif";
    const padX = 8;
    const textW = Math.min(ctx.measureText(label).width + padX * 2, displayW - 8);
    const textH = 22;
    const ty = Math.max(0, y - textH - 4);
    ctx.fillStyle = known ? "rgba(8, 40, 28, 0.92)" : "rgba(40, 28, 8, 0.92)";
    ctx.fillRect(x, ty, textW, textH);
    ctx.fillStyle = "#e8f4ff";
    ctx.fillText(label, x + padX, ty + 15, textW - padX * 2);
  });
}

function renderMatches(matchRows) {
  if (!matchesEl || !results || !resultsSummary) return;
  results.hidden = false;
  matchesEl.innerHTML = "";

  const known = matchRows.filter((row) => row.known);
  if (!matchRows.length) {
    resultsSummary.textContent = "No se detectó ningún rostro en la foto.";
    return;
  }

  if (!known.length) {
    resultsSummary.textContent =
      matchRows.length === 1
        ? "Se detectó un rostro, pero no coincide con nadie del directorio."
        : `Se detectaron ${matchRows.length} rostros, pero ninguno coincide con el directorio.`;
  } else if (known.length === 1) {
    resultsSummary.textContent = `Coincide con: ${known[0].nombre}.`;
  } else {
    resultsSummary.textContent = `Se reconocieron ${known.length} personas del directorio.`;
  }

  for (const row of matchRows) {
    const article = document.createElement("article");
    article.className = `face-match${row.known ? " is-known" : " is-unknown"}`;

    const img = document.createElement("img");
    img.className = "face-match-photo";
    img.alt = row.nombre;
    img.src = row.foto || FOTO_ANON;
    img.loading = "lazy";

    const body = document.createElement("div");
    body.className = "face-match-body";

    const name = document.createElement("h3");
    name.className = "face-match-name";
    name.textContent = row.nombre;

    const meta = document.createElement("p");
    meta.className = "face-match-meta";
    meta.textContent = row.known
      ? `${row.organizacion || "Sin organización"} · Confianza ${row.confidence}%`
      : "Rostro detectado sin coincidencia clara en el padrón";

    body.append(name, meta);

    if (row.known && row.telefono) {
      const tel = document.createElement("a");
      tel.className = "face-match-tel";
      tel.href = `tel:${row.telefono.replace(/\s+/g, "")}`;
      tel.textContent = row.telefono;
      body.append(tel);
    }

    if (row.known) {
      const link = document.createElement("a");
      link.className = "face-match-link";
      link.href = `./index.html?q=${encodeURIComponent(row.nombre)}`;
      link.textContent = "Ver en el directorio";
      body.append(link);
    }

    article.append(img, body);
    matchesEl.append(article);
  }
}

async function analyzeCurrentImage() {
  if (!ready || !faceMatcher || analyzing || !preview?.src) return;
  analyzing = true;
  analyzeBtn.disabled = true;
  setStatus("loading", "Analizando fotografía…", "Buscando coincidencias en el directorio");

  try {
    const img = await loadImageFromUrl(preview.src);
    const detections = await detectAllDescriptors(img);

    if (!detections.length) {
      drawDetections([], []);
      renderMatches([]);
      setStatus("ready", "Listo para otra foto", `${faceMatcher.labeledDescriptors.length} rostros indexados`);
      return;
    }

    const matchResults = detections.map((det) => faceMatcher.findBestMatch(det.descriptor));
    drawDetections(detections, matchResults);

    const rows = matchResults.map((best) => {
      const known = best.label !== "unknown";
      const hermano = known ? byNombre(best.label) : null;
      return {
        known,
        nombre: known ? best.label : "Persona no identificada",
        confidence: known ? confidenceFromDistance(best.distance) : 0,
        distance: best.distance,
        foto: hermano?.foto || FOTO_ANON,
        organizacion: hermano?.organizacion || "",
        telefono: hermano?.telefono || "",
      };
    });

    renderMatches(rows);
    setStatus(
      "ready",
      knownCountLabel(rows),
      `${faceMatcher.labeledDescriptors.length} rostros indexados`
    );
  } catch (error) {
    console.error(error);
    setStatus("error", "No se pudo analizar la foto", error.message || "Error desconocido");
  } finally {
    analyzing = false;
    analyzeBtn.disabled = !preview?.src;
    clearBtn.disabled = !preview?.src;
  }
}

function knownCountLabel(rows) {
  const n = rows.filter((r) => r.known).length;
  if (!n) return "Sin coincidencias en el directorio";
  if (n === 1) return "Hermano reconocido";
  return `${n} hermanos reconocidos`;
}

function clearPreview() {
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = null;
  }
  if (preview) preview.removeAttribute("src");
  if (previewWrap) previewWrap.hidden = true;
  if (overlay) {
    const ctx = overlay.getContext("2d");
    ctx?.clearRect(0, 0, overlay.width, overlay.height);
  }
  if (faceFile) faceFile.value = "";
  if (results) results.hidden = true;
  if (matchesEl) matchesEl.innerHTML = "";
  analyzeBtn.disabled = true;
  clearBtn.disabled = true;
}

function setPreviewFromFile(file) {
  if (!file || !file.type.startsWith("image/")) return;
  clearPreview();
  currentObjectUrl = URL.createObjectURL(file);
  preview.src = currentObjectUrl;
  previewWrap.hidden = false;
  analyzeBtn.disabled = !ready;
  clearBtn.disabled = false;
  results.hidden = true;
  preview.onload = () => {
    if (overlay) {
      overlay.width = preview.clientWidth;
      overlay.height = preview.clientHeight;
    }
  };
}

function openMenu() {
  if (!sideMenu) return;
  sideMenu.hidden = false;
  document.body.classList.add("menu-open");
  navOpen?.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  if (!sideMenu) return;
  sideMenu.hidden = true;
  document.body.classList.remove("menu-open");
  navOpen?.setAttribute("aria-expanded", "false");
  navOpen?.focus();
}

navOpen?.addEventListener("click", () => {
  if (sideMenu?.hidden) openMenu();
  else closeMenu();
});
sideMenuClose?.addEventListener("click", closeMenu);
sideMenuBackdrop?.addEventListener("click", closeMenu);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sideMenu && !sideMenu.hidden) closeMenu();
});

faceFile?.addEventListener("change", () => {
  const file = faceFile.files?.[0];
  if (file) {
    setPreviewFromFile(file);
    if (ready) analyzeCurrentImage();
  }
});

analyzeBtn?.addEventListener("click", () => {
  analyzeCurrentImage();
});

clearBtn?.addEventListener("click", () => {
  clearPreview();
  if (ready) {
    setStatus(
      "ready",
      "Listo para reconocer",
      `${faceMatcher?.labeledDescriptors?.length || 0} rostros indexados`
    );
  }
});

["dragenter", "dragover"].forEach((type) => {
  faceDrop?.addEventListener(type, (event) => {
    event.preventDefault();
    faceDrop.classList.add("is-dragover");
  });
});
["dragleave", "drop"].forEach((type) => {
  faceDrop?.addEventListener(type, (event) => {
    event.preventDefault();
    faceDrop.classList.remove("is-dragover");
  });
});
faceDrop?.addEventListener("drop", (event) => {
  const file = event.dataTransfer?.files?.[0];
  if (file) {
    setPreviewFromFile(file);
    if (ready) analyzeCurrentImage();
  }
});

async function boot() {
  if (typeof faceapi === "undefined") {
    setStatus("error", "No se cargó el motor facial", "Revisa la conexión e intenta de nuevo");
    return;
  }

  try {
    setStatus("loading", "Cargando modelos de IA…", "Detección y comparación de rostros");
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    ]);

    setStatus("loading", "Cargando directorio…", "Preparando fotos con rostro");
    const rows = await fetchMiembros();
    hermanos = rows.map(mapMiembroRow);
    const withPhoto = hermanos.filter((h) => h.tieneFoto);

    if (!withPhoto.length) {
      setStatus("error", "No hay fotos en el directorio", "Agrega fotos de perfil para poder reconocer");
      return;
    }

    const labeled = await buildLabeledDescriptors(withPhoto);
    if (!labeled.length) {
      setStatus(
        "error",
        "No se detectaron rostros en las fotos del padrón",
        "Usa fotos frontales y claras en el directorio"
      );
      return;
    }

    faceMatcher = new faceapi.FaceMatcher(labeled, MATCH_THRESHOLD);
    ready = true;
    faceFile.disabled = false;
    setStatus(
      "ready",
      "Listo para reconocer",
      `${labeled.length} de ${withPhoto.length} fotos indexadas`
    );
  } catch (error) {
    console.error(error);
    setStatus("error", "Error al preparar el reconocimiento", error.message || "Error desconocido");
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

boot();
