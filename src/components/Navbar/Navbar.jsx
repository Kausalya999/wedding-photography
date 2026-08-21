import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setGalleryOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleGallery = () => {
    setGalleryOpen((prev) => !prev);
  };

  return (
    <header className={`navbar ${menuOpen ? "navbar-open" : ""}`}>

      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================== */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="navbar-logo-main">
            ARK Studio
          </span>
        </Link>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <nav className="navbar-links">

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


          {/* Gallery */}

          <div className="navbar-dropdown">

            <button
              type="button"
              className="navbar-dropdown-button"
              onClick={toggleGallery}
            >
              <span>GALLERY</span>

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
                  onClick={closeMenu}
                >
                  PHOTOS
                </Link>

                <Link
                  to="/more-works"
                  onClick={closeMenu}
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


        {/* =========================
            MOBILE BUTTON
        ========================== */}

        <button
          type="button"
          className="navbar-menu-button"
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {menuOpen && (

        <div className="navbar-mobile-menu">

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


          {/* =========================
              MOBILE GALLERY
          ========================== */}

          <div className="mobile-gallery">

            <button
              type="button"
              className="mobile-gallery-button"
              onClick={toggleGallery}
            >

              <span>GALLERY</span>

              <span
                className={
                  galleryOpen
                    ? "mobile-dropdown-arrow open"
                    : "mobile-dropdown-arrow"
                }
              >
                ▾
              </span>

            </button>


            {galleryOpen && (

              <div className="mobile-gallery-links">

                <Link
                  to="/gallery"
                  onClick={closeMenu}
                >
                  PHOTOS
                </Link>

                <Link
                  to="/more-works"
                  onClick={closeMenu}
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

        </div>

      )}

    </header>
  );
}

export default Navbar;