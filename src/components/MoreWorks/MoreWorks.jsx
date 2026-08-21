import { motion } from "framer-motion";
import "./MoreWorks.css";
import BackToHome from "../BackToHome/BackToHome";
const videos = [
  {
    id: 1,
    title: "A Celebration of Love",
    category: "WEDDING FILM",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: 2,
    title: "Moments Between Moments",
    category: "CINEMATIC HIGHLIGHTS",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "Forever Begins Here",
    category: "WEDDING HIGHLIGHTS",
    youtubeId: "aqz-KE-bpKQ",
  },
];

function MoreWorks() {
  return (
    <main className="more-works" 
    id="more-works">

      {/* ================================
          HERO
      ================================= */}

      {/* <section className="more-works-hero">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MORE OF OUR WORK
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stories that
          <br />
          <em>move beyond photographs.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          Films, celebrations and moments captured
          <br />
          in motion.
        </motion.p>

      </section> */}


      {/* ================================
          VIDEO SECTION
      ================================= */}

      <section className="video-gallery">
         <BackToHome />

        <div className="video-gallery-heading">

          <span>WEDDING FILMS</span>

          <h2>
            Moments that
            <br />
            <em>come alive.</em>
          </h2>

        </div>


        <div className="video-grid">

          {videos.map((video, index) => (

            <motion.article
              className="video-card"
              key={video.id}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >

              {/* YouTube video */}

              <div className="video-wrapper">

                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

              </div>


              {/* Video information */}

              <div className="video-info">

                <span>
                  {video.category}
                </span>

                <h3>
                  {video.title}
                </h3>

              </div>

            </motion.article>

          ))}

        </div>

      </section>


      {/* ================================
          BOTTOM
      ================================= */}

      <section className="more-works-bottom">

        <span>
          EVERY STORY DESERVES TO BE REMEMBERED
        </span>

        <h2>
          Love,
          <br />
          <em>in motion.</em>
        </h2>

      </section>

    </main>
  );
}

export default MoreWorks;