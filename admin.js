/* Panel admin — Auth + CRUD con fetch (sin CDN) */

(function () {
  // Evita zoom por pellizco / gestos en iOS (el doble toque lo cubre touch-action: manipulation)
  const lockViewportMeta = () => {
    const meta = document.querySelector('meta[name="viewport"]');
    if (!meta) return;
    meta.setAttribute(
      "content",
      "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
    );
  };
  lockViewportMeta();
  ["gesturestart", "gesturechange", "gestureend"].forEach((type) => {
    document.addEventListener(type, (event) => event.preventDefault(), { passive: false });
  });

  const cfg = window.SUPABASE_CONFIG || {};
  const supabaseUrl = String(cfg.url || "").trim().replace(/\/$/, "");
  const supabaseKey = String(cfg.anonKey || "").trim();
  const STORAGE_KEY = "directorio-admin-session";

  const loginView = document.getElementById("loginView");
  const adminView = document.getElementById("adminView");
  const loginForm = document.getElementById("loginForm");
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const loginError = document.getElementById("loginError");
  const loginSubmit = document.getElementById("loginSubmit");
  const logoutBtn = document.getElementById("logoutBtn");
  const adminUser = document.getElementById("adminUser");
  const adminSearch = document.getElementById("adminSearch");
  const addBtn = document.getElementById("addBtn");
  const adminMeta = document.getElementById("adminMeta");
  const adminError = document.getElementById("adminError");
  const adminTableBody = document.getElementById("adminTableBody");
  const memberModal = document.getElementById("memberModal");
  const memberForm = document.getElementById("memberForm");
  const memberModalTitle = document.getElementById("memberModalTitle");
  const memberModalClose = document.getElementById("memberModalClose");
  const memberCancel = document.getElementById("memberCancel");
  const formError = document.getElementById("formError");
  const refreshStatsBtn = document.getElementById("refreshStatsBtn");
  const adminStatusText = document.getElementById("adminStatusText");
  const adminTabs = Array.from(document.querySelectorAll(".admin-tab"));
  const adminPanels = Array.from(document.querySelectorAll(".admin-panel"));
  const asistenciaError = document.getElementById("asistenciaError");
  const asistenciaOk = document.getElementById("asistenciaOk");
  const attCalendar = document.getElementById("attCalendar");
  const attMonth = document.getElementById("attMonth");
  const attYear = document.getElementById("attYear");
  const attPrevMonth = document.getElementById("attPrevMonth");
  const attNextMonth = document.getElementById("attNextMonth");
  const attTodayBtn = document.getElementById("attTodayBtn");
  const attRefreshBtn = document.getElementById("attRefreshBtn");
  const attMonthMeta = document.getElementById("attMonthMeta");
  const attDayTitle = document.getElementById("attDayTitle");
  const attDayMeta = document.getElementById("attDayMeta");
  const attDayStats = document.getElementById("attDayStats");
  const attPresentCount = document.getElementById("attPresentCount");
  const attAbsentCount = document.getElementById("attAbsentCount");
  const attPercent = document.getElementById("attPercent");
  const attSumDays = document.getElementById("attSumDays");
  const attSumAvg = document.getElementById("attSumAvg");
  const attSumBest = document.getElementById("attSumBest");
  const attSearch = document.getElementById("attSearch");
  const attRoll = document.getElementById("attRoll");
  const attSyncStatus = document.getElementById("attSyncStatus");
  const attMarkAll = document.getElementById("attMarkAll");
  const attClearAll = document.getElementById("attClearAll");
  const attExportPdf = document.getElementById("attExportPdf");
  const attFiltersBtn = document.getElementById("attFiltersBtn");
  const attFiltersPanel = document.getElementById("attFiltersPanel");
  const attFiltersCurrent = document.getElementById("attFiltersCurrent");

  let session = null;
  let miembros = [];
  let searchQuery = "";
  let activePanel = "stats";
  let attView = new Date();
  let attSelectedDate = null;
  let attMonthRows = [];
  let attDayPresent = new Set();
  let attSearchQuery = "";
  let attRollFilter = "all";
  let attDirty = false;
  let attCloudReady = null; // null unknown, true/false
  const ATT_LOCAL_KEY = "directorio-asistencia-v1";

  const MES_NOMBRES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
  ];
  const DIA_NOMBRES = [
    "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado",
  ];

  function showError(el, message) {
    if (!el) return;
    if (!message) {
      el.hidden = true;
      el.textContent = "";
      return;
    }
    el.hidden = false;
    el.textContent = message;
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const FOTO_ANON = "./icons/avatar-anon.png";
  let fotoPorNombreAdmin = new Map();

  function normalizeFotoText(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function nameTokensFoto(text) {
    return [
      ...new Set(
        normalizeFotoText(text)
          .replace(/\bdavia\b/g, "da via")
          .replace(/\bda-via\b/g, "da via")
          .replace(/[^a-z0-9\s]/g, " ")
          .split(/\s+/)
          .filter(Boolean)
      ),
    ]
      .sort()
      .join(" ");
  }

  function nombreDesdeArchivoFoto(filename) {
    const base = String(filename || "").replace(/\.[^.]+$/, "").trim();
    if (base.includes(",")) {
      const [apellidos, nombres] = base.split(",").map((p) => p.trim());
      return `${nombres} ${apellidos}`;
    }
    return base;
  }

  function overlapFotoScore(a, b) {
    const A = nameTokensFoto(a).split(" ").filter(Boolean);
    const B = nameTokensFoto(b).split(" ").filter(Boolean);
    if (!A.length || !B.length) return 0;
    const setA = new Set(A);
    const setB = new Set(B);
    let hit = 0;
    for (const t of A) if (setB.has(t)) hit++;
    const base = hit / Math.max(A.length, B.length);
    const smaller = A.length <= B.length ? A : B;
    const largerSet = A.length <= B.length ? setB : setA;
    if (smaller.length >= 3 && smaller.every((t) => largerSet.has(t))) {
      return Math.max(base, 0.92);
    }
    return base;
  }

  function fotoMatchScoreAdmin(fileLabel, hermanoNombre) {
    const fileTok = nameTokensFoto(fileLabel).split(" ").filter(Boolean);
    const hermTok = nameTokensFoto(hermanoNombre).split(" ").filter(Boolean);
    if (!fileTok.length || !hermTok.length) return 0;
    const fileKey = fileTok.slice().sort().join(" ");
    const hermKey = hermTok.slice().sort().join(" ");
    if (fileKey === hermKey) return 1;

    const fileSet = new Set(fileTok);
    const hermSet = new Set(hermTok);
    let hitFile = 0;
    for (const t of fileTok) if (hermSet.has(t)) hitFile++;
    let hitHerm = 0;
    for (const t of hermTok) if (fileSet.has(t)) hitHerm++;
    const fileCovered = hitFile / fileTok.length;
    const hermCovered = hitHerm / hermTok.length;
    if (hermCovered < 0.9 || fileCovered < 0.85) {
      return Math.min(fileCovered, hermCovered) * 0.5;
    }
    return (fileCovered + hermCovered) / 2;
  }

  function getFotosIndex() {
    const idx = window.FOTOS_INDEX || {};
    return {
      files: Array.isArray(idx.files) ? idx.files : [],
      overrides: idx.overrides && typeof idx.overrides === "object" ? idx.overrides : {},
    };
  }

  function rebuildFotoPorNombreAdmin() {
    fotoPorNombreAdmin = new Map();
    const { files, overrides } = getFotosIndex();
    if (!miembros.length || !files.length) return;

    const byKey = new Map();
    for (const file of files) {
      const key =
        nameTokensFoto(nombreDesdeArchivoFoto(file)) ||
        file.replace(/\.[^.]+$/, "");
      const prev = byKey.get(key);
      if (!prev) {
        byKey.set(key, file);
        continue;
      }
      if (/\.png$/i.test(file) && !/\.png$/i.test(prev)) byKey.set(key, file);
    }
    const unique = [...byKey.values()];
    const pairs = [];
    for (const file of unique) {
      const label = nombreDesdeArchivoFoto(file);
      for (let i = 0; i < miembros.length; i++) {
        const score = fotoMatchScoreAdmin(label, miembros[i].nombre);
        if (score >= 0.8) pairs.push({ file, index: i, score });
      }
    }
    pairs.sort((a, b) => b.score - a.score || a.index - b.index);
    const usedFiles = new Set();
    const usedIdx = new Set();
    for (const p of pairs) {
      if (usedFiles.has(p.file) || usedIdx.has(p.index)) continue;
      if (
        /laura elizabeth acevedo rojas/i.test(nombreDesdeArchivoFoto(p.file)) &&
        /laura elizabeth de miranda acevedo/i.test(miembros[p.index].nombre)
      ) {
        continue;
      }
      usedFiles.add(p.file);
      usedIdx.add(p.index);
      const urlFile = p.file;
      fotoPorNombreAdmin.set(nameTokensFoto(miembros[p.index].nombre), urlFile);
    }
    for (const [tokenKey, file] of Object.entries(overrides)) {
      if (!files.includes(file)) continue;
      fotoPorNombreAdmin.set(tokenKey, file);
    }
  }

  function resolveFotoArchivoAdmin(filename) {
    const { files } = getFotosIndex();
    let name = String(filename || "")
      .trim()
      .replace(/^(\.\/)?fotos\//i, "");
    if (!name) return null;
    try {
      name = decodeURIComponent(name);
    } catch {
      /* keep */
    }
    if (!files.length) return name;
    if (files.includes(name)) return name;
    const base = name.replace(/\.[^.]+$/, "").normalize("NFC");
    const baseKey = nameTokensFoto(base);
    const same = files.filter((f) => {
      const fBase = f.replace(/\.[^.]+$/, "").normalize("NFC");
      return fBase === base || nameTokensFoto(fBase) === baseKey;
    });
    if (same.length) {
      return (
        same.find((f) => /\.png$/i.test(f)) ||
        same.find((f) => /\.jpe?g$/i.test(f)) ||
        same[0]
      );
    }
    return name;
  }

  function resolveMiembroFotoArchivo(m) {
    const { overrides } = getFotosIndex();
    const override = overrides[nameTokensFoto(m?.nombre || "")];
    if (override) return override;
    const byName = fotoPorNombreAdmin.get(nameTokensFoto(m?.nombre || ""));
    if (byName) return byName;
    const fromDb = resolveFotoArchivoAdmin(m?.foto);
    if (fromDb) return fromDb;
    return null;
  }

  /** Rellena m.foto desde el índice para que asistencia/admin vean la imagen aunque Supabase aún tenga null. */
  function enrichMiembrosFotos() {
    for (const m of miembros) {
      const archivo = resolveMiembroFotoArchivo(m);
      if (archivo) m.foto = archivo;
    }
  }

  function fotoMiembroUrl(foto) {
    const raw = String(foto || "").trim();
    if (!raw) return FOTO_ANON;
    if (typeof window.fotoLocalUrl === "function") {
      return window.fotoLocalUrl(raw) || FOTO_ANON;
    }
    const name =
      (typeof window.fotoFilename === "function" && window.fotoFilename(raw)) ||
      raw.replace(/^(\.\/)?fotos\//i, "");
    if (!name) return FOTO_ANON;
    if (/^https?:\/\//i.test(name) || name.startsWith("./") || name.startsWith("/")) {
      return name;
    }
    return `./fotos/${name
      .replace(/%/g, "%25")
      .replace(/#/g, "%23")
      .replace(/\?/g, "%3F")
      .replace(/ /g, "%20")}`;
  }

  function fotoMiembroCloudUrl(foto) {
    if (typeof window.fotoCloudUrl === "function") {
      return window.fotoCloudUrl(foto) || "";
    }
    return "";
  }

  function fotoMiembroImgAttrs(mOrFoto) {
    const archivo =
      mOrFoto && typeof mOrFoto === "object"
        ? resolveMiembroFotoArchivo(mOrFoto)
        : mOrFoto;
    if (!archivo) {
      return `src="${escapeHtml(FOTO_ANON)}" data-candidates="" data-anon="${escapeHtml(FOTO_ANON)}" data-foto-stage="anon" onerror="this.onerror=null;this.src='${escapeHtml(FOTO_ANON)}'"`;
    }
    const cands =
      typeof window.fotoAltCandidates === "function"
        ? window.fotoAltCandidates(archivo)
        : [archivo];
    const primary = resolveFotoArchivoAdmin(archivo) || cands[0] || archivo;
    const local = fotoMiembroUrl(primary);
    const cloud = fotoMiembroCloudUrl(primary);
    const cloudCands = [
      ...new Set(
        cands
          .map((f) => fotoMiembroCloudUrl(f))
          .filter(Boolean)
      ),
    ];
    return `src="${escapeHtml(local)}" data-candidates="${escapeHtml(cands.join("|"))}" data-cand-index="0" data-cloud="${escapeHtml(cloud)}" data-cloud-candidates="${escapeHtml(cloudCands.join("|"))}" data-cloud-index="-1" data-anon="${escapeHtml(FOTO_ANON)}" data-foto-stage="local" onerror="window.fotoImgFallback&&window.fotoImgFallback(this)"`;
  }

  function fotoMiembroUrlFromMember(m) {
    return fotoMiembroUrl(resolveMiembroFotoArchivo(m));
  }

  function saveSession(next) {
    session = next;
    if (next) localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    else localStorage.removeItem(STORAGE_KEY);
  }

  function loadSession() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function setLoggedIn(nextSession) {
    saveSession(nextSession);
    const logged = Boolean(nextSession?.access_token);
    if (logged) {
      loginView.setAttribute("hidden", "");
      adminView.removeAttribute("hidden");
      adminUser.textContent = nextSession.user?.email || "Administrador";
    } else {
      adminView.setAttribute("hidden", "");
      loginView.removeAttribute("hidden");
      adminUser.textContent = "";
    }
  }

  function authHeaders(extra = {}) {
    const token = session?.access_token || supabaseKey;
    return {
      apikey: supabaseKey,
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...extra,
    };
  }

  async function api(path, options = {}) {
    await ensureFreshSession();
    const response = await fetch(`${supabaseUrl}${path}`, {
      ...options,
      headers: authHeaders(options.headers || {}),
    });
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = text;
    }
    if (response.status === 401 && session?.refresh_token && !options._retried) {
      try {
        await refreshSession(session);
        return api(path, { ...options, _retried: true });
      } catch {
        setLoggedIn(null);
      }
    }
    if (!response.ok) {
      const message =
        (Array.isArray(data) && data[0]?.message) ||
        data?.msg ||
        data?.message ||
        data?.error_description ||
        data?.error ||
        data?.hint ||
        data?.details ||
        `Error ${response.status}`;
      throw new Error(String(message));
    }
    return data;
  }

  async function signIn(email, password) {
    const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = text;
    }
    if (!response.ok) {
      const message =
        data?.msg ||
        data?.message ||
        data?.error_description ||
        data?.error ||
        `Error ${response.status}`;
      throw new Error(String(message));
    }
    return data;
  }

  function sessionExpiresAt(sess) {
    if (!sess) return 0;
    if (sess.expires_at) return Number(sess.expires_at) * 1000;
    if (sess.expires_in) {
      return Date.now() + Number(sess.expires_in) * 1000;
    }
    return 0;
  }

  function isSessionExpired(sess, skewMs = 60_000) {
    const exp = sessionExpiresAt(sess);
    if (!exp) return false;
    return Date.now() >= exp - skewMs;
  }

  async function refreshSession(current = session) {
    const refreshToken = current?.refresh_token;
    if (!refreshToken) throw new Error("Sesión sin refresh_token");
    const response = await fetch(
      `${supabaseUrl}/auth/v1/token?grant_type=refresh_token`,
      {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      }
    );
    const text = await response.text();
    let parsed = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      parsed = text;
    }
    if (!response.ok) {
      const message =
        parsed?.msg ||
        parsed?.message ||
        parsed?.error_description ||
        parsed?.error ||
        `Error ${response.status}`;
      throw new Error(String(message));
    }
    if (!parsed?.access_token) throw new Error("No se pudo renovar la sesión");
    const next = {
      ...current,
      ...parsed,
      user: parsed.user || current?.user,
    };
    saveSession(next);
    return next;
  }

  async function ensureFreshSession() {
    if (!session?.access_token) return null;
    if (!isSessionExpired(session)) return session;
    try {
      return await refreshSession(session);
    } catch (err) {
      console.warn("[admin] No se pudo renovar la sesión", err);
      setLoggedIn(null);
      showError(loginError, "Tu sesión expiró. Vuelve a iniciar sesión.");
      return null;
    }
  }

  async function fetchMiembros() {
    return api("/rest/v1/miembros?select=*&order=nombre.asc");
  }

  async function insertMiembro(payload) {
    return api("/rest/v1/miembros", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(payload),
    });
  }

  async function updateMiembro(id, payload) {
    return api(`/rest/v1/miembros?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(payload),
    });
  }

  async function deleteMiembro(id) {
    return api(`/rest/v1/miembros?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
  }

  function flagsHtml(m) {
    const badges = [];
    if (m.recien_converso)
      badges.push('<span class="admin-badge is-recien">Recién</span>');
    if (m.obispado) badges.push('<span class="admin-badge">Obispado</span>');
    if (m.sociedad_socorro)
      badges.push('<span class="admin-badge is-ss">Pres. SS</span>');
    if (m.quorum_elderes)
      badges.push('<span class="admin-badge is-elderes">Pres. Élderes</span>');
    if (m.etiqueta_llamamiento) {
      badges.push(
        `<span class="admin-badge">${escapeHtml(m.etiqueta_llamamiento)}</span>`
      );
    }
    return badges.join("") || '<span class="admin-sub">—</span>';
  }

  function filteredMiembros() {
    const q = searchQuery.trim();
    if (!q) return miembros;
    return miembros.filter((m) => {
      const blob = [
        m.nombre,
        m.telefono,
        m.correo,
        m.organizacion,
        m.llamamiento,
        m.etiqueta_llamamiento,
      ].join(" ");
      return fuzzyTextMatchAdmin(blob, q);
    });
  }

  function setPanel(panelId) {
    activePanel = panelId || "stats";
    adminTabs.forEach((tab) => {
      const on = tab.dataset.panel === activePanel;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-pressed", on ? "true" : "false");
    });
    adminPanels.forEach((panel) => {
      const on = panel.dataset.panel === activePanel;
      panel.classList.toggle("is-active", on);
      if (on) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    });
    if (activePanel === "asistencia") {
      ensureAttendanceSelectors();
      renderAttendanceCalendar();
      loadAttendanceMonth();
    }
  }

  function toDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function parseDateKey(key) {
    const [y, m, d] = String(key || "").split("-").map(Number);
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  }

  function formatDateLong(date) {
    return `${DIA_NOMBRES[date.getDay()]} ${date.getDate()} de ${MES_NOMBRES[date.getMonth()]} ${date.getFullYear()}`;
  }

  function ensureAttendanceSelectors() {
    if (!attMonth || !attYear || attMonth.options.length) return;
    MES_NOMBRES.forEach((name, index) => {
      const opt = document.createElement("option");
      opt.value = String(index);
      opt.textContent = name;
      attMonth.appendChild(opt);
    });
    const yearNow = new Date().getFullYear();
    for (let y = yearNow - 6; y <= yearNow + 1; y += 1) {
      const opt = document.createElement("option");
      opt.value = String(y);
      opt.textContent = String(y);
      attYear.appendChild(opt);
    }
    attMonth.value = String(attView.getMonth());
    attYear.value = String(attView.getFullYear());
  }

  function syncAttendanceSelectors() {
    if (!attMonth || !attYear) return;
    attMonth.value = String(attView.getMonth());
    attYear.value = String(attView.getFullYear());
  }

  function monthBounds(date) {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return { start: toDateKey(start), end: toDateKey(end) };
  }

  function readLocalAttendanceStore() {
    try {
      const raw = localStorage.getItem(ATT_LOCAL_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function writeLocalAttendanceStore(store) {
    localStorage.setItem(ATT_LOCAL_KEY, JSON.stringify(store || {}));
  }

  function getLocalDaySet(fecha) {
    const store = readLocalAttendanceStore();
    const ids = Array.isArray(store[fecha]) ? store[fecha] : [];
    return new Set(ids.map(String));
  }

  function saveLocalDaySet(fecha, idSet) {
    const store = readLocalAttendanceStore();
    const ids = [...idSet].map(String);
    if (ids.length) store[fecha] = ids;
    else delete store[fecha];
    writeLocalAttendanceStore(store);
  }

  function setLocalMemberPresent(fecha, miembroId, presente) {
    const set = getLocalDaySet(fecha);
    const id = String(miembroId);
    if (presente) set.add(id);
    else set.delete(id);
    saveLocalDaySet(fecha, set);
    return set;
  }

  function localRowsForRange(start, end) {
    const store = readLocalAttendanceStore();
    const rows = [];
    Object.entries(store).forEach(([fecha, ids]) => {
      if (fecha < start || fecha > end) return;
      (Array.isArray(ids) ? ids : []).forEach((id) => {
        rows.push({ fecha, miembro_id: String(id), presente: true });
      });
    });
    return rows;
  }

  function rebuildMonthRowsFromPresentSets(extraDayKey, extraSet) {
    const { start, end } = monthBounds(attView);
    const byDay = new Map();
    attMonthRows.forEach((row) => {
      if (!row.presente) return;
      const key = row.fecha;
      if (!byDay.has(key)) byDay.set(key, new Set());
      byDay.get(key).add(String(row.miembro_id));
    });
    if (extraDayKey) byDay.set(extraDayKey, new Set(extraSet));
    const rows = [];
    byDay.forEach((set, fecha) => {
      if (fecha < start || fecha > end) return;
      set.forEach((id) => {
        rows.push({ fecha, miembro_id: id, presente: true });
      });
    });
    attMonthRows = rows;
  }

  function setAttSync(text, state = "") {
    if (!attSyncStatus) return;
    attSyncStatus.textContent = text;
    attSyncStatus.dataset.state = state;
  }

  function showOk(el, message) {
    if (!el) return;
    if (!message) {
      el.hidden = true;
      el.textContent = "";
      return;
    }
    el.hidden = false;
    el.textContent = message;
    window.setTimeout(() => {
      if (el.textContent === message) {
        el.hidden = true;
        el.textContent = "";
      }
    }, 2200);
  }

  function attendanceTableHint(err) {
    const msg = String(err?.message || err || "");
    if (/does not exist|schema cache|relation|Could not find the table|PGRST205/i.test(msg)) {
      return "Supabase no tiene la tabla de asistencia. Ejecuta supabase/asistencia.sql en el SQL Editor. Mientras tanto el cambio quedó pendiente en este dispositivo.";
    }
    if (/permission|policy|row-level|RLS|jwt|not authenticated/i.test(msg)) {
      return "Sin permiso en Supabase. Cierra sesión, vuelve a entrar y revisa las políticas de asistencia.sql.";
    }
    return msg || "No se pudo sincronizar con Supabase. Revisa la conexión e inténtalo de nuevo.";
  }

  const ATT_PENDING_KEY = "directorio-asistencia-pending-v1";

  function readPendingAttendanceDays() {
    try {
      const raw = localStorage.getItem(ATT_PENDING_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed.map(String) : []);
    } catch {
      return new Set();
    }
  }

  function writePendingAttendanceDays(set) {
    localStorage.setItem(ATT_PENDING_KEY, JSON.stringify([...set]));
  }

  function markAttendanceDayPending(fecha) {
    if (!fecha) return;
    const pending = readPendingAttendanceDays();
    pending.add(String(fecha));
    writePendingAttendanceDays(pending);
  }

  function clearAttendanceDayPending(fecha) {
    if (!fecha) return;
    const pending = readPendingAttendanceDays();
    if (!pending.delete(String(fecha))) return;
    writePendingAttendanceDays(pending);
  }

  /** Sube a Supabase los días marcados como pendientes en este dispositivo. */
  async function pushLocalAttendancePending() {
    const pending = readPendingAttendanceDays();
    if (!pending.size) return 0;
    const store = readLocalAttendanceStore();
    const payload = [];
    pending.forEach((fecha) => {
      const ids = Array.isArray(store[fecha]) ? store[fecha] : [];
      ids.forEach((miembroId) => {
        payload.push({
          fecha,
          miembro_id: String(miembroId),
          presente: true,
        });
      });
    });

    // Primero limpiamos en nube cada día pendiente y luego insertamos el snapshot local
    for (const fecha of pending) {
      await api(
        `/rest/v1/asistencia_sacramental?fecha=eq.${encodeURIComponent(fecha)}`,
        { method: "DELETE" }
      );
    }

    if (payload.length) {
      const chunkSize = 100;
      for (let i = 0; i < payload.length; i += chunkSize) {
        await api("/rest/v1/asistencia_sacramental?on_conflict=fecha,miembro_id", {
          method: "POST",
          headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
          body: JSON.stringify(payload.slice(i, i + chunkSize)),
        });
      }
    }

    writePendingAttendanceDays(new Set());
    // Compat: limpia la clave vieja de un solo flush
    localStorage.removeItem("directorio-asistencia-flushed-v1");
    return payload.length || pending.size;
  }

  /** Espejo local del mes = nube, excepto días aún pendientes de subir. */
  function mirrorLocalFromCloudRows(rows) {
    const { start, end } = monthBounds(attView);
    const pending = readPendingAttendanceDays();
    const store = readLocalAttendanceStore();
    Object.keys(store).forEach((fecha) => {
      if (fecha >= start && fecha <= end && !pending.has(fecha)) {
        delete store[fecha];
      }
    });
    (rows || []).forEach((row) => {
      if (!row?.presente || !row.fecha) return;
      if (row.fecha < start || row.fecha > end) return;
      if (pending.has(row.fecha)) return;
      if (!store[row.fecha]) store[row.fecha] = [];
      const id = String(row.miembro_id);
      if (!store[row.fecha].includes(id)) store[row.fecha].push(id);
    });
    writeLocalAttendanceStore(store);
  }

  let attBulkBusy = false;
  let attAnalyticsTimer = 0;
  function scheduleAttendanceAnalytics() {
    window.clearTimeout(attAnalyticsTimer);
    attAnalyticsTimer = window.setTimeout(() => {
      renderAttendanceAnalytics();
    }, 280);
  }

  function updateDayStats({ fullAnalytics = true } = {}) {
    const total = miembros.length;
    const present = attDayPresent.size;
    const absent = Math.max(0, total - present);
    const percent = total ? Math.round((present / total) * 100) : 0;
    if (attPresentCount) attPresentCount.textContent = String(present);
    if (attAbsentCount) attAbsentCount.textContent = String(absent);
    if (attPercent) attPercent.textContent = `${percent}%`;
    if (attDayStats) attDayStats.hidden = !attSelectedDate;
    const enabled = Boolean(attSelectedDate) && !attBulkBusy;
    if (attMarkAll) attMarkAll.disabled = !enabled;
    if (attClearAll) attClearAll.disabled = !enabled;
    if (attExportPdf) attExportPdf.disabled = !attSelectedDate;
    if (attFiltersBtn) attFiltersBtn.disabled = !attSelectedDate;
    if (fullAnalytics) {
      scheduleAttendanceAnalytics();
    }
  }

  function attFilterLabel() {
    switch (attRollFilter) {
      case "present":
        return "Presentes";
      case "absent":
        return "Ausentes";
      case "recien":
        return "RC";
      case "ss":
        return "SS";
      case "elderes":
        return "Élderes";
      default:
        return "Todos";
    }
  }

  function getAttendanceRollList() {
    if (!attSelectedDate) return [];
    const q = attSearchQuery.trim();
    return miembros.filter((m) => {
      if (!matchesAttFilter(m)) return false;
      if (!q) return true;
      return fuzzyTextMatchAdmin(String(m.nombre || ""), q);
    });
  }

  function matchesAttFilter(m) {
    const id = String(m.id);
    const isPresent = attDayPresent.has(id);
    switch (attRollFilter) {
      case "present":
        return isPresent;
      case "absent":
        return !isPresent;
      case "recien":
        // Solo RC que están presentes (no mezclar ausentes)
        return !!m.recien_converso && isPresent;
      case "ss":
        return enSociedadSocorro(m) && isPresent;
      case "elderes":
        return enQuorumElderes(m) && isPresent;
      default:
        return true;
    }
  }

  function syncAttFilterButtons() {
    document.querySelectorAll("[data-att-filter]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-att-filter") === attRollFilter);
    });
    if (attFiltersCurrent) attFiltersCurrent.textContent = attFilterLabel();
  }

  function setAttFiltersOpen(open) {
    if (!attFiltersPanel || !attFiltersBtn) return;
    attFiltersPanel.hidden = !open;
    attFiltersBtn.setAttribute("aria-expanded", open ? "true" : "false");
    attFiltersBtn.classList.toggle("is-open", open);
  }

  function toggleAttFilters() {
    if (!attFiltersPanel || attFiltersBtn?.disabled) return;
    setAttFiltersOpen(attFiltersPanel.hidden);
  }

  function renderAttendanceRoll() {
    if (!attRoll) return;
    if (!attSelectedDate) {
      attRoll.innerHTML =
        `<p class="admin-meta">Elige un día en el calendario para ver la lista de hermanos.</p>`;
      updateDayStats();
      return;
    }

    const list = getAttendanceRollList();

    if (!list.length) {
      attRoll.innerHTML = `<p class="admin-meta">No hay hermanos con ese criterio.</p>`;
      updateDayStats();
      return;
    }

    attRoll.innerHTML = list
      .map((m) => {
        const id = String(m.id);
        const present = attDayPresent.has(id);
        const edad = calcEdad(m.nacimiento);
        const edadTexto = edad != null ? `${edad} años` : "Edad —";
        const telefono = String(m.telefono || "").trim() || "Sin teléfono";
        const detalle = m.organizacion || m.llamamiento || "—";
        return `
          <div class="asistencia-roll-item ${present ? "is-present" : "is-absent"}">
            <label class="asistencia-roll-main">
              <input
                class="asistencia-roll-check"
                type="checkbox"
                data-miembro="${escapeHtml(id)}"
                ${present ? "checked" : ""}
              />
              <img
                class="asistencia-roll-photo"
                ${fotoMiembroImgAttrs(m)}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              <span class="asistencia-roll-copy">
                <strong>${escapeHtml(m.nombre)}</strong>
                <small>
                  <span class="asistencia-roll-age">${escapeHtml(edadTexto)}</span>
                  · <span class="asistencia-roll-phone">${escapeHtml(telefono)}</span>
                  · ${escapeHtml(detalle)}
                </small>
              </span>
            </label>
            <button
              class="asistencia-obs-btn"
              type="button"
              data-obs-id="${escapeHtml(id)}"
              title="Observaciones"
              aria-label="Observaciones de ${escapeHtml(m.nombre)}"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M5 5h14v14H5z" stroke-linejoin="round" />
                <path d="M8 9h8M8 12h8M8 15h5" stroke-linecap="round" />
              </svg>
            </button>
          </div>
        `;
      })
      .join("");

    updateDayStats();
  }

  function buildAttendanceExportHtml(list) {
    const date = parseDateKey(attSelectedDate);
    const dateLabel = date ? formatDateLong(date) : attSelectedDate;
    const filterLabel = attFilterLabel();
    const searchLabel = attSearchQuery.trim()
      ? ` · Búsqueda: "${attSearchQuery.trim()}"`
      : "";
    const presentCount = list.filter((m) => attDayPresent.has(String(m.id))).length;
    const absentCount = list.length - presentCount;
    const generatedAt = new Date().toLocaleString("es-CL");

    const rows = list
      .map((m, index) => {
        const present = attDayPresent.has(String(m.id));
        const edad = calcEdad(m.nacimiento);
        const edadTexto = edad != null ? `${edad} años` : "—";
        const telefono = String(m.telefono || "").trim() || "—";
        const detail = m.organizacion || m.llamamiento || "—";
        return `
          <tr class="${present ? "is-present" : "is-absent"}">
            <td class="num">${index + 1}</td>
            <td class="name">${escapeHtml(m.nombre)}</td>
            <td class="age">${escapeHtml(edadTexto)}</td>
            <td class="phone">${escapeHtml(telefono)}</td>
            <td class="detail">${escapeHtml(detail)}</td>
            <td class="status">${present ? "Presente" : "Ausente"}</td>
          </tr>
        `;
      })
      .join("");

    return {
      dateLabel,
      filterLabel,
      searchLabel,
      presentCount,
      absentCount,
      generatedAt,
      bodyHtml: `
        <h1>Asistencia sacramental</h1>
        <p class="meta">${escapeHtml(dateLabel)}</p>
        <div class="chips">
          <span class="chip">Filtro: ${escapeHtml(filterLabel)}${escapeHtml(searchLabel)}</span>
          <span class="chip">${list.length} en lista</span>
          <span class="chip">${presentCount} presentes</span>
          <span class="chip">${absentCount} ausentes</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Teléfono</th>
              <th>Detalle</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <p class="footer">Barrio Llo Lleo 1 · Generado ${escapeHtml(generatedAt)} · Vista actual del admin</p>
      `,
    };
  }

  function attendancePrintStyles() {
    return `
      @page { margin: 14mm; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", Tahoma, sans-serif;
        color: #122033;
        font-size: 11pt;
        background: #fff;
      }
      h1 { margin: 0 0 0.25rem; font-size: 1.35rem; }
      .meta { margin: 0 0 0.85rem; color: #445566; font-size: 0.95rem; }
      .chips { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 0.9rem; }
      .chip {
        border: 1px solid #c9d5e2;
        border-radius: 999px;
        padding: 0.2rem 0.65rem;
        font-size: 0.85rem;
        font-weight: 700;
        background: #f4f8fc;
      }
      table { width: 100%; border-collapse: collapse; }
      th, td {
        border-bottom: 1px solid #d7e0ea;
        padding: 0.42rem 0.35rem;
        text-align: left;
        vertical-align: top;
      }
      th {
        font-size: 0.78rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #5a6b7d;
      }
      .num { width: 2.2rem; color: #6a7b8c; }
      .age { width: 4.2rem; color: #1a6f8a; font-weight: 700; }
      .phone { width: 7.5rem; color: #334455; font-weight: 600; white-space: nowrap; }
      .status { width: 5.5rem; font-weight: 700; }
      .detail { color: #5a6b7d; font-size: 0.9rem; }
      tr.is-present .status { color: #1a7a45; }
      tr.is-absent .status { color: #b42318; }
      .footer { margin-top: 1rem; color: #7a8b9c; font-size: 0.8rem; }
    `;
  }

  function closeAttendancePdfModal() {
    const modal = document.getElementById("attPdfModal");
    if (modal) modal.hidden = true;
    document.body.classList.remove("detail-open");
  }

  function exportAttendancePdf() {
    if (!attSelectedDate) {
      showError(asistenciaError, "Elige un día en el calendario para exportar.");
      return;
    }

    const list = getAttendanceRollList();
    if (!list.length) {
      showError(asistenciaError, "No hay hermanos en la lista actual para exportar.");
      return;
    }

    const built = buildAttendanceExportHtml(list);
    const preview = document.getElementById("attPdfPreview");
    const modal = document.getElementById("attPdfModal");
    const hint = document.getElementById("attPdfHint");
    if (!preview || !modal) {
      showError(asistenciaError, "No se pudo abrir la vista previa.");
      return;
    }

    preview.innerHTML = built.bodyHtml;
    if (hint) {
      hint.textContent = `Filtro: ${built.filterLabel}${built.searchLabel} · ${list.length} nombres · Archivo: ${attendancePdfFileTitle()}.pdf. En impresión elige “Guardar como PDF”.`;
    }
    modal.hidden = false;
    document.body.classList.add("detail-open");
    showError(asistenciaError, "");
    showOk(asistenciaOk, "Vista previa lista");
  }

  function attendancePdfFilterSlug() {
    switch (attRollFilter) {
      case "present":
        return "Presentes";
      case "absent":
        return "Ausentes";
      case "recien":
        return "Recien-conversos";
      case "ss":
        return "Sociedad-de-Socorro";
      case "elderes":
        return "Elderes";
      default:
        return "Todos";
    }
  }

  function slugForFilename(text) {
    return String(text || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function attendancePdfFileTitle() {
    const key = String(attSelectedDate || "").trim();
    let datePart = "";
    if (/^\d{4}-\d{2}-\d{2}$/.test(key)) {
      datePart = key;
    } else {
      const date = parseDateKey(key);
      if (date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        datePart = `${y}-${m}-${d}`;
      }
    }

    const parts = ["Asistencia-sacramental"];
    if (datePart) parts.push(datePart);
    parts.push(attendancePdfFilterSlug());

    const q = attSearchQuery.trim();
    if (q) {
      const searchSlug = slugForFilename(q).slice(0, 40);
      if (searchSlug) parts.push(`busqueda-${searchSlug}`);
    }

    return parts.join("-");
  }

  function printAttendancePdf() {
    const preview = document.getElementById("attPdfPreview");
    if (!preview) return;

    const fileTitle = attendancePdfFileTitle();
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(fileTitle)}</title>
  <style>${attendancePrintStyles()}</style>
</head>
<body>${preview.innerHTML}</body>
</html>`;

    // Ventana propia: el título sí se usa como nombre al “Guardar como PDF”
    const printWin = window.open("", "_blank");
    if (!printWin) {
      // Fallback: iframe + título temporal de la página admin
      const frame = document.getElementById("attPrintFrame");
      if (!frame) {
        showError(
          asistenciaError,
          "El navegador bloqueó la ventana. Permite ventanas emergentes para exportar el PDF."
        );
        return;
      }
      const previousTitle = document.title;
      const restoreTitle = () => {
        document.title = previousTitle;
        window.removeEventListener("afterprint", restoreTitle);
      };
      document.title = fileTitle;
      const doc = frame.contentDocument;
      if (!doc) {
        restoreTitle();
        showError(asistenciaError, "No se pudo preparar la impresión.");
        return;
      }
      doc.open();
      doc.write(html);
      doc.close();
      doc.title = fileTitle;
      window.addEventListener("afterprint", restoreTitle);
      window.setTimeout(restoreTitle, 60_000);
      setTimeout(() => {
        try {
          frame.contentWindow.focus();
          frame.contentWindow.print();
        } catch (err) {
          restoreTitle();
          showError(asistenciaError, "No se pudo abrir la impresión.");
        }
      }, 150);
      return;
    }

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
    printWin.document.title = fileTitle;

    const runPrint = () => {
      try {
        printWin.focus();
        printWin.print();
      } catch (err) {
        showError(asistenciaError, "No se pudo abrir la impresión. Inténtalo de nuevo.");
      }
    };

    if (printWin.document.readyState === "complete") {
      setTimeout(runPrint, 150);
    } else {
      printWin.onload = () => setTimeout(runPrint, 150);
    }
  }

  function attendanceStatsByDay() {
    const presentCounts = new Map();
    const recorded = new Set();
    attMonthRows.forEach((row) => {
      const fecha = row.fecha;
      recorded.add(fecha);
      if (row.presente) {
        presentCounts.set(fecha, (presentCounts.get(fecha) || 0) + 1);
      }
    });
    return { presentCounts, recorded };
  }

  function renderMonthSummary() {
    const { presentCounts, recorded } = attendanceStatsByDay();
    const days = [...recorded].map((key) => [key, presentCounts.get(key) || 0]);
    const reuniones = days.length;
    const avg = reuniones
      ? Math.round(days.reduce((sum, [, n]) => sum + n, 0) / reuniones)
      : 0;
    let bestLabel = "—";
    if (days.length) {
      days.sort((a, b) => b[1] - a[1]);
      const [bestKey, bestCount] = days[0];
      const d = parseDateKey(bestKey);
      bestLabel = d ? `${d.getDate()} (${bestCount})` : "—";
    }
    if (attSumDays) attSumDays.textContent = String(reuniones);
    if (attSumAvg) attSumAvg.textContent = String(avg);
    if (attSumBest) attSumBest.textContent = bestLabel;
    if (attMonthMeta) {
      attMonthMeta.textContent = reuniones
        ? `${reuniones} reunión${reuniones === 1 ? "" : "es"} registradas en ${MES_NOMBRES[attView.getMonth()]} ${attView.getFullYear()}`
        : `Sin registros en ${MES_NOMBRES[attView.getMonth()]} ${attView.getFullYear()}`;
    }
    renderAttendanceAnalytics();
  }

  function setAnalyticsText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function listItemAnalytics(label, value) {
    return `<li><span>${escapeHtml(label)}</span><strong>${escapeHtml(String(value))}</strong></li>`;
  }

  function renderAttendanceAnalytics() {
    const total = miembros.length || 0;
    const monthName = `${MES_NOMBRES[attView.getMonth()]} ${attView.getFullYear()}`;
    setAnalyticsText("attAnalyticsMeta", `Día seleccionado y mes en vista · ${monthName}`);
    setAnalyticsText("attAnMonthName", monthName);

    // Día seleccionado
    if (attSelectedDate && total) {
      const present = attDayPresent.size;
      const pct = Math.round((present / total) * 100);
      const rcTotal = miembros.filter((m) => m.recien_converso).length;
      const rcPresent = miembros.filter(
        (m) => m.recien_converso && attDayPresent.has(String(m.id))
      ).length;
      const ssTotal = miembros.filter((m) => enSociedadSocorro(m)).length;
      const ssPresent = miembros.filter(
        (m) => enSociedadSocorro(m) && attDayPresent.has(String(m.id))
      ).length;
      const eldTotal = miembros.filter((m) => enQuorumElderes(m)).length;
      const eldPresent = miembros.filter(
        (m) => enQuorumElderes(m) && attDayPresent.has(String(m.id))
      ).length;
      const date = parseDateKey(attSelectedDate);
      const dayLabel = date ? formatDateLong(date) : attSelectedDate;

      setAnalyticsText("attAnDayPresent", String(present));
      setAnalyticsText("attAnDayHint", dayLabel);
      setAnalyticsText("attAnDayPct", `${pct}%`);
      setAnalyticsText("attAnDayRc", String(rcPresent));
      setAnalyticsText(
        "attAnDayRcHint",
        rcTotal ? `${rcPresent} de ${rcTotal} RC` : "Sin RC en padrón"
      );
      setAnalyticsText("attAnDaySs", String(ssPresent));
      setAnalyticsText("attAnDayEld", String(eldPresent));
    } else {
      setAnalyticsText("attAnDayPresent", "—");
      setAnalyticsText("attAnDayHint", "Selecciona un día");
      setAnalyticsText("attAnDayPct", "—");
      setAnalyticsText("attAnDayRc", "—");
      setAnalyticsText("attAnDayRcHint", "Recién conversos");
      setAnalyticsText("attAnDaySs", "—");
      setAnalyticsText("attAnDayEld", "—");
    }

    // Mes
    const { presentCounts, recorded } = attendanceStatsByDay();
    const days = [...recorded].map((key) => [key, presentCounts.get(key) || 0]);
    const reuniones = days.length;
    const avg = reuniones
      ? Math.round(days.reduce((sum, [, n]) => sum + n, 0) / reuniones)
      : 0;
    const avgPct = total && reuniones ? Math.round((avg / total) * 100) : 0;

    let bestLabel = "—";
    let bestHint = "Mayor asistencia";
    let worstLabel = "—";
    let worstHint = "Menor asistencia";
    if (days.length) {
      const sorted = [...days].sort((a, b) => b[1] - a[1]);
      const [bestKey, bestCount] = sorted[0];
      const [worstKey, worstCount] = sorted[sorted.length - 1];
      const bestDate = parseDateKey(bestKey);
      const worstDate = parseDateKey(worstKey);
      bestLabel = String(bestCount);
      bestHint = bestDate
        ? `${formatDateLong(bestDate)}`
        : bestKey;
      worstLabel = String(worstCount);
      worstHint = worstDate ? formatDateLong(worstDate) : worstKey;
    }

    setAnalyticsText("attAnMonthMeetings", String(reuniones));
    setAnalyticsText("attAnMonthAvg", String(avg));
    setAnalyticsText(
      "attAnMonthAvgPct",
      total && reuniones ? `${avgPct}% del padrón` : "Sin datos"
    );
    setAnalyticsText("attAnMonthBest", bestLabel);
    setAnalyticsText("attAnMonthBestHint", bestHint);
    setAnalyticsText("attAnMonthWorst", worstLabel);
    setAnalyticsText("attAnMonthWorstHint", worstHint);

    // Domingos del mes
    const sundaysList = document.getElementById("attAnSundaysList");
    if (sundaysList) {
      const year = attView.getFullYear();
      const month = attView.getMonth();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const sundayRows = [];
      for (let day = 1; day <= daysInMonth; day += 1) {
        const date = new Date(year, month, day);
        if (date.getDay() !== 0) continue;
        const key = toDateKey(date);
        const count = presentCounts.get(key) || 0;
        const has = recorded.has(key);
        const pct = total && has ? Math.round((count / total) * 100) : null;
        sundayRows.push(
          listItemAnalytics(
            formatDateLong(date),
            has ? `${count} · ${pct}%` : "Sin registro"
          )
        );
      }
      sundaysList.innerHTML = sundayRows.length
        ? sundayRows.join("")
        : `<li><span>Sin domingos en este mes</span><strong>—</strong></li>`;
    }

    // Padrón
    const padronList = document.getElementById("attAnPadronList");
    if (padronList) {
      const rc = miembros.filter((m) => m.recien_converso).length;
      const ss = miembros.filter((m) => enSociedadSocorro(m)).length;
      const eld = miembros.filter((m) => enQuorumElderes(m)).length;
      padronList.innerHTML = [
        listItemAnalytics("Hermanos en padrón", total),
        listItemAnalytics("Recién conversos", rc),
        listItemAnalytics("Sociedad de Socorro", ss),
        listItemAnalytics("Quórum de élderes", eld),
        listItemAnalytics(
          "Asistencia promedio del mes",
          reuniones ? `${avg} (${avgPct}%)` : "—"
        ),
      ].join("");
    }

    const obs = buildMonthObservationHighlights();
    const obsMeta = document.getElementById("attAnObsMeta");
    const obsList = document.getElementById("attAnObservationsList");
    if (obsMeta) obsMeta.textContent = obs.meta;
    if (obsList) {
      obsList.innerHTML = obs.items
        .map((text) => `<li>${escapeHtml(text)}</li>`)
        .join("");
    }
  }

  function renderAttendanceCalendar({ syncSelectors = true } = {}) {
    if (!attCalendar) return;
    if (syncSelectors) syncAttendanceSelectors();
    const { presentCounts, recorded } = attendanceStatsByDay();
    const year = attView.getFullYear();
    const month = attView.getMonth();
    const first = new Date(year, month, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayKey = toDateKey(new Date());
    const selectedKey = attSelectedDate;
    const expectedCount = startPad + daysInMonth;
    const existing = Array.from(
      attCalendar.querySelectorAll(":scope > .asistencia-day")
    );
    const firstDayKey = toDateKey(new Date(year, month, 1));
    const canPatch =
      existing.length === expectedCount &&
      existing[startPad]?.getAttribute("data-date") === firstDayKey;

    function dayClasses(date, key, hasRecord, isPad) {
      const classes = ["asistencia-day"];
      if (isPad) {
        classes.push("is-pad");
        return classes.join(" ");
      }
      if (date.getDay() === 0) classes.push("is-sunday");
      if (key === todayKey) classes.push("is-today");
      if (key === selectedKey) classes.push("is-selected");
      if (hasRecord) classes.push("has-record");
      return classes.join(" ");
    }

    function fillDayCell(el, day, date, key, count, hasRecord) {
      el.className = dayClasses(date, key, hasRecord, false);
      el.removeAttribute("aria-hidden");
      el.setAttribute("role", "gridcell");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("data-date", key);
      el.setAttribute(
        "aria-label",
        `${formatDateLong(date)}${hasRecord ? `, ${count} presentes` : ""}`
      );
      let num = el.querySelector(".asistencia-day-num");
      let countEl = el.querySelector(".asistencia-day-count");
      let dot = el.querySelector(".asistencia-day-dot");
      if (!num || !countEl || !dot) {
        el.innerHTML = `
          <span class="asistencia-day-num"></span>
          <span class="asistencia-day-count"></span>
          <span class="asistencia-day-dot" aria-hidden="true"></span>
        `;
        num = el.querySelector(".asistencia-day-num");
        countEl = el.querySelector(".asistencia-day-count");
      }
      if (num) num.textContent = String(day);
      if (countEl) countEl.textContent = hasRecord ? String(count) : "";
    }

    if (canPatch) {
      for (let i = 0; i < startPad; i += 1) {
        const pad = existing[i];
        pad.className = "asistencia-day is-pad";
        pad.removeAttribute("data-date");
        pad.removeAttribute("aria-label");
        pad.setAttribute("aria-hidden", "true");
        pad.removeAttribute("role");
        pad.removeAttribute("tabindex");
        pad.innerHTML = "";
      }
      for (let day = 1; day <= daysInMonth; day += 1) {
        const date = new Date(year, month, day);
        const key = toDateKey(date);
        const count = presentCounts.get(key) || 0;
        const hasRecord = recorded.has(key);
        fillDayCell(existing[startPad + day - 1], day, date, key, count, hasRecord);
      }
      renderMonthSummary();
      return;
    }

    const cells = [];
    for (let i = 0; i < startPad; i += 1) {
      cells.push(`<div class="asistencia-day is-pad" aria-hidden="true"></div>`);
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      const key = toDateKey(date);
      const count = presentCounts.get(key) || 0;
      const hasRecord = recorded.has(key);
      cells.push(`
        <div class="${dayClasses(date, key, hasRecord, false)}" role="gridcell" tabindex="-1" data-date="${key}" aria-label="${escapeHtml(formatDateLong(date))}${hasRecord ? `, ${count} presentes` : ""}">
          <span class="asistencia-day-num">${day}</span>
          <span class="asistencia-day-count">${hasRecord ? count : ""}</span>
          <span class="asistencia-day-dot" aria-hidden="true"></span>
        </div>
      `);
    }
    attCalendar.innerHTML = cells.join("");
    renderMonthSummary();
  }

  function paintRollItemFromCheckbox(input) {
    const item = input.closest(".asistencia-roll-item");
    if (!item) return;
    const present = input.checked;
    item.classList.toggle("is-present", present);
    item.classList.toggle("is-absent", !present);
    const badge = item.querySelector(".asistencia-roll-badge");
    if (badge) badge.textContent = present ? "Presente" : "Ausente";
  }

  function formatAttShortDate(key) {
    const d = parseDateKey(key);
    if (!d) return key;
    return `${d.getDate()} ${MES_NOMBRES[d.getMonth()].slice(0, 3)}`;
  }

  function getRecordedMeetingDates() {
    const { recorded } = attendanceStatsByDay();
    return [...recorded].sort();
  }

  function memberPresentDatesInMonth(miembroId) {
    const id = String(miembroId);
    return attMonthRows
      .filter((row) => row.presente && String(row.miembro_id) === id)
      .map((row) => row.fecha)
      .sort();
  }

  function analyzeMemberMonth(m) {
    const meetings = getRecordedMeetingDates();
    const present = memberPresentDatesInMonth(m.id);
    const total = meetings.length;
    const count = present.length;
    const notes = [];
    const monthName = `${MES_NOMBRES[attView.getMonth()]} ${attView.getFullYear()}`;

    if (!total) {
      notes.push(`Aún no hay reuniones registradas en ${monthName}.`);
      return { meetings, present, count, total, notes, kind: "empty" };
    }

    if (count === 0) {
      notes.push(
        `No asistió a ninguna de las ${total} reunión${total === 1 ? "" : "es"} registradas este mes.`
      );
      return { meetings, present, count, total, notes, kind: "never" };
    }

    if (count === total) {
      notes.push(`Asistió a todas las reuniones del mes (${count}/${total}). Excelente constancia.`);
      return { meetings, present, count, total, notes, kind: "perfect" };
    }

    if (count === 1) {
      const only = present[0];
      const idx = meetings.indexOf(only);
      if (idx === 0 && total > 1) {
        notes.push(
          `Asistió solo la primera reunión (${formatAttShortDate(only)}) y después no volvió.`
        );
        return { meetings, present, count, total, notes, kind: "once-start" };
      }
      if (idx === total - 1 && total > 1) {
        notes.push(
          `Asistió solo la última reunión (${formatAttShortDate(only)}); no había venido antes en el mes.`
        );
        return { meetings, present, count, total, notes, kind: "once-end" };
      }
      notes.push(`Asistió solo 1 vez este mes (${formatAttShortDate(only)}).`);
      return { meetings, present, count, total, notes, kind: "once" };
    }

    const firstMeeting = meetings[0];
    const lastMeeting = meetings[total - 1];
    const firstPresent = present[0];
    const lastPresent = present[present.length - 1];
    const cameFirst = present.includes(firstMeeting);
    const cameLast = present.includes(lastMeeting);
    const pct = Math.round((count / total) * 100);

    if (cameFirst && lastPresent < lastMeeting) {
      notes.push(
        `Vino al inicio del mes, pero dejó de asistir después del ${formatAttShortDate(lastPresent)}.`
      );
    }
    if (!cameFirst && cameLast) {
      notes.push(
        `No vino al inicio; apareció/volvió hacia el final (desde ${formatAttShortDate(firstPresent)}).`
      );
    }
    if (cameFirst && cameLast && count < total) {
      notes.push(`Vino al inicio y al final, pero faltó en fechas intermedias.`);
    }
    if (!notes.length) {
      notes.push(`Asistencia irregular este mes.`);
    }
    notes.push(`Total: ${count} de ${total} reuniones (${pct}%).`);
    notes.push(
      `Fechas presente: ${present.map(formatAttShortDate).join(", ")}.`
    );
    return { meetings, present, count, total, notes, kind: "partial" };
  }

  function sampleNames(profiles, limit = 3) {
    return profiles
      .slice(0, limit)
      .map((p) => p.m.nombre)
      .join(", ");
  }

  function buildMonthObservationHighlights() {
    const meetings = getRecordedMeetingDates();
    const monthName = `${MES_NOMBRES[attView.getMonth()]} ${attView.getFullYear()}`;
    if (!meetings.length) {
      return {
        meta: `Sin reuniones registradas en ${monthName}.`,
        items: [
          "Marca asistencia en al menos un domingo para generar observaciones automáticas.",
        ],
      };
    }

    const profiles = miembros.map((m) => ({ m, a: analyzeMemberMonth(m) }));
    const perfect = profiles.filter((p) => p.a.kind === "perfect");
    const onceStart = profiles.filter((p) => p.a.kind === "once-start");
    const onceEnd = profiles.filter((p) => p.a.kind === "once-end");
    const once = profiles.filter((p) => p.a.kind === "once");
    const never = profiles.filter((p) => p.a.kind === "never");
    const stopped = profiles.filter((p) =>
      /dejó de asistir/i.test(p.a.notes.join(" "))
    );
    const returned = profiles.filter((p) =>
      /apareció\/volvió|no había venido antes/i.test(p.a.notes.join(" "))
    );

    const items = [];
    items.push(
      `Hay ${meetings.length} reunión${meetings.length === 1 ? "" : "es"} registrada${meetings.length === 1 ? "" : "s"} en ${monthName}.`
    );

    if (perfect.length) {
      items.push(
        `${perfect.length} hermano${perfect.length === 1 ? "" : "s"} asistieron todas las reuniones` +
          (perfect.length ? `: ${sampleNames(perfect)}${perfect.length > 3 ? "…" : ""}` : ".")
      );
    }
    if (onceStart.length) {
      items.push(
        `${onceStart.length} asistieron solo la primera vez y después no volvieron` +
          (onceStart.length ? `: ${sampleNames(onceStart)}${onceStart.length > 3 ? "…" : ""}` : ".")
      );
    }
    if (onceEnd.length) {
      items.push(
        `${onceEnd.length} aparecieron solo en la última reunión` +
          (onceEnd.length ? `: ${sampleNames(onceEnd)}${onceEnd.length > 3 ? "…" : ""}` : ".")
      );
    }
    if (once.length) {
      items.push(
        `${once.length} asistieron una sola vez en otra fecha del mes` +
          (once.length ? `: ${sampleNames(once)}${once.length > 3 ? "…" : ""}` : ".")
      );
    }
    if (stopped.length) {
      items.push(
        `${stopped.length} vinieron al inicio y luego dejaron de asistir` +
          (stopped.length ? `: ${sampleNames(stopped)}${stopped.length > 3 ? "…" : ""}` : ".")
      );
    }
    if (returned.length) {
      items.push(
        `${returned.length} no vinieron al inicio y aparecieron más tarde` +
          (returned.length ? `: ${sampleNames(returned)}${returned.length > 3 ? "…" : ""}` : ".")
      );
    }
    if (never.length) {
      items.push(
        `${never.length} del padrón no tienen ninguna asistencia marcada este mes.`
      );
    }

    return {
      meta: `Análisis de ${meetings.length} reunión${meetings.length === 1 ? "" : "es"} · ${monthName}`,
      items,
    };
  }

  const OBS_LOCAL_KEY = "directorio-observaciones-v1";
  let obsColumnReady = null; // null unknown, true/false

  function readObsStore() {
    try {
      const raw = localStorage.getItem(OBS_LOCAL_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function writeObsStore(store) {
    localStorage.setItem(OBS_LOCAL_KEY, JSON.stringify(store || {}));
  }

  function setLocalObservacion(id, text) {
    const store = readObsStore();
    const key = String(id);
    const value = String(text || "").trim();
    if (value) store[key] = value;
    else delete store[key];
    writeObsStore(store);
  }

  function applyLocalObservacionesToMiembros() {
    const store = readObsStore();
    miembros.forEach((m) => {
      const local = store[String(m.id)];
      if (local == null) return;
      // Si la nube aún no tiene la columna, o viene vacía, usa lo local
      if (obsColumnReady === false || !String(m.observaciones || "").trim()) {
        m.observaciones = local;
      }
    });
  }

  function isMissingObsColumnError(err) {
    const msg = String(err?.message || err || "");
    return /42703|observaciones does not exist|Could not find the .*observaciones/i.test(msg);
  }

  function isMissingMinistrantesColumnError(err) {
    const msg = String(err?.message || err || "");
    return /hermanos_ministrantes/i.test(msg) &&
      /42703|PGRST204|does not exist|schema cache|Could not find/i.test(msg);
  }

  let ministrantesColumnReady = null;

  async function ensureMinistrantesColumn({ force = false } = {}) {
    if (!force && ministrantesColumnReady === true) return true;
    try {
      await api("/rest/v1/miembros?select=hermanos_ministrantes&limit=1");
      ministrantesColumnReady = true;
      return true;
    } catch (err) {
      if (isMissingMinistrantesColumnError(err)) {
        ministrantesColumnReady = false;
        return false;
      }
      // Otro error de red/sesión: no marcar como ausente permanente
      return ministrantesColumnReady !== false;
    }
  }

  function normalizeMinistrantesList(raw) {
    if (!Array.isArray(raw)) return [];
    const names = [];
    for (const slot of raw) {
      if (!slot) continue;
      const nombre =
        typeof slot === "string"
          ? slot.trim()
          : String(slot.nombre || "").trim();
      if (!nombre) continue;
      if (names.some((n) => n.toLowerCase() === nombre.toLowerCase())) continue;
      names.push(nombre);
    }
    return names;
  }

  function normalizeSearchText(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function levenshteinAdmin(a, b) {
    if (a === b) return 0;
    const aLen = a.length;
    const bLen = b.length;
    if (!aLen) return bLen;
    if (!bLen) return aLen;
    if (Math.abs(aLen - bLen) > 3) return 99;
    let prev = new Array(bLen + 1);
    let curr = new Array(bLen + 1);
    for (let j = 0; j <= bLen; j++) prev[j] = j;
    for (let i = 1; i <= aLen; i++) {
      curr[0] = i;
      const ca = a.charCodeAt(i - 1);
      for (let j = 1; j <= bLen; j++) {
        const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
        curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      }
      const tmp = prev;
      prev = curr;
      curr = tmp;
    }
    return prev[bLen];
  }

  function fuzzyTokenMatchAdmin(queryToken, candidateToken) {
    if (!queryToken || !candidateToken) return false;
    if (candidateToken.includes(queryToken) || queryToken.includes(candidateToken)) {
      return true;
    }
    if (
      candidateToken.startsWith(queryToken) ||
      queryToken.startsWith(candidateToken)
    ) {
      return true;
    }
    const len = Math.min(queryToken.length, candidateToken.length);
    const maxDist = len <= 2 ? 0 : len <= 4 ? 1 : len <= 8 ? 2 : 3;
    if (Math.abs(queryToken.length - candidateToken.length) > maxDist) return false;
    return levenshteinAdmin(queryToken, candidateToken) <= maxDist;
  }

  function fuzzyTextMatchAdmin(haystack, query) {
    const q = normalizeSearchText(query).trim();
    const text = normalizeSearchText(haystack);
    if (!q) return true;
    if (text.includes(q)) return true;
    const qTokens = q.split(/\s+/).filter(Boolean);
    const textTokens = text.split(/[^a-z0-9]+/).filter(Boolean);
    if (!qTokens.length) return true;
    return qTokens.every((qt) =>
      textTokens.some((tt) => fuzzyTokenMatchAdmin(qt, tt))
    );
  }

  let ministrantesExcludeId = "";

  function getMinistranteCandidates(query, otherSelected) {
    const q = normalizeSearchText(query).trim();
    const other = normalizeSearchText(otherSelected);
    return miembros
      .filter((m) => String(m.id) !== String(ministrantesExcludeId || ""))
      .filter((m) => {
        const name = String(m.nombre || "").trim();
        if (!name) return false;
        if (other && normalizeSearchText(name) === other) return false;
        if (!q) return true;
        return fuzzyTextMatchAdmin(name, q);
      })
      .sort((a, b) =>
        String(a.nombre || "").localeCompare(String(b.nombre || ""), "es", {
          sensitivity: "base",
        })
      )
      .slice(0, 12);
  }

  function setMinistrantePickerValue(slot, nombre) {
    const picker = document.querySelector(`.min-picker[data-min-slot="${slot}"]`);
    if (!picker) return;
    const hidden = picker.querySelector(`#f_ministrante_${slot}`);
    const selected = picker.querySelector(".min-picker-selected");
    const nameEl = picker.querySelector(".min-picker-name");
    const search = picker.querySelector(".min-picker-search");
    const results = picker.querySelector(".min-picker-results");
    const value = String(nombre || "").trim();

    if (hidden) hidden.value = value;
    if (results) {
      results.hidden = true;
      results.innerHTML = "";
    }
    if (search) search.value = "";

    if (value) {
      picker.classList.add("is-filled");
      if (selected) selected.hidden = false;
      if (nameEl) nameEl.textContent = value;
    } else {
      picker.classList.remove("is-filled");
      if (selected) selected.hidden = true;
      if (nameEl) nameEl.textContent = "";
    }
  }

  function renderMinistranteResults(slot, query) {
    const picker = document.querySelector(`.min-picker[data-min-slot="${slot}"]`);
    if (!picker) return;
    const results = picker.querySelector(".min-picker-results");
    if (!results) return;

    const otherSlot = slot === 1 ? 2 : 1;
    const otherValue = document.getElementById(`f_ministrante_${otherSlot}`)?.value || "";
    const matches = getMinistranteCandidates(query, otherValue);

    if (!String(query || "").trim()) {
      results.hidden = true;
      results.innerHTML = "";
      return;
    }

    if (!matches.length) {
      results.innerHTML = `<li><p class="min-picker-empty">Sin coincidencias</p></li>`;
      results.hidden = false;
      return;
    }

    results.innerHTML = matches
      .map((m) => {
        const edad = calcEdad(m.nacimiento);
        const ageText = edad != null ? `(${edad})` : "";
        return `
        <li>
          <button type="button" class="min-picker-option" data-nombre="${escapeHtml(m.nombre)}">
            <span class="min-picker-option-name">${escapeHtml(m.nombre)}</span>
            ${
              ageText
                ? `<span class="min-picker-option-age">${escapeHtml(ageText)}</span>`
                : ""
            }
          </button>
        </li>`;
      })
      .join("");
    results.hidden = false;
  }

  function showMinistrantesSetupHint(show) {
    const hint = document.getElementById("ministrantesSetupHint");
    if (hint) hint.hidden = !show;
  }

  function fillMinistrantesSelects(member) {
    ministrantesExcludeId = member?.id ? String(member.id) : "";
    const assigned = normalizeMinistrantesList(
      member?.hermanos_ministrantes || member?.hermanosMinistrantes
    );
    setMinistrantePickerValue(1, assigned[0] || "");
    setMinistrantePickerValue(2, assigned[1] || "");
    ensureMinistrantesColumn({ force: true }).then((ready) => {
      showMinistrantesSetupHint(!ready);
    });
  }

  function bindMinistrantesPickers() {
    document.querySelectorAll(".min-picker").forEach((picker) => {
      const slot = Number(picker.getAttribute("data-min-slot"));
      const search = picker.querySelector(".min-picker-search");
      const results = picker.querySelector(".min-picker-results");
      const clearBtn = picker.querySelector(".min-picker-clear");

      search?.addEventListener("input", () => {
        renderMinistranteResults(slot, search.value);
      });
      search?.addEventListener("focus", () => {
        if (search.value.trim()) renderMinistranteResults(slot, search.value);
      });
      results?.addEventListener("click", (event) => {
        const btn = event.target.closest(".min-picker-option[data-nombre]");
        if (!btn) return;
        setMinistrantePickerValue(slot, btn.getAttribute("data-nombre") || "");
      });
      clearBtn?.addEventListener("click", () => {
        setMinistrantePickerValue(slot, "");
        search?.focus();
      });
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(".min-picker")) return;
      document.querySelectorAll(".min-picker-results").forEach((list) => {
        list.hidden = true;
      });
    });
  }

  bindMinistrantesPickers();

  async function ensureObservacionesColumn() {
    if (obsColumnReady === true) return true;
    if (obsColumnReady === false) return false;
    try {
      await api("/rest/v1/miembros?select=observaciones&limit=1");
      obsColumnReady = true;
      return true;
    } catch (err) {
      if (isMissingObsColumnError(err)) {
        obsColumnReady = false;
        return false;
      }
      // Otro error de red/sesión: no marcar como ausente
      return true;
    }
  }

  async function saveObservaciones(id, value) {
    const clean = emptyToNull(value);
    setLocalObservacion(id, clean || "");
    const m = miembros.find((x) => String(x.id) === String(id));
    if (m) m.observaciones = clean;

    const ready = await ensureObservacionesColumn();
    if (!ready) {
      return { localOnly: true };
    }

    try {
      await updateMiembro(id, { observaciones: clean });
      obsColumnReady = true;
      return { localOnly: false };
    } catch (err) {
      if (isMissingObsColumnError(err)) {
        obsColumnReady = false;
        return { localOnly: true };
      }
      throw err;
    }
  }

  async function flushLocalObservacionesToCloud() {
    if (!(await ensureObservacionesColumn())) return 0;
    const store = readObsStore();
    const entries = Object.entries(store);
    let saved = 0;
    for (const [id, text] of entries) {
      try {
        await updateMiembro(id, { observaciones: text || null });
        saved += 1;
      } catch (err) {
        if (isMissingObsColumnError(err)) {
          obsColumnReady = false;
          break;
        }
      }
    }
    return saved;
  }

  let attObsMemberId = null;

  function openMemberObservations(miembroId) {
    const m = miembros.find((x) => String(x.id) === String(miembroId));
    if (!m) return;
    const analysis = analyzeMemberMonth(m);
    const title = document.getElementById("attObsTitle");
    const body = document.getElementById("attObsBody");
    const modal = document.getElementById("attObsModal");
    if (!title || !body || !modal) return;

    attObsMemberId = String(m.id);
    title.textContent = m.nombre;
    const edad = calcEdad(m.nacimiento);
    const tel = String(m.telefono || "").trim() || "Sin teléfono";
    const notas = String(m.observaciones || "").trim();
    body.innerHTML = `
      <p class="att-obs-meta">
        ${edad != null ? `${edad} años` : "Edad —"} · ${escapeHtml(tel)} ·
        ${analysis.count}/${analysis.total || 0} reuniones este mes
      </p>

      <section class="att-obs-section">
        <h3 class="att-obs-section-title">Notas del administrador</h3>
        <p class="admin-meta">Profesión, gustos, comida, cómo apoyar al hermano, etc.</p>
        <textarea
          id="attObsNotesInput"
          class="att-obs-notes-input"
          rows="5"
          placeholder="Ej: Trabaja en construcción. Le gusta el fútbol y la empanada. Visitar los martes…"
        >${escapeHtml(notas)}</textarea>
        <p class="admin-ok" id="attObsNotesOk" hidden></p>
        <p class="admin-error" id="attObsNotesError" hidden></p>
      </section>

      <section class="att-obs-section">
        <h3 class="att-obs-section-title">Asistencia del mes</h3>
        <ul class="att-obs-notes">
          ${analysis.notes.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}
        </ul>
        ${
          analysis.meetings.length
            ? `<p class="att-obs-dates"><strong>Reuniones:</strong> ${analysis.meetings
                .map((d) => {
                  const ok = analysis.present.includes(d);
                  return `<span class="${ok ? "is-yes" : "is-no"}">${escapeHtml(
                    formatAttShortDate(d)
                  )}${ok ? " ✓" : ""}</span>`;
                })
                .join(" · ")}</p>`
            : ""
        }
      </section>
    `;
    modal.hidden = false;
    document.body.classList.add("detail-open");
  }

  function closeMemberObservations() {
    const modal = document.getElementById("attObsModal");
    if (modal) modal.hidden = true;
    attObsMemberId = null;
    const pdfModal = document.getElementById("attPdfModal");
    if (!pdfModal || pdfModal.hidden) {
      document.body.classList.remove("detail-open");
    }
  }

  async function saveMemberObservacionesFromObsModal() {
    if (!attObsMemberId) return;
    const input = document.getElementById("attObsNotesInput");
    const okEl = document.getElementById("attObsNotesOk");
    const errEl = document.getElementById("attObsNotesError");
    const saveBtn = document.getElementById("attObsSaveNotes");
    const value = input?.value || "";

    showError(errEl, "");
    showOk(okEl, "");
    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.textContent = "Guardando…";
    }

    try {
      const result = await saveObservaciones(attObsMemberId, value);
      if (result.localOnly) {
        showError(
          errEl,
          "Guardado en este dispositivo. Para sincronizar en la nube, ejecuta en Supabase SQL Editor el archivo supabase/observaciones.sql y vuelve a guardar."
        );
        showOk(okEl, "Notas guardadas localmente");
      } else {
        showOk(okEl, "Notas guardadas en Supabase");
      }
    } catch (err) {
      showError(errEl, err?.message || "No se pudo guardar las notas.");
    } finally {
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.textContent = "Guardar notas";
      }
    }
  }

  async function cloudDeleteMemberDay(fecha, miembroId) {
    await api(
      `/rest/v1/asistencia_sacramental?fecha=eq.${encodeURIComponent(fecha)}&miembro_id=eq.${encodeURIComponent(miembroId)}`,
      { method: "DELETE" }
    );
  }

  async function cloudInsertMemberDay(fecha, miembroId) {
    await api("/rest/v1/asistencia_sacramental?on_conflict=fecha,miembro_id", {
      method: "POST",
      headers: {
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify({
        fecha,
        miembro_id: miembroId,
        presente: true,
      }),
    });
  }

  let attDayRequestId = 0;
  let attMonthRequestId = 0;

  async function loadAttendanceMonth() {
    showError(asistenciaError, "");
    if (!session?.access_token) {
      setAttSync("Sin sesión", "error");
      return;
    }
    const requestId = ++attMonthRequestId;
    setAttSync("Sincronizando con Supabase…", "loading");
    const { start, end } = monthBounds(attView);

    try {
      const pushed = await pushLocalAttendancePending();
      if (requestId !== attMonthRequestId) return;
      const rows = await api(
        `/rest/v1/asistencia_sacramental?select=id,fecha,miembro_id,presente&fecha=gte.${start}&fecha=lte.${end}&order=fecha.asc`
      );
      if (requestId !== attMonthRequestId) return;
      attCloudReady = true;
      attMonthRows = Array.isArray(rows) ? rows : [];
      mirrorLocalFromCloudRows(attMonthRows);
      // Mezclar días pendientes locales que aún no se reflejaron
      const pending = readPendingAttendanceDays();
      pending.forEach((fecha) => {
        if (fecha < start || fecha > end) return;
        rebuildMonthRowsFromPresentSets(fecha, getLocalDaySet(fecha));
      });
      renderAttendanceCalendar();
      if (attSelectedDate) await loadAttendanceDay(attSelectedDate, { silent: true });
      else {
        setAttSync(
          pushed
            ? `Mes sincronizado · ${pushed} pendientes subidos`
            : "Mes sincronizado con Supabase",
          "ok"
        );
      }
    } catch (err) {
      if (requestId !== attMonthRequestId) return;
      attCloudReady = false;
      attMonthRows = localRowsForRange(start, end);
      renderAttendanceCalendar();
      setAttSync("Sin nube · solo este dispositivo", "error");
      showError(asistenciaError, attendanceTableHint(err));
      if (attSelectedDate) {
        attDayPresent = getLocalDaySet(attSelectedDate);
        renderAttendanceRoll();
      }
    }
  }

  function freezeViewport() {
    return {
      x: window.scrollX || window.pageXOffset || 0,
      y: window.scrollY || window.pageYOffset || 0,
    };
  }

  function restoreViewport(pos) {
    if (!pos) return;
    const apply = () => window.scrollTo(pos.x, pos.y);
    apply();
    requestAnimationFrame(apply);
    setTimeout(apply, 0);
    setTimeout(apply, 50);
    setTimeout(apply, 120);
  }

  async function loadAttendanceDay(dateKey, { silent = false } = {}) {
    if (!dateKey) return;
    const requestId = ++attDayRequestId;
    const viewport = freezeViewport();
    attSelectedDate = dateKey;
    const date = parseDateKey(dateKey);
    if (attDayTitle) attDayTitle.textContent = date ? formatDateLong(date) : dateKey;
    if (attDayMeta) {
      attDayMeta.textContent =
        date?.getDay() === 0
          ? "Domingo · reunión sacramental · sync Supabase"
          : "Marca con el check quién asistió · sync Supabase";
    }

    if (!silent) showError(asistenciaError, "");
    setAttSync("Cargando desde Supabase…", "loading");
    restoreViewport(viewport);

    const pending = readPendingAttendanceDays();
    if (pending.has(dateKey)) {
      attDayPresent = getLocalDaySet(dateKey);
      rebuildMonthRowsFromPresentSets(dateKey, attDayPresent);
      renderAttendanceCalendar({ syncSelectors: false });
      renderAttendanceRoll();
      setAttSync(`${attDayPresent.size} presentes · pendiente de nube`, "loading");
      restoreViewport(viewport);
      // Intenta subir en segundo plano
      pushLocalAttendancePending()
        .then(() => {
          if (requestId !== attDayRequestId) return;
          return loadAttendanceDay(dateKey, { silent: true });
        })
        .catch(() => {});
      return;
    }

    try {
      const rows = await api(
        `/rest/v1/asistencia_sacramental?select=miembro_id,presente&fecha=eq.${dateKey}&presente=eq.true`
      );
      if (requestId !== attDayRequestId) return;
      attCloudReady = true;
      attDayPresent = new Set(
        (Array.isArray(rows) ? rows : []).map((r) => String(r.miembro_id))
      );
      saveLocalDaySet(dateKey, attDayPresent);
      rebuildMonthRowsFromPresentSets(dateKey, attDayPresent);
      renderAttendanceCalendar({ syncSelectors: false });
      renderAttendanceRoll();
      setAttSync(`${attDayPresent.size} presentes · Supabase`, "ok");
    } catch (err) {
      if (requestId !== attDayRequestId) return;
      attCloudReady = false;
      attDayPresent = getLocalDaySet(dateKey);
      rebuildMonthRowsFromPresentSets(dateKey, attDayPresent);
      renderAttendanceCalendar({ syncSelectors: false });
      renderAttendanceRoll();
      setAttSync(`${attDayPresent.size} presentes · sin nube`, "error");
      if (!silent) showError(asistenciaError, attendanceTableHint(err));
    } finally {
      restoreViewport(viewport);
    }
  }

  let attSaving = new Set();

  async function setMemberAttendance(miembroId, presente) {
    if (!attSelectedDate || !miembroId) return false;
    const id = String(miembroId);
    if (attSaving.has(id)) return false;
    attSaving.add(id);
    showOk(asistenciaOk, "");

    // UI inmediata
    if (presente) attDayPresent.add(id);
    else attDayPresent.delete(id);
    setLocalMemberPresent(attSelectedDate, id, presente);
    markAttendanceDayPending(attSelectedDate);
    rebuildMonthRowsFromPresentSets(attSelectedDate, attDayPresent);
    updateDayStats({ fullAnalytics: false });
    renderAttendanceCalendar({ syncSelectors: false });
    if (attRollFilter && attRollFilter !== "all") {
      renderAttendanceRoll();
    }
    setAttSync("Guardando en Supabase…", "loading");

    try {
      if (presente) {
        await cloudInsertMemberDay(attSelectedDate, id);
      } else {
        await cloudDeleteMemberDay(attSelectedDate, id);
      }
      attCloudReady = true;
      setLocalMemberPresent(attSelectedDate, id, presente);
      setAttSync(`${attDayPresent.size} presentes · guardado en Supabase`, "ok");
      showOk(asistenciaOk, presente ? "Presente sincronizado" : "Ausente sincronizado");
      showError(asistenciaError, "");
      scheduleAttendanceAnalytics();
      return true;
    } catch (err) {
      attCloudReady = false;
      markAttendanceDayPending(attSelectedDate);
      setAttSync(`${attDayPresent.size} presentes · error de sync`, "error");
      showError(asistenciaError, attendanceTableHint(err));
      return false;
    } finally {
      attSaving.delete(id);
    }
  }

  async function setAllAttendance(presente) {
    if (!attSelectedDate || !miembros.length || attBulkBusy) return;
    attBulkBusy = true;
    updateDayStats({ fullAnalytics: false });
    showError(asistenciaError, "");
    setAttSync(presente ? "Marcando en Supabase…" : "Desmarcando en Supabase…", "loading");

    if (presente) {
      miembros.forEach((m) => attDayPresent.add(String(m.id)));
    } else {
      attDayPresent = new Set();
    }
    saveLocalDaySet(attSelectedDate, attDayPresent);
    markAttendanceDayPending(attSelectedDate);
    rebuildMonthRowsFromPresentSets(attSelectedDate, attDayPresent);
    renderAttendanceRoll();
    renderAttendanceCalendar({ syncSelectors: false });

    try {
      await api(
        `/rest/v1/asistencia_sacramental?fecha=eq.${encodeURIComponent(attSelectedDate)}`,
        { method: "DELETE" }
      );
      if (presente) {
        const payload = [...attDayPresent].map((miembroId) => ({
          fecha: attSelectedDate,
          miembro_id: miembroId,
          presente: true,
        }));
        const chunkSize = 100;
        for (let i = 0; i < payload.length; i += chunkSize) {
          await api("/rest/v1/asistencia_sacramental?on_conflict=fecha,miembro_id", {
            method: "POST",
            headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
            body: JSON.stringify(payload.slice(i, i + chunkSize)),
          });
        }
      }
      attCloudReady = true;
      saveLocalDaySet(attSelectedDate, attDayPresent);
      clearAttendanceDayPending(attSelectedDate);
      setAttSync(`${attDayPresent.size} presentes · guardado en Supabase`, "ok");
      showOk(
        asistenciaOk,
        presente ? "Todos marcados y sincronizados" : "Todos desmarcados y sincronizados"
      );
      showError(asistenciaError, "");
      scheduleAttendanceAnalytics();
    } catch (err) {
      attCloudReady = false;
      markAttendanceDayPending(attSelectedDate);
      setAttSync(`${attDayPresent.size} presentes · error de sync`, "error");
      showError(asistenciaError, attendanceTableHint(err));
    } finally {
      attBulkBusy = false;
      updateDayStats({ fullAnalytics: true });
    }
  }

  function shiftAttendanceMonth(delta) {
    attView = new Date(attView.getFullYear(), attView.getMonth() + delta, 1);
    syncAttendanceSelectors();
    renderAttendanceCalendar();
    loadAttendanceMonth();
  }

  function pct(part, total) {
    if (!total) return 0;
    return Math.round((part / total) * 100);
  }

  function setStat(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value);
  }

  function setBar(id, percent) {
    const el = document.getElementById(id);
    if (el) el.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  }

  function listItem(label, value) {
    return `<li><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></li>`;
  }

  const MESES = {
    ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
    jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11,
  };

  function normalizeText(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function parseFecha(fecha) {
    if (!fecha) return null;
    const text = String(fecha).trim();
    const match =
      text.match(/^(\d{1,2})\s+de\s+([a-zA-Záéíóú]+)\s+de\s+(\d{4})$/i) ||
      text.match(/^(\d{1,2})\s+([a-zA-Záéíóú]+)\s+(\d{4})$/i);
    if (!match) return null;
    const day = Number(match[1]);
    const monthKey = normalizeText(match[2]).slice(0, 3);
    const year = Number(match[3]);
    const month = MESES[monthKey];
    if (month == null) return null;
    return new Date(year, month, day);
  }

  function calcEdad(nacimiento) {
    const birth = parseFecha(nacimiento);
    if (!birth) return null;
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const hadBirthday =
      today.getMonth() > birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
    if (!hadBirthday) age -= 1;
    return age;
  }

  function esVaron(m) {
    return /var[oó]n/i.test(String(m?.sexo || ""));
  }

  function esMujer(m) {
    return /mujer/i.test(String(m?.sexo || ""));
  }

  function esAdulto(m) {
    const edad = calcEdad(m?.nacimiento);
    return edad != null && edad >= 18;
  }

  function enSociedadSocorro(m) {
    return esMujer(m) && esAdulto(m);
  }

  function enQuorumElderes(m) {
    return esVaron(m) && esAdulto(m);
  }

  function renderStats() {
    const total = miembros.length;
    const varones = miembros.filter((m) => esVaron(m)).length;
    const mujeres = miembros.filter((m) => esMujer(m)).length;
    const recien = miembros.filter((m) => m.recien_converso).length;
    const obispado = miembros.filter((m) => m.obispado).length;
    const ss = miembros.filter((m) => enSociedadSocorro(m)).length;
    const elderes = miembros.filter((m) => enQuorumElderes(m)).length;
    const presSs = miembros.filter((m) => m.sociedad_socorro).length;
    const presElderes = miembros.filter((m) => m.quorum_elderes).length;
    const conFoto = miembros.filter((m) => resolveMiembroFotoArchivo(m)).length;
    const conTel = miembros.filter((m) => String(m.telefono || "").trim()).length;
    const conMail = miembros.filter((m) => String(m.correo || "").trim()).length;
    const conDir = miembros.filter((m) => String(m.direccion || "").trim()).length;
    const conFam = miembros.filter((m) => String(m.familia || "").trim()).length;
    const conCoords = miembros.filter((m) => String(m.coords || "").trim()).length;
    const sinSexo = total - varones - mujeres;

    setStat("statTotal", total);
    setStat("statVarones", varones);
    setStat("statMujeres", mujeres);
    setStat("statRecien", recien);
    setStat("statObispado", obispado);
    setStat("statSs", ss);
    setStat("statElderes", elderes);
    setStat("statFoto", conFoto);
    setStat("statTel", conTel);
    setStat("statMail", conMail);

    setBar("barVarones", pct(varones, total));
    setBar("barMujeres", pct(mujeres, total));
    setBar("barRecien", pct(recien, total));
    setBar("barObispado", pct(obispado, total));
    setBar("barSs", pct(ss, total));
    setBar("barElderes", pct(elderes, total));
    setBar("barFoto", pct(conFoto, total));
    setBar("barTel", pct(conTel, total));
    setBar("barMail", pct(conMail, total));

    const coverage = document.getElementById("statCoverageList");
    if (coverage) {
      coverage.innerHTML = [
        listItem("Con foto", `${conFoto} (${pct(conFoto, total)}%)`),
        listItem("Con teléfono", `${conTel} (${pct(conTel, total)}%)`),
        listItem("Con correo", `${conMail} (${pct(conMail, total)}%)`),
        listItem("Con dirección", `${conDir} (${pct(conDir, total)}%)`),
        listItem("Con familia", `${conFam} (${pct(conFam, total)}%)`),
        listItem("Con coordenadas", `${conCoords} (${pct(conCoords, total)}%)`),
      ].join("");
    }

    const flags = document.getElementById("statFlagsList");
    if (flags) {
      flags.innerHTML = [
        listItem("Sociedad de Socorro (mujeres ≥ 18)", `${ss} (${pct(ss, total)}%)`),
        listItem("Quórum de élderes (varones ≥ 18)", `${elderes} (${pct(elderes, total)}%)`),
        listItem("Recién conversos", `${recien} (${pct(recien, total)}%)`),
        listItem("Obispado", `${obispado} (${pct(obispado, total)}%)`),
        listItem("Presidencia SS", String(presSs)),
        listItem("Presidencia élderes", String(presElderes)),
        listItem("Sexo sin registrar", String(sinSexo)),
      ].join("");
    }

    if (adminStatusText) {
      adminStatusText.textContent = total
        ? `Telemetría activa · ${total} registros`
        : "Sistemas en línea · sin registros";
    }
  }

  function renderTable() {
    const list = filteredMiembros();
    if (adminMeta) {
      adminMeta.textContent = `${list.length} de ${miembros.length} hermanos`;
    }
    if (!adminTableBody) return;
    adminTableBody.innerHTML = list
      .map(
        (m) => `
      <tr data-id="${escapeHtml(m.id)}">
        <td class="admin-col-name">
          <p class="admin-name">${escapeHtml(m.nombre)}</p>
          <p class="admin-sub">${escapeHtml(m.organizacion || m.llamamiento || "")}</p>
        </td>
        <td class="admin-col-phone">
          <span class="admin-col-label">Teléfono</span>
          <p class="admin-phone">${escapeHtml(m.telefono || "—")}</p>
        </td>
        <td class="admin-col-flags">
          <span class="admin-col-label">Marcas</span>
          <div class="admin-badges">${flagsHtml(m) || `<span class="admin-sub">Sin marcas</span>`}</div>
        </td>
        <td class="admin-col-actions">
          <div class="admin-row-actions">
            <button type="button" data-edit="${escapeHtml(m.id)}">Editar</button>
            <button type="button" class="is-danger" data-delete="${escapeHtml(m.id)}">Borrar</button>
          </div>
        </td>
      </tr>`
      )
      .join("");
  }

  function renderAll() {
    renderStats();
    renderTable();
  }

  async function loadMiembros() {
    showError(adminError, "");
    if (adminMeta) adminMeta.textContent = "Cargando…";
    if (adminStatusText) adminStatusText.textContent = "Sincronizando datos…";
    try {
      miembros = (await fetchMiembros()) || [];
      await ensureObservacionesColumn();
      applyLocalObservacionesToMiembros();
      if (obsColumnReady) {
        await flushLocalObservacionesToCloud();
        // recargar notas desde nube tras flush
        miembros = (await fetchMiembros()) || [];
        applyLocalObservacionesToMiembros();
      }
      rebuildFotoPorNombreAdmin();
      enrichMiembrosFotos();
      renderAll();
      if (typeof renderAttendanceRoll === "function") {
        renderAttendanceRoll();
      }
      if (adminStatusText) {
        adminStatusText.textContent = obsColumnReady
          ? "Datos sincronizados"
          : "Notas: falta observaciones.sql en Supabase";
      }
    } catch (err) {
      showError(adminError, err.message || "No se pudo cargar la lista.");
      if (adminMeta) adminMeta.textContent = "Error al cargar";
      if (adminStatusText) adminStatusText.textContent = "Fallo de sincronización";
    }
  }

  function openModal(member) {
    showError(formError, "");
    memberForm.reset();
    document.getElementById("memberId").value = member?.id || "";
    memberModalTitle.textContent = member ? "Editar hermano" : "Nuevo hermano";

    const fields = {
      f_nombre: member?.nombre || "",
      f_sexo: member?.sexo || "",
      f_nacimiento: member?.nacimiento || "",
      f_organizacion: member?.organizacion || "",
      f_oficio: member?.oficio || "",
      f_llamamiento: member?.llamamiento || "",
      f_etiqueta: member?.etiqueta_llamamiento || "",
      f_telefono: member?.telefono || "",
      f_correo: member?.correo || "",
      f_direccion: member?.direccion || "",
      f_familia: member?.familia || "",
      f_observaciones: member?.observaciones || "",
      f_bautismo: member?.bautismo || "",
      f_tiempo: member?.tiempo_miembro || "",
      f_coords: member?.coords || "",
      f_foto: member?.foto || "",
    };

    for (const [id, value] of Object.entries(fields)) {
      const el = document.getElementById(id);
      if (el) el.value = value;
    }

    document.getElementById("f_recien").checked = !!member?.recien_converso;
    document.getElementById("f_obispado").checked = !!member?.obispado;
    document.getElementById("f_ss").checked = !!member?.sociedad_socorro;
    document.getElementById("f_elderes").checked = !!member?.quorum_elderes;

    fillMinistrantesSelects(member);

    const fotoFile = document.getElementById("f_foto_file");
    if (fotoFile) fotoFile.value = "";
    const fotoStatus = document.getElementById("f_foto_status");
    if (fotoStatus) {
      fotoStatus.hidden = true;
      fotoStatus.textContent = "";
    }
    setFotoPreview(member?.foto || "");

    memberModal.hidden = false;
    document.body.classList.add("detail-open");
    document.getElementById("f_nombre").focus();
  }

  function closeModal() {
    memberModal.hidden = true;
    document.body.classList.remove("detail-open");
    showError(formError, "");
  }

  function emptyToNull(value) {
    const v = String(value || "").trim();
    return v ? v : null;
  }

  function formPayload() {
    const m1 = String(document.getElementById("f_ministrante_1")?.value || "").trim();
    const m2 = String(document.getElementById("f_ministrante_2")?.value || "").trim();
    const ministrantes = [];
    if (m1) ministrantes.push({ nombre: m1 });
    if (m2 && m2.toLowerCase() !== m1.toLowerCase()) {
      ministrantes.push({ nombre: m2 });
    }

    return {
      nombre: String(document.getElementById("f_nombre").value || "").trim(),
      sexo: emptyToNull(document.getElementById("f_sexo").value),
      nacimiento: emptyToNull(document.getElementById("f_nacimiento").value),
      organizacion: emptyToNull(document.getElementById("f_organizacion").value),
      oficio: emptyToNull(document.getElementById("f_oficio").value),
      llamamiento: emptyToNull(document.getElementById("f_llamamiento").value),
      etiqueta_llamamiento: emptyToNull(
        document.getElementById("f_etiqueta").value
      ),
      telefono: emptyToNull(document.getElementById("f_telefono").value),
      correo: emptyToNull(document.getElementById("f_correo").value),
      direccion: emptyToNull(document.getElementById("f_direccion").value),
      familia: emptyToNull(document.getElementById("f_familia").value),
      observaciones: emptyToNull(document.getElementById("f_observaciones").value),
      bautismo: emptyToNull(document.getElementById("f_bautismo").value),
      tiempo_miembro: emptyToNull(document.getElementById("f_tiempo").value),
      coords: emptyToNull(document.getElementById("f_coords").value),
      foto: emptyToNull(document.getElementById("f_foto").value),
      recien_converso: document.getElementById("f_recien").checked,
      obispado: document.getElementById("f_obispado").checked,
      sociedad_socorro: document.getElementById("f_ss").checked,
      quorum_elderes: document.getElementById("f_elderes").checked,
      hermanos_ministrantes: ministrantes,
    };
  }

  function safeFotoFilename(name, originalFileName) {
    const extMatch = String(originalFileName || "").match(/\.(jpe?g|png|webp|gif)$/i);
    const ext = extMatch ? extMatch[0].toLowerCase() : ".jpg";
    let base = String(name || "")
      .trim()
      .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!base) {
      base = String(originalFileName || "foto")
        .replace(/\.[^.]+$/, "")
        .trim() || "foto";
    }
    const withExt = /\.(jpe?g|png|webp|gif)$/i.test(base) ? base : `${base}${ext}`;
    // Clave Storage sin tildes (Supabase InvalidKey)
    if (typeof window.fotoStorageKey === "function") {
      return window.fotoStorageKey(withExt) || withExt;
    }
    return withExt
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9._\s-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function setFotoPreview(filename) {
    const preview = document.getElementById("f_foto_preview");
    if (!preview) return;
    const name = String(filename || "").trim();
    if (!name) {
      preview.hidden = true;
      preview.removeAttribute("src");
      return;
    }
    preview.hidden = false;
    preview.dataset.fotoStage = "local";
    preview.dataset.cloud = fotoMiembroCloudUrl(name);
    preview.dataset.anon = FOTO_ANON;
    preview.onerror = () => {
      if (window.fotoImgFallback) window.fotoImgFallback(preview);
    };
    preview.src = fotoMiembroUrl(name);
  }

  async function uploadFotoToSupabase(file, filename) {
    const token = session?.access_token;
    if (!token) throw new Error("Sesión expirada. Vuelve a iniciar sesión.");
    const bucket =
      String((window.SUPABASE_CONFIG || {}).fotosBucket || "fotos-miembros").trim() ||
      "fotos-miembros";
    const objectPath = encodeURIComponent(filename);
    const endpoint = `${supabaseUrl}/storage/v1/object/${bucket}/${objectPath}`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${token}`,
        "Content-Type": file.type || "application/octet-stream",
        "x-upsert": "true",
      },
      body: file,
    });
    if (!response.ok) {
      const text = await response.text();
      if (response.status === 404 || /Bucket not found/i.test(text)) {
        throw new Error(
          "Falta el bucket de fotos. Ejecuta supabase/storage-fotos.sql en el SQL Editor."
        );
      }
      throw new Error(`No se pudo subir la foto (${response.status}).`);
    }
    return filename;
  }

  async function onFotoFileSelected(event) {
    const input = event.target;
    const file = input?.files?.[0];
    const status = document.getElementById("f_foto_status");
    if (!file) return;

    const nombreMiembro = String(document.getElementById("f_nombre")?.value || "").trim();
    const filename = safeFotoFilename(nombreMiembro || file.name, file.name);
    const fotoInput = document.getElementById("f_foto");

    if (status) {
      status.hidden = false;
      status.textContent = "Subiendo a Supabase…";
    }

    try {
      await uploadFotoToSupabase(file, filename);
      if (fotoInput) fotoInput.value = filename;
      setFotoPreview(filename);
      if (status) {
        status.textContent =
          `Listo en la nube: ${filename}. Para respaldo local, guarda también el archivo en la carpeta /fotos.`;
      }
    } catch (err) {
      if (status) {
        status.textContent = err.message || "Error al subir la foto.";
      }
    } finally {
      input.value = "";
    }
  }

  if (!supabaseUrl || !supabaseKey) {
    showError(
      loginError,
      "Falta configurar supabase-config.js (url y anonKey)."
    );
  }

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    showError(loginError, "");

    if (!supabaseUrl || !supabaseKey) {
      showError(loginError, "Falta supabase-config.js.");
      return;
    }

    loginSubmit.disabled = true;
    loginSubmit.textContent = "Entrando…";

    try {
      const data = await signIn(
        loginEmail.value.trim(),
        loginPassword.value
      );
      if (!data?.access_token) {
        throw new Error("No se recibió token de acceso.");
      }
      setLoggedIn(data);
      await loadMiembros();
    } catch (err) {
      console.error(err);
      const msg = String(err.message || "");
      if (/invalid login|invalid credentials/i.test(msg)) {
        showError(
          loginError,
          "Correo o contraseña incorrectos. Revisa mayúsculas y espacios."
        );
      } else if (/email not confirmed/i.test(msg)) {
        showError(
          loginError,
          "Confirma el usuario en Supabase → Authentication → Users."
        );
      } else {
        showError(loginError, msg || "No se pudo iniciar sesión.");
      }
    } finally {
      loginSubmit.disabled = false;
      loginSubmit.textContent = "Entrar";
    }
  });

  logoutBtn.addEventListener("click", () => {
    setLoggedIn(null);
    miembros = [];
    attMonthRows = [];
    attDayPresent = new Set();
    attSelectedDate = null;
    if (adminTableBody) adminTableBody.innerHTML = "";
    renderStats();
    setPanel("stats");
  });

  adminTabs.forEach((tab) => {
    tab.addEventListener("click", () => setPanel(tab.dataset.panel));
  });

  refreshStatsBtn?.addEventListener("click", () => loadMiembros());

  attPrevMonth?.addEventListener("click", () => shiftAttendanceMonth(-1));
  attNextMonth?.addEventListener("click", () => shiftAttendanceMonth(1));
  attTodayBtn?.addEventListener("click", () => {
    const today = new Date();
    attView = new Date(today.getFullYear(), today.getMonth(), 1);
    syncAttendanceSelectors();
    loadAttendanceMonth().then(() => loadAttendanceDay(toDateKey(today)));
  });
  attRefreshBtn?.addEventListener("click", () => loadAttendanceMonth());
  attMonth?.addEventListener("change", () => {
    attView = new Date(Number(attYear.value), Number(attMonth.value), 1);
    loadAttendanceMonth();
  });
  attYear?.addEventListener("change", () => {
    attView = new Date(Number(attYear.value), Number(attMonth.value), 1);
    loadAttendanceMonth();
  });
  let attCalendarLastTap = 0;
  let attCalendarTouchHandled = false;
  function selectAttendanceDayFromEvent(event) {
    const cell = event.target.closest("[data-date]");
    if (!cell || !attCalendar?.contains(cell)) return false;
    const dateKey = cell.getAttribute("data-date");
    if (!dateKey) return false;
    event.preventDefault();
    event.stopPropagation();
    attCalendar.querySelectorAll(".asistencia-day.is-selected").forEach((el) => {
      el.classList.remove("is-selected");
    });
    cell.classList.add("is-selected");
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      try {
        document.activeElement.blur();
      } catch (_) {
        /* ignore */
      }
    }
    loadAttendanceDay(dateKey);
    return true;
  }
  attCalendar?.addEventListener(
    "touchend",
    (event) => {
      const now = Date.now();
      const isDoubleTap = now - attCalendarLastTap <= 350;
      attCalendarLastTap = now;
      if (isDoubleTap) {
        event.preventDefault();
        return;
      }
      if (selectAttendanceDayFromEvent(event)) {
        attCalendarTouchHandled = true;
        setTimeout(() => {
          attCalendarTouchHandled = false;
        }, 500);
      }
    },
    { passive: false }
  );
  attCalendar?.addEventListener("click", (event) => {
    if (attCalendarTouchHandled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    selectAttendanceDayFromEvent(event);
  });
  attSearch?.addEventListener("input", () => {
    attSearchQuery = attSearch.value;
    renderAttendanceRoll();
  });
  attFiltersBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleAttFilters();
  });
  attFiltersPanel?.addEventListener("click", (event) => {
    event.stopPropagation();
    const filterBtn = event.target.closest("[data-att-filter]");
    if (filterBtn) {
      attRollFilter = filterBtn.getAttribute("data-att-filter") || "all";
      syncAttFilterButtons();
      renderAttendanceRoll();
      setAttFiltersOpen(false);
      return;
    }
  });
  document.addEventListener("click", () => setAttFiltersOpen(false));
  attRoll?.addEventListener("change", (event) => {
    const input = event.target.closest("input.asistencia-roll-check[data-miembro]");
    if (!input) return;
    const id = input.getAttribute("data-miembro");
    if (!id) return;
    if (attSaving.has(id)) {
      input.checked = attDayPresent.has(id);
      paintRollItemFromCheckbox(input);
      return;
    }
    paintRollItemFromCheckbox(input);
    setMemberAttendance(id, input.checked);
  });
  attRoll?.addEventListener("click", (event) => {
    const obsBtn = event.target.closest("[data-obs-id]");
    if (!obsBtn) return;
    event.preventDefault();
    event.stopPropagation();
    openMemberObservations(obsBtn.getAttribute("data-obs-id"));
  });
  document.getElementById("attObsClose")?.addEventListener("click", closeMemberObservations);
  document.getElementById("attObsCancel")?.addEventListener("click", closeMemberObservations);
  document.getElementById("attObsSaveNotes")?.addEventListener("click", () => {
    saveMemberObservacionesFromObsModal();
  });
  document.getElementById("attObsModal")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeMemberObservations();
  });
  attMarkAll?.addEventListener("click", () => {
    setAllAttendance(true);
    setAttFiltersOpen(false);
  });
  attClearAll?.addEventListener("click", () => {
    setAllAttendance(false);
    setAttFiltersOpen(false);
  });
  attExportPdf?.addEventListener("click", () => {
    setAttFiltersOpen(false);
    exportAttendancePdf();
  });
  document.getElementById("attPdfClose")?.addEventListener("click", closeAttendancePdfModal);
  document.getElementById("attPdfCancel")?.addEventListener("click", closeAttendancePdfModal);
  document.getElementById("attPdfPrint")?.addEventListener("click", () => printAttendancePdf());
  document.getElementById("attPdfModal")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeAttendancePdfModal();
  });

  adminSearch?.addEventListener("input", () => {
    searchQuery = adminSearch.value;
    renderTable();
  });

  addBtn?.addEventListener("click", () => {
    setPanel("members");
    openModal(null);
  });
  memberModalClose.addEventListener("click", closeModal);
  memberCancel.addEventListener("click", closeModal);
  memberModal.addEventListener("click", (event) => {
    if (event.target === memberModal) closeModal();
  });

  adminTableBody.addEventListener("click", async (event) => {
    const editId = event.target.closest("[data-edit]")?.dataset.edit;
    const deleteId = event.target.closest("[data-delete]")?.dataset.delete;

    if (editId) {
      const member = miembros.find((m) => m.id === editId);
      if (member) openModal(member);
      return;
    }

    if (deleteId) {
      const member = miembros.find((m) => m.id === deleteId);
      const ok = confirm(
        `¿Eliminar a ${member?.nombre || "este hermano"} del directorio?`
      );
      if (!ok) return;
      try {
        await deleteMiembro(deleteId);
        await loadMiembros();
      } catch (err) {
        showError(adminError, err.message);
      }
    }
  });

  document.getElementById("f_foto_file")?.addEventListener("change", onFotoFileSelected);
  document.getElementById("f_foto")?.addEventListener("input", () => {
    setFotoPreview(document.getElementById("f_foto")?.value || "");
  });

  memberForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    showError(formError, "");

    const payload = formPayload();
    if (!payload.nombre) {
      showError(formError, "El nombre es obligatorio.");
      return;
    }

    const id = document.getElementById("memberId").value;
    const saveBtn = document.getElementById("memberSave");
    saveBtn.disabled = true;
    saveBtn.textContent = "Guardando…";

    try {
      const obsValue = payload.observaciones;
      const obsReady = await ensureObservacionesColumn();
      if (!obsReady) {
        delete payload.observaciones;
      }
      const minReady = await ensureMinistrantesColumn({ force: true });
      if (!minReady) {
        delete payload.hermanos_ministrantes;
        showMinistrantesSetupHint(true);
      } else {
        showMinistrantesSetupHint(false);
      }

      let savedId = id;
      if (id) {
        await updateMiembro(id, payload);
      } else {
        const created = await insertMiembro(payload);
        savedId = Array.isArray(created) ? created[0]?.id : created?.id;
      }

      if (savedId) {
        await saveObservaciones(savedId, obsValue);
      }

      if (!minReady) {
        showError(
          formError,
          "Los datos del hermano se guardaron, pero los ministrantes NO: en Supabase → SQL Editor ejecuta supabase/hermanos-ministrantes.sql (Run) y luego vuelve a editar y guardar."
        );
        await loadMiembros();
        return;
      }

      closeModal();
      await loadMiembros();
    } catch (err) {
      if (isMissingObsColumnError(err)) {
        showError(
          formError,
          "Falta la columna observaciones. Ejecuta supabase/observaciones.sql en Supabase y vuelve a guardar."
        );
      } else if (isMissingMinistrantesColumnError(err)) {
        ministrantesColumnReady = false;
        showMinistrantesSetupHint(true);
        showError(
          formError,
          "Falta la columna hermanos_ministrantes en Supabase. Ve a SQL Editor, ejecuta supabase/hermanos-ministrantes.sql y vuelve a guardar."
        );
      } else {
        showError(formError, err.message || "No se pudo guardar.");
      }
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = "Guardar";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (attFiltersPanel && !attFiltersPanel.hidden) {
      setAttFiltersOpen(false);
      return;
    }
    const obsModal = document.getElementById("attObsModal");
    if (obsModal && !obsModal.hidden) {
      closeMemberObservations();
      return;
    }
    const pdfModal = document.getElementById("attPdfModal");
    if (pdfModal && !pdfModal.hidden) {
      closeAttendancePdfModal();
      return;
    }
    if (!memberModal.hidden) closeModal();
  });

  setPanel("stats");

  // Restaurar sesión guardada
  (async () => {
    const existing = loadSession();
    if (!existing?.access_token) {
      setLoggedIn(null);
      return;
    }
    setLoggedIn(existing);
    if (isSessionExpired(existing)) {
      try {
        await refreshSession(existing);
      } catch (err) {
        console.warn("[admin] Sesión guardada inválida", err);
        setLoggedIn(null);
        showError(loginError, "Tu sesión expiró. Vuelve a iniciar sesión.");
        return;
      }
    }
    loadMiembros();
  })();
})();
