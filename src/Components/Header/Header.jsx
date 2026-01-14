import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Header.css"; // CSS faylni ulashni unutmang

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <header className="header-main">
      <div className="header-container">
        <div className="header-flex">
          
          {/* Logo */}
          <Link to="/" className="logo-box">
           
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-links">
              {["Home", "About", "Services", "Careers", "Blogs", "Contact"].map((item) => (
                <li key={item} className="nav-item">
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="link-text"
                  >
                    {item}
                  </Link>
                  <span className="underline-effect"></span>
                </li>
              ))}
            </ul>
            <button className="btn-clone">Clone project</button>
          </nav>

          {/* Hamburger Menu Button */}
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Menu">
            <div className={`bar ${isOpen ? "active-1" : ""}`}></div>
            <div className={`bar ${isOpen ? "hide" : ""}`}></div>
            <div className={`bar ${isOpen ? "active-2" : ""}`}></div>
          </button>

          {/* Mobile Overlay Menu */}
          <div className={`mobile-overlay ${isOpen ? "show" : ""}`}>
            <ul className="mobile-list">
              {["Home", "About", "Services", "Careers", "Blogs", "Contact"].map((item) => (
                <li key={item} onClick={() => setIsOpen(false)}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
            <button className="btn-clone-mobile">Clone project</button>
          </div>

        </div>
      </div>
    </header>
  );
};


export default Header;