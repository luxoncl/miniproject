import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Header = () => {
  return (
    <div className="header__content">
      <div className="header__left">Brai wave</div>
      <div className="header__center">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/About us">About us</Link>
        </h1>
        <h1>
          <Link to="/Contact">Contact Us</Link>
        </h1>
      </div>

      <div className="header__right">
        <div className="button__1">
          <button> Login</button>
        </div>
        <div className="button__2">
          <button> Register</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
