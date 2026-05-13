import { Link } from "react-router-dom";
import { databased } from "../db.js";
import { MyProduct } from "../context/ProductContext.jsx";

const Hero = () => {
  const { data } = MyProduct();
  console.log(data)

  return (
    <div className="flex flex-col">
      <img src="./banner-3.jpg" alt="" />
      <div className="flex flex-col gap-8 items-center justify-center py-5 px-3 bg-gray-500">
        <h1 className="capitalize text-4xl text-white font-bold">
          product category
        </h1>
        <div className="grid grid-cols-5 gap-2">
          {data.map((item, index) => {
            return (
              <div
                key={item._id}
                className="w-full h-full p-1 rounded-sm flex flex-col gap-3 bg-white relative"
              >
                <i className="fa-regular fa-heart absolute top-1 right-2 text-lg text-gray-500 cursor-pointer"></i>
                <div className="object-contain w-full h-full p-6">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="transition ease-in-out delay-20 hover:scale-90"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Link to={`/product/${item._id}`}>
                    <h2 className="text-sm">{item.name}</h2>
                  </Link>
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-xl line-through text-gray-400">
                      {item.price}/-{" "}
                    </p>
                  </div>
                  <div className="text-black font-bold text-xl">
                    {item.stock}
                  </div>{" "}
                  <div className="text-green-500 font-bold">
                    {item.category}
                  </div>{" "}
                  <button className="w-full capitalize text-xl bg-yellow-600 py-1 px-3 hover:bg-yellow-500 hover:text-white cursor-pointer font-bold rounded-sm">
                    add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img src="./banner-2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
