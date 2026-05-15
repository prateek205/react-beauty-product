import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaLeaf,
  FaHeart,
  FaSpa,
} from "react-icons/fa";
import { MyAuth } from "../../context/UserContextProvider";

function Register() {
  const {
    handleRegister,
    formData,
    setFormData,
    errors,
    showPass,
    setShowPass,
  } = MyAuth();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-5 py-10">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/login-image.png"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-2xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)] grid lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center relative p-14 bg-gradient-to-br from-pink-500/20 to-purple-500/10">
          {/* IMAGE */}
          <img
            src="/images/login-image.png"
            alt="beauty"
            className="w-[450px] mx-auto drop-shadow-[0_20px_60px_rgba(255,255,255,0.25)]"
          />

          {/* TEXT */}
          <div className="text-center mt-10">
            <h1 className="text-6xl font-extrabold text-white leading-tight">
              Join <span className="text-pink-400">BloomSkin</span>
            </h1>

            <p className="text-pink-200 text-lg mt-5 max-w-lg mx-auto">
              Create your account and unlock premium skincare, exclusive beauty
              collections, and personalized shopping.
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-3 gap-5 mt-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:bg-white/10 transition duration-300">
              <FaLeaf className="mx-auto text-3xl text-green-400 mb-3" />

              <p className="text-white font-semibold">Natural Care</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:bg-white/10 transition duration-300">
              <FaHeart className="mx-auto text-3xl text-pink-400 mb-3" />

              <p className="text-white font-semibold">Self Love</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center hover:bg-white/10 transition duration-300">
              <FaSpa className="mx-auto text-3xl text-yellow-400 mb-3" />

              <p className="text-white font-semibold">Glow Daily</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          {/* HEADER */}
          <div className="mb-12">
            <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
              Create Account
            </span>

            <h2 className="text-5xl font-extrabold text-white mt-4">
              Register Now
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-5"></div>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="flex flex-col gap-6">
            {/* NAME */}
            <div>
              <div className="relative">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
                />
              </div>

              {errors.name && (
                <p className="text-red-400 text-sm mt-2 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <div className="relative">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-sm mt-2 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <div className="relative">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

                <input
                  type={showPass ? "password" : "text"}
                  placeholder="Create password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-14 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-pink-400"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-2 font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] text-white py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300 mt-3">
              Create Account
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-gray-400 text-center mt-10 text-lg">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-pink-400 font-bold hover:text-pink-300 transition">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
