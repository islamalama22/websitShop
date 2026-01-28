import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './i18n.jsx'
//  font  mui

import App from "./App.jsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <>
    <CssBaseline />
    <App />
  </>
);
