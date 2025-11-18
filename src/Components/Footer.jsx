import React from "react";
import logo from "../assets/Images/Brand Logo.svg";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10 pb-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-14 h-14" />
            <div>
              <h2 className="text-xl font-semibold text-[#F59E0B]">Hungzo</h2>
              <p className="text-gray-500 text-sm -mt-1">Hunger ka dost</p>
            </div>
          </div>

          <p className="mt-4 text-base text-gray-700 font-medium">Hunger ka dost</p>

          <p className="mt-4 flex items-center gap-2 text-lg text-[#1E3A5F] font-semibold">
            <FaPhoneAlt className="text-[#1E3A5F] text-xl" />
            Call Us: <span className="font-normal ml-1">9619399499</span>
          </p>
        </div>

        {/* MIDDLE — NOW CLICKABLE */}
        <div>
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Useful links</h3>

          <ul className="space-y-3 text-lg text-[#1E3A5F]">

            <li>
              <Link to="/about" className="hover:text-[#23A989] transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-[#23A989] transition">
                Contact us
              </Link>
            </li>

            <li>
              <Link to="/career" className="hover:text-[#23A989] transition">
                Career
              </Link>
            </li>

          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Connect with us</h3>
          <div className="grid grid-cols-2 gap-x-16 gap-y-6 w-28">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-[#145D5D] flex items-center justify-center cursor-pointer">
                <Icon className="text-white text-xl" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="w-full border-t border-gray-200 mt-10"></div>

      <p className="text-center text-sm text-[#1E3A5F] mt-3">
        © 2025, All rights reserved
      </p>
    </footer>
  );
}
