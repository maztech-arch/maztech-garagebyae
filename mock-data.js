// ============================================================
// MazTech Garage - Global UI Helpers
// assets/app.js
// ============================================================

// ── Active Page Detection ─────────────────────────────────────
const _currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';

// ── Navigation Items ──────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'dashboard',    label: 'แดชบอร์ด',       icon: '◈',  href: 'dashboard.html' },
  { id: 'jobs',         label: 'งานซ่อมทั้งหมด',   icon: '⚙',  href: 'jobs.html' },
  { id: 'new-job',      label: 'เปิดงานใหม่',     icon: '+',  href: 'new-job.html' },
  { id: 'appointment',  label: 'ตารางนัดหมาย',    icon: '📅', href: 'appointment.html' },
];

// ════════════════════════════════════════════════════════════
// renderSidebar()
// ════════════════════════════════════════════════════════════
function renderSidebar() {
  const el = document.getElementById('sidebar');
  if (!el) return;

  el.innerHTML = `
    <div class="sidebar-logo">
      <span class="logo-icon">◈</span>
      <span class="logo-text">MazTech<br><small>Garage</small></span>
    </div>
    <nav class="sidebar-nav">
      ${NAV_ITEMS.map(item => {
        const isActive = _currentPage === item.href || _currentPage === item.id + '.html';
        return `
          <a href="${item.href}" class="nav-item ${isActive ? 'active' : ''}">
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-label">${item.label}</span>
          </a>
        `;
      }).join('')}
    </nav>
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <span class="user-avatar">M</span>
        <span class="user-info">MazTech<br><small>Garage System</small></span>
      </div>
    </div>
  `;
}

// ════════════════════════════════════════════════════════════
// renderTopbar()
// ════════════════════════════════════════════════════════════
function renderTopbar(title = '') {
  const el = document.getElementById('topbar');
  if (!el) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('th-TH', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
  });

  el.innerHTML = `
    <div class="topbar-left">
      <button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="Toggle menu">☰</button>
      <h1 class="topbar-title">${title}</h1>
    </div>
    <div class="topbar-right">
      <span class="topbar-date">${dateStr}</span>
      <a href="new-job.html" class="btn btn-primary btn-sm">+ เปิดงานใหม่</a>
    </div>
  `;
}

// ── Sidebar Toggle (mobile) ───────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

// ════════════════════════════════════════════════════════════
// Formatters
// ════════════════════════════════════════════════════════════
const fmt = {
  baht(n) {
    const num = parseFloat(n) || 0;
    return '฿' + num.toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  },
  number(n) {
    return (parseFloat(n) || 0).toLocaleString('th-TH');
  },
  date(d) {
    if (!d) return '-';
    const dt = d instanceof Date ? d : new Date(d);
    if (isNaN(dt)) return String(d);
    return dt.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
  },
  dateShort(d) {
    if (!d) return '-';
    const dt = d instanceof Date ? d : new Date(d);
    if (isNaN(dt)) return String(d);
    return dt.toLocaleDateString('th-TH', { month: 'short', day: 'numeric' });
  },
};

// ════════════════════════════════════════════════════════════
// Job Status Badge
// ════════════════════════════════════════════════════════════
const STATUS_MAP = {
  'กำลังซ่อม':    { cls: 'badge-orange', label: 'กำลังซ่อม' },
  'รออะไหล่':    { cls: 'badge-yellow', label: 'รออะไหล่' },
  'รอชิ้นส่วน':  { cls: 'badge-yellow', label: 'รอชิ้นส่วน' },
  'ตรวจเช็ก':    { cls: 'badge-blue',   label: 'ตรวจเช็ก' },
  'รับรถเข้า':   { cls: 'badge-teal',   label: 'รับรถเข้า' },
  'พร้อมส่งมอบ': { cls: 'badge-green',  label: 'พร้อมส่งมอบ' },
  'ส่งมอบแล้ว':  { cls: 'badge-gray',   label: 'ส่งมอบแล้ว' },
  'เสร็จแล้ว':   { cls: 'badge-gray',   label: 'เสร็จแล้ว' },
  '':             { cls: 'badge-orange', label: 'รับรถเข้า' },
};

function renderBadge(status) {
  const s = STATUS_MAP[status] || STATUS_MAP[status] || { cls: 'badge-gray', label: status || 'ไม่ระบุ' };
  return `<span class="badge ${s.cls}">${s.label}</span>`;
}

// ════════════════════════════════════════════════════════════
// Toast Notification
// ════════════════════════════════════════════════════════════
function showToast(msg, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ════════════════════════════════════════════════════════════
// Loading Overlay
// ════════════════════════════════════════════════════════════
function showLoading(containerId, msg = 'กำลังโหลด...') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>${msg}</p>
    </div>
  `;
}

function showError(containerId, msg = 'เกิดข้อผิดพลาด') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <div class="error-state">
      <span class="error-icon">⚠</span>
      <p>${msg}</p>
      <button onclick="location.reload()" class="btn btn-outline btn-sm">ลองใหม่</button>
    </div>
  `;
}

// ════════════════════════════════════════════════════════════
// KPI Card Builder
// ════════════════════════════════════════════════════════════
function buildKpiCard({ title, value, sub = '', icon = '', color = 'teal', trend = null }) {
  const trendHtml = trend !== null
    ? `<span class="kpi-trend ${trend >= 0 ? 'up' : 'down'}">${trend >= 0 ? '▲' : '▼'} ${Math.abs(trend)}%</span>`
    : '';
  return `
    <div class="kpi-card kpi-${color}">
      <div class="kpi-header">
        <span class="kpi-icon">${icon}</span>
        ${trendHtml}
      </div>
      <div class="kpi-value">${value}</div>
      <div class="kpi-title">${title}</div>
      ${sub ? `<div class="kpi-sub">${sub}</div>` : ''}
    </div>
  `;
}

// ════════════════════════════════════════════════════════════
// Init on DOMContentLoaded
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  // Close sidebar on backdrop click (mobile)
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && !e.target.closest('.sidebar-toggle')) {
        sidebar.classList.remove('open');
      }
    }
  });
});
