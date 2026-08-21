import { motion } from "framer-motion";
import "./StoryIntroduction.css";

import clientImage from "../../assets/images/groom.png";
import BackToHome from "../BackToHome/BackToHome";
function StoryIntroduction() {
  return (
    <section
      className="story-introduction"
      id="about"
    >
     <BackToHome />
      {/* =========================
          INTRODUCTION
      ========================= */}

      <motion.div
        className="story-intro-content"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >

        <span className="story-intro-label">
          THE ART OF PRESERVING MOMENTS
        </span>

        <h2>
          About,
          <br />
          <em>the Photographer.</em>
        </h2>

        <p>
          Every wedding has its own rhythm, its own little
          moments, and its own story. We capture the laughter,
          the emotions, the quiet glances and everything in
          between.
        </p>

      </motion.div>


      {/* =========================
          CLIENT PROFILE
      ========================= */}

      <div className="story-profile">

        {/* Client Image */}

        <motion.div
          className="story-profile-image"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          
          <img
           src={clientImage}
            alt="Wedding photographer"
            loading="lazy"
            decoding="async"
          />

        </motion.div>


        {/* Client Information */}

        <motion.div
          className="story-profile-content"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: "easeOut",
          }}
        >

          <span className="story-profile-label">
            MEET THE PHOTOGRAPHER
          </span>

          <h3>
            Rahul Rathod
          </h3>

          <span className="story-profile-role">
            WEDDING PHOTOGRAPHER & STORYTELLER
          </span>

          <p className="story-profile-bio">
            Photography has always been more than just
            taking pictures for me. It is about noticing
            the moments that happen between the moments.
          </p>

          <p className="story-profile-description">
            From the nervous excitement before the ceremony
            to the laughter shared with family and friends,
            I believe every celebration is made up of
            hundreds of beautiful little stories.
          </p>

          <p className="story-profile-description">
            My approach is simple — stay present, observe
            quietly and allow the day to unfold naturally.
            The photographs should feel honest, emotional
            and timeless, allowing you to return to those
            memories years from now.
          </p>

          <div className="story-profile-signature">
            Rahul
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default StoryIntroduction;