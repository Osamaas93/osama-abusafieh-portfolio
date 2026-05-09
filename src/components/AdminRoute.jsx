import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdminAuthed } from "../utils/adminAuth";

/**
 * Route guard for the admin panel.
 *
 * Current behavior (frontend-only):
 * - Uses `isAdminAuthed()` (localStorage flag). This is a deterrent only.
 *
 * Backend integration (recommended):
 * - Replace `isAdminAuthed()` with a real auth check:
 *   - Option A: AuthContext populated from GET /api/auth/me (session cookie)
 *   - Option B: Verify a short-lived access token (and refresh token flow)
 *
 * Important:
 * - The backend MUST protect any admin APIs too (don't rely on route guards).
 */
export default function AdminRoute({ children }) {
  const location = useLocation();
  if (isAdminAuthed()) return children;
  return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
}

