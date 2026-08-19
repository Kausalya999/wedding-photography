import { motion } from "framer-motion";
import "./StoryIntroduction.css";

function StoryIntroduction() {
  return (
    <section className="story-introduction"
    id="about">

      <motion.div
        className="story-intro-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >

        <span className="story-intro-label">
          THE ART OF PRESERVING MOMENTS
        </span>

        <h2>
          Your Story,
          <br />
          <em>Beautifully Preserved.</em>
        </h2>

        <p>
          Every wedding has its own rhythm, its own little moments,
          and its own story. We capture the laughter, the emotions,
          the quiet glances and everything in between.
        </p>

      </motion.div>

    </section>
  );
}

export default StoryIntroduction;