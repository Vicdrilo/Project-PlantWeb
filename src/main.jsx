import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LogicalDataProvider } from "./context/FunctionalityDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LogicalDataProvider>
      <App />
    </LogicalDataProvider>
  </React.StrictMode>
);
