import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router";
import { SideBarProvider } from "./context/sidebarContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SideBarProvider>
      <Router>
        <App />
      </Router>
    </SideBarProvider>
  </StrictMode>
);
