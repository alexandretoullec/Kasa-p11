import React from "react";
import ReactDOM from "react-dom/client";

import "./style/main.css";

import Router from "./pages/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
