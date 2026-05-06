import React from "react";
import { tracker } from "../db";
import Chart from "../components/Charts";
import OrdersTable from "../components/Orders";

const Dashboard = () => {
  return (
    <section className="flex w-full h-screen bg-white">
      <div className="w-64 bg-pink-600">
        <img src="/sidebar-image.avif" alt="" />
        <ul className="flex flex-col items-start px-5 py-3 gap-5 text-sm">
          <li className="hover:text-white flex items-center gap-4 cursor-pointer">
            {" "}
            <i className="fa-solid fa-home text-white text-2xl"></i> Dashboard
          </li>
          <li className="hover:text-white hover:bg-pink-600 flex items-center gap-4 cursor-pointer">
            {" "}
            <i className="fa-solid fa-box text-white text-2xl"></i> Product
          </li>
          <li className="hover:text-white hover:bg-pink-600 flex items-center gap-4 cursor-pointer">
            {" "}
            <i className="fa-solid fa-plus text-white text-2xl"></i> Add Product
          </li>
          <li className="hover:text-white hover:bg-pink-600 flex items-center gap-4 cursor-pointer">
            {" "}
            <i className="fa-solid fa-user text-white text-2xl"></i> User
          </li>
          <li className="hover:text-white hover:bg-pink-600 flex items-center gap-4 cursor-pointer">
            {" "}
            <i className="fa-solid fa-box-open text-white text-2xl"></i> Orders
          </li>
          <li className="hover:text-white hover:bg-pink-600 flex items-center gap-4 cursor-pointer">
            {" "}
            <i className="fa-solid fa-right-to-bracket text-white text-2xl"></i>{" "}
            Logout
          </li>
        </ul>
      </div>
      <div className="w-full flex-col gap-2 py-2 px-4 bg-pink-100">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semi-bold">BloomSkin Dashboard</h1>
          <ul className="flex items-center gap-5 text-2xl">
            <li>
              {" "}
              <i className="fa-regular fa-bell"></i>{" "}
            </li>
            <li>
              {" "}
              <i className="fa-regular fa-bell"></i>{" "}
            </li>
            <li>
              {" "}
              <i className="fa-regular fa-user"></i>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-evenly pt-5">
            {tracker.map((items, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col gap-3 w-64 px-4 py-5 bg-pink-200 rounded-md shadow-lg shadow-gray-200">
                    <h1 className="text-xl">{items.name}</h1>
                    <p className="text-4xl font-bold text-gray-600">
                      {items.total}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-start gap-5 justify-between">
            <Chart />
            <OrdersTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
