import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  let location = useLocation();
  let auth = {};

  if (auth?.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
