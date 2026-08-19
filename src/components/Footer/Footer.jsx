import { motion } from "framer-motion";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Wedding</h2>

          <span>PHOTOGRAPHY</span>

          <p>
            Capturing love,
            <br />
            one story at a time.
          </p>
        </motion.div>


        <motion.nav
          className="footer-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#gallery">GALLERY</a>
          <a href="#contact">CONTACT</a>
          <a href="#contact">RSVP</a>
        </motion.nav>


        <motion.div
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a
            href="#"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>

          <a
            href="#"
            aria-label="Email"
          >
            <FiMail />
          </a>

          <a
            href="#"
            aria-label="Phone"
          >
            <FiPhone />
          </a>
        </motion.div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Wedding Photography
        </span>

        <span>
          All rights reserved.
        </span>

      </div>

    </footer>
  );
}

export default Footer;