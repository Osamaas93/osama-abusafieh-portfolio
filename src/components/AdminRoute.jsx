import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdminAuthed } from "../utils/adminAuth";

export default function AdminRoute({ children }) {
  const location = useLocation();
  if (isAdminAuthed()) return children;
  return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
}

