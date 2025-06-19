import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./pages/User/Context/AuthProvider.jsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
    <Toaster richColors position="top-center" />
  </AuthProvider>
);
