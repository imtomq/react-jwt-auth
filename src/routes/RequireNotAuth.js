import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  let location = useLocation();
  let auth = JSON.parse(localStorage.getItem("user"));

  if (auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
