import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { MyProduct } from "../context/ProductContext.jsx";
import { MyCart } from "../context/CartContext.jsx";

const Hero = () => {
  const { data } = MyProduct();
  const { handleCart } = MyCart();

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      {/* HERO BANNER */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="./images/banner-3.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white capitalize">
            Discover Amazing Products
          </h1>

          <p className="text-gray-200 text-lg mt-4 max-w-2xl">
            Shop the latest collections with premium quality and best prices.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full text-lg transition duration-300 shadow-lg">
            Shop Now
          </button>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="py-14 px-5 md:px-10">
        <div className="flex flex-col items-center gap-3 mb-12">
          <h2 className="text-4xl font-bold capitalize text-gray-800">
            Product Collection
          </h2>

          <div className="w-28 h-1 bg-yellow-500 rounded-full"></div>

          <p className="text-gray-500 text-center max-w-xl">
            Explore our trending products with premium quality and stylish
            designs.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => {
            return (
              <div
                key={item._id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden bg-gray-100">
                  <button className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
                    <FaHeart />
                  </button>

                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-72 object-contain p-5 group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col gap-4">
                  {/* CATEGORY */}
                  <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">
                    {item.category}
                  </span>

                  {/* TITLE */}
                  <Link to={`/product/${item._id}`}>
                    <h2 className="text-lg font-bold text-gray-800 hover:text-yellow-600 transition line-clamp-2">
                      {item.name}
                    </h2>
                  </Link>

                  {/* RATING */}
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-gray-500 text-sm ml-2">
                      (4.9 Reviews)
                    </span>
                  </div>

                  {/* PRICE + STOCK */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      ₹{item.price}
                    </h3>

                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        item.stock > 0
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => handleCart(item)}
                    className="flex items-center justify-center gap-3 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-bold text-lg transition duration-300"
                  >
                    <FaShoppingCart />
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM BANNER */}
      <div className="w-full mt-10">
        <img
          src="./images/hero-banner-2.png"
          alt="banner"
          className="w-full h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
