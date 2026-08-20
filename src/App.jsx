import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

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
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/gallery"
          element={<Gallery />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;