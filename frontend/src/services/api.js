const API_BASE = "http://localhost:8080/api/v1";

// helper for auth header
const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("token"),
});

// REGISTER
export const register = async (data) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.text();
};

// LOGIN
export const login = async (data) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

// GET ALL TASKS
export const getTasks = async () => {
  const res = await fetch(`${API_BASE}/tasks`, {
    headers: getAuthHeaders(),
  });

  return res.json();
};

// CREATE TASK
export const createTask = async (task) => {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(task),
  });

  return res.json();
};

// DELETE TASK
export const deleteTask = async (id) => {
  await fetch(`${API_BASE}/tasks/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
};

// GET BY ID
export const getTaskById = async (id) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    headers: getAuthHeaders(),
  });

  return res.json();
};

// UPDATE TASK
export const updateTask = async (id, task) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(task),
  });

  return res.json();
};