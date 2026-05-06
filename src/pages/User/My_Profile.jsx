import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/UserContext";

const My_Profile = () => {
  const { user, handleLogout } = useContext(MyContext);
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

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage(reader.result);

      localStorage.setItem(`profileImage_${user.id}`, reader.result);
    };
  };

  return (
    <div className="h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 tracking-wide">
        My Profile
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="bg-gradient-to-b from-pink-500 to-rose-400 text-white flex flex-col items-center justify-center gap-6 p-8">
          {image ? (
            <img
              src={image}
              alt="Preview"
              className="w-64 h-64 rounded-full border-4 border-white object-cover shadow-xl"
            />
          ) : (
            <div className="w-64 h-64 rounded-full border-4 border-white bg-pink-200 flex items-center justify-center text-2xl font-bold shadow-xl">
              No Image
            </div>
          )}

          <label className="bg-white text-pink-500 px-5 py-2 rounded-full font-semibold cursor-pointer hover:bg-pink-100 transition">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </label>
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="text-2xl font-semibold text-gray-800">
                {user?.name}
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="text-xl text-gray-700">{user?.email}</p>
            </div>

            <div className="border-b pb-4">
              <p className="text-sm text-gray-500">Password</p>
              <p className="text-xl font-semibold tracking-widest text-gray-700">
                {"•".repeat(user?.password?.length)}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default My_Profile;
