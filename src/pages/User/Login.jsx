import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";
import { MyAuth } from "../../context/UserContextProvider";

const Login = () => {
  const { login, setEmail, setPassword, showPass, setShowPass } = MyAuth();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-5 py-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/login-image.png"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-xl"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-6xl bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)] grid lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center items-center relative bg-gradient-to-br from-pink-500/20 to-purple-500/10 p-14">
          {/* IMAGE */}
          <img
            src="/images/login-image.png"
            alt="beauty"
            className="w-[420px] drop-shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
          />

          {/* TEXT */}
          <div className="text-center mt-10">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              Welcome Back
            </h1>

            <p className="text-pink-200 text-lg mt-4 max-w-md">
              Experience luxury skincare and beauty products with BloomSkin.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">
          {/* HEADER */}
          <div className="mb-12">
            <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
              Sign In
            </span>

            <h2 className="text-5xl font-extrabold text-white mt-4">
              Login Account
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-5"></div>
          </div>

          {/* FORM */}
          <form onSubmit={login} className="flex flex-col gap-7">
            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg" />

              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-5 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg" />

              <input
                type={showPass ? "password" : "text"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-14 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-pink-400 text-lg cursor-pointer"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Remember me
              </label>

              <p className="text-pink-400 hover:text-pink-300 cursor-pointer transition">
                Forgot Password?
              </p>
            </div>

            {/* BUTTON */}
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] text-white py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300">
              Sign In
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-gray-400 text-center mt-10 text-lg">
            Don’t have an account?{" "}
            <Link to="/register">
              <span className="text-pink-400 font-bold hover:text-pink-300 transition">
                Create Account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
