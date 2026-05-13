import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  return (
    <section className="flex w-full">
      <div className="flex">
        <div className="w-1/2 h-1/2">
          <img
            src="/face-wash.webp"
            alt=""
            className="object-contain w-80 h-80"
          />
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <h1>
              Face-washGARNIER Bright Complete VITAMIN C , 150g (Pack of
              2)|Brighter and Glowing Skin Face Wash (300 g)
            </h1>
            <div className="flex items-center gap-5">
              <p className="text-lg font-bold">₹404</p>
              <p className="text-sm line-through text-gray-500">₹698</p>
              <p className="text-lg text-green-500 font-bold">₹42%</p>
            </div>
            <div className="flex items-center gap-5">
              <button>
                <FaMinus />
              </button>
              <p>0</p>
              <button>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
