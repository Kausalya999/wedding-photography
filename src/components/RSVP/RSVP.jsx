import { motion } from "framer-motion";
import "./RSVP.css";

function RSVP() {
  return (
    <section className="rsvp" id="contact">

      <div className="rsvp-header">

        <motion.span
          className="rsvp-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LET'S TALK ABOUT YOUR DAY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Tell us about
          <br />
          <em>your celebration.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Share a few details about your wedding and
          we'll get back to you with the next steps.
        </motion.p>

      </div>


      <motion.form
        className="rsvp-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >

        <div className="rsvp-row">

          <div className="rsvp-field">
            <label htmlFor="name">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>


          <div className="rsvp-field">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

        </div>


        <div className="rsvp-row">

          <div className="rsvp-field">
            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>


          <div className="rsvp-field">
            <label htmlFor="date">
              Wedding Date
            </label>

            <input
              id="date"
              type="date"
              name="date"
            />
          </div>

        </div>


        <div className="rsvp-field">
          <label htmlFor="venue">
            Wedding Venue / City
          </label>

          <input
            id="venue"
            type="text"
            name="venue"
            placeholder="Where will you be celebrating?"
          />
        </div>


        <div className="rsvp-field">
          <label htmlFor="message">
            Tell us a little about your wedding
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us about your plans, photography needs, or anything you'd like us to know..."
          />
        </div>


        <div className="rsvp-submit">

          <button type="submit">
            Send Enquiry
          </button>

          <span>
            We'll get back to you as soon as possible.
          </span>

        </div>

      </motion.form>

    </section>
  );
}

export default RSVP;