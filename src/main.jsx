import React from "react";
import ReactDOM from "react-dom/client";

import "./style/main.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Router from "./pages/Router.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
