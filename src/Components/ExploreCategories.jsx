import React, { useState } from "react";
import Noodles from "../assets/Images/Noodles.png";
import SpiceS from "../assets/Images/SpicesSmall.png";
import Sauces from "../assets/Images/Sauces.png";
import ImpItems from "../assets/Images/ImpItems.png";
import VegetablesSmall from "../assets/Images/VegetableSmall.png";
import Dairy from "../assets/Images/Dairy.png";
import Pulses from "../assets/Images/Pulses.png";
import Coffee from "../assets/Images/Coffee.jpg";
import Orange from "../assets/Images/Orange.png";
import Spinnach from "../assets/Images/Spinnach.png";
import Strawberry from "../assets/Images/Strawberry.png";
import Pers from "../assets/Images/Pers.png";
import Apple from "../assets/Images/Apple.png";
import Carrot from "../assets/Images/Carrot.png";
import Potatoes from "../assets/Images/Potatoe.png";
import GrApple from "../assets/Images/GreenApple.png";
import GrBeans from "../assets/Images/GreenBeans.webp";
import Mandarin from "../assets/Images/mandarin.avif";
import Berry from "../assets/Images/Berry.webp";
import Raddish from "../assets/Images/raddish.webp";

export default function ExploreCategories() {
  
  const categories = [
    { title: "Noodles", items: "20 Items", img: Noodles, bg: "bg-[#FDECEC]" },
    { title: "Spices", items: "23 Items", img: SpiceS, bg: "bg-[#F3FFF3]" },
    { title: "Sauces", items: "9 Items", img: Sauces, bg: "bg-[#F3FFFB]" },
    { title: "Imported Items", items: "40 Items", img: ImpItems, bg: "bg-[#FFF6F2]" },
    { title: "Vegetables", items: "220 Items", img: VegetablesSmall, bg: "bg-[#FFF3FF]" },
    { title: "Dairy", items: "3 Items", img: Dairy, bg: "bg-[#FFFDF5]" },
    { title: "Pulses", items: "10 Items", img: Pulses, bg: "bg-[#F1FFE7]" },
    { title: "Tea & Coffee", items: "10 Items", img: Coffee, bg: "bg-[#F1FFE7]" },
  ];

  const CARD_WIDTH = 240;
  const GAP = 40;
  const STEP = CARD_WIDTH + GAP;
  const VISIBLE_COUNT = 4;
  const MAX_INDEX = Math.max(0, categories.length - VISIBLE_COUNT);

  const [index, setIndex] = useState(0);

  const scrollLeft = () => setIndex((prev) => Math.max(prev - 1, 0));
  const scrollRight = () => setIndex((prev) => Math.min(prev + 1, MAX_INDEX));

  return (
    <>
      {/* --------------------------------------------------------- */}
      {/*  1️⃣ EXPLORE CATEGORIES                                   */}
      {/* --------------------------------------------------------- */}

      <div className="w-full bg-[#CFE6DD] py-10 md:py-20">
        
        {/* HEADER */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-20 flex items-center justify-between mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1A1F2F]">
            Explore Categories
          </h2>

          <div className="hidden md:flex items-center gap-10 text-lg font-medium text-[#303030]">
            <button className="text-[#2EC4B6] font-semibold cursor-pointer">All</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Vegetables</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Fruits</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Coffee & Tea</button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative w-full">

          <div className="max-w-[1400px] mx-auto relative">

            {/* LEFT BUTTON — Hide on mobile */}
            <button
              onClick={scrollLeft}
              disabled={index === 0}
              className={`hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-20
                w-12 h-12 rounded-full bg-white border border-[#2EC4B6] shadow-md items-center justify-center text-xl transition
                ${index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#2EC4B6] hover:text-white"}
              `}
            >
              ‹
            </button>

            {/* ✔ Desktop → slider transform */}
            {/* ✔ Mobile → natural horizontal scrolling */}

            <div className="w-full overflow-x-auto md:overflow-hidden px-4 md:px-0 flex md:block gap-6 md:gap-0 scroll-smooth">
              <div
                className="flex items-start md:transition-transform md:duration-500 md:ease-out gap-6 md:gap-[40px]"
                style={{
                  transform: window.innerWidth >= 768 ? `translateX(-${index * STEP}px)` : "none",
                }}
              >
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className={`${cat.bg} min-w-[160px] md:w-60 rounded-2xl p-4 md:p-6 shadow-md flex flex-col items-center shrink-0
                    transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
                  >
                    <img src={cat.img} className="w-[100px] md:w-[140px] h-[100px] md:h-[140px] object-contain mb-3" />
                    <h3 className="text-lg md:text-xl font-semibold text-[#2A2F4F]">{cat.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{cat.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BUTTON — Hide on mobile */}
            <button
              onClick={scrollRight}
              disabled={index === MAX_INDEX}
              className={`hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-20
                w-12 h-12 rounded-full bg-white border border-[#2EC4B6] shadow-md items-center justify-center text-xl transition
                ${index === MAX_INDEX ? "opacity-30 cursor-not-allowed" : "hover:bg-[#2EC4B6] hover:text-white"}
              `}
            >
              ›
            </button>

          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/*  2️⃣ PRODUCT SECTIONS                                     */}
      {/* --------------------------------------------------------- */}

      <div className="w-full mt-12 md:mt-24">
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-20">

          {[
            {
              title: "Top Sells",
              products: [
                { name: "Fresh Oranges", price: "₹79", oldPrice: "₹99", img: Orange },
                { name: "Spinach Bundle", price: "₹25", oldPrice: "₹35", img: Spinnach },
                { name: "Strawberries", price: "₹150", oldPrice: "₹180", img: Strawberry },
              ],
            },
            {
              title: "Top Rated",
              products: [
                { name: "Fresh Persimmon", price: "₹120", oldPrice: "₹140", img: Pers },
                { name: "Green Beans", price: "₹60", oldPrice: "₹80", img: GrBeans },
                { name: "Red Apple", price: "₹85", oldPrice: "₹120", img: Apple },
              ],
            },
            {
              title: "Trending Items",
              products: [
                { name: "Carrots 1kg", price: "₹30", oldPrice: "₹40", img: Carrot },
                { name: "Potatoes 1kg", price: "₹20", oldPrice: "₹30", img: Potatoes },
                { name: "Mandarins", price: "₹95", oldPrice: "₹110", img: Mandarin },
              ],
            },
            {
              title: "Recently Added",
              products: [
                { name: "Green Apple Fresh", price: "₹89", oldPrice: "₹120", img: GrApple },
                { name: "Fresh Raddish", price: "₹28", oldPrice: "₹35", img: Raddish },
                { name: "Fresh Berry", price: "₹160", oldPrice: "₹190", img: Berry },
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-12">

              <h2 className="text-xl md:text-2xl font-semibold text-[#2A2F4F] mb-2">{section.title}</h2>
              <div className="h-1 w-20 md:w-24 bg-[#2A2F4F] rounded mb-6"></div>

              {/* Horizontal scroll on mobile */}
              <div className="flex md:grid md:grid-cols-1 md:gap-6 gap-4 overflow-x-auto scroll-smooth">
                
                {section.products.map((p, i) => (
                  <div
                    key={i}
                    className="min-w-[160px] md:min-w-0 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <img src={p.img} className="w-20 h-20 rounded-lg object-cover" />

                    <div>
                      <p className="font-medium text-[#1A1F2F] text-center md:text-left">{p.name}</p>
                      <p className="text-yellow-500 text-sm text-center md:text-left">★★★★☆ (4)</p>

                      <p className="text-[#23A989] font-bold text-center md:text-left">
                        {p.price}
                        <span className="text-gray-400 line-through ml-2">{p.oldPrice}</span>
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </>
  );
}
