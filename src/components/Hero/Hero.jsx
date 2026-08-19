import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero"
     id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WEDDING PHOTOGRAPHY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Stories
          <br />
          <em>worth remembering.</em>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Timeless photographs for the moments
          <br />
          you never want to forget.
        </motion.p>

        <motion.a
          href="#stories"
          className="hero-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explore Stories
        </motion.a>

      </div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>Scroll to explore</span>
        <FiArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;