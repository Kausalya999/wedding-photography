import { motion } from "framer-motion";

import testimonialImage from "../../assets/images/testimonials/gallery1.png";

import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      {/* Heading */}
      <div className="testimonials-heading">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LOVED BY COUPLES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Kind words from
          <br />
          <em>beautiful celebrations.</em>
        </motion.h2>

      </div>


      {/* Testimonial */}
      <div className="testimonial-card">

        {/* Image */}
        <motion.div
          className="testimonial-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={testimonialImage}
            alt="Ananya and Rahul wedding"
          />
        </motion.div>


        {/* Content */}
        <motion.div
          className="testimonial-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.1
          }}
        >

          <div className="testimonial-stars">
            ★ ★ ★ ★ ★
          </div>


          <blockquote>
            “They captured the moments we didn't even
            realise were happening. Looking through the
            photographs feels like living our wedding day
            all over again.”
          </blockquote>


          <div className="testimonial-author">

            <strong>
              Ananya & Rahul
            </strong>

            <span>
              Bangalore · 2026
            </span>

          </div>

        </motion.div>

      </div>


      {/* Navigation */}
      <div className="testimonial-navigation">

        <button
          type="button"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <span>
          01 / 03
        </span>

        <button
          type="button"
          aria-label="Next testimonial"
        >
          →
        </button>

      </div>

    </section>
  );
}

export default Testimonials;