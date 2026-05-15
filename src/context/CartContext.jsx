import { createContext, useContext, useEffect } from "react";
import useCart from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { cart, setCart, addToCart, updateCart, deleteCart } = useCart(
    "https://e-commerce-backend-5q60.onrender.com/api/v1/user/cart/add/:id",
  );

  const navigate = useNavigate();

  // ADD TO LOCAL STORAGE

  const addTolocal = async () => {
    const savedCart = localStorage.getItem("cart");

    return;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //   HANDLE ADD-TO-CART

  const handleCart = async (product) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    const itemExist = cart.find((item) => item.productId === product._id);

    if (itemExist) {
      const updateCart = cart.map((item) =>
        item.productId === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCart(updateCart);
    } else {
      const savedCart = await addToCart(product, user._id);

      if (!savedCart) return;

      setCart(savedCart.items);
    }
    navigate("/cart");
  };

  //   INCREASE QTY
  const increaseQty = (id) => {
    const updateCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updateCart);
  };

  //   DECREASE QTY
  const decreaseQty = (id) => {
    const updateCart = cart.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCart(updateCart);
  };

  //   REMOVE ITEM
  const removeItem = (id) => {
    const filterCart = cart.filter((item) => item._id !== id);

    setCart(filterCart);
  };

  //   TOTAL PRICE

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleCart,
        increaseQty,
        decreaseQty,
        removeItem,
        updateCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const MyCart = () => useContext(CartContext);
