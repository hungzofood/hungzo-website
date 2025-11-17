import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import bgimage from "./assets/Images/Background.png";
import Hero from "./Components/Hero";
import AppDownload from "./Components/AppDownload";
import Contact from "./Components/Contact";
import Career from "./Components/Career";
import About from "./Components/About";
import ExploreCategories from "./Components/ExploreCategories";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        fontFamily: "Urbanist, sans-serif",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "100% auto",
        width: "100%",
        minHeight: "100%",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="pt-40 px-6">
        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AppDownload />
                <ExploreCategories /> 
              </>
            }
          />

          {/* CONTACT PAGE */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />



        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
