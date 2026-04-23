// ============================================================
// MazTech Garage - API Layer
// assets/mock-data.js
// ============================================================

const GAS_URL = 'YOUR_GAS_DEPLOYED_URL_HERE'; // <-- ใส่ URL จาก Deploy as Web App

// ── Generic Fetch Wrapper ─────────────────────────────────────
async function _get(params = {}) {
  const url = new URL(GAS_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), { method: 'GET' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!data.success) throw new Error(data.error || 'API error');
  return data;
}

async function _post(body = {}) {
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' }, // GAS requires text/plain for doPost
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!data.success) throw new Error(data.error || 'API error');
  return data;
}

// ════════════════════════════════════════════════════════════
// Dashboard
// ════════════════════════════════════════════════════════════
async function getDashboard() {
  return _get({ action: 'getDashboard' });
}

// ════════════════════════════════════════════════════════════
// Jobs
// ════════════════════════════════════════════════════════════
async function getJobs({ filter = 'all', search = '' } = {}) {
  return _get({ action: 'getJobs', filter, search });
}

// ════════════════════════════════════════════════════════════
// Job Detail
// ════════════════════════════════════════════════════════════
async function getJobDetail(reNo) {
  return _get({ action: 'getJobDetail', re_no: reNo });
}

// ════════════════════════════════════════════════════════════
// Customers (for autocomplete)
// ════════════════════════════════════════════════════════════
async function getCustomers() {
  return _get({ action: 'getCustomers' });
}

// ════════════════════════════════════════════════════════════
// Vehicles (for autocomplete)
// ════════════════════════════════════════════════════════════
async function getVehicles(license = '') {
  return _get({ action: 'getVehicles', license });
}

// ════════════════════════════════════════════════════════════
// Create Job (POST)
// ════════════════════════════════════════════════════════════
async function createJob(payload) {
  return _post({ action: 'createJob', ...payload });
}

// ════════════════════════════════════════════════════════════
// Add Payment (POST)
// ════════════════════════════════════════════════════════════
async function addPayment(payload) {
  return _post({ action: 'addPayment', ...payload });
}
