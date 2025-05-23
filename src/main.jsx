import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Lenis from "../src/components/lenis";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Lenis>
        <App />
      </Lenis>
    </BrowserRouter>
  </StrictMode>
);
