import { useState } from "react";
import { motion } from "framer-motion";

import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";

import "../components/Gallery/Gallery.css";

const galleryImages = [
  {
    id: 1,
    image: gallery1,
    category: "Haldi",
    title: "Golden Beginnings",
  },
  {
    id: 2,
    image: gallery2,
    category: "Mehendi",
    title: "Mehendi Moments",
  },
  {
    id: 3,
    image: gallery1,
    category: "Candid",
    title: "A Quiet Glance",
  },
  {
    id: 4,
    image: gallery2,
    category: "Wedding",
    title: "Forever Begins",
  },
  {
    id: 5,
    image: gallery2,
    category: "Haldi",
    title: "Celebration in Yellow",
  },
  {
    id: 6,
    image: gallery1,
    category: "Candid",
    title: "Pure Joy",
  },
  {
    id: 7,
    image: gallery2,
    category: "Mehendi",
    title: "Little Details",
  },
  {
    id: 8,
    image: gallery1,
    category: "Wedding",
    title: "Together Forever",
  },
  {
    id: 9,
    image: gallery1,
    category: "Candid",
    title: "Just Us",
  },
  {
    id: 10,
    image: gallery2,
    category: "Haldi",
    title: "A Day of Joy",
  },
  {
    id: 11,
    image: gallery2,
    category: "Wedding",
    title: "The Promise",
  },
  {
    id: 12,
    image: gallery1,
    category: "Mehendi",
    title: "Beautiful Details",
  },
];

const categories = [
  "All",
  "Haldi",
  "Mehendi",
  "Candid",
  "Wedding",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="gallery-page">

      {/* Hero */}
      <section className="gallery-hero">

        <motion.span
          className="gallery-hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          OUR WORK
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Stories told
          <br />
          <em>through photographs.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A collection of celebrations, emotions,
          <br />
          and little moments worth remembering.
        </motion.p>

      </section>


      {/* Categories */}
      <section className="gallery-filters">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? "gallery-filter active"
                : "gallery-filter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

      </section>


      {/* Masonry Gallery */}
      <section className="gallery-masonry">

        {filteredImages.map((item, index) => (

          <motion.article
            className="gallery-card"
            key={item.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              delay: Math.min(index * 0.04, 0.3),
            }}
          >

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
            />

            <div className="gallery-card-overlay">

              <span>
                {item.category}
              </span>

              <h2>
                {item.title}
              </h2>

            </div>

          </motion.article>

        ))}

      </section>


      {/* Bottom */}
      <section className="gallery-bottom">

        <span>
          EVERY FRAME HAS A STORY
        </span>

        <h2>
          Beautifully
          <br />
          <em>preserved.</em>
        </h2>

      </section>

    </main>
  );
}

export default Gallery;