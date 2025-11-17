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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const r = reviews[index];

  return (
    <div
      className="w-full pt-40 pb-32 px-6 md:px-20"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      {/* ========================= SECTION 1 ========================= */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-16">

        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1F2F] leading-tight">
            <span className="bg-black text-white px-3 py-1 rounded-md">
              Goals
            </span>{" "}
            Of Our <br /> Company
          </h1>

          <p className="text-gray-700 text-base mt-6 leading-relaxed">
            Our goal is to make everyday ordering simple, fresh, and dependable.
            We strive to deliver quality, trust, and convenience — ensuring
            customer satisfaction every time.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative flex flex-col gap-8">

          {/* BLUE BACKGROUND RECTANGLE */}
          <img
            src={RectangleBG}
            alt="Background Shape"
            className="absolute top-[110px] -right-20 w-[330px] md:w-[380px] -z-10 rounded-xl"
          />

          {/* CUSTOMER SATISFACTION CARD */}
          <div className="bg-[#23A989] text-white w-full max-w-[450px] p-6 rounded-xl shadow-lg relative">
            <img
              src={iconSatisfaction}
              className="w-12 absolute -left-6 top-6"
              alt="Satisfaction Icon"
            />
            <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
            <p className="text-sm mt-2 leading-relaxed">
              Trusted by hundreds of businesses and households alike, we
              maintain a high satisfaction rate through consistent quality,
              freshness, and fast service.
            </p>
          </div>

          {/* QUALITY CARD */}
          <div className="bg-white text-black w-full max-w-[450px] p-6 rounded-xl shadow-lg relative">
            <img
              src={iconQuality}
              className="w-12 absolute -left-6 top-6"
              alt="Quality Icon"
            />
            <h3 className="text-xl font-semibold">Quality and Freshness</h3>
            <p className="text-sm mt-2 leading-relaxed text-gray-700">
              Your trust drives us to deliver the best — fresh, clean, and
              quality-checked every time. Experience hassle-free delivery with
              products that stay as fresh as promised.
            </p>
          </div>
        </div>
      </div>

      {/* ========================= SECTION 2 ========================= */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-24 gap-20">

        {/* LEFT — ROUND DELIVERY GUY */}
        <div className="relative w-[380px] h-[380px] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#D4EDE5] overflow-hidden flex items-center justify-center">
            <img
              src={deliveryGuy}
              alt="Delivery Guy"
              className="w-[420px] object-cover -mt-4"
            />
          </div>

          {/* SATISFIED USER BOX */}
          <img
            src={clientBox}
            alt="Satisfied Users"
            className="absolute bottom-6 right-[-50px] w-[260px] drop-shadow-2xl"
          />
        </div>

        {/* RIGHT — REVIEW SLIDER */}
        <div className="max-w-xl transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1A1F2F]">
            What Our{" "}
            <span className="bg-black text-white px-2 pb-1 rounded-md">
              Clients Say
            </span>{" "}
            About Us
          </h2>

          {/* Review text */}
          <p className="text-gray-700 text-base mt-6 leading-relaxed">
            {r.text}
          </p>

          {/* Reviewer Card */}
          <div className="mt-14 flex items-center justify-between">

            {/* LEFT — Reviewer Info */}
            <div className="flex items-center gap-4">
              <img
                src={r.image}
                className="w-14 h-14 rounded-full object-cover"
                alt="Reviewer"
              />

              <div>
                <h3 className="font-semibold text-lg">{r.name}</h3>
                <p className="text-xs text-gray-500">{r.role}</p>
                <p className="text-yellow-500 text-lg mt-1">
                  {"★".repeat(r.rating)}
                </p>
              </div>
            </div>

            {/* RIGHT — Buttons */}
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
  );
}
