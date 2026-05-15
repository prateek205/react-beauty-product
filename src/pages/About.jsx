import React from "react";
import {
  FaLeaf,
  FaSpa,
  FaRecycle,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-black dark:via-gray-900 dark:to-pink-950 py-20 px-5 md:px-12">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          
          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl border border-white/20">
            <img
              src="/images/about-image-3.jpg"
              alt="BloomSkin"
              className="w-full lg:w-[500px] h-[650px] object-cover hover:scale-105 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-5 rounded-3xl shadow-xl text-center">
              <h2 className="text-3xl font-bold text-white">
                BloomSkin
              </h2>

              <p className="text-pink-200 mt-1">
                Natural Beauty & Healthy Skin
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-8">
          
          {/* HEADING */}
          <div className="flex flex-col gap-4">
            <span className="uppercase tracking-[5px] text-pink-500 font-semibold">
              About Us
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Glow Naturally <br />
              With BloomSkin
            </h1>

            <div className="w-28 h-1 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full"></div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            At BloomSkin, we believe true beauty begins with healthy,
            radiant skin. Our skincare products are crafted using
            premium natural ingredients that deeply nourish, hydrate,
            and enhance your natural glow.

            <br />
            <br />

            Every formula is designed to be gentle yet effective,
            suitable for every skin type. We combine nature,
            innovation, and self-care to help you feel confident and
            beautiful every day.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:-translate-y-1 transition duration-300">
              <FaLeaf className="text-3xl text-green-500" />

              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Natural Ingredients
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Crafted with pure botanical extracts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:-translate-y-1 transition duration-300">
              <FaHeart className="text-3xl text-pink-500" />

              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Cruelty Free
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ethical skincare with no animal testing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:-translate-y-1 transition duration-300">
              <FaSpa className="text-3xl text-yellow-500" />

              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Deep Hydration
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Keeps your skin soft and nourished.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:-translate-y-1 transition duration-300">
              <FaRecycle className="text-3xl text-blue-500" />

              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Eco Friendly
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Sustainable packaging for a greener planet.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className="w-fit flex items-center gap-3 bg-gradient-to-r from-pink-500 to-yellow-400 hover:scale-105 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition duration-300">
            <FaCheckCircle />
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;