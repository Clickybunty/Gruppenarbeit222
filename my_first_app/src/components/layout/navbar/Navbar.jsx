// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ htitle1, htitle2, htitle3, htitle4 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="nav-image" src="./logo192.png" alt="Logo" />
        <p className="brandname">Crackheads</p>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">{htitle1}</a>
        </li>
        <li>
          <a href="#about">{htitle2}</a>
        </li>
        <li>
          <a href="#services">{htitle3}</a>
        </li>
        <li>
          <a href="#contact">{htitle4}</a>
        </li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
