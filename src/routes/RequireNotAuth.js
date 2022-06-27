import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../service/auth";

export default function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (auth?.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
