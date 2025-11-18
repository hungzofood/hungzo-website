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
      {/*  1️⃣  EXPLORE CATEGORIES CONTAINER                        */}
      {/* --------------------------------------------------------- */}
      <div className="w-full bg-[#CFE6DD] py-20 mt-20">
        {/* HEADER */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2F]">
            Explore Categories
          </h2>

          <div className="flex items-center gap-10 text-lg font-medium text-[#303030]">
            <button className="text-[#2EC4B6] font-semibold cursor-pointer">All</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Vegetables</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Fruits</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Coffee & Tea</button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative w-full">
          <div className="max-w-[1400px] mx-auto relative">

            {/* LEFT BUTTON */}
            <button
              onClick={scrollLeft}
              disabled={index === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20
                w-12 h-12 rounded-full bg-white border border-[#2EC4B6] shadow-md flex items-center justify-center text-xl transition
                ${index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#2EC4B6] hover:text-white"}
              `}
            >
              ‹
            </button>

            {/* VIEWPORT */}
            <div className="overflow-hidden w-full">
              <div
                className="flex items-start transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${index * STEP}px)`,
                  gap: "40px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                }}
              >
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className={`${cat.bg} w-60 rounded-2xl p-6 shadow-md flex flex-col items-center shrink-0
                    transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden`}
                  >
                    <img src={cat.img} className="w-[140px] h-[140px] object-contain mb-4" />
                    <h3 className="text-xl font-semibold text-[#2A2F4F]">{cat.title}</h3>
                    <p className="text-gray-500 mt-1">{cat.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollRight}
              disabled={index === MAX_INDEX}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20
                w-12 h-12 rounded-full bg-white border border-[#2EC4B6] shadow-md flex items-center justify-center text-xl transition
                ${index === MAX_INDEX ? "opacity-30 cursor-not-allowed" : "hover:bg-[#2EC4B6] hover:text-white"}
              `}
            >
              ›
            </button>

          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/*  2️⃣  ITEMS LISTINGS (Top sells, Trending, etc.)          */}
      {/* --------------------------------------------------------- */}
      <div className="w-full mt-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-20">

          {[
            {
              title: "Top Sells",
              products: [
                { name: "Fresh Oranges", price: "₹79", oldPrice: "₹99", img: Orange },
                { name: "Spinach Bundle", price: "₹25", oldPrice: "₹35", img: "https://via.placeholder.com/150?text=Spinach" },
                { name: "Strawberries", price: "₹150", oldPrice: "₹180", img: "https://via.placeholder.com/150?text=Strawberries" },
              ],
            },
            {
              title: "Top Rated",
              products: [
                { name: "Fresh Persimmon", price: "₹120", oldPrice: "₹140", img: "https://via.placeholder.com/150?text=Persimmon" },
                { name: "Green Beans", price: "₹60", oldPrice: "₹80", img: "https://via.placeholder.com/150?text=Green+Beans" },
                { name: "Red Apple", price: "₹85", oldPrice: "₹120", img: "https://via.placeholder.com/150?text=Apple" },
              ],
            },
            {
              title: "Trending Items",
              products: [
                { name: "Carrots 1kg", price: "₹30", oldPrice: "₹40", img: "https://via.placeholder.com/150?text=Carrots" },
                { name: "Potatoes 1kg", price: "₹20", oldPrice: "₹30", img: "https://via.placeholder.com/150?text=Potatoes" },
                { name: "Mandarins", price: "₹95", oldPrice: "₹110", img: "https://via.placeholder.com/150?text=Mandarin" },
              ],
            },
            {
              title: "Recently Added",
              products: [
                { name: "Green Apple Fresh", price: "₹89", oldPrice: "₹120", img: "https://via.placeholder.com/150?text=Apple" },
                { name: "Fresh Raddish", price: "₹28", oldPrice: "₹35", img: "https://via.placeholder.com/150?text=Carrots" },
                { name: "Fresh Strawberry", price: "₹160", oldPrice: "₹190", img: "https://via.placeholder.com/150?text=Strawberry" },
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-[#2A2F4F] mb-3">{section.title}</h2>
              <div className="h-1 w-24 bg-[#2A2F4F] rounded mb-6"></div>

              {section.products.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 mb-6 bg-white p-3 rounded-xl shadow transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img src={p.img} className="w-20 h-20 rounded-lg object-cover" />
                  <div>
                    <p className="font-medium text-[#1A1F2F]">{p.name}</p>
                    <p className="text-yellow-500 text-sm">★★★★☆ (4)</p>
                    <p className="text-[#23A989] font-bold">
                      {p.price}
                      <span className="text-gray-400 line-through ml-2">{p.oldPrice}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
