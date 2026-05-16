import { createContext, useContext, useEffect } from "react";

import useCart from "../hooks/useCart";
import { MyAuth } from "./UserContextProvider";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = MyAuth();

  const { cart, setCart, fetchCart, addToCart, updateCart, removeCart } =
    useCart();

  const handleCart = async (product) => {
    const existingProduct = cart.find(
      (item) => item.productId._id === product._id,
    );

    if (existingProduct) {
      incQty(product._id);
    } else {
      await addToCart(product);
    }
  };

  const incQty = async (productId) => {
    const item = cart.find((item) => item.productId._id === productId);

    if (!item) return;

    const newQty = item.quantity + 1;

    await updateCart(productId, newQty);
  };

  const decQty = async (productId) => {
    const item = cart.find((item) => item.productId._id === productId);

    if (!item) return;

    if (item.quantity <= 1) {
      await removeCart(productId);
      return;
    }

    const newQty = item.quantity - 1;

    await updateCart(productId, newQty);
  };

    // TOTAL PRICE
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + item.productId.price * item.quantity,
    0
  );

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        fetchCart,
        handleCart,
        incQty,
        decQty,
        removeCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const MyCart = () => useContext(CartContext);
