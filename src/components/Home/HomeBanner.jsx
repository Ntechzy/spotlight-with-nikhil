import React from "react";

const HomeBanner = ({title,description,image,btn}) => {
  return (
    <div
      className="relative w-full h-screen z-[999] bg-contain  bg-no-repeat bg-center bg-[#050505]"
      style={{ backgroundImage: 'url("' + image + '")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center flex-col pt-36 h-full gap-4">
        <h1 className="text-white text-6xl font-bold">{title}</h1>
        <p className="text-white text-4xl font-bold w-[60%] text-center">{description}</p>
        <button className="bg-[#194E82] text-white font-bold py-2 px-4 rounded">{btn}</button>
      </div>
    </div>
  );
};

export default HomeBanner;
