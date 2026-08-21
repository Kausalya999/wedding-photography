import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setGalleryOpen(false);
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
            ARK Studio
          </span>

          {/* <span className="navbar-logo-sub">
            Studio
          </span> */}

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

          {/* Gallery Dropdown */}
          <div className="navbar-dropdown">

            <button
              type="button"
              className="navbar-dropdown-button"
              onClick={() =>
                setGalleryOpen(!galleryOpen)
              }
            >
              GALLERY

              <span
                className={
                  galleryOpen
                    ? "dropdown-arrow open"
                    : "dropdown-arrow"
                }
              >
                ▾
              </span>
            </button>


            {galleryOpen && (

              <div className="navbar-dropdown-menu">

                <Link
                  to="/gallery"
                  onClick={() =>
                    setGalleryOpen(false)
                  }
                >
                  PHOTOS
                </Link>

                <Link
                  to="/more-works"
                  onClick={() =>
                    setGalleryOpen(false)
                  }
                >
                  MORE WORKS
                </Link>

              </div>

            )}

          </div>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            CONTACT
          </Link>

        </nav>


        {/* RSVP

        <Link
          to="/contact"
          className="navbar-rsvp"
          onClick={closeMenu}
        >
          RSVP
        </Link> */}


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