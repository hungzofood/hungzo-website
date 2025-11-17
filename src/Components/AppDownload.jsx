import React from "react";
import phone1 from "../assets/Images/Phone-1.png";
import phone2 from "../assets/Images/Phone-2.png";
import appstore from "../assets/Images/Appstore.png";
import playstore from "../assets/Images/Playstore.png";

export default function AppDownload() {
  return (
    <section className="w-full mt-44 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between">


      {/* LEFT SIDE TEXT */}

      <div className="max-w-lg flex flex-col">

        {/* HEADING */}
        <div>
          <h2
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#1D2A49",
            }}
            className="leading-tight -mt-30"
          >
            Shop Faster With <br /> Hangzo App
          </h2>
        </div>

        {/* SEPARATE DIV — Available on Android & iOS */}
        <div className="mt-2 mb-10">
          <p
            style={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "20px",
              fontWeight: 300,
              color: "#6B7280",
            }}
          >
            Available on both IOS & Android
          </p>
        </div>

  {/* STORE BUTTONS (Independent div) */}
  <div className="flex gap-3 mt-6">

    <img
      src={appstore}
      alt="App Store"
      className="h-[58px] w-auto shrink-0 cursor-pointer hover:scale-105 transition object-contain"
    />

    <img
      src={playstore}
      alt="Google Play"
      className="h-[65px] w-auto shrink-0 cursor-pointer hover:scale-105 transition object-contain"
      style={{ marginTop: "-3px" }}
    />

  </div>

</div>




      {/* RIGHT SIDE PHONES */}
      <div className="relative mt-20 md:mt-0 flex items-center">
        <img
          src={phone1}
          alt="App Phone 1"
          className="w-72 md:w-[330px] drop-shadow-2xl rotate-[-8deg] relative z-10"
        />
        <img
          src={phone2}
          alt="App Phone 2"
          className="w-72 md:w-[330px] drop-shadow-2xl rotate-[8deg] -ml-12 md:-ml-20"
        />
      </div>

    </section>
  );
}
