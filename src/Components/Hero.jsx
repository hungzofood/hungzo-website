import React, { useState, useRef, useEffect } from "react";
import vegBag from "../assets/Images/Veggies.png";
import fruitBag from "../assets/Images/Fruits.png";

export default function Hero() {
  const [active, setActive] = useState("veg");
  const [slideDirection, setSlideDirection] = useState(""); // "left" or "right"
  const touchStart = useRef(null);

  // ----------- SWIPE SUPPORT -----------
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart.current - touchEnd > 50) {
      setSlideDirection("left");
      setActive("fruit");
    }
    if (touchEnd - touchStart.current > 50) {
      setSlideDirection("right");
      setActive("veg");
    }
  };

  // ----------- SLIDE ANIMATION -----------
  const slideClass =
    slideDirection === "left"
      ? "animate-slide-left"
      : slideDirection === "right"
      ? "animate-slide-right"
      : "";

  useEffect(() => {
    const timer = setTimeout(() => setSlideDirection(""), 400);
    return () => clearTimeout(timer);
  }, [slideDirection]);

  return (
    <section className="w-full pt-[70px] px-10 md:px-20 flex flex-col md:flex-row items-center justify-between">


      {/* LEFT CONTENT  */}
      <div className="max-w-xl space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1F2F] leading-tight">Source Smarter</h1>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-[#2EC4B6] text-white px-6 py-2 rounded-2xl shadow-lg">Save Bigger</span>
        </h1>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1F2F] leading-tight">Grow Faster</h1>

        <p className="text-gray-800 text-lg leading-relaxed max-w-md " 
        style={{
           fontFamily: "Quicksand, sans-serif", 
           fontSize:14.4,
           fontWeight:400}}>
          

          Get high-quality raw materials delivered fast, fresh, and affordably — all in one app.With transparent pricing and reliable suppliers, we make sourcing simple and stress-free. Save more, scale smarter, and keep your business running smoothly with every delivery.
        </p>

        <button className="mt-4 bg-[#2EC4B6] text-white font-semibold text-lg px-10 py-3 rounded-full shadow-xl hover:bg-[#29b3a5] transition">
          Get the App
        </button>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div
        className="relative flex gap-10 mt-16 md:mt-0"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        <div
          className="relative w-[300px]"
          onMouseEnter={() => setActive("veg")}
        >
          {/* FLOATING IMAGE */}
          <img
            src={vegBag}
            className={`
              absolute left-1/2 -translate-x-1/2 -top-[150px]
              w-[380px] object-contain transition-all duration-300 cursor-pointer

              ${active === "veg"
                ? "z-30 scale-110"
                : "z-10 scale-95 opacity-80"
              }
            `}
            onClick={() => alert("Veg Image Clicked")}   // image now clickable
          />

          {/* CARD + TEXT TOGETHER */}
          <div
            className={`
              bg-white rounded-3xl shadow-xl w-[230px] h-[280px]
              mx-auto pt-[180px] transition-all duration-300 relative cursor-pointer

              ${active === "veg"
                ? "scale-110 shadow-2xl z-20"
                : "scale-95 opacity-80 z-0"
              }
            `}
          >
            {/* TEXT moves with card now */}
            <h3 className="text-2xl font-semibold text-center text-gray-900">Groceries</h3>
            <p className="text-xl text-center text-gray-700">Vegetables</p>
          </div>
        </div>


        <div
          className="relative w-[300px]"
          onMouseEnter={() => setActive("fruit")}
        >
          {/* FLOATING IMAGE */}
          <img
            src={fruitBag}
            className={`
              absolute left-36 -translate-x-1/2 -top-[75px]
              w-[330px] object-contain transition-all duration-300 cursor-pointer

              ${active === "fruit"
                ? "z-30 scale-110"
                : "z-10 scale-95 opacity-80"
              }
            `}
            onClick={() => alert("Fruit Image Clicked")}
          />

          {/* CARD + TEXT */}
          <div
            className={`
              bg-white rounded-3xl shadow-xl w-[230px] h-[280px]
              mx-auto pt-[180px] transition-all duration-300 relative cursor-pointer

              ${active === "fruit"
                ? "scale-110 shadow-2xl z-20"
                : "scale-95 opacity-80 z-0"
              }
            `}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-900">Groceries</h3>
            <p className="text-xl text-center text-gray-700">Fruits</p>
          </div>
        </div>


        {/* SCROLL BUTTONS */}
        <div className="absolute -bottom-30 right-25 flex gap-4">

          {/* LEFT BUTTON */}
          <button
            onClick={() => { setSlideDirection("right"); setActive("veg"); }}
            className={`
              w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition group
              ${active === "veg" ? "bg-[#2EC4B6] text-white" : "bg-white text-black"}
              hover:bg-[#2EC4B6] hover:text-white
            `}
          >
            <span className="text-2xl group-hover:text-white">‹</span>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => { setSlideDirection("left"); setActive("fruit"); }}
            className={`
              w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition group
              ${active === "fruit" ? "bg-[#2EC4B6] text-white" : "bg-white text-[#2EC4B6]"}
              hover:bg-white hover:text-[#2EC4B6]
            `}
          >
            <span className="text-2xl group-hover:text-[#2EC4B6]">›</span>
          </button>

        </div>
      </div>
    </section>
  );
}
