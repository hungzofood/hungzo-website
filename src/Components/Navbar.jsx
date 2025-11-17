import React from "react";
import logo from "../assets/Images/hungzo-logo.png";



export default function Navbar() {
  return (
    <nav
      className={`
        absolute top-[15px] w-full flex justify-center
        bg-white/40 backdrop-blur-md 
        h-[165px]     /* exact navbar height */
      `}
    >
      {/* EXACT NAVBAR WIDTH */}
      <div className="w-[1440px] h-[155px] flex items-center justify-between px-[116px] mr-[136px]">

        {/* LEFT: LOGO */}
        <img
          src={logo}
          alt="logo"
         className="md:w-66 md:h-50 mt-8 "
        />

        {/* RIGHT: MENU */}
        <ul
        style={{ fontFamily: "DM Sans, sans-serif" }}

          
          className="flex items-center bg-white/80 shadow-md rounded-full
            justify-between

            w-[793px] h-[84px]      /* exact capsule */
            px-[55px] py-[21px]     /* exact padding */
            gap-12                  /* spacing */
            text-base"
          
            
          
        >
          <li className="text-[#23A989] cursor-pointer" style={{ fontFamily: "DM Sans, sans-serif" }}
>Home</li>
          <li className="cursor-pointer" style={{ fontFamily: "DM Sans, sans-serif" }}
>About us</li>
          <li className="cursor-pointer" style={{ fontFamily: "DM Sans, sans-serif" }}
>Contact us</li>
          <li className="cursor-pointer" style={{ fontFamily: "DM Sans, sans-serif" }}
>Career</li>
        </ul>

      </div>
    </nav>
  );
}
