import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
} from "react-icons/fa";

import { MyAuth } from "../../context/UserContextProvider";

const OrderHistory = () => {
  const { user } = MyAuth();

  const [orders, setOrders] = useState([]);

  const BASE_URL =
    "https://e-commerce-backend-5q60.onrender.com/api/v1/user/order";

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${user.id}`);

      console.log("ORDER HISTORY:", res.data);

      setOrders(res.data || []);
    } catch (error) {
      console.log("ORDER HISTORY ERROR:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-pink-950 py-10 px-5 md:px-10">
      {/* HEADER */}
      <div className="mb-14">
        <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
          Recent Orders
        </span>

        <h1 className="text-5xl font-extrabold text-white mt-4">
          Order History
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          View all your recent purchases and delivery details.
        </p>
      </div>

      {/* EMPTY */}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32">
          <FaBoxOpen className="text-7xl text-pink-400 mb-6" />

          <h2 className="text-3xl text-white font-bold">No Orders Found</h2>

          <p className="text-gray-400 mt-3">
            You haven’t placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            >
              {/* TOP */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white">Order ID :</h2>

                  <p className="text-pink-400 mt-2 break-all">{order._id}</p>
                </div>

                <div className="bg-green-500/20 text-green-400 px-5 py-2 rounded-full w-fit font-semibold">
                  {order.status || "Processing"}
                </div>
              </div>

              {/* INFO */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {/* ADDRESS */}
                <div className="bg-black/30 rounded-3xl p-5 border border-white/10">
                  <FaMapMarkerAlt className="text-pink-400 text-2xl mb-4" />

                  <h3 className="text-white font-bold mb-2">
                    Shipping Address
                  </h3>

                  <p className="text-gray-400">{order.shippingAddress}</p>
                </div>

                {/* DATE */}
                <div className="bg-black/30 rounded-3xl p-5 border border-white/10">
                  <FaCalendarAlt className="text-yellow-400 text-2xl mb-4" />

                  <h3 className="text-white font-bold mb-2">Order Date</h3>

                  <p className="text-gray-400">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* TOTAL */}
                <div className="bg-black/30 rounded-3xl p-5 border border-white/10">
                  <FaRupeeSign className="text-green-400 text-2xl mb-4" />

                  <h3 className="text-white font-bold mb-2">Total Amount</h3>

                  <p className="text-gray-400 text-2xl font-bold">
                    ₹{order.totalAmount}
                  </p>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="grid md:grid-cols-2 gap-6">
                {order.items.map((item) => (
                  <div
                    key={item._id}
                    className="bg-black/30 border border-white/10 rounded-3xl p-5 flex gap-5"
                  >
                    {/* DETAILS */}
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <h2 className="text-white text-xl font-bold line-clamp-2">
                          {item.name}
                        </h2>

                        <p className="text-pink-400 mt-3">
                          Quantity : {item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <h2 className="text-3xl font-extrabold text-white">
                          ₹{item.price}
                        </h2>

                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                          Ordered
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistory;
