import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustStrip from "../components/TrustStrip/TrustStrip";
import StoryIntroduction from "../components/StoryIntroduction/StoryIntroduction";
import FeaturedGallery from "../components/FeaturedGallery/FeaturedGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import EnquiryCTA from "../components/EnquiryCTA/EnquiryCTA";
import RSVP from "../components/RSVP/RSVP";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustStrip />
        <StoryIntroduction />
        <FeaturedGallery />
        <Testimonials />
        <EnquiryCTA />
        <RSVP/>
        <Footer />
      </main>
    </>
  );
}

export default Home;