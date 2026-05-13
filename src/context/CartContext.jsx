// import { createContext, useContext, useEffect } from "react";
// import useCart from "../hooks/useCart";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const { cart, addToCart, updateCart, deleteCart } = useCart(
//     "https://e-commerce-backend-5q60.onrender.com/api/v1/user/carts",
//   );

//   // ADD TO LOCAL STORAGE

//   const addTolocal = async () => {
//     const savedCart = localStorage.getItem("cart");

//     return;
//   };

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(cart));
//   }, [cart]);

//   //   HANDLE ADD-TO-CART

//   const handleCart = (product) => {
//     const itemExist = cart.find((item) => item.id === product.id);

//     if (itemExist) {
//       const updateCart = cart.map((item) =>
//         item.id === product.id ? { ...product, quantity: quantity + 1 } : item,
//       );
//       setCart(updateCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   //   INCREASE QTY
//   const increaseQty = (id) => {
//     const updateCart = cart.map((item) =>
//       item.id === product.id ? { ...product, quantity: quantity + 1 } : item,
//     );
//     setCart(updateCart);
//   };

//   //   DECREASE QTY
//   const decreaseQty = (id) => {
//     const updateCart = cart.map((item) =>
//       item.id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item,
//     );
//     setCart(updateCart);
//   };

//   //   REMOVE ITEM
//   const removeItem = (id) => {
//     const filterCart = cart.filter((item) => item.id !== id);

//     setCart(filterCart);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         handleCart,
//         increaseQty,
//         decreaseQty,
//         removeItem,
//         updateCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const MyCart = () => useContext(CartContext);
