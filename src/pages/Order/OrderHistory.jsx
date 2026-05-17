import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";

import axios from "axios";
import { MyAuth } from "../../context/UserContextProvider";

const OrderHistory = () => {
  const { user } = MyAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL =
    "https://e-commerce-backend-5q60.onrender.com/api/v1/user/order";

  // FETCH USER ORDERS
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/history/${user.id}`);

      setOrders(response.data.orders || []);
    } catch (error) {
      console.log("ORDER HISTORY ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  // LOADING
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-3xl font-bold">
        Loading Orders...
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-950 to-pink-950 py-10 px-5 md:px-10">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="relative z-10 mb-14">
        <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
          Order Management
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-5">
          Your Order History
        </h1>

        <p className="text-gray-400 text-lg mt-5 max-w-2xl">
          Track your purchased beauty products and review your previous orders
          securely.
        </p>
      </div>

      {/* EMPTY */}
      {orders.length === 0 ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-[70vh] bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl">
          <FaBoxOpen className="text-8xl text-pink-400 mb-6" />

          <h1 className="text-5xl font-bold text-white">No Orders Found</h1>

          <p className="text-gray-400 text-lg mt-5 max-w-lg">
            You haven’t placed any orders yet. Start shopping to explore premium
            beauty collections ✨
          </p>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col gap-10">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* LEFT */}
                <div>
                  <span className="uppercase tracking-[4px] text-pink-400 text-sm font-semibold">
                    Order ID
                  </span>

                  <h2 className="text-3xl font-bold text-white mt-3 break-all">
                    {order._id}
                  </h2>

                  <div className="flex flex-wrap items-center gap-6 mt-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <FaCalendarAlt className="text-pink-400" />

                      <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                      <FaMoneyBillWave className="text-green-400" />

                      <p>₹{order.totalAmount}</p>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                      <FaTruck className="text-yellow-400" />

                      <p>{order.orderStatus || "Processing"}</p>
                    </div>
                  </div>
                </div>

                {/* STATUS */}
                <div className="flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-4 rounded-2xl h-fit">
                  <FaCheckCircle />

                  <p className="font-bold">Order Confirmed</p>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="mt-10 grid gap-6">
                {order.products?.map((item) => (
                  <div
                    key={item.productId?._id}
                    className="bg-black/30 border border-white/10 rounded-3xl p-5 flex flex-col md:flex-row gap-6"
                  >
                    {/* IMAGE */}
                    <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-center">
                      <img
                        src={item.productId?.imageUrl}
                        alt={item.productId?.name}
                        className="w-36 h-36 object-contain"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <span className="uppercase tracking-[4px] text-pink-400 text-xs font-semibold">
                          Premium Beauty
                        </span>

                        <h3 className="text-3xl font-bold text-white mt-3">
                          {item.productId?.name}
                        </h3>

                        <p className="text-gray-400 mt-4 leading-relaxed">
                          Luxury skincare designed for glowing, healthy, and
                          radiant skin.
                        </p>
                      </div>

                      {/* PRICE */}
                      <div className="flex flex-wrap items-center justify-between gap-5 mt-8">
                        <div className="flex items-center gap-6">
                          <h2 className="text-4xl font-extrabold text-white">
                            ₹{item.productId?.price}
                          </h2>

                          <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-bold">
                            Qty : {item.quantity}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 bg-yellow-500/20 text-yellow-400 px-5 py-3 rounded-2xl">
                          <FaClock />

                          <p className="font-semibold">Delivery Soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ADDRESS */}
              <div className="mt-10 bg-black/30 border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Shipping Address
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {order.shippingAddress}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistory;
