import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#194E82] to-blue-600 py-10 flex justify-center flex-col ">
      <h1 className="text-3xl font-bold mb-4 text-center">
        <span className="text-white font-bold">Spotlight with Nikhil</span>
      </h1>
      <div className="flex justify-between items-center w-[90%] m-auto">
        <div className="w-[50%] flex flex-row">
          <div className="flex flex-col gap-4 list-none text-xl text-white m-auto ">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </div>
          <div className="flex flex-col gap-2 list-none text-xl text-white m-auto ">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </div>
        </div>

        <div className="flex item-center m-auto  w-[50%]">
          <div className="flex flex-col items-end gap-4 list-none text-xl text-white m-auto ">
            <li>+91 91983 50992</li>
            <li>Info@spotlightwithnikhil.in</li>
            <li className="w-[50%] text-end">
              117/H, 1606, Near J.K. Temple, Model Town, Pandu Nagar, Kanpur,
              Uttar Pradesh 208005
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
