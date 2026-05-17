import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center py-16 px-5 md:px-10">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.jpg"
          alt="contact-bg"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)] grid lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative p-10 md:p-14 flex flex-col justify-between bg-gradient-to-br from-pink-500/10 to-purple-500/10">
          {/* TOP */}
          <div>
            <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
              Contact Us
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-5 leading-tight">
              Let’s Talk <br />
              Beauty & Care
            </h1>

            <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-xl">
              We’d love to hear from you. Whether you have questions about
              skincare, orders, or beauty products — BloomSkin is always here
              for you.
            </p>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-6 mt-14">
            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-5">
              <div className="bg-pink-500/20 p-4 rounded-2xl">
                <FaPhoneAlt className="text-pink-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Phone Number</p>

                <h3 className="text-white text-xl font-semibold">
                  +91 9404557931
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-5">
              <div className="bg-purple-500/20 p-4 rounded-2xl">
                <FaEnvelope className="text-purple-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email Address</p>

                <h3 className="text-white text-xl font-semibold">
                  prateekbahad@gmail.com
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-5">
              <div className="bg-yellow-500/20 p-4 rounded-2xl">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Location</p>

                <h3 className="text-white text-xl font-semibold">
                  Chhatrapati Sambhajinagar, Maharashtra, India
                </h3>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-10">
            <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition duration-300">
              <FaInstagram className="text-xl text-white" />
            </button>

            <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black transition duration-300">
              <FaGithub className="text-xl text-white" />
            </button>

            <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 transition duration-300">
              <FaLinkedinIn className="text-xl text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          {/* HEADING */}
          <div className="mb-10">
            <span className="uppercase tracking-[5px] text-pink-400 font-semibold">
              Send Message
            </span>

            <h2 className="text-5xl font-extrabold text-white mt-4">
              Get In Touch
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-5"></div>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-6">
            {/* NAME */}
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
            />

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
            />

            {/* MESSAGE */}
            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-5 text-white placeholder:text-gray-400 outline-none resize-none focus:border-pink-500 transition duration-300"
            ></textarea>

            {/* BUTTON */}
            <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] text-white py-5 rounded-2xl text-xl font-bold shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition duration-300">
              Send Message
              <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
