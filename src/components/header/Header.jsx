import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src="/LOGO_KASA.png" alt="kasa_logo" />
      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">A Propos</NavLink>
      </nav>
    </div>
  );
};

export default Header;
