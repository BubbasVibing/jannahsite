import React, { useState } from 'react';
import './navbar.css';
import { FaHome, FaShoppingBag, FaInfoCircle, FaUsers, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineMosque } from 'react-icons/md';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <MdOutlineMosque className="logo-icon" />
          <a href="/">JANNAH</a>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">
            <FaHome className="nav-icon" />
            <span>Home</span>
          </a>
          <a href="/shop" className="nav-link">
            <FaShoppingBag className="nav-icon" />
            <span>Shop</span>
          </a>
          <a href="/about" className="nav-link">
            <FaInfoCircle className="nav-icon" />
            <span>About</span>
          </a>
          <a href="/community" className="nav-link">
            <FaUsers className="nav-icon" />
            <span>Community</span>
          </a>
          <a href="/contact" className="nav-link">
            <FaEnvelope className="nav-icon" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
