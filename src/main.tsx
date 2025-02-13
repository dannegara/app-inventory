import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppInventory from "./pages/AppInventory.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/app-inventory" />} />
        <Route path="/app-inventory" element={<AppInventory />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
