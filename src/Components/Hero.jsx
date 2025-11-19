import React, { useState, useRef, useEffect } from "react";
import vegBag from "../assets/Images/Veggies.png";
import fruitBag from "../assets/Images/Fruits.png";
import bgPill from "../assets/Images/Mobile Backgroundpill.png"; // ⭐ New pill bg

export default function Hero() {
  const [active, setActive] = useState("veg");
  const [slideDirection, setSlideDirection] = useState("");
  const touchStart = useRef(null);

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

  useEffect(() => {
    const timer = setTimeout(() => setSlideDirection(""), 300);
    return () => clearTimeout(timer);
  }, [slideDirection]);

  return (
    <section className="w-full pt-[90px] px-6 md:px-20">
      {/* ------------------------------------------------------ */}
      {/* 📱 MOBILE EXACT LAYOUT LIKE SCREENSHOT */}
      {/* ------------------------------------------------------ */}
      <div className="md:hidden w-full flex items-start justify-between gap-4">
        {/* LEFT — TEXT */}
        <div className="w-[55%]">
          <h1 className="text-3xl font-extrabold text-[#1A1F2F] leading-tight">
            Source Smarter
          </h1>

          <div className="mt-3">
            <span className="bg-[#2EC4B6] text-white px-4 py-2 rounded-full text-base shadow-md">
              Save Bigger
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-[#1A1F2F] leading-tight mt-3">
            Grow Faster
          </h1>

          <p
            className="text-gray-700 text-sm leading-relaxed mt-4"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            Get high-quality raw materials delivered fast, fresh, and affordably
            — all in one app. With transparent pricing and reliable suppliers,
            we make sourcing simple and stress-free. Save more, scale smarter,
            and keep your business running smoothly with every delivery.
          </p>

          <button className="mt-5 bg-[#2EC4B6] text-white font-semibold text-base px-6 py-3 rounded-full shadow-lg">
            Get the App
          </button>
        </div>

        {/* RIGHT — IMAGES ON GREEN PILL BACKGROUND */}
        <div
          className="relative w-[45%]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* ⭐ Green pill background */}
          <img
            src={bgPill}
            className="absolute -top-1.5 right-2 w-[120%] h-[120%] object-contain pointer-events-none"
          />

          {/* STACKED CARDS LIKE DESKTOP */}
          <div className="relative z-10 w-full">
            {/* VEG CARD — TOP */}
            <div className="relative w-[140px] -mx-4">
              <img
                src={vegBag}
                className="absolute left-1/2 -translate-x-1/2 -top-21 w-full h-[110%] z-20"
              />
              <div className="bg-white rounded-2xl shadow-xl w-full h-[150px] pt-[85px]">
                <h3 className="text-sm font-semibold text-center text-gray-900">
                  Groceries
                </h3>
                <p className="text-xs text-center text-gray-600">Vegetables</p>
              </div>
            </div>

            {/* FRUIT CARD — BOTTOM OVERLAPPING */}
            <div className="relative w-[140px] mx-8 mt-3">
              <img
                src={fruitBag}
                className="absolute left-1/2 -translate-x-1/2 -top-15 w-[130%] h-full z-10"
              />
              <div className="bg-white rounded-2xl shadow-xl w-full h-[150px] pt-[85px]">
                <h3 className="text-sm font-semibold text-center text-gray-900">
                  Groceries
                </h3>
                <p className="text-xs text-center text-gray-600">Fruits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      {/* 💻 DESKTOP — UNTOUCHED ORIGINAL */}
      {/* ------------------------------------------------------ */}
      <div className="hidden md:flex w-full items-center justify-between pt-10">
        {/* LEFT */}
        <div className="max-w-xl space-y-8">
          <h1 className="text-6xl font-extrabold text-[#1A1F2F] leading-tight">
            Source Smarter
          </h1>
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="bg-[#2EC4B6] text-white px-6 py-2 rounded-2xl shadow-lg">
              Save Bigger
            </span>
          </h1>
          <h1 className="text-6xl font-extrabold text-[#1A1F2F] leading-tight">
            Grow Faster
          </h1>
          <p
            className="text-gray-800 text-lg leading-relaxed max-w-md"
            style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 400 }}
          >
            Get high-quality raw materials delivered fast, fresh, and affordably
            — all in one app.With transparent pricing and reliable suppliers, we
            make sourcing simple and stress-free. Save more, scale smarter, and
            keep your business running smoothly with every delivery.
          </p>
          <button className="mt-4 bg-[#2EC4B6] text-white font-semibold text-lg px-10 py-3 rounded-full shadow-xl hover:bg-[#29b3a5] transition">
            Get the App
          </button>
        </div>

        {/* RIGHT — original */}
        <div className="relative flex gap-10">
          <div className="relative w-[300px]">
            <img
              src={vegBag}
              className="absolute left-1/2 -translate-x-1/2 -top-[150px] w-[380px]"
            />
            <div className="bg-white rounded-3xl shadow-xl w-[230px] h-[280px] mx-auto pt-[180px]">
              <h3 className="text-2xl font-semibold text-center text-gray-900">
                Groceries
              </h3>
              <p className="text-xl text-center text-gray-700">Vegetables</p>
            </div>
          </div>

          <div className="relative w-[300px]">
            <img
              src={fruitBag}
              className="absolute left-36 -translate-x-1/2 -top-[75px] w-[330px]"
            />
            <div className="bg-white rounded-3xl shadow-xl w-[230px] h-[280px] mx-auto pt-[180px]">
              <h3 className="text-2xl font-semibold text-center text-gray-900">
                Groceries
              </h3>
              <p className="text-xl text-center text-gray-700">Fruits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
