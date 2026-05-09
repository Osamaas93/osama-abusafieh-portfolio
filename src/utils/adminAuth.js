export const ADMIN_AUTH_KEY = "osama_admin_authed_v1";
export const ADMIN_PASSWORD_KEY = "osama_admin_password_v1";

export function isAdminAuthed() {
  return localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export function setAdminAuthed(value) {
  localStorage.setItem(ADMIN_AUTH_KEY, value ? "true" : "false");
}

export function getAdminPassword() {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) || "";
}

export function setAdminPassword(password) {
  localStorage.setItem(ADMIN_PASSWORD_KEY, String(password || ""));
}

