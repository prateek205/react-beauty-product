import { useParams } from "react-router-dom";
import { databased } from "../../db.js";

const ProductDetails = () => {
  const { id } = useParams();
  const products = databased[id];

  return (
    <section className="h-screen bg-gray-300 flex items-start justify-center gap-2 py-2 px-3">
      <div className="w-1/2 h-full flex items-center justify-center p-5 bg-white">
        <img
          src={products.image}
          alt={products.name}
          className="w-full h-full object-cover p-5"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex flex-col gap-5 py-2 px-4">
        <h1 className="text-2xl font-bold">{products.name}</h1>
        <div className="flex items-center justify-start gap-5">
          <p className="text-gray-400 font-semi-bold text-xl line-through">
            {products.originalPrice}/-
          </p>
          <p className="text-black text-2xl font-bold">{products.price}/-</p>
          <p className="text-green-500 font-bold text-xl">
            {products.discount} off
          </p>
        </div>
        <div>
          <p className="text-black text-xl font-bold">
            Stock:
            <span
              className={`text-xl font-bold ${products.inStock === "Out of Stock" ? "text-red-500" : products.inStock.toLowerCase().includes("only") ? "text-orange-500" : "text-green-500"}`}
            >
              {products.inStock}
            </span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="hover:translate-y-0.5 duration-200 rounded-md py-1 px-3 text-lg font-bold bg-orange-500 hover:bg-orange-400 hover:text-white">
            Add to Cart
          </button>
          <button className="hover:translate-y-0.5 duration-200 rounded-md py-1 px-3 text-lg font-bold bg-yellow-400 hover:bg-yellow-400 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
