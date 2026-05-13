// import axios from "axios";
// import { useEffect, useState } from "react";

// const useCart = (url) => {
//   const [cart, setCart] = useState([]);

//   // GET CART

//   const fetchCartData = async () => {
//     try {
//       const res = await axios.get(url);
//       const data = res.data;

//       setCart(data);
//       console.log("Get Data:", data);
//     } catch (error) {
//       console.log("fetch error", error);
//     }
//   };

//   useEffect(() => {
//     fetchCartData();
//   }, [url]);

//   //   ADD TO CART

//   const addToCart = async (product) => {
//     try {
//       const res = await axios.post(url, {
//         ...product,
//         quantity: 1,
//       });

//       setCart((prev) => [...prev, res.data]);
//       console.log("addtocart:", res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //   UPDATE CART ITEM
//   const updateCart = async (id, updateCartItem) => {
//     try {
//       const res = await axios.put(`${url}/${id}`, updateCartItem);

//       setCart((prev) => prev.map((item) => (item.id === id ? res.data : item)));
//       console.log("data update", res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //   DELETE CART DATA
//   const deleteCart = async (id) => {
//     try {
//       await axios.delete(`${url}/${id}`);

//       setCart((prev) => prev.filter((item) => item.id !== id));
//       console.log("data delete", res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return { cart, setCart, addToCart, updateCart, deleteCart };
// };

// export default useCart;
