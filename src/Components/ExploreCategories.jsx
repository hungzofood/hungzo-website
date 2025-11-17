import React, { useState } from "react";

export default function ExploreCategories() {
  const categories = [
    {
      title: "Peach",
      items: "20 Items",
      img: "https://via.placeholder.com/300x300?text=Peach",
      bg: "bg-[#FDECEC]",
    },
    {
      title: "Spices",
      items: "23 Items",
      img: "https://via.placeholder.com/300x300?text=Spices",
      bg: "bg-[#F3FFF3]",
    },
    {
      title: "Sauces",
      items: "9 Items",
      img: "https://via.placeholder.com/300x300?text=Sauces",
      bg: "bg-[#F3FFFB]",
    },
    {
      title: "Imported Items",
      items: "40 Items",
      img: "https://via.placeholder.com/300x300?text=Imported",
      bg: "bg-[#FFF6F2]",
    },
    {
      title: "Vegetables",
      items: "220 Items",
      img: "https://via.placeholder.com/300x300?text=Vegetables",
      bg: "bg-[#FFF3FF]",
    },
    {
      title: "Dairy",
      items: "3 Items",
      img: "https://via.placeholder.com/300x300?text=Dairy",
      bg: "bg-[#FFFDF5]",
    },
    {
      title: "Pulses",
      items: "10 Items",
      img: "https://via.placeholder.com/300x300?text=Pulses",
      bg: "bg-[#F1FFE7]",
    },
  ];

  const [index, setIndex] = useState(0);

  const scrollLeft = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setIndex((prev) => Math.min(prev + 1, categories.length - 1));
  };

  return (
    <div
      className="w-full bg-[#CFE6DD] py-20 px-6 md:px-20 mt-20"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2F]">
          Explore Categories
        </h2>

        <div className="flex items-center gap-10 text-lg font-medium text-[#303030]">
          <span className="text-[#2EC4B6] font-semibold cursor-pointer">All</span>
          <span className="cursor-pointer hover:text-[#2EC4B6]">Vegetables</span>
          <span className="cursor-pointer hover:text-[#2EC4B6]">Fruits</span>
          <span className="cursor-pointer hover:text-[#2EC4B6]">Coffee & Tea</span>
        </div>
      </div>

      {/* CATEGORY SCROLLER */}
      <div className="relative w-full flex items-center">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-3xl text-[#303030] hover:bg-[#2EC4B6] hover:text-white transition"
        >
          ‹
        </button>

        {/* CATEGORY STRIP */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-10 transition-all"
            style={{ transform: `translateX(-${index * 270}px)` }}
          >
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`${cat.bg} w-60 rounded-2xl p-6 shadow-md flex flex-col items-center`}
              >
                <img
                  src={cat.img}
                  className="w-[140px] h-[140px] object-contain mb-4"
                  alt={cat.title}
                />
                <h3 className="text-xl font-semibold text-[#1A1F2F]">
                  {cat.title}
                </h3>
                <p className="text-gray-500 mt-1">{cat.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-3xl text-[#303030] hover:bg-[#2EC4B6] hover:text-white transition"
        >
          ›
        </button>

      </div>
    </div>
  );
}
