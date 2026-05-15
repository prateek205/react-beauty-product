import React, { useEffect, useState } from "react";
import {
  FaCamera,
  FaEnvelope,
  FaLock,
  FaUser,
  FaSignOutAlt,
  FaCrown,
} from "react-icons/fa";
import { MyAuth } from "../../context/UserContextProvider";

const My_Profile = () => {
  const { user, handleLogout } = MyAuth();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!user) return;

    const storeImage = localStorage.getItem(`profileImage_${user.id}`);

    if (storeImage) {
      setImage(storeImage);
    } else {
      setImage("");
    }
  }, [user]);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem(`profileImage_${user.id}`, reader.result);
    };
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-950 to-pink-950 flex items-center justify-center px-5 py-14">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"></div>

      {/* MAIN CARD */}
      <div className="relative w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] grid lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/10 p-10">
          
          {/* PREMIUM BADGE */}
          <div className="absolute top-8 left-8 flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-bold shadow-lg">
            <FaCrown />
            Premium Member
          </div>

          {/* IMAGE */}
          <div className="relative group">
            {image ? (
              <img
                src={image}
                alt="profile"
                className="w-72 h-72 rounded-full object-cover border-[6px] border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.5)]"
              />
            ) : (
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-7xl border-[6px] border-white/20 shadow-2xl">
                <FaUser />
              </div>
            )}

            {/* CAMERA BUTTON */}
            <label className="absolute bottom-5 right-5 bg-pink-500 hover:bg-pink-400 text-white p-4 rounded-full cursor-pointer shadow-xl transition duration-300 hover:scale-110">
              <FaCamera className="text-xl" />

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
            </label>
          </div>

          {/* USER NAME */}
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-bold text-white capitalize">
              {user?.name}
            </h1>

            <p className="text-pink-200 mt-2 text-lg">
              Welcome back to BloomSkin ✨
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:p-14 flex flex-col justify-between">
          
          {/* HEADER */}
          <div>
            <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
              User Profile
            </span>

            <h2 className="text-5xl font-extrabold text-white mt-3">
              Account Details
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full mt-5"></div>
          </div>

          {/* INFO CARDS */}
          <div className="mt-12 flex flex-col gap-6">
            
            {/* NAME */}
            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition duration-300">
              <div className="bg-pink-500/20 text-pink-400 p-4 rounded-2xl">
                <FaUser className="text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Full Name</p>

                <h3 className="text-2xl font-semibold text-white capitalize">
                  {user?.name}
                </h3>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition duration-300">
              <div className="bg-yellow-500/20 text-yellow-400 p-4 rounded-2xl">
                <FaEnvelope className="text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email Address</p>

                <h3 className="text-xl font-medium text-white">
                  {user?.email}
                </h3>
              </div>
            </div>

            {/* PASSWORD */}
            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition duration-300">
              <div className="bg-purple-500/20 text-purple-400 p-4 rounded-2xl">
                <FaLock className="text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Password</p>

                <h3 className="text-2xl tracking-[6px] text-white">
                  {"•".repeat(user?.password?.length || 8)}
                </h3>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleLogout}
            className="mt-10 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 hover:scale-[1.02] text-white py-4 rounded-2xl text-lg font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300"
          >
            <FaSignOutAlt />
            Logout Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default My_Profile;