/* ============================================================
   MazTech Garage - Global Stylesheet
   assets/styles.css
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

/* ── CSS Variables ─────────────────────────────────────────── */
:root {
  --bg:          #0d0f14;
  --bg-2:        #13161d;
  --bg-3:        #1a1e28;
  --bg-card:     #1e2230;
  --bg-hover:    #252b3b;
  --border:      #2a2f42;
  --border-2:    #343b52;

  --text:        #e8ecf4;
  --text-muted:  #7c8399;
  --text-dim:    #4a5168;

  --teal:        #00c9a7;
  --teal-dim:    #00c9a71a;
  --blue:        #4d9eff;
  --blue-dim:    #4d9eff1a;
  --orange:      #ff8c42;
  --orange-dim:  #ff8c421a;
  --yellow:      #ffd166;
  --yellow-dim:  #ffd1661a;
  --green:       #06d6a0;
  --green-dim:   #06d6a01a;
  --red:         #ff4757;
  --red-dim:     #ff47571a;
  --purple:      #a78bfa;
  --purple-dim:  #a78bfa1a;

  --sidebar-w:   240px;
  --topbar-h:    60px;
  --radius:      10px;
  --radius-sm:   6px;
  --shadow:      0 4px 24px rgba(0,0,0,0.4);
  --font-body:   'Sarabun', sans-serif;
  --font-mono:   'IBM Plex Mono', monospace;
}

/* ── Reset ─────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 15px; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
button { cursor: pointer; font-family: inherit; }
input, select, textarea { font-family: inherit; }

/* ══════════════════════════════════════════════════════════════
   LAYOUT — Critical scroll fix
   ══════════════════════════════════════════════════════════════ */
.app-shell {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  height: 100vh;
}

.page-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 0; /* Critical: allows flex child to scroll */
}

/* ── Scrollbar ─────────────────────────────────────────────── */
.page-content::-webkit-scrollbar { width: 5px; }
.page-content::-webkit-scrollbar-track { background: transparent; }
.page-content::-webkit-scrollbar-thumb { background: var(--border-2); border-radius: 99px; }

/* ══════════════════════════════════════════════════════════════
   SIDEBAR
   ══════════════════════════════════════════════════════════════ */
#sidebar {
  width: var(--sidebar-w);
  background: var(--bg-2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: transform 0.25s ease;
  z-index: 100;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 20px 16px;
  border-bottom: 1px solid var(--border);
}

.logo-icon {
  font-size: 28px;
  color: var(--teal);
  line-height: 1;
}

.logo-text {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.25;
}

.logo-text small {
  font-size: 11px;
  font-weight: 400;
  color: var(--text-muted);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sidebar-nav {
  flex: 1;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s;
}

.nav-item:hover {
  background: var(--bg-hover);
  color: var(--text);
}

.nav-item.active {
  background: var(--teal-dim);
  color: var(--teal);
  font-weight: 600;
}

.nav-icon {
  font-size: 16px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid var(--border);
}

.sidebar-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 34px;
  height: 34px;
  background: var(--teal-dim);
  color: var(--teal);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.user-info {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  line-height: 1.3;
}

.user-info small {
  font-size: 11px;
  color: var(--text-muted);
}

/* ══════════════════════════════════════════════════════════════
   TOPBAR
   ══════════════════════════════════════════════════════════════ */
#topbar {
  height: var(--topbar-h);
  background: var(--bg-2);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 12px;
  flex-shrink: 0;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.topbar-title {
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.topbar-date {
  font-size: 12px;
  color: var(--text-muted);
}

.sidebar-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 20px;
  padding: 4px 6px;
  border-radius: var(--radius-sm);
  line-height: 1;
}

/* ══════════════════════════════════════════════════════════════
   BUTTONS
   ══════════════════════════════════════════════════════════════ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  border: none;
  transition: all 0.15s;
  white-space: nowrap;
}

.btn-sm { padding: 6px 12px; font-size: 13px; }
.btn-lg { padding: 12px 24px; font-size: 16px; }
.btn-full { width: 100%; justify-content: center; }

.btn-primary {
  background: var(--teal);
  color: #0d1117;
}
.btn-primary:hover { background: #00e6bc; }

.btn-secondary {
  background: var(--bg-3);
  color: var(--text);
  border: 1px solid var(--border);
}
.btn-secondary:hover { background: var(--bg-hover); }

.btn-outline {
  background: transparent;
  color: var(--teal);
  border: 1px solid var(--teal);
}
.btn-outline:hover { background: var(--teal-dim); }

.btn-danger {
  background: var(--red-dim);
  color: var(--red);
  border: 1px solid var(--red);
}

.btn:disabled, .btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ══════════════════════════════════════════════════════════════
   CARDS
   ══════════════════════════════════════════════════════════════ */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 12px;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

/* ══════════════════════════════════════════════════════════════
   KPI CARDS
   ══════════════════════════════════════════════════════════════ */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
}

.kpi-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  position: relative;
  overflow: hidden;
  transition: transform 0.15s, box-shadow 0.15s;
}

.kpi-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px;
  height: 100%;
  border-radius: 3px 0 0 3px;
}

.kpi-teal::before { background: var(--teal); }
.kpi-blue::before { background: var(--blue); }
.kpi-orange::before { background: var(--orange); }
.kpi-green::before { background: var(--green); }
.kpi-yellow::before { background: var(--yellow); }
.kpi-red::before { background: var(--red); }

.kpi-card:hover { transform: translateY(-2px); box-shadow: var(--shadow); }

.kpi-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.kpi-icon {
  font-size: 20px;
  opacity: 0.7;
}

.kpi-trend {
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font-mono);
}

.kpi-trend.up { color: var(--green); }
.kpi-trend.down { color: var(--red); }

.kpi-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  font-family: var(--font-mono);
  line-height: 1.2;
  margin-bottom: 4px;
}

.kpi-title {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.kpi-sub {
  font-size: 12px;
  color: var(--text-dim);
  margin-top: 4px;
}

/* ══════════════════════════════════════════════════════════════
   BADGES
   ══════════════════════════════════════════════════════════════ */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.badge-teal   { background: var(--teal-dim);   color: var(--teal); }
.badge-blue   { background: var(--blue-dim);   color: var(--blue); }
.badge-orange { background: var(--orange-dim); color: var(--orange); }
.badge-yellow { background: var(--yellow-dim); color: var(--yellow); }
.badge-green  { background: var(--green-dim);  color: var(--green); }
.badge-red    { background: var(--red-dim);    color: var(--red); }
.badge-gray   { background: var(--bg-3);       color: var(--text-muted); border: 1px solid var(--border); }

/* ══════════════════════════════════════════════════════════════
   TABLE
   ══════════════════════════════════════════════════════════════ */
.table-wrap { overflow-x: auto; }

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

thead tr {
  border-bottom: 2px solid var(--border);
}

thead th {
  padding: 10px 14px;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.7px;
  white-space: nowrap;
}

tbody tr {
  border-bottom: 1px solid var(--border);
  transition: background 0.1s;
}

tbody tr:hover {
  background: var(--bg-hover);
  cursor: pointer;
}

tbody td {
  padding: 12px 14px;
  color: var(--text);
  vertical-align: middle;
}

.td-mono {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--teal);
}

.td-muted { color: var(--text-muted); }
.td-right { text-align: right; }
.td-bold  { font-weight: 600; }

/* ══════════════════════════════════════════════════════════════
   FORMS
   ══════════════════════════════════════════════════════════════ */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
}

.form-label .req { color: var(--red); margin-left: 2px; }

.form-control {
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text);
  padding: 10px 14px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s;
  width: 100%;
}

.form-control:focus {
  border-color: var(--teal);
  box-shadow: 0 0 0 3px var(--teal-dim);
}

.form-control::placeholder { color: var(--text-dim); }

.form-control:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

textarea.form-control {
  resize: vertical;
  min-height: 100px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.form-hint {
  font-size: 12px;
  color: var(--text-dim);
}

.form-error {
  font-size: 12px;
  color: var(--red);
}

/* Autocomplete dropdown */
.autocomplete-wrap { position: relative; }

.autocomplete-list {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  z-index: 200;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: var(--shadow);
}

.autocomplete-item {
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
  border-bottom: 1px solid var(--border);
  transition: background 0.1s;
}

.autocomplete-item:last-child { border-bottom: none; }
.autocomplete-item:hover { background: var(--bg-hover); }
.autocomplete-item-sub { font-size: 12px; color: var(--text-muted); }

/* ══════════════════════════════════════════════════════════════
   FILTERS / TABS
   ══════════════════════════════════════════════════════════════ */
.filter-tabs {
  display: flex;
  gap: 4px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 4px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  cursor: pointer;
  border: none;
  background: transparent;
  transition: all 0.15s;
  white-space: nowrap;
}

.filter-tab:hover { color: var(--text); background: var(--bg-hover); }
.filter-tab.active { background: var(--teal); color: #0d1117; font-weight: 600; }

/* ══════════════════════════════════════════════════════════════
   SEARCH BAR
   ══════════════════════════════════════════════════════════════ */
.search-bar {
  position: relative;
  max-width: 320px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-dim);
  font-size: 14px;
  pointer-events: none;
}

.search-input {
  padding-left: 36px !important;
  width: 100%;
}

/* ══════════════════════════════════════════════════════════════
   STATES: Loading / Error / Empty
   ══════════════════════════════════════════════════════════════ */
.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 48px 24px;
  color: var(--text-muted);
  text-align: center;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--border);
  border-top-color: var(--teal);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-icon { font-size: 28px; }

/* ══════════════════════════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════════════════════════ */
#toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: var(--shadow);
  transform: translateX(120%);
  opacity: 0;
  transition: all 0.25s ease;
  max-width: 320px;
}

.toast.show { transform: translateX(0); opacity: 1; }
.toast-success { border-left: 3px solid var(--green); }
.toast-error   { border-left: 3px solid var(--red); }
.toast-info    { border-left: 3px solid var(--blue); }

/* ══════════════════════════════════════════════════════════════
   JOB DETAIL SPECIFIC
   ══════════════════════════════════════════════════════════════ */
.job-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.job-info-item label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.7px;
  display: block;
  margin-bottom: 4px;
}

.job-info-item span {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
}

.job-total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
}

.job-total-row:last-child { border-bottom: none; }
.job-total-row.total-final {
  font-size: 16px;
  font-weight: 700;
  color: var(--teal);
  margin-top: 8px;
  padding-top: 12px;
  border-top: 2px solid var(--border);
}

/* ══════════════════════════════════════════════════════════════
   PAGE HEADER
   ══════════════════════════════════════════════════════════════ */
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.page-header-left { display: flex; flex-direction: column; gap: 4px; }
.page-header h2 { font-size: 20px; font-weight: 700; color: var(--text); }
.page-header p  { font-size: 13px; color: var(--text-muted); }

/* ══════════════════════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  #sidebar {
    position: fixed;
    left: 0; top: 0; bottom: 0;
    transform: translateX(-100%);
  }

  #sidebar.open {
    transform: translateX(0);
    box-shadow: 4px 0 30px rgba(0,0,0,0.6);
  }

  .sidebar-toggle { display: flex; }
  .topbar-date    { display: none; }

  .kpi-grid { grid-template-columns: 1fr 1fr; }

  .page-content { padding: 14px; }

  .form-row { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .kpi-grid { grid-template-columns: 1fr; }
  .kpi-value { font-size: 20px; }
}
