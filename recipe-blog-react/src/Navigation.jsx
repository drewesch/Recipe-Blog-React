import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./media/images/logo.png"
import './index.scss';

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="products">
          <button className="nav-button">Products</button>
        </Link>
        <Link to="about">
          <button className="nav-button">About Us</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;