import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa";
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
    if (user.id) {
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

      const data = res.data;
      console.log("ORDER:", data);
      navigate("/");
      toast.success("Order Place Successfully");
    } catch (error) {
      toast.error("Order Place Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Address */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-pink-100 p-4 rounded-full">
              <FaMapMarkerAlt className="text-pink-500 text-3xl" />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                Shipping Address
              </h1>
              <p className="text-gray-500 mt-1">
                Enter your complete delivery address
              </p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <textarea
              rows="10"
              placeholder="Enter your shipping address..."
              className="w-full border border-gray-300 rounded-3xl px-6 py-5 text-lg outline-none resize-none focus:ring-2 focus:ring-pink-400 transition"
              name="shippingAddress"
              value={shippingAddress}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 h-fit sticky top-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-4 rounded-full">
              <FaShoppingBag className="text-purple-600 text-3xl" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Order Summary
              </h1>
              <p className="text-gray-500 text-sm">Your selected items</p>
            </div>
          </div>

          {/* Product List */}
          <div className="space-y-5">
            {cart.map((item) => {
              return (
                <div
                  key={item.productId._id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.productId.imageUrl}
                      alt="product"
                      className="w-20 h-20 rounded-2xl object-cover"
                    />

                    <div>
                      <h2 className="font-bold text-gray-800">
                        {item.productId.name}
                      </h2>
                      <p className="text-sm text-gray-500">{item.quantity}</p>
                    </div>
                  </div>

                  <h2 className="font-bold text-lg text-gray-800">
                    ₹{item.productId.price}
                  </h2>
                </div>
              );
            })}
          </div>

          {/* Price Summary */}
          <div className="mt-8 space-y-4">
            <div className="border-t pt-4 flex justify-between text-2xl font-bold text-gray-800">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
