import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyAuth } from "../../context/UserContextProvider";

function Register() {
  const {
    handleRegister,
    formData,
    setFormData,
    errors,
    setErrors,
    showPass,
    setShowPass,
  } = MyAuth();

  return (
    <section className="flex items-center justify-center h-screen bg-pink-200">
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-8 shadow-lg shadow-pink-500 rounded-md bg-white h-70 w-1/5 py-3 px-4"
      >
        <h1 className="text-center text-2xl font-cursive3 font-bold">
          Register
        </h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="outline-none py-1 px-2 rounded-md shadow-lg shadow-gray-500"
        />
        {errors.name && (
          <p className="text-red-500 font-bold text-sm">{errors.name}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="outline-none py-1 px-2 rounded-md shadow-lg shadow-gray-500"
        />
        {errors.email && (
          <p className="text-red-500 font-bold text-sm">{errors.email}</p>
        )}
        <div className="relative w-full">
          <input
            type={showPass ? "password" : "text"}
            className="w-full py-1 px-2 outline-none rounded-md shadow-lg shadow-gray-500"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
        {errors.password && (
          <p className="text-red-500 font-bold text-sm">{errors.password}</p>
        )}
        <button className="shadow-lg shadow-pink-300 hover:bg-pink-400 hover:text-black rounded-md px-2 py-1 bg-gray-400 text-white w-50 m-auto">
          Register
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-500 cursor-pointer font-bold hover:text-blue-400">
              Sign-In
            </span>
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
