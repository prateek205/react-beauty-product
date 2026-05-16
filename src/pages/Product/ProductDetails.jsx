import { useParams } from "react-router-dom";
import { MyProduct } from "../../context/ProductContext.jsx";
import { MyCart } from "../../context/CartContext.jsx";
import {
  FaMinus,
  FaPlus,
  FaStar,
  FaShoppingBag,
  FaBolt,
  FaHeart,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = MyProduct();

  const { handleCart, incQty, decQty, cart } = MyCart();

  // FIND PRODUCT
  const products = data.find((item) => item._id === id);

  // FIND CART ITEM
  const cartItem = cart.find((item) => item.productId._id === id);

  if (!products) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-950 to-pink-950 py-12 px-5 md:px-10">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)] grid lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-10">
          
          {/* WISHLIST */}
          <button className="absolute top-8 right-8 bg-white/10 hover:bg-pink-500 text-white p-4 rounded-full transition duration-300">
            <FaHeart className="text-xl" />
          </button>

          {/* IMAGE */}
          <img
            src={products.imageUrl}
            alt={products.name}
            className="w-full max-w-lg object-contain drop-shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between p-8 md:p-14">
          
          {/* TOP */}
          <div>
            
            {/* CATEGORY */}
            <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
              {products.category}
            </span>

            {/* TITLE */}
            <h1 className="text-5xl font-extrabold text-white mt-5 leading-tight">
              {products.name}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex text-yellow-400 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300">
                4.9 Rating • 1.2k Reviews
              </p>
            </div>

            {/* PRICE */}
            <div className="mt-8 flex items-center gap-5">
              <h2 className="text-5xl font-extrabold text-white">
                ₹{products.price}
              </h2>

              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold">
                20% OFF
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg leading-relaxed mt-8">
              Experience premium skincare crafted with luxurious
              ingredients for radiant, healthy, and glowing skin.
              Suitable for all skin types and designed to deeply
              nourish your beauty naturally.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              
              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
                <FaTruck className="mx-auto text-3xl text-pink-400 mb-3" />

                <p className="text-white font-semibold">
                  Free Delivery
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
                <FaShieldAlt className="mx-auto text-3xl text-yellow-400 mb-3" />

                <p className="text-white font-semibold">
                  Secure Payment
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">
                <FaHeart className="mx-auto text-3xl text-red-400 mb-3" />

                <p className="text-white font-semibold">
                  Skin Friendly
                </p>
              </div>
            </div>

            {/* STOCK */}
            <div className="mt-10">
              <p className="text-xl font-bold text-white">
                Stock :
                <span
                  className={`ml-3 ${
                    products.stock <= 0
                      ? "text-red-400"
                      : products.stock <= 5
                      ? "text-orange-400"
                      : "text-green-400"
                  }`}
                >
                  {products.stock <= 0
                    ? "Out of Stock"
                    : `${products.stock} Available`}
                </span>
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-12">
            {!cartItem ? (
              <div className="flex flex-wrap gap-5">
                
                {/* ADD TO CART */}
                <button
                  onClick={() => handleCart(products)}
                  className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300"
                >
                  <FaShoppingBag />
                  Add To Cart
                </button>

                {/* BUY NOW */}
                <button className="flex items-center gap-3 border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 rounded-2xl text-lg font-bold transition duration-300">
                  <FaBolt />
                  Buy Now
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-[180px] bg-white/10 border border-white/10 rounded-2xl px-5 py-4 shadow-lg">
                
                <button
                  className="text-white hover:text-red-400 transition duration-300"
                  onClick={() => decQty(products._id)}
                >
                  <FaMinus />
                </button>

                <p className="text-2xl font-bold text-white">
                  {cartItem.quantity}
                </p>

                <button
                  className="text-white hover:text-green-400 transition duration-300"
                  onClick={() => incQty(products._id)}
                >
                  <FaPlus />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;