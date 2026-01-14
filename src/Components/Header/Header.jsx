import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Header.css"; // CSS faylni ulashni unutmang

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

          {/* Logo */}
          <Link to="/" className="logo__box">
           <h1 className="logo__img">LOGO</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav__desktop">
            <ul className="nav__links">
              {["Home", "About us ", "Portfolio", "News"].map((item) => (
                <li key={item} className="nav__item">
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="link__text"
                  >
                    {item}
                  </Link>
                  <span className="underline__effect"></span>
                </li>
              ))}
            </ul>
            <button className="btn__clone">Contact us</button>
          </nav>

          {/* Hamburger Menu Button */}
          <button className="mobile__toggle" onClick={toggleMenu} aria-label="Menu">
            <div className={`bar ${isOpen ? "active-1" : ""}`}></div>
            <div className={`bar ${isOpen ? "hide" : ""}`}></div>
            <div className={`bar ${isOpen ? "active-2" : ""}`}></div>
          </button>

          {/* Mobile Overlay Menu */}
          <div className={`mobile__overlay ${isOpen ? "show" : ""}`}>
            <ul className="mobile__list">
              {["Home", "About us ", "Portfolio", "News"].map((item) => (
                <li key={item} onClick={() => setIsOpen(false)}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
            </ul>
            <button className="btn__clone-mobile">Contact us</button>
          </div>

        </div>
      </div>
      </div>
    </header>
  );
};


export default Header;