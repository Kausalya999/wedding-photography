import { motion } from "framer-motion";
import "./TrustStrip.css";

function TrustStrip() {
  return (
    <section className="trust-strip">
      <motion.div
        className="trust-content"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>WEDDING STORIES</span>

        <span className="trust-dot">•</span>

        <span>AUTHENTIC MOMENTS</span>

        <span className="trust-dot">•</span>

        <span>TIMELESS PHOTOGRAPHS</span>
      </motion.div>
    </section>
  );
}

export default TrustStrip;