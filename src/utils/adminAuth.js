export const ADMIN_AUTH_KEY = "osama_admin_authed_v1";
export const ADMIN_PASSWORD_KEY = "osama_admin_password_v1";

/**
 * ⚠️ Frontend-only auth (NOT secure)
 * ---------------------------------
 * This file is intentionally simple so it can be replaced later with real backend auth.
 *
 * Why it's not secure:
 * - Values live in localStorage and can be read/modified in DevTools.
 * - There is no server-side enforcement; anyone can bypass the UI.
 *
 * How to integrate a real authentication backend later:
 * - Replace `isAdminAuthed()` to check a REAL session (e.g. HttpOnly cookie) or a short-lived token.
 * - Replace `setAdminAuthed()` with calls to your backend login/logout endpoints.
 * - Remove `getAdminPassword/setAdminPassword` entirely. Password verification must happen on the server.
 *
 * Suggested backend flow:
 * - POST /api/auth/login  -> sets HttpOnly session cookie (recommended) or returns JWT
 * - POST /api/auth/logout -> clears session
 * - GET  /api/auth/me     -> returns { authed: true/false, user }
 *
 * Then update:
 * - `AdminRoute` to call /api/auth/me (or read auth context) before allowing /admin/panel
 * - `AdminLogin` to submit credentials to /api/auth/login
 */
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

