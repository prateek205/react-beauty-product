import React from "react";
import { Link } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaArrowRight,
  FaEye,
} from "react-icons/fa";

import FilterSidebar from "./FilterSidebar";
import SortingNavbar from "./SortingNavbar";
import { MyProduct } from "../context/ProductContext";
import { MyCart } from "../context/CartContext";

const AllProducts = () => {
  const { data } = MyProduct();
  const { handleCart } = MyCart();

  return (
    <section className="bg-gradient-to-br from-black via-gray-950 to-pink-950 py-10 px-5 md:px-10">
      {/* PRODUCT GRID */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {data.map((item) => (
          <div
            key={item._id}
            className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition duration-500"
          >
            {/* TOP ACTIONS */}
            <div className="absolute top-3 right-2 z-20 flex flex-col gap-3">
              {/* WISHLIST */}
              <button className="bg-black/40 hover:bg-pink-500 text-white p-3 rounded-full transition duration-300">
                <FaHeart />
              </button>

              {/* QUICK VIEW */}
              <Link
                to={`/product/${item._id}`}
                className="bg-black/40 hover:bg-purple-500 text-white p-3 rounded-full transition duration-300"
              >
                <FaEye />
              </Link>
            </div>

            {/* IMAGE */}
            <div className="relative bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 overflow-hidden">
              {/* STOCK */}
              <span
                className={`absolute top-5 left-5 text-xs font-bold px-4 py-2 rounded-full ${
                  item.stock > 0
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {item.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>

              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-72 object-contain p-5 group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col gap-5">
              {/* CATEGORY */}
              <span className="uppercase tracking-[4px] text-pink-400 text-sm font-semibold">
                {item.category}
              </span>

              {/* TITLE */}
              <Link to={`/product/${item._id}`}>
                <h2 className="text-2xl font-bold text-white hover:text-pink-400 transition line-clamp-2">
                  {item.name}
                </h2>
              </Link>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-gray-400 text-sm">(4.9 Reviews)</span>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-4xl font-extrabold text-white">
                    ₹{item.price}
                  </h3>

                  <p className="text-green-400 text-sm mt-1">Free Shipping</p>
                </div>

                <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-xs font-bold">
                  20% OFF
                </span>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-3">
                {/* CART */}
                <button
                  onClick={() => handleCart(item)}
                  className="group flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] text-white py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300"
                >
                  <FaShoppingCart />
                  Add
                  <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                </button>

                {/* DETAILS */}
                <Link
                  to={`/product/${item._id}`}
                  className="flex items-center justify-center px-5 rounded-2xl border border-white/10 hover:bg-white hover:text-black text-white transition duration-300"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex items-center justify-center mt-10">
        <button className="group flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300">
          Load More Products
          <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
        </button>
      </div>
    </section>
  );
};

export default AllProducts;
