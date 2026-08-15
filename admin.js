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

  let session = null;
  let miembros = [];
  let searchQuery = "";
  let activePanel = "stats";

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
        data?.msg ||
        data?.message ||
        data?.error_description ||
        data?.error ||
        `Error ${response.status}`;
      throw new Error(message);
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
    if (adminTableBody) adminTableBody.innerHTML = "";
    renderStats();
    setPanel("stats");
  });

  adminTabs.forEach((tab) => {
    tab.addEventListener("click", () => setPanel(tab.dataset.panel));
  });

  refreshStatsBtn?.addEventListener("click", () => loadMiembros());

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
