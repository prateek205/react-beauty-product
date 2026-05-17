import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaArrowRight,
} from "react-icons/fa";

import { MyAuth } from "../../context/UserContextProvider";
import { MyCart } from "../../context/CartContext";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Order = () => {
  const { user } = MyAuth();
  const { cart, fetchCart, totalPrice } = MyCart();

  const [shippingAddress, setShippingAddress] = useState("");

  const BASE_URL =
    "https://e-commerce-backend-5q60.onrender.com/api/v1/user/order/checkout";

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchCart();
    }
  }, [user]);

  const handleChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(BASE_URL, {
        userId: user.id,
        shippingAddress,
      });

      // console.log("ORDER:", res.data);

      await fetchCart()

      toast.success("Order Placed Successfully ✨");

      navigate("/orderHistory");
    } catch (error) {
      toast.error("Order Failed ❌");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-950 to-pink-950 py-10 px-5 md:px-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="relative z-10 mb-14">
        <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
          Checkout Process
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-5">
          Complete Your Order
        </h1>

        <p className="text-gray-400 text-lg mt-5 max-w-2xl">
          Securely complete your purchase and get your premium skincare products
          delivered to your doorstep.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 grid lg:grid-cols-[1fr_420px] gap-10">
        {/* SHIPPING SECTION */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
          {/* TOP */}
          <div className="flex items-center gap-5 mb-10">
            <div className="bg-pink-500/20 p-5 rounded-3xl">
              <FaMapMarkerAlt className="text-pink-400 text-4xl" />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                Shipping Address
              </h2>

              <p className="text-gray-400 mt-2">
                Enter your delivery details carefully
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* ADDRESS */}
            <div>
              <label className="text-gray-300 block mb-3">
                Shipping Address
              </label>

              <textarea
                rows="8"
                placeholder="Enter your shipping address..."
                value={shippingAddress}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 rounded-3xl px-6 py-5 text-lg text-white placeholder:text-gray-500 outline-none resize-none focus:border-pink-500 transition duration-300"
              ></textarea>
            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-5 text-center">
                <FaTruck className="mx-auto text-3xl text-pink-400 mb-3" />

                <p className="text-white font-semibold">Fast Delivery</p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5 text-center">
                <FaShieldAlt className="mx-auto text-3xl text-yellow-400 mb-3" />

                <p className="text-white font-semibold">Secure Checkout</p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5 text-center">
                <FaCreditCard className="mx-auto text-3xl text-green-400 mb-3" />

                <p className="text-white font-semibold">Safe Payment</p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="group mt-5 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] text-white py-5 rounded-2xl text-xl font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300"
            >
              Place Order
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </button>
          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="h-fit sticky top-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
          {/* TOP */}
          <div className="flex items-center gap-5 mb-10">
            <div className="bg-purple-500/20 p-5 rounded-3xl">
              <FaShoppingBag className="text-purple-400 text-4xl" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">Order Summary</h2>

              <p className="text-gray-400">Your selected products</p>
            </div>
          </div>

          {/* PRODUCT LIST */}
          <div className="flex flex-col gap-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {cart.map((item) => (
              <div
                key={item.productId._id}
                className="bg-black/30 border border-white/10 rounded-3xl p-4 flex gap-4"
              >
                {/* IMAGE */}
                <div className="bg-white/5 rounded-2xl p-3">
                  <img
                    src={item.productId.imageUrl}
                    alt={item.productId.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-white font-bold text-lg line-clamp-2">
                      {item.productId.name}
                    </h3>

                    <p className="text-pink-400 text-sm mt-2">
                      Quantity : {item.quantity}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <h2 className="text-2xl font-bold text-white">
                      ₹{item.productId.price}
                    </h2>

                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                      In Stock
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PRICE SUMMARY */}
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex items-center justify-between text-gray-300">
              <p>Subtotal</p>

              <p>₹{totalPrice}</p>
            </div>

            <div className="flex items-center justify-between text-gray-300">
              <p>Shipping</p>

              <p className="text-green-400 font-semibold">Free</p>
            </div>

            <div className="flex items-center justify-between text-gray-300">
              <p>Tax</p>

              <p>₹99</p>
            </div>

            <div className="h-[1px] bg-white/10"></div>

            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Total</h2>

              <h2 className="text-4xl font-extrabold text-pink-400">
                ₹{totalPrice + 99}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
