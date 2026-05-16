import React, { useEffect, useState } from "react";
import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaShoppingBag,
  FaArrowRight,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import { MyCart } from "../../context/CartContext";
import { MyAuth } from "../../context/UserContextProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { user } = MyAuth();

  const { cart, fetchCart, incQty, decQty, removeCart, totalPrice } = MyCart();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-950 to-pink-950 py-10 px-5 md:px-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between mb-12">
        <div>
          <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
            Shopping Cart
          </span>

          <h1 className="text-5xl font-extrabold text-white mt-4">
            Your Beauty Collection
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-3 bg-white/10 border border-white/10 px-6 py-4 rounded-2xl">
          <FaShoppingBag className="text-pink-400 text-2xl" />

          <div>
            <p className="text-gray-400 text-sm">Total Items</p>

            <h3 className="text-white text-2xl font-bold">{cart.length}</h3>
          </div>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-[70vh] bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl">
          <FaShoppingBag className="text-7xl text-pink-400 mb-6" />

          <h1 className="text-5xl font-bold text-white">Your Cart is Empty</h1>

          <p className="text-gray-400 text-lg mt-5 max-w-lg">
            Looks like you haven’t added any beauty products yet. Start shopping
            to glow naturally ✨
          </p>

          <Link to="/">
            <button className="mt-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 text-white px-8 py-4 rounded-2xl text-lg font-bold transition duration-300 shadow-[0_10px_30px_rgba(236,72,153,0.4)]">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="relative z-10 grid lg:grid-cols-[1fr_380px] gap-10 ">
          {/* CART ITEMS */}
          <div className="flex flex-col gap-8 max-h-full overflow-hidden pr-2">
            {cart.map((item) => (
              <div
                key={item.productId._id}
                className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] overflow-hidden p-6 flex flex-col md:flex-row gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
              >
                {/* IMAGE */}
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl p-5 flex items-center justify-center">
                  <img
                    src={item.productId.imageUrl}
                    alt={item.productId.name}
                    className="w-56 h-56 object-contain hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="uppercase tracking-[4px] text-pink-400 text-sm font-semibold">
                      Premium Skincare
                    </span>

                    <h2 className="text-3xl font-bold text-white mt-3">
                      {item.productId.name}
                    </h2>

                    <p className="text-gray-400 mt-5 leading-relaxed">
                      Premium skincare designed to nourish, hydrate, and enhance
                      your natural glow.
                    </p>

                    <div className="mt-6 flex items-center gap-5">
                      <h3 className="text-4xl font-extrabold text-white">
                        ₹{item.productId.price}
                      </h3>

                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold">
                        In Stock
                      </span>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-wrap items-center justify-between gap-5 mt-8">
                    {/* QUANTITY */}
                    <div className="flex items-center gap-6 bg-black/30 border border-white/10 rounded-2xl px-6 py-4">
                      <button
                        className="text-white hover:text-red-400 transition duration-300"
                        onClick={() => decQty(item.productId._id)}
                      >
                        <FaMinus />
                      </button>

                      <p className="text-2xl font-bold text-white">
                        {item.quantity}
                      </p>

                      <button
                        className="text-white hover:text-green-400 transition duration-300"
                        onClick={() => incQty(item.productId._id)}
                      >
                        <FaPlus />
                      </button>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeCart(item.productId._id)}
                      className="flex items-center gap-3 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-6 py-4 rounded-2xl font-semibold transition duration-300"
                    >
                      <FaTrash />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="h-fit sticky top-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            <h2 className="text-3xl font-bold text-white">Order Summary</h2>

            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-5"></div>

            {/* SUMMARY DETAILS */}
            <div className="flex flex-col gap-6 mt-10">
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
                <h3 className="text-2xl font-bold text-white">Total</h3>

                <h3 className="text-3xl font-extrabold text-pink-400">
                  ₹{totalPrice + 99}
                </h3>
              </div>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-5 text-center">
                <FaTruck className="mx-auto text-3xl text-pink-400 mb-3" />

                <p className="text-white font-semibold text-sm">
                  Free Delivery
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5 text-center">
                <FaShieldAlt className="mx-auto text-3xl text-yellow-400 mb-3" />

                <p className="text-white font-semibold text-sm">
                  Secure Payment
                </p>
              </div>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              onClick={()=>navigate("/order")}
              className="group mt-10 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] text-white py-5 rounded-2xl text-xl font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300"
            >
              Proceed to Checkout
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
