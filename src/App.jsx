import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Product/Products";
import Order from "./pages/Order/Order";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import ProductDetails from "./pages/Product/ProductDetails";
import ProtectedRoute from "./pages/User/ProtectedRoute";
import My_Profile from "./pages/User/My_Profile";
import Cart from "./pages/Order/Cart";
import { ToastContainer } from "react-toastify";
import OrderHistory from "./pages/Order/OrderHistory";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1500} theme="dark" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route
          path="/my_profile"
          element={
            <ProtectedRoute>
              <My_Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* <AddProducts /> */}
      <Footer />
    </>
  );
};

export default App;
