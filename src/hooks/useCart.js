import axios from "axios";
import { useEffect, useState } from "react";

const useCart = (url) => {
  const [cart, setCart] = useState([]);

  //   ADD TO CART

  const addToCart = async (product, userId) => {
    console.log(product);
    console.log(userId);

    try {
      const res = await axios.post(url, {
        userId,
        productId: product._id,
        quantity: 1,
      });
      console.log(res.data.cart);
      console.log("addtocart:", res.data);

      return res.data;
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  //   UPDATE CART ITEM
  const updateCart = async (id, updateCartItem) => {
    try {
      const res = await axios.put(`${url}/${id}`, updateCartItem);

      setCart((prev) =>
        prev.map((item) => (item._id === id ? res.data : item)),
      );
      // console.log("data update", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   DELETE CART DATA
  const deleteCart = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);

      setCart((prev) => prev.filter((item) => item._id !== id));
      // console.log("data delete", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { cart, setCart, addToCart, updateCart, deleteCart };
};

export default useCart;
