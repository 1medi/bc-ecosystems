import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Lenis from "../src/components/lenis";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Lenis>
        <App />
      </Lenis>
    </HashRouter>
  </StrictMode>
);
