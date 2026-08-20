import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";

import "./FeaturedGallery.css";

function FeaturedGallery() {
  return (
    <section className="featured-gallery" id="gallery">

      {/* Header */}
      <div className="featured-gallery-header">

        <motion.span
          className="featured-gallery-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FEATURED STORIES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Moments,
          <br />
          <em>beautifully framed.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A glimpse into celebrations filled with love,
          laughter and unforgettable moments.
        </motion.p>

      </div>


      {/* Gallery */}
      <div className="featured-gallery-grid">

        {/* Image 1 */}
        <motion.div
          className="gallery-item gallery-item-large"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={gallery1}
            alt="Wedding couple"
          />

          <div className="gallery-overlay">
            <span>01</span>
            <h3>A Moment to Remember</h3>
          </div>
        </motion.div>


        {/* Middle Column */}
        <div className="gallery-column">

          {/* Image 2 */}
          <motion.div
            className="gallery-item gallery-item-small"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
          >
            <img
              src={gallery2}
              alt="Bride walking during wedding"
            />

            <div className="gallery-overlay">
              <span>02</span>
              <h3>The Beginning</h3>
            </div>
          </motion.div>


          {/* Image 3 */}
          <motion.div
            className="gallery-item gallery-item-small"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
          >
            <img
              src={gallery1}
              alt="Wedding celebration"
            />

            <div className="gallery-overlay">
              <span>03</span>
              <h3>Pure Joy</h3>
            </div>
          </motion.div>

        </div>


        {/* Image 4 */}
        <motion.div
          className="gallery-item gallery-item-large gallery-item-right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15
          }}
        >
          <img
            src={gallery2}
            alt="Bride and groom"
          />

          <div className="gallery-overlay">
            <span>04</span>
            <h3>Forever Begins</h3>
          </div>
        </motion.div>

      </div>


      {/* View All Stories */}
      <motion.div
        className="gallery-button-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Link to="/gallery"
          className="gallery-button"
        >
          View All Stories
        </Link>
      </motion.div>

    </section>
  );
}

export default FeaturedGallery;