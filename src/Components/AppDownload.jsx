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
        {/* LEFT BLOCK (TEXT + BUTTONS on desktop) */}
        <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col md:mt-30 text-center md:text-left order-1">

          {/* TEXT */}
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

          {/* DESKTOP BUTTONS (inside left block) */}
          <div className="hidden md:flex flex-row justify-start gap-3 mt-20">
            <img src={appstore} className="h-[58px] object-contain" />
            <img src={playstore} className="h-[61px] object-contain" />
          </div>
        </div>

        {/* RIGHT – PHONES */}
        <div className="w-full md:w-[45%] lg:w-[50%] flex items-center justify-center relative mt-4 md:mt-15 md:mb-15 order-2">
          <img
            src={phone1}
            className="w-[120px] sm:w-[150px] md:w-[260px] lg:w-[300px] rotate-[-8deg] drop-shadow-2xl relative z-10"
          />

          <img
            src={phone2}
            className="w-[120px] sm:w-[150px] md:w-[260px] lg:w-[300px] rotate-[8deg] drop-shadow-2xl -ml-8 sm:-ml-10 md:-ml-20"
          />
        </div>

        {/* MOBILE BUTTONS (always below phones on mobile) */}
        <div className="flex md:hidden flex-row justify-center gap-3 mb-10 mt-4 order-3">
          <img src={appstore} className="h-[34px] object-contain" />
          <img src={playstore} className="h-[38px] object-contain" />
        </div>

      </div>
    </section>
  );
}
