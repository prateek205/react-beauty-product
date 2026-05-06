import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/UserContext";

const Login = () => {
  const { login, setEmail, setPass, showPass, setShowPass } =
    useContext(MyContext);

  return (
    <section className="flex items-center justify-center h-screen bg-pink-200">
      <form
        onSubmit={login}
        className="flex flex-col gap-8 shadow-lg shadow-pink-500 rounded-md bg-white h-70 w-1/5 py-3 px-4"
      >
        <h1 className="text-center text-2xl font-cursive3 font-bold">Login</h1>
        <input
          type="text"
          className="py-1 px-2 rounded-md shadow-lg shadow-gray-500 outline-none"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative w-full">
          <input
            type={showPass ? "password" : "text"}
            className="w-full py-1 px-2 outline-none rounded-md shadow-lg shadow-gray-500"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <p
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-1 cursor-pointer"
          >
            {showPass ? (
              <i className="fa-regular fa-eye-slash"></i>
            ) : (
              <i className="fa-regular fa-eye"></i>
            )}
          </p>
        </div>
        <button className="shadow-lg shadow-pink-300 hover:bg-pink-400 hover:text-black rounded-md px-2 py-1 bg-gray-400 text-white w-50 m-auto">
          Sign-In
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-blue-500 cursor-pointer font-bold hover:text-blue-400">
              Register
            </span>
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
