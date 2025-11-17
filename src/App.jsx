import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import bgimage from "./assets/Images/Background.png";
import Hero from "./Components/Hero";
import AppDownload from "./Components/AppDownload";

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
      {/* Navbar */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="pt-40 px-6">

        {/* Correct structure */}
        <Hero />
        <AppDownload />

        {/* extra filler content */}
        <div className="h-[3000px]"></div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
