import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // updated
import "../Styles/Header.css";
import logo from "../assets/corporate2.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import Marquee from "./Marquee";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <header className="header">
      <Marquee />
      <div className="header-container">
        <div className="logo">
          <img src={logo} className="logo-main" alt="Logo" />
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul onClick={closeMenu}>
            <li>
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Sponsors" className={isActive("/Sponsors")}>
                Sponsors
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
