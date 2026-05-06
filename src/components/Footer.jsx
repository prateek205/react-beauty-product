import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex item-start justify-around p-5 bg-gray-800">
        <div className="text-white flex flex-col gap-5">
          <h2 className="text-4xl font-cursive3 capitalize">bloomskin</h2>
          <ul className="flex flex-col gap-3">
            <li>📱 +91-9404557931</li>
            <li>📧 prateekbahad@gmail.com</li>
          </ul>
        </div>
        <div className="text-white flex flex-col gap-3">
          <h2 className="text-2xl capitalize text-white">links</h2>
          <ul className="flex flex-col gap-3">
            <li className="capitalize text-gray-400 hover:text-white">
              <Link to="/">home</Link>{" "}
            </li>
            <li className="capitalize text-gray-400 hover:text-white">
              <Link to="/about">about</Link>{" "}
            </li>
            <li className="capitalize text-gray-400 hover:text-white">
              <Link to="/product">product</Link>{" "}
            </li>
            <li className="capitalize text-gray-400 hover:text-white">
              <Link to="/contact">contact</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl capitalize text-white">
            subcribe to our newsletter
          </h2>
          <div className="flex gap-2">
            <input
              className="py-1 px-2 rounded-md bg-gray-800 border border-gray-600 w-full text-white outline-none"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="bg-blue-400 px-2 py-1 text-lg rounded-md hover:bg-blue-300 hover:text-white">
              Subcribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] bg-gray-500"></div>
      <div className="flex items-center justify-between bg-gray-800 p-5">
        <div>
          <p className="text-white">
            {" "}
            @2026 BloomSkin, Inc. All rights reserved
          </p>
        </div>
        <div className="text-gray-400 flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/prateek-bahad-a1b985167"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin hover:text-white"></i>
          </a>
          <a href="https://github.com/prateek205" target="_blank">
            <i className="fa-brands fa-github hover:text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
