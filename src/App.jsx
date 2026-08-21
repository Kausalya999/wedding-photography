import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import StoryIntroduction from "./components/StoryIntroduction/StoryIntroduction";
import FeaturedGallery from "./components/FeaturedGallery/FeaturedGallery";
import RSVP from "./components/RSVP/RSVP";
import MoreWorks from "./components/MoreWorks/MoreWorks";
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/stories"
          element={<Stories />}
        />

        <Route
          path="/stories/:slug"
          element={<StoryDetails />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/about"
          element={<StoryIntroduction />}
        />

        <Route
          path="/contact"
          element={<RSVP />}
        />
        <Route
          path="/gallery"
          element={<FeaturedGallery />}
/>

 <Route
          path="/images"
          element={<Gallery />}
/>
      <Route path="/more-works"
      element={<MoreWorks/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
