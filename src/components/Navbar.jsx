import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/UserContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(MyContext);

  return (
    <section className="flex items-center justify-around py-2 px-3 h-20 shadow-2xl shadow-red-700">
      <h1 className="text-4xl font-bold font-cursive3">BloomSkin</h1>
      <ul className="flex gap-5 font-cursive1 font-bold text-lg">
        <li className="capitalize relative underline-animation cursor-pointer ">
          <Link to="/">home</Link>
        </li>
        <li className="capitalize relative underline-animation cursor-pointer ">
          <Link to="/product">product</Link>
        </li>
        <li className="capitalize relative underline-animation cursor-pointer ">
          <Link to="/about">about</Link>
        </li>
        <li className="capitalize relative underline-animation cursor-pointer ">
          <Link to="/contact">contact</Link>
        </li>
      </ul>

      <ul className="flex items-center gap-5">
        <li className="capitalize p-1 rounded-xl flex justify-between items-center bg-gray-300 cursor-pointer ">
          <input
            type="text"
            className="bg-gray-300 py-1 px-3 rounded-md outline-none"
            placeholder="Search"
          />
          <i className="fa-solid fa-search"></i>
        </li>
        <li className="capitalize hover:underline underline-offset-8 cursor-pointer ">
          <Link to="/order">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
        {!user ? (
          <li className="capitalize hover:underline underline-offset-8 cursor-pointer ">
            <Link to="/login">
              <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
          </li>
        ) : (
          <>
            <li onClick={handleLogout}>
              <Link to="/logout">
                <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </li>
            <li>
              <Link to="/my_profile">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Navbar;
