import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <span className="navbar-logo-main">
            ARK Studios
          </span>

          {/* <span className="navbar-logo-sub">
            Studios
          </span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
         <a href="#home">HOME</a>

<a href="#about">ABOUT</a>

<a href="#gallery">GALLERY</a>

<a href="#contact">CONTACT</a>


        </nav>

        {/* RSVP */}
        <a href="#rsvp" className="navbar-rsvp">
          RSVP
        </a>

        {/* Mobile Menu Button */}
        <button className="navbar-menu-button" aria-label="Open menu">
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;