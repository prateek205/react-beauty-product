import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { MyCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, totalPrice } = MyCart();

  return (
    <section className="flex gap-5 w-full h-screen py-8 px-3">
      {cart.length === 0 ? (
        <div className="flex items-center justify-center w-full h-full">
          <h1 className="text-3xl font-bold text-gray-700">Cart is Empty</h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col py-8 overflow-y-scroll shadow-[0_0_5px_rgb(50,50,50)] h-full px-5 gap-5">
            {cart.map((item) => {
              return (
                <div
                  key={item._id}
                  className="shadow-[0_0_5px_rgb(50,50,50)] flex gap-5"
                >
                  <div className="h-full p-5">
                    <img
                      src={item.productId.imageUrl}
                      alt=""
                      className="object-contain w-60 h-60"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <div className="flex flex-col gap-5">
                      <h1 className="font-bold">{item.productId.name}</h1>
                      <div className="flex items-center gap-5">
                        <p className="text-lg font-bold">₹{item.productId.price}</p>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="flex items-center gap-5 shadow-[0_0_5px_rgb(50,50,50)] py-1 px-2 rounded-md">
                          <button
                            className="hover:text-red-400 duration-300"
                            onClick={() => decreaseQty(item._id)}
                          >
                            <FaMinus />
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            className="hover:text-green-400 duration-300"
                            onClick={() => increaseQty(item._id)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                        <div>
                          <button
                            className="text-gray-400 text-xl hover:text-red-500 duration-300"
                            onClick={() => removeItem(item._id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-1/4 h-40 shadow-[0_0_5px_rgb(50,50,50)] rounded-md flex flex-col gap-5">
            <div className="py-2 px-3 text-center">
              <h1 className="text-xl font-bold">Total Price</h1>
            </div>
            <div className="px-3 flex items-center justify-between font-bold">
              Total Amount:
              <p className="font-normal">₹{totalPrice}/-</p>{" "}
            </div>
            <button className="bg-pink-400 py-2 w-1/2 m-auto hover:bg-pink-300 duration-300 rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
