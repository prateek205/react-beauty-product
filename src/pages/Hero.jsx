import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaArrowRight,
  FaLeaf,
  FaShippingFast,
  FaShieldAlt,
} from "react-icons/fa";

import { MyProduct } from "../context/ProductContext.jsx";
import { MyCart } from "../context/CartContext.jsx";

const Hero = () => {
  const { data } = MyProduct();

  return (
    <section className="relative overflow-hidden bg-black">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center px-5 md:px-12 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center w-full max-w-7xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-8">
            <span className="uppercase tracking-[6px] text-pink-400 font-semibold">
              Luxury Beauty Collection
            </span>

            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
              Discover Your <br />
              <span className="bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
                Natural Glow
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Explore premium skincare and beauty essentials crafted with luxury
              ingredients for radiant, healthy skin and timeless elegance.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-xl">
                <FaLeaf className="mx-auto text-3xl text-green-400 mb-3" />

                <p className="text-white font-semibold">Natural Care</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-xl">
                <FaShippingFast className="mx-auto text-3xl text-pink-400 mb-3" />

                <p className="text-white font-semibold">Free Shipping</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center backdrop-blur-xl">
                <FaShieldAlt className="mx-auto text-3xl text-yellow-400 mb-3" />

                <p className="text-white font-semibold">Secure Payment</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-5">
              <Link to="/product">
              <button className="group flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300">
                Shop Now
                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
              </button>
              </Link>

              <button className="border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 rounded-2xl text-lg font-bold transition duration-300">
                Explore Collection
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">
            {/* GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"></div>

            <img
              src="./images/hero-banner-2.png"
              alt="beauty"
              className="relative z-10 w-full max-w-[650px] drop-shadow-[0_20px_80px_rgba(255,255,255,0.15)]"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-5 shadow-2xl">
              <p className="text-gray-300 text-sm">Premium Collection</p>

              <h3 className="text-white text-2xl font-bold mt-1">
                Up To 40% OFF
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="relative z-10 px-5 md:px-12 lg:px-20 py-20">
        {/* HEADING */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
            Trending Products
          </span>

          <h2 className="text-5xl font-extrabold text-white mt-5">
            Beauty Essentials
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full mx-auto mt-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Discover our luxurious skincare collection crafted with premium
            ingredients for healthy glowing skin.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((item) => (
            <div
              key={item._id}
              className="group relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition duration-500"
            >
              {/* WISHLIST */}
              <button className="absolute top-5 right-5 z-20 bg-black/40 hover:bg-pink-500 text-white p-3 rounded-full transition duration-300">
                <FaHeart />
              </button>

              {/* IMAGE */}
              <div className="relative bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-72 object-contain group-hover:scale-110 transition duration-500"
                />

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
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-5">
                {/* CATEGORY */}
                <span className="uppercase tracking-[4px] text-pink-400 text-sm font-semibold">
                  {item.category}
                </span>

                {/* NAME */}
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
                  <h3 className="text-4xl font-extrabold text-white">
                    ₹{item.price}
                  </h3>

                  <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-xs font-bold">
                    20% OFF
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM PROMOTION */}
      <div className="relative px-5 md:px-12 lg:px-20 pb-20">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-600 via-purple-700 to-black p-12 md:p-20">
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div>
              <span className="uppercase tracking-[5px] text-yellow-300 font-semibold">
                New Arrivals 2026
              </span>

              <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mt-5">
                Glow Like Never Before
              </h2>

              <p className="text-pink-100 text-lg mt-6 leading-relaxed">
                Premium beauty products designed for radiant, youthful, and
                naturally glowing skin.
              </p>

              <button className="mt-10 bg-white hover:bg-pink-100 text-black px-8 py-4 rounded-2xl text-lg font-bold transition duration-300 shadow-lg">
                Explore Products
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="./images/hero-banner-2.png"
                alt="banner"
                className="w-full max-w-[500px] drop-shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
