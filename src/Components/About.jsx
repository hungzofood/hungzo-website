import React, { useState, useEffect } from "react";
import RectangleBG from "../assets/Images/Rectangle.png";
import deliveryGuy from "../assets/Images/DeliveryGuy.png";
import clientBox from "../assets/Images/client.png";
import iconSatisfaction from "../assets/Images/ThumbsUp.png";
import iconQuality from "../assets/Images/Rating.png";
import NamanImg from "../assets/Images/Naman.png";
import AdityaImg from "../assets/Images/Aditya.JPG";

export default function About() {
  // ================== REVIEW DATA ==================
  const reviews = [
    {
      name: "Aditya P. Singh",
      role: "Software Developer & Intern",
      image: AdityaImg,
      rating: 5,
      text:
        "Amazing service! As a developer, I appreciate platforms that focus on efficiency and reliability. Hangzo delivers exactly that — fast, fresh and consistent every time.",
    },
    {
      name: "Naman",
      role: "National Program Producer",
      image: NamanImg,
      rating: 5,
      text:
        "Really happy with the experience! Delivery was seamless and fast. Definitely recommending Hangzo to my friends and family!",
    },
    {
      name: "Emily Carter",
      role: "Restaurant Owner",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text:
        "High-quality ingredients delivered consistently. Hangzo has made sourcing stress-free and always fresh!",
    },
    {
      name: "Rahul Mehra",
      role: "Grocery Store Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      text:
        "Quick delivery and reliable service. Hangzo keeps our store stocked without any hassle.",
    },
  ];

  // ================== SLIDER LOGIC ==================
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const r = reviews[index];

  return (
    <div
      className="w-full pt-18 pb-20 px-6 md:px-20"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      {/* ========================= MOBILE GOALS SECTION EXACT MATCH ========================= */}
      <div className="w-full px-6 pt-10 pb-20 bg-gradient-to-b from-[#D9EFE6] to-[#EAF7F3] rounded-3xl">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-[#1A1F2F] leading-tight">
          <span className="bg-black text-white px-3 py-1 rounded-md mr-2">
            Goals
          </span>
          Of Our Company
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base mt-4 leading-relaxed pr-2">
          Our goal is to make everyday ordering simple, fresh, and dependable.
          We strive to deliver not just products, but a promise of quality,
          trust, and convenience — ensuring customer satisfaction in every
          delivery.
        </p>

        {/* ================= CARD 1 ================= */}
        <div className="mt-10 relative">
          {/* Circle Icon Bubble */}
          <div className="absolute -left-4 -top-4 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center">
            <img src={iconSatisfaction} className="w-6" />
          </div>

          {/* Card */}
          <div className="bg-[#0FAF84] text-white w-full p-6 rounded-2xl shadow-xl">
            <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
            <p className="text-sm mt-2 leading-relaxed">
              Trusted by hundreds of businesses and households alike, we
              maintain a high satisfaction rate through consistent quality,
              freshness, and fast service.
            </p>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="mt-8 relative">
          {/* Circle Icon Bubble */}
          <div className="absolute -left-4 -top-4 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center">
            <img src={iconQuality} className="w-6" />
          </div>

          {/* Card */}
          <div className="bg-white text-black w-full p-6 rounded-2xl shadow-xl">
            <h3 className="text-lg font-semibold">Quality and Freshness</h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-700">
              Your trust drives us to deliver the best — fresh, clean, and
              quality-checked every time. Experience hassle-free delivery with
              products that stay as fresh as promised.
            </p>
          </div>
        </div>
      </div>

      {/* ========================= SECTION 2 — EXACT SCREENSHOT LAYOUT ========================= */}
      <div className="mt-6">
        {/* FLEX COLUMN ON MOBILE — ROW ON TABLET */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-16">
          {/* LEFT — DELIVERY GUY ROUND IMAGE */}
          
          <div className="relative flex justify-center md:justify-start w-full">
            {/* Wrapper so badge doesn't get clipped */}
            <div className="relative w-[300px] h-[300px] md:ml-20 rounded-full bg-[#D4EDE5] flex items-center justify-center shadow-md overflow-hidden">
              <img
                src={deliveryGuy}
                alt="Delivery Guy"
                className="w-[360px] object-cover -mt-4"
              />
            </div>

            {/* FLOATING CLIENT BADGE — OUTSIDE THE CIRCLE */}
            <img
              src={clientBox}
              alt="Satisfied Users"
              className="
      absolute 
      bottom-2 
      left-[180px]
      w-[180px]
      sm:w-[200px]
      drop-shadow-2xl
      z-20
    "
            />
          </div>

          {/* RIGHT — REVIEW TEXT SECTION */}
          <div className="max-w-xl w-full">
            <h2 className="text-4xl font-bold leading-tight text-[#1A1F2F] mt-6 md:mt-0">
              What Our{" "}
              <span className="bg-black  text-white pb-1 rounded-md">
                Clients Say
              </span>{" "}
              About Us
            </h2>

            <p className="text-gray-700 text-base mt-6 leading-relaxed">
              {r.text}
            </p>

            {/* REVIEWER + ARROWS */}
            <div className="mt-10 flex items-center justify-between">
              {/* Reviewer */}
              <div className="flex items-center gap-4">
                <img
                  src={r.image}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{r.name}</h3>
                  <p className="text-xs text-gray-500">{r.role}</p>
                  <p className="text-yellow-500 text-lg mt-1">
                    {"★".repeat(r.rating)}
                  </p>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-[#2EC4B6] text-2xl hover:bg-[#2EC4B6] hover:text-white transition"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-[#2EC4B6] shadow-xl flex items-center justify-center text-white text-2xl hover:bg-white hover:text-[#2EC4B6] transition"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
