import React from "react";
import logo from "../assets/Images/hungzo-logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Function to check if this route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="
        absolute top-[15px] w-full flex justify-center
        bg-white/40 backdrop-blur-md
        h-[165px]
      "
    >
      {/* CONTAINER */}
      <div
        className="
          w-full max-w-[1440px] h-[155px]
          flex items-center justify-between
          px-5 md:px-[116px]
        "
      >

        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          className="mt-8 w-[132px] h-[104px] md:w-68 md:h-53"
        />

        {/* MENU CAPSULE — DESKTOP */}
        <ul
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="
            hidden md:flex items-center bg-white/80 shadow-md rounded-full
            justify-between w-[793px] h-[84px]
            px-[55px] py-[21px] gap-12 text-base mr-58
          "
        >
          <li
            className={`${isActive("/") ? "text-[#23A989]" : "text-black"} cursor-pointer`}
          >
            <Link to="/">Home</Link>
          </li>

          <li
            className={`${isActive("/about") ? "text-[#23A989]" : "text-black"} cursor-pointer`}
          >
            <Link to="/about">About us</Link>
          </li>

          <li
            className={`${isActive("/contact") ? "text-[#23A989]" : "text-black"} cursor-pointer`}
          >
            <Link to="/contact">Contact us</Link>
          </li>

          <li
            className={`${isActive("/career") ? "text-[#23A989]" : "text-black"} cursor-pointer`}
          >
            <Link to="/career">Career</Link>
          </li>
        </ul>

        {/* MOBILE MENU */}
        <div className="md:hidden flex flex-col text-right gap-2">
          <Link className={`${isActive("/") ? "text-[#23A989]" : ""} text-sm`} to="/">Home</Link>
          <Link className={`${isActive("/about") ? "text-[#23A989]" : ""} text-sm`} to="/about">About us</Link>
          <Link className={`${isActive("/contact") ? "text-[#23A989]" : ""} text-sm`} to="/contact">Contact us</Link>
          <Link className={`${isActive("/career") ? "text-[#23A989]" : ""} text-sm`} to="/career">Career</Link>
        </div>

      </div>
    </nav>
  );
}
