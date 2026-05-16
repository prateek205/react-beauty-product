import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-pink-950 text-white pt-20">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* MAIN FOOTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent">
              BloomSkin
            </h1>

            <p className="text-gray-300 leading-relaxed">
              Luxury skincare crafted with love to bring out your
              natural beauty and radiant glow every single day.
            </p>

            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-pink-400" />
                <p>+91 9404557931</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-400" />
                <p>prateekbahad@gmail.com</p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Quick Links
            </h2>

            <ul className="flex flex-col gap-4 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-pink-400 transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/product"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-pink-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Our Services
            </h2>

            <ul className="flex flex-col gap-4 text-gray-300">
              <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
                Skincare Products
              </li>

              <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
                Beauty Essentials
              </li>

              <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
                Premium Collection
              </li>

              <li className="hover:text-pink-400 transition duration-300 cursor-pointer">
                Natural Cosmetics
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Newsletter
            </h2>

            <p className="text-gray-300 mb-6">
              Subscribe to receive beauty tips, exclusive offers,
              and latest product updates.
            </p>

            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-white placeholder:text-gray-400 outline-none focus:border-pink-500 transition duration-300"
                />

                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 p-3 rounded-xl transition duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-8">
              
              <a
                href="https://www.linkedin.com/in/prateek-bahad-a1b985167"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/prateek205"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition duration-300"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-white/10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-8">
          
          <p className="text-gray-400 text-center md:text-left">
            © 2026 BloomSkin. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            Made with
            <FaHeart className="text-pink-500" />
            by Prateek Bahad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;