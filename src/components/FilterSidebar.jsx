import React from "react";
import {
  FaSpa,
  FaLeaf,
  FaPumpSoap,
  FaMagic,
  FaHeart,
  FaFilter,
} from "react-icons/fa";

const FilterSidebar = () => {
  return (
    <aside className="w-full md:w-[320px] h-fit sticky top-5 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
      
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-10">
        
        <div className="bg-pink-500/20 p-4 rounded-2xl">
          <FaFilter className="text-pink-400 text-2xl" />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-white">
            Filters
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Discover your beauty essentials
          </p>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="flex flex-col gap-6">
        
        <h2 className="text-2xl font-bold text-white">
          Beauty Categories
        </h2>

        <ul className="flex flex-col gap-5">
          
          {/* SKINCARE */}
          <li className="group flex items-center justify-between bg-black/30 border border-white/10 hover:border-pink-500 rounded-2xl px-5 py-4 transition duration-300 cursor-pointer">
            
            <div className="flex items-center gap-4">
              <FaSpa className="text-pink-400 text-xl" />

              <label className="text-white font-medium cursor-pointer">
                Skincare
              </label>
            </div>

            <input
              type="checkbox"
              className="w-5 h-5 accent-pink-500"
            />
          </li>

          {/* FACE CARE */}
          <li className="group flex items-center justify-between bg-black/30 border border-white/10 hover:border-pink-500 rounded-2xl px-5 py-4 transition duration-300 cursor-pointer">
            
            <div className="flex items-center gap-4">
              <FaHeart className="text-red-400 text-xl" />

              <label className="text-white font-medium cursor-pointer">
                Face Care
              </label>
            </div>

            <input
              type="checkbox"
              className="w-5 h-5 accent-pink-500"
            />
          </li>

          {/* BODY CARE */}
          <li className="group flex items-center justify-between bg-black/30 border border-white/10 hover:border-pink-500 rounded-2xl px-5 py-4 transition duration-300 cursor-pointer">
            
            <div className="flex items-center gap-4">
              <FaPumpSoap className="text-yellow-400 text-xl" />

              <label className="text-white font-medium cursor-pointer">
                Body Care
              </label>
            </div>

            <input
              type="checkbox"
              className="w-5 h-5 accent-pink-500"
            />
          </li>

          {/* ORGANIC */}
          <li className="group flex items-center justify-between bg-black/30 border border-white/10 hover:border-pink-500 rounded-2xl px-5 py-4 transition duration-300 cursor-pointer">
            
            <div className="flex items-center gap-4">
              <FaLeaf className="text-green-400 text-xl" />

              <label className="text-white font-medium cursor-pointer">
                Organic Beauty
              </label>
            </div>

            <input
              type="checkbox"
              className="w-5 h-5 accent-pink-500"
            />
          </li>

          {/* MAKEUP */}
          <li className="group flex items-center justify-between bg-black/30 border border-white/10 hover:border-pink-500 rounded-2xl px-5 py-4 transition duration-300 cursor-pointer">
            
            <div className="flex items-center gap-4">
              <FaMagic className="text-purple-400 text-xl" />

              <label className="text-white font-medium cursor-pointer">
                Makeup
              </label>
            </div>

            <input
              type="checkbox"
              className="w-5 h-5 accent-pink-500"
            />
          </li>
        </ul>
      </div>

      {/* PRICE FILTER */}
      <div className="mt-10">
        
        <h2 className="text-2xl font-bold text-white mb-6">
          Price Range
        </h2>

        <input
          type="range"
          min="100"
          max="5000"
          className="w-full accent-pink-500 cursor-pointer"
        />

        <div className="flex items-center justify-between mt-4 text-gray-300">
          <span>₹100</span>

          <span>₹5000</span>
        </div>
      </div>

      {/* BUTTON */}
      <button className="mt-10 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] text-white py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300">
        Apply Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;