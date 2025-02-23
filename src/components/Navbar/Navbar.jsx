// Navbar.js
import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = ({ isSticky, menuOpen, toggleMenu }) => {
  return (
    <nav
      className={`navbar ${
        isSticky
          ? "sticky top-0 bg-white shadow-lg z-10 transition-all duration-300"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="logo">celeberationbakers</div>

      {/* Navbar Links - Visible on desktop, hidden on mobile */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>ABOUT US</li>
        <li>PRODUCTS</li>
        <li>SPECIALITY CAKES</li>
        <li><Link to="/finds-us">FIND US</Link></li>
        <li><Link to="/contact-us">CONTACT US</Link></li>
      </ul>

      {/* Right-side buttons */}
      <div className="nav-right">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="order-button">ORDER ONLINE</button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
