import React from "react";
import ReactDOM from "react-dom/client";

// import "./style/main.css";
import "./style/general/general.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
