import React from "react";
import phone1 from "../assets/Images/Phone-1.png";
import phone2 from "../assets/Images/Phone-2.png";
import appstore from "../assets/Images/Appstore.png";
import playstore from "../assets/Images/Playstore.png";

export default function AppDownload() {
  return (
    <section className="w-full mt-20 px-6 md:px-20 bg-[#FFFFFF]">
      <div
        className="
          w-full 
          flex flex-col md:flex-row
          items-center md:items-start 
          justify-between 
          gap-10 md:gap-6
        "
      >
        {/* LEFT TEXT */}
        <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col md:mt-10 text-center md:text-left">
          <h2
            className="leading-snug"
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "34px",
              fontWeight: 700,
              color: "#1D2A49",
            }}
          >
            Shop Faster With Hangzo <br className="hidden md:block" /> App
          </h2>

          <p
            className="mt-2"
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "#6B7280",
            }}
          >
            Available on both IOS & Android
          </p>

          {/* STORE BUTTONS */}
          
        </div>

        {/* RIGHT – PHONES */}
        <div className="w-full md:w-[45%] lg:w-[50%] flex items-center justify-center relative mt-4 md:mt-20">
          <img
            src={phone1}
            className="w-[120px] sm:w-[150px] md:w-[260px] lg:w-[300px] rotate-[-8deg] drop-shadow-2xl relative z-10"
          />

          <img
            src={phone2}
            className="w-[120px] sm:w-[150px] md:w-[260px] lg:w-[300px] rotate-[8deg] drop-shadow-2xl -ml-8 sm:-ml-10 md:-ml-20"
          />
        </div>
        <div className="flex flex-row justify-center md:justify-start gap-3 mb-10 mt-4">
            <img
              src={appstore}
              className="h-[34px] md:h-[38px] object-contain"
            />
            <img
              src={playstore}
              className="h-[38px] md:h-[42px] object-contain"
            />
          </div>
      </div>
    </section>
  );
}
