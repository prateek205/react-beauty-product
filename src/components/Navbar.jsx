import { Link, NavLink } from "react-router-dom";
import { MyAuth } from "../context/UserContextProvider";
import { MyCart } from "../context/CartContext";
import {
  FaSearch,
  FaShoppingBag,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  const { user, handleLogout } = MyAuth();
  const { cart } = MyCart();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link to="/">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent tracking-wide">
            BloomSkin
          </h1>
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700 dark:text-gray-200">
          {["/", "/product", "/about", "/contact"].map((path, index) => {
            const labels = ["Home", "Product", "About", "Contact"];

            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative transition duration-300 hover:text-pink-500 ${
                      isActive ? "text-pink-500" : ""
                    }`
                  }
                >
                  {labels[index]}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 transition-all duration-300 hover:w-full"></span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-5">
          {/* SEARCH */}
          <div className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 shadow-inner">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm w-48 text-gray-700 dark:text-white placeholder:text-gray-400"
            />

            <FaSearch className="text-pink-500 cursor-pointer" />
          </div>

          {/* CART */}
          <Link
            to="/cart"
            className="relative p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-pink-500 hover:text-white transition duration-300"
          >
            <FaShoppingBag className="text-xl" />

            <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold shadow-md">
              {cart.length}
            </span>
          </Link>

          {/* LOGIN / PROFILE */}
          {!user ? (
            <Link
              to="/login"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-yellow-500 hover:text-white transition duration-300"
            >
              <FaSignInAlt className="text-xl" />
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              {/* PROFILE */}
              <Link
                to="/my_profile"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-pink-500 hover:text-white transition duration-300"
              >
                <FaUser className="text-xl" />
              </Link>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-500 hover:text-white transition duration-300"
              >
                <FaSignOutAlt className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;