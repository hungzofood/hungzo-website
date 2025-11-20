import React from "react";
import DEBanner from "../assets/Images/DailyEssentials1.png"; 
import IngredientsImg from "../assets/Images/Spices.png";  // ✅ Your actual ingredients image
import { RiEBike2Fill } from "react-icons/ri";

export default function DailyEssentials() {
  return (
    <div
      className="w-full px-6 md:px-20 mb-14 mt-24"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      {/* ===== TOP BANNER (FULL IMAGE WITH TEXT) ===== */}
      <div className="w-full rounded-3xl overflow-hidden shadow-md">
        <img
          src={DEBanner}
          alt="Daily Essentials Banner"
          className="w-full object-cover"
        />
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 gap-14">
        {/* LEFT TEXT + SEARCH BOX */}
        <div className="flex-1">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#23A989]  leading-tight">
            Are you starving?
          </h2>

          <p className="text-gray-600 max-w-sm mt-4 text-xs">
            With a few clicks, find meals that are accessible near you
          </p>
          </div>

          {/* SEARCH BOX */}
          <div className="bg-white mt-10 w-full max-w-lg rounded-2xl shadow-xl p-6">
            {/* Delivery Type */}
            <div className="mb-5">
              <button
                className="flex items-center gap-2 font-semibold px-5 py-2 rounded-lg text-[#23A989]"
                style={{ backgroundColor: "#F172281A" }} // 10% opacity
              >
                <RiEBike2Fill className="text-[#23A989] text-xl" />
                Delivery
              </button>
            </div>

            {/* Input Row */}
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Enter Your Address"
                className="flex-1 border rounded-xl px-4 h-[50px] text-sm focus:outline-none"
              />

              <button
                className="
    bg-[#23A989]  hover:bg-[#1FA195] text-white 
    px-7 h-[50px] rounded-xl font-semibold 
    transition flex items-center justify-center 
    whitespace-nowrap
  "
              >
                Find Food
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT INGREDIENTS IMAGE */}
        <div className="flex-1 relative">
          <img
            src={IngredientsImg}
            alt="Food Ingredients"
            className="w-full h-[420px] object-contain rounded-3xl  "
          />

          {/* Floating customer card */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white w-[260px] p-4 rounded-2xl shadow-xl flex flex-col items-center">
            <p className="text-xs text-gray-500">How many current</p>
            <p className="text-xs text-gray-500 -mt-1">customers sign up</p>

            <div className="flex mt-3 -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full border"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full border"
                alt=""
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                className="w-10 h-10 rounded-full border"
                alt=""
              />
            </div>

            <p className="mt-2 text-sm font-semibold text-[#23A989] ">50K+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
