import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/globals.css";
import "../src/styles/cutome-scrollbar.css";

import ContextProvider from "./utils/provider/context-provider.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
