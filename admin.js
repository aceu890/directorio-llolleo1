/* Panel admin — Auth + CRUD con fetch (sin CDN) */

(function () {
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

  let session = null;
  let miembros = [];
  let searchQuery = "";
  let activePanel = "stats";
  let attView = new Date();
  let attSelectedDate = null;
  let attMonthRows = [];
  let attDayPresent = new Set();
  let attSearchQuery = "";
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

  function fotoMiembroUrl(foto) {
    const name = String(foto || "").trim();
    if (!name) return FOTO_ANON;
    if (/^https?:\/\//i.test(name) || name.startsWith("./") || name.startsWith("/")) {
      return name;
    }
    return `./fotos/${encodeURIComponent(name)}`;
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
    return api("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
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
    const q = searchQuery.trim().toLowerCase();
    if (!q) return miembros;
    return miembros.filter((m) => {
      const blob = [
        m.nombre,
        m.telefono,
        m.correo,
        m.organizacion,
        m.llamamiento,
        m.etiqueta_llamamiento,
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
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
      return "Supabase aún no tiene la tabla. Ejecuta supabase/asistencia.sql en el SQL Editor. Mientras tanto se guarda en este dispositivo.";
    }
    if (/permission|policy|row-level|RLS|jwt|not authenticated/i.test(msg)) {
      return "Sin permiso en Supabase. Revisa sesión y políticas de asistencia.sql. El check se mantuvo en este dispositivo.";
    }
    return msg || "No se pudo sincronizar con Supabase.";
  }

  function updateDayStats() {
    const total = miembros.length;
    const present = attDayPresent.size;
    const absent = Math.max(0, total - present);
    const percent = total ? Math.round((present / total) * 100) : 0;
    if (attPresentCount) attPresentCount.textContent = String(present);
    if (attAbsentCount) attAbsentCount.textContent = String(absent);
    if (attPercent) attPercent.textContent = `${percent}%`;
    if (attDayStats) attDayStats.hidden = !attSelectedDate;
    const enabled = Boolean(attSelectedDate);
    if (attMarkAll) attMarkAll.disabled = !enabled;
    if (attClearAll) attClearAll.disabled = !enabled;
  }

  function renderAttendanceRoll() {
    if (!attRoll) return;
    if (!attSelectedDate) {
      attRoll.innerHTML =
        `<p class="admin-meta">Elige un día en el calendario para ver la lista de hermanos.</p>`;
      updateDayStats();
      return;
    }

    const q = attSearchQuery.trim().toLowerCase();
    const list = miembros.filter((m) => {
      if (!q) return true;
      return String(m.nombre || "").toLowerCase().includes(q);
    });

    if (!list.length) {
      attRoll.innerHTML = `<p class="admin-meta">No hay hermanos con ese criterio.</p>`;
      updateDayStats();
      return;
    }

    attRoll.innerHTML = list
      .map((m) => {
        const id = String(m.id);
        const present = attDayPresent.has(id);
        const foto = fotoMiembroUrl(m.foto);
        return `
          <label class="asistencia-roll-item ${present ? "is-present" : "is-absent"}">
            <input
              class="asistencia-roll-check"
              type="checkbox"
              data-miembro="${escapeHtml(id)}"
              ${present ? "checked" : ""}
            />
            <img
              class="asistencia-roll-photo"
              src="${escapeHtml(foto)}"
              alt=""
              width="40"
              height="40"
              loading="lazy"
              onerror="this.onerror=null;this.src='${FOTO_ANON}'"
            />
            <span class="asistencia-roll-copy">
              <strong>${escapeHtml(m.nombre)}</strong>
              <small>${escapeHtml(m.organizacion || m.llamamiento || "—")}</small>
            </span>
            <span class="asistencia-roll-badge">${present ? "Presente" : "Ausente"}</span>
          </label>
        `;
      })
      .join("");

    updateDayStats();
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
  }

  function renderAttendanceCalendar() {
    if (!attCalendar) return;
    syncAttendanceSelectors();
    const { presentCounts, recorded } = attendanceStatsByDay();
    const year = attView.getFullYear();
    const month = attView.getMonth();
    const first = new Date(year, month, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayKey = toDateKey(new Date());
    const selectedKey = attSelectedDate;

    const cells = [];
    for (let i = 0; i < startPad; i += 1) {
      cells.push(`<button class="asistencia-day" type="button" disabled aria-hidden="true"></button>`);
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      const key = toDateKey(date);
      const count = presentCounts.get(key) || 0;
      const hasRecord = recorded.has(key);
      const classes = ["asistencia-day"];
      if (date.getDay() === 0) classes.push("is-sunday");
      if (key === todayKey) classes.push("is-today");
      if (key === selectedKey) classes.push("is-selected");
      if (hasRecord) classes.push("has-record");
      cells.push(`
        <button class="${classes.join(" ")}" type="button" data-date="${key}" aria-label="${escapeHtml(formatDateLong(date))}${hasRecord ? `, ${count} presentes` : ""}">
          <span class="asistencia-day-num">${day}</span>
          <span class="asistencia-day-count">${hasRecord ? count : ""}</span>
          <span class="asistencia-day-dot" aria-hidden="true"></span>
        </button>
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

  async function loadAttendanceMonth() {
    showError(asistenciaError, "");
    if (!session?.access_token) {
      setAttSync("Sin sesión", "error");
      return;
    }
    setAttSync("Cargando mes…", "loading");
    const { start, end } = monthBounds(attView);

    try {
      const rows = await api(
        `/rest/v1/asistencia_sacramental?select=id,fecha,miembro_id,presente&fecha=gte.${start}&fecha=lte.${end}&order=fecha.asc`
      );
      attCloudReady = true;
      attMonthRows = Array.isArray(rows) ? rows : [];
      // Fusionar marcas locales pendientes del mes
      localRowsForRange(start, end).forEach((localRow) => {
        const exists = attMonthRows.some(
          (r) =>
            r.fecha === localRow.fecha &&
            String(r.miembro_id) === String(localRow.miembro_id) &&
            r.presente
        );
        if (!exists) attMonthRows.push(localRow);
      });
      renderAttendanceCalendar();
      if (attSelectedDate) await loadAttendanceDay(attSelectedDate, { silent: true });
      else setAttSync("Mes sincronizado", "ok");
    } catch (err) {
      attCloudReady = false;
      attMonthRows = localRowsForRange(start, end);
      renderAttendanceCalendar();
      setAttSync("Modo local (sin nube)", "error");
      showError(asistenciaError, attendanceTableHint(err));
      if (attSelectedDate) {
        attDayPresent = getLocalDaySet(attSelectedDate);
        renderAttendanceRoll();
      }
    }
  }

  async function loadAttendanceDay(dateKey, { silent = false } = {}) {
    if (!dateKey) return;
    attSelectedDate = dateKey;
    const date = parseDateKey(dateKey);
    if (attDayTitle) attDayTitle.textContent = date ? formatDateLong(date) : dateKey;
    if (attDayMeta) {
      attDayMeta.textContent =
        date?.getDay() === 0
          ? "Domingo · reunión sacramental"
          : "Marca con el check quién asistió";
    }

    if (!silent) showError(asistenciaError, "");
    setAttSync("Cargando día…", "loading");

    const localSet = getLocalDaySet(dateKey);

    try {
      const rows = await api(
        `/rest/v1/asistencia_sacramental?select=miembro_id,presente&fecha=eq.${dateKey}&presente=eq.true`
      );
      attCloudReady = true;
      const remote = new Set(
        (Array.isArray(rows) ? rows : []).map((r) => String(r.miembro_id))
      );
      // Unión: nube + local (para no perder checks pendientes)
      attDayPresent = new Set([...remote, ...localSet]);
      saveLocalDaySet(dateKey, attDayPresent);
      rebuildMonthRowsFromPresentSets(dateKey, attDayPresent);
      renderAttendanceCalendar();
      renderAttendanceRoll();
      setAttSync(`${attDayPresent.size} presentes · sincronizado`, "ok");
    } catch (err) {
      attCloudReady = false;
      attDayPresent = localSet;
      rebuildMonthRowsFromPresentSets(dateKey, attDayPresent);
      renderAttendanceCalendar();
      renderAttendanceRoll();
      setAttSync(`${attDayPresent.size} presentes · local`, "error");
      if (!silent) showError(asistenciaError, attendanceTableHint(err));
    }
  }

  let attSaving = new Set();

  async function setMemberAttendance(miembroId, presente) {
    if (!attSelectedDate || !miembroId) return false;
    const id = String(miembroId);
    if (attSaving.has(id)) return false;
    attSaving.add(id);
    showOk(asistenciaOk, "");

    // 1) Estado local inmediato (no se cancela)
    if (presente) attDayPresent.add(id);
    else attDayPresent.delete(id);
    setLocalMemberPresent(attSelectedDate, id, presente);
    rebuildMonthRowsFromPresentSets(attSelectedDate, attDayPresent);
    updateDayStats();
    renderAttendanceCalendar();
    setAttSync("Guardando…", "loading");

    // 2) Sync Supabase (si falla, el check se mantiene)
    try {
      await cloudDeleteMemberDay(attSelectedDate, id);
      if (presente) await cloudInsertMemberDay(attSelectedDate, id);
      attCloudReady = true;
      setAttSync(`${attDayPresent.size} presentes · guardado`, "ok");
      showOk(asistenciaOk, presente ? "Presente guardado" : "Ausente guardado");
      showError(asistenciaError, "");
      return true;
    } catch (err) {
      attCloudReady = false;
      setAttSync(`${attDayPresent.size} presentes · solo local`, "error");
      showError(asistenciaError, attendanceTableHint(err));
      return false;
    } finally {
      attSaving.delete(id);
    }
  }

  async function setAllAttendance(presente) {
    if (!attSelectedDate || !miembros.length) return;
    showError(asistenciaError, "");
    setAttSync(presente ? "Marcando todos…" : "Desmarcando todos…", "loading");

    if (presente) {
      miembros.forEach((m) => attDayPresent.add(String(m.id)));
    } else {
      attDayPresent = new Set();
    }
    saveLocalDaySet(attSelectedDate, attDayPresent);
    rebuildMonthRowsFromPresentSets(attSelectedDate, attDayPresent);
    renderAttendanceRoll();
    renderAttendanceCalendar();

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
          await api("/rest/v1/asistencia_sacramental", {
            method: "POST",
            headers: { Prefer: "return=minimal" },
            body: JSON.stringify(payload.slice(i, i + chunkSize)),
          });
        }
      }
      attCloudReady = true;
      setAttSync(`${attDayPresent.size} presentes · guardado`, "ok");
      showOk(
        asistenciaOk,
        presente ? "Todos marcados como presentes" : "Todos desmarcados"
      );
      showError(asistenciaError, "");
    } catch (err) {
      attCloudReady = false;
      setAttSync(`${attDayPresent.size} presentes · solo local`, "error");
      showError(asistenciaError, attendanceTableHint(err));
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
    const conFoto = miembros.filter((m) => String(m.foto || "").trim()).length;
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
        <td>
          <p class="admin-name">${escapeHtml(m.nombre)}</p>
          <p class="admin-sub">${escapeHtml(m.organizacion || m.llamamiento || "")}</p>
        </td>
        <td>${escapeHtml(m.telefono || "—")}</td>
        <td><div class="admin-badges">${flagsHtml(m)}</div></td>
        <td>
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
      renderAll();
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

    memberModal.hidden = false;
    document.getElementById("f_nombre").focus();
  }

  function closeModal() {
    memberModal.hidden = true;
    showError(formError, "");
  }

  function emptyToNull(value) {
    const v = String(value || "").trim();
    return v ? v : null;
  }

  function formPayload() {
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
      bautismo: emptyToNull(document.getElementById("f_bautismo").value),
      tiempo_miembro: emptyToNull(document.getElementById("f_tiempo").value),
      coords: emptyToNull(document.getElementById("f_coords").value),
      foto: emptyToNull(document.getElementById("f_foto").value),
      recien_converso: document.getElementById("f_recien").checked,
      obispado: document.getElementById("f_obispado").checked,
      sociedad_socorro: document.getElementById("f_ss").checked,
      quorum_elderes: document.getElementById("f_elderes").checked,
    };
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
  attCalendar?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-date]");
    if (!btn) return;
    loadAttendanceDay(btn.dataset.date);
  });
  attSearch?.addEventListener("input", () => {
    attSearchQuery = attSearch.value;
    renderAttendanceRoll();
  });
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
  attMarkAll?.addEventListener("click", () => setAllAttendance(true));
  attClearAll?.addEventListener("click", () => setAllAttendance(false));

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
      if (id) await updateMiembro(id, payload);
      else await insertMiembro(payload);
      closeModal();
      await loadMiembros();
    } catch (err) {
      showError(formError, err.message || "No se pudo guardar.");
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = "Guardar";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !memberModal.hidden) closeModal();
  });

  setPanel("stats");

  // Restaurar sesión guardada
  const existing = loadSession();
  if (existing?.access_token) {
    setLoggedIn(existing);
    loadMiembros();
  } else {
    setLoggedIn(null);
  }
})();
