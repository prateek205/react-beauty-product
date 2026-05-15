import { useParams } from "react-router-dom";
import { databased } from "../../db.js";
import { MyProduct } from "../../context/ProductContext.jsx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MyCart } from "../../context/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = MyProduct();

  const { handleCart, increaseQty, decreaseQty, cart, setCart } = MyCart();

  const products = data.find((item) => item._id === id);
  const cartItem = cart.find((item) => item._id === products.id);

  if (!products) {
    return (
      <div className="flex items-center justify-center h-screen font-bold text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="h-screen bg-gray-300 flex items-start justify-center gap-2 py-2 px-3">
      <div className="w-1/2 h-full flex items-center justify-center p-5 bg-white">
        <img
          src={products.imageUrl}
          alt={products.name}
          className="w-full h-full object-cover p-5"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex flex-col gap-5 py-2 px-4">
        <h1 className="text-2xl font-bold">{products.name}</h1>
        <div className="flex items-center justify-start gap-5">
          <p className="text-black font-bold text-xl">{products.price}/-</p>
        </div>
        <p className="text-black text-2xl font-bold">
          Category: <span className="font-normal">{products.category}</span>
        </p>
        <div>
          <p className="text-black text-xl font-bold">
            Stock:
            <span
              className={`text-xl font-bold ${products.stock <= 0 ? "text-red-500" : products.stock <= 5 ? "text-orange-500" : "text-green-500"}`}
            >
              {products.stock <= 0
                ? "Out of Stock"
                : `${products.stock} Available`}
            </span>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => handleCart(products)}
            className="hover:translate-y-0.5 duration-200 rounded-md py-1 px-3 text-lg font-bold bg-orange-400 hover:bg-orange-300 hover:text-white"
          >
            Add to Cart
          </button>

          <button className="hover:translate-y-0.5 duration-200 rounded-md py-1 px-3 text-lg font-bold bg-yellow-400 hover:bg-yellow-300 hover:text-white">
            Buy Now
          </button>
        </div>

        <div className="flex items-center justify-between w-1/6 shadow-[0_0_5px_rgb(50,50,50)] py-3 px-2 rounded-md">
          <button
            className="hover:text-red-400 duration-300"
            onClick={() => decreaseQty(products._id)}
          >
            <FaMinus />
          </button>
          <p className="w-full text-center text-xl">{products.quantity}</p>

          <button
            className="hover:text-green-400 duration-300"
            onClick={() => increaseQty(products._id)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
