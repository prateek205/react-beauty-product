import axios from "axios";
import { useState } from "react";
import { MyAuth } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyProduct } from "../context/ProductContext";

export default function useCart() {
  const [cart, setCart] = useState([]);

  const { user } = MyAuth();
  const { data } = MyProduct();

  const navigate = useNavigate();

  const BASE_URL =
    "https://e-commerce-backend-5q60.onrender.com/api/v1/user/cart";

  const fetchCart = async () => {
    try {
      console.log("USER:", user);

      if (!user.id) {
        setCart([]);
        return;
      }

      const response = await axios.get(`${BASE_URL}/${user.id}`);

      console.log("CART RESPONSE:", response.data);

      setCart(response.data.items || []);
    } catch (error) {
      console.log("Fetch Cart Error:", error);
      setCart([]);
    }
  };

  const addToCart = async (data) => {
    console.log("DATA:", data);
    try {
      if (!user) {
        toast.warning("Please Login First");
        navigate("/login");
        return;
      }

      const newProduct = {
        userId: user.id,
        productId: data._id,
        quantity: 1,
      };

      console.log("NEW PRODUCT:", newProduct);

      await axios.post(`${BASE_URL}/add`, newProduct);

      navigate("/cart");

      fetchCart();
      toast.success("Item Added To Cart...");
    } catch (error) {
      toast.error("Add To Cart Error:", error);
    }
  };

  const updateCart = async (productId, quantity) => {
    try {
      await axios.put(`${BASE_URL}/update`, {
        userId: user.id,
        productId,
        quantity,
      });

      setCart((prev) =>
        prev.map((item) =>
          item.productId._id === productId ? { ...item, quantity } : item,
        ),
      );
    } catch (error) {
      console.log("Update Cart Error:", error);
    }
  };

  const removeCart = async (productId) => {
    try {
      await axios.delete(`${BASE_URL}/remove`, {
        data: {
          userId: user.id,
          productId,
        },
      });

      setCart((prev) =>
        prev.filter((item) => item.productId._id !== productId),
      );
      toast.success("Item Delete successfully....");
    } catch (error) {
      toast.error("Remove Cart Error:", error);
    }
  };

  return {
    cart,
    setCart,
    fetchCart,
    addToCart,
    updateCart,
    removeCart,
  };
}
