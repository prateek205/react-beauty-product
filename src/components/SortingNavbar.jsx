import React from "react";
import {
  FaSortAmountDown,
  FaFilter,
  FaThLarge,
  FaBars,
  FaSearch,
} from "react-icons/fa";

const SortingNavbar = () => {
  return (
    <section className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
      {/* TOP ROW */}
      <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-5">
          {/* TITLE */}
          <div>
            <span className="uppercase tracking-[5px] text-pink-400 font-semibold text-sm">
              Beauty Collection
            </span>

            <h1 className="text-3xl font-extrabold text-white mt-2">
              Trending Products
            </h1>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          {/* SEARCH */}
          <div className="relative w-full md:w-[320px]">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

            <input
              type="text"
              placeholder="Search beauty products..."
              className="w-full bg-black/30 border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
            />
          </div>

          {/* SORT */}
          <div className="flex items-center gap-4 bg-black/30 border border-white/10 rounded-2xl px-5 py-4">
            <FaSortAmountDown className="text-pink-400 text-xl" />

            <select className="bg-transparent text-white outline-none cursor-pointer">
              <option className="bg-black">Sort By</option>

              <option className="bg-black">Price: Low to High</option>

              <option className="bg-black">Price: High to Low</option>

              <option className="bg-black">Newest Products</option>

              <option className="bg-black">Best Selling</option>

              <option className="bg-black">Top Rated</option>
            </select>
          </div>

          {/* FILTER BUTTON */}
          <button className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 text-white px-6 py-4 rounded-2xl font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300">
            <FaFilter />
            Filters
          </button>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mt-8 pt-6 border-t border-white/10">
        {/* RESULT */}
        <div className="flex items-center gap-3">
          <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-bold">
            120 Products
          </span>

          <p className="text-gray-400">Showing premium beauty collections</p>
        </div>

        {/* VIEW OPTIONS */}
        <div className="flex items-center gap-4">
          <button className="w-14 h-14 rounded-2xl bg-pink-500 text-white flex items-center justify-center shadow-lg">
            <FaThLarge className="text-xl" />
          </button>

          <button className="w-14 h-14 rounded-2xl bg-black/30 border border-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition duration-300">
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SortingNavbar;
