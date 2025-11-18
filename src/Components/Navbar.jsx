import React, { useState } from "react";
import logo from "../assets/Images/hungzo-logo.png";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <nav className="absolute top-[15px] w-full flex justify-center z-50 bg-white/40 backdrop-blur-md h-[165px]">
        
        {/* CONTAINER */}
        <div className="w-full max-w-[1440px] h-[155px] flex items-center justify-between px-5 md:px-[116px]">

          {/* MOBILE HAMBURGER LEFT */}
          <button 
            className="md:hidden text-3xl text-[#1A1F2F] mt-6"
            onClick={() => setOpen(true)}
          >
            <HiMenuAlt3 />
          </button>

          {/* LOGO (same size as your version — no changes) */}
          <img
            src={logo}
            alt="logo"
            className="mt-8 w-[132px] h-[104px] md:w-68 md:h-53 mx-auto md:mx-0"
          />

          {/* EMPTY DIV TO BALANCE CENTER LOGO IN MOBILE */}
          <div className="md:hidden w-8"></div>

          {/* DESKTOP MENU PILL (unchanged) */}
          <ul
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="
              hidden md:flex items-center bg-white/80 shadow-md rounded-full
              justify-between w-[793px] h-[84px]
              px-[55px] py-[21px] gap-12 text-base mr-58
            "
          >
            <li className={`${isActive("/") ? "text-[#23A989]" : "text-black"} cursor-pointer`}>
              <Link to="/">Home</Link>
            </li>

            <li className={`${isActive("/about") ? "text-[#23A989]" : "text-black"} cursor-pointer`}>
              <Link to="/about">About us</Link>
            </li>

            <li className={`${isActive("/contact") ? "text-[#23A989]" : "text-black"} cursor-pointer`}>
              <Link to="/contact">Contact us</Link>
            </li>

            <li className={`${isActive("/career") ? "text-[#23A989]" : "text-black"} cursor-pointer`}>
              <Link to="/career">Career</Link>
            </li>
          </ul>

        </div>
      </nav>

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[260px] bg-white shadow-xl z-[999]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          p-6
        `}
      >
        {/* CLOSE BUTTON */}
        <button 
          className="text-3xl text-[#1A1F2F] mb-6"
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </button>

        {/* MENU LIST */}
        <ul className="flex flex-col gap-6 text-lg font-medium">
          <li onClick={() => setOpen(false)}>
            <Link className={`${isActive("/") ? "text-[#23A989]" : "text-black"}`} to="/">
              Home
            </Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <Link className={`${isActive("/about") ? "text-[#23A989]" : "text-black"}`} to="/about">
              About us
            </Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <Link className={`${isActive("/contact") ? "text-[#23A989]" : "text-black"}`} to="/contact">
              Contact us
            </Link>
          </li>

          <li onClick={() => setOpen(false)}>
            <Link className={`${isActive("/career") ? "text-[#23A989]" : "text-black"}`} to="/career">
              Career
            </Link>
          </li>
        </ul>
      </div>

      {/* MOBILE BACKDROP */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
