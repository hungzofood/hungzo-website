import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import bgimage from "./assets/Images/Background.png";
import { lazy, Suspense } from "react";
const DailyEssentials = lazy(() => import("./Components/DailyEssentials"));
const Hero = lazy(() => import("./Components/Hero"));
const AppDownload = lazy(() => import("./Components/AppDownload"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Career = lazy(() => import("./Components/Career"));
const ExploreCategories = lazy(() => import("./Components/ExploreCategories"));




import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        fontFamily: "Urbanist, sans-serif",
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // CLEAN, maintains proportions
        backgroundPosition: "top center", // aligns perfectly like screenshot 2
        width: "100%",
        minHeight: "100vh", // covers entire screen first load
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="pt-28 md:pt-40">
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AppDownload />
                  <ExploreCategories />
                  <DailyEssentials />
                </>
              }
            />

            {/* CONTACT PAGE */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
