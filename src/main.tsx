import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
