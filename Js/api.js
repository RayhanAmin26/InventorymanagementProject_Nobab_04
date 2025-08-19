const API_BASE = "http://localhost/agri_inventory/backend";

// Generic GET
async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE}/${endpoint}.php`);
  return res.json();
}

// Generic POST
async function apiPost(endpoint, data) {
  const res = await fetch(`${API_BASE}/${endpoint}.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Generic PUT
async function apiPut(endpoint, id, data) {
  const res = await fetch(`${API_BASE}/${endpoint}.php?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Generic DELETE
async function apiDelete(endpoint, id) {
  const res = await fetch(`${API_BASE}/${endpoint}.php?id=${id}`, {
    method: "DELETE",
  });
  return res.json();
}
