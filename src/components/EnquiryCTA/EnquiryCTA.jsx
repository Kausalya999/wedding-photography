import { motion } from "framer-motion";
import "./EnquiryCTA.css";

function EnquiryCTA() {
  return (
    <section className="enquiry-cta"
    id="contact">

      <motion.div
        className="enquiry-cta-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >

        <span className="enquiry-label">
          YOUR STORY STARTS HERE
        </span>

        <h2>
          Let's create
          <br />
          <em>something beautiful.</em>
        </h2>

        <p>
          Tell us about your wedding, your vision,
          and the moments you want to remember forever.
        </p>

        <a
          href="#rsvp"
          className="enquiry-button"
        >
          Begin Your Enquiry
        </a>

      </motion.div>

    </section>
  );
}

export default EnquiryCTA;