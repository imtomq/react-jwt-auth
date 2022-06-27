import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import RequireAuth from "./routes/RequireAuth";
import RequireNotAuth from "./routes/RequireNotAuth";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <App />
            </RequireAuth>
          }
        />
        <Route
          path="login"
          element={
            <RequireNotAuth>
              <LoginPage />
            </RequireNotAuth>
          }
        />
        <Route
          path="register"
          element={
            <RequireNotAuth>
              <RegisterPage />
            </RequireNotAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
