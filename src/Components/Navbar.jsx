import React, { useState } from "react";
import logo from "../assets/Images/hungzo-logo.png";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose, IoCubeOutline } from "react-icons/io5";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ===========================
          DESKTOP NAVBAR (unchanged)
      ============================ */}
      <nav className="hidden md:flex absolute top-[15px] w-full justify-center z-50 bg-white/40 backdrop-blur-md h-[165px]">
        <div className="w-full max-w-[1440px] h-[155px] flex items-center justify-between px-5 md:px-[116px]">
          {/* LOGO (same size, untouched) */}
          <img src={logo} alt="logo" className="mt-8 w-[132px] h-[104px] md:w-68 md:h-53 mx-auto md:mx-0" />

          {/* DESKTOP MENU (original code untouched) */}
          <ul
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="
              flex items-center bg-white/80 shadow-md rounded-full
              justify-between w-[793px] h-[84px]
              px-[55px] py-[21px] gap-12 text-base mr-58
            "
          >
            <li
              className={`${
                isActive("/") ? "text-[#23A989]" : "text-black"
              } cursor-pointer`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${
                isActive("/about") ? "text-[#23A989]" : "text-black"
              } cursor-pointer`}
            >
              <Link to="/about">About us</Link>
            </li>
            <li
              className={`${
                isActive("/contact") ? "text-[#23A989]" : "text-black"
              } cursor-pointer`}
            >
              <Link to="/contact">Contact us</Link>
            </li>
            <li
              className={`${
                isActive("/career") ? "text-[#23A989]" : "text-black"
              } cursor-pointer`}
            >
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===========================
          MOBILE NAVBAR (separate)
      ============================ */}
      <nav className="flex md:hidden absolute top-[15px] w-full justify-between px-5 z-50">
        {/* LEFT HAMBURGER */}
        <button
          className="text-3xl text-[#2EC4B6]"
          onClick={() => setOpen(true)}
        >
          <HiMenuAlt3 />
        </button>

        {/* CENTER LOGO (your original size, untouched) */}
        <img src={logo} alt="logo" className="w-[132px] h-[104px]" />

        {/* BALANCER */}
        <div className="w-8"></div>
      </nav>

      {/* ===========================
          MOBILE SLIDE MENU
      ============================ */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[300px] bg-linear-to-b from-[#6DA59D] to-[#163C34]
          z-999 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          p-6 md:hidden
        `}
      >
        <button
          className="text-3xl text-white mb-6"
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </button>

        {/* MOBILE LOGO (only here it is 30% bigger) */}
        <div className="w-full flex justify-center mb-10">
          <img
            src={logo}
            alt="logo"
            className="
      w-[132px] h-[104px]   /* mobile original */
      md:w-68 md:h-53       /* desktop original – restored */
      rounded-full object-contain
    "
            style={{ aspectRatio: "1 / 1" }}
          />
        </div>

        {/* MOBILE MENU OPTIONS */}
        <ul className="flex flex-col gap-4 text-base font-medium">
          {["Home", "About us", "Contact us", "Career"].map((item, index) => {
            const paths = ["/", "/about", "/contact", "/career"];

            return (
              <li key={index} onClick={() => setOpen(false)}>
                <Link
                  to={paths[index]}
                  className="flex items-center gap-3 bg-white/30 backdrop-blur-md px-4 py-2 rounded-lg text-white font-medium"
                >
                  <div className="w-[30px] h-[30px] rounded-lg bg-[#6DC3B2] flex items-center justify-center">
                    <IoCubeOutline className="text-white text-lg" />
                  </div>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-998 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
