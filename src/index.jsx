import React from "react";
import { createRoot } from "react-dom/client"; // For React 18
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/styles.scss";
import "./index.css";
import App from "./App/App";
import { ThemeContextProvider } from "./contexts/themeContext";
import { AuthContextProvider } from "./contexts/authContext";
import "./i18n";


const children = (
  <AuthContextProvider>
    <ThemeContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ThemeContextProvider>
  </AuthContextProvider>
);
const container = document.getElementById("root");
createRoot(container).render(children); // For React 18
