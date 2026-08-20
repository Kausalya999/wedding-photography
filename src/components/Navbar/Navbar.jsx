import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >

          <span className="navbar-logo-main">
            ARK
          </span>

          <span className="navbar-logo-sub">
            Studio
          </span>

        </Link>


        {/* Desktop Navigation */}

        <nav
          className={`navbar-links ${
            menuOpen ? "navbar-links-open" : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenu}
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            ABOUT
          </Link>

          <Link
            to="/gallery"
            onClick={closeMenu}
          >
            GALLERY
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            CONTACT
          </Link>

        </nav>


        {/* RSVP */}

        <Link
          to="/contact"
          className="navbar-rsvp"
          onClick={closeMenu}
        >
          RSVP
        </Link>


        {/* Mobile Menu Button */}

        <button
          type="button"
          className="navbar-menu-button"
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>

    </header>
  );
}

export default Navbar;