import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  let location = useLocation();
  let auth = {};

  if (!auth?.user) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
  return children;
}
