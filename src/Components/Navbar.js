import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/">
          <img className="navbar-logo" src='images/logos.png'/>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li>
            <a href="Products" className="navbar-link">Services</a>
          </li>
          <li>
            <a href="Aboutus" className="navbar-link">About Us</a>
          </li>
          <li>
            <a href="Contact" className="navbar-link">Contact</a>
          </li>
        </ul>
        <button className="navbar-button" onClick={toggleMenu}>
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
