import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LogicalDataProvider } from "./context/FunctionalityDataProvider.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { Firestore } from "./context/Firestore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LogicalDataProvider>
      <AuthProvider>
        <Firestore>
          <App />
        </Firestore>
      </AuthProvider>
    </LogicalDataProvider>
  </React.StrictMode>
);
