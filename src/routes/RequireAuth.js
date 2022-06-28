import { Navigate, useLocation } from "react-router-dom";
import React from "react";

export default function RequireAuth({ children }) {
  let location = useLocation();
  let auth = JSON.parse(localStorage.getItem("user"));

  if (!auth) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
  return children;
}
