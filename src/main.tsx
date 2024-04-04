import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/globals.css";
import "../src/styles/cutome-scrollbar.css";
import "../src/styles/custome-styles.css";

import ContextProvider from "./utils/provider/context-provider.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { MathJaxProvider } from "mathjax3-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MathJaxProvider url="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </MathJaxProvider>
  </React.StrictMode>
);
