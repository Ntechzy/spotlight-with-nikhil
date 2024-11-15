import React from "react";

const HomeBanner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/podcastbanner.JPG")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center flex-col pt-36 h-full gap-4">
        <h1 className="text-white text-6xl font-bold">Let’s Start Now</h1>
        <p className="text-white text-4xl font-bold">Taking Podcast to the Next Level</p>
        <button className="bg-[#194E82] text-white font-bold py-2 px-4 rounded">Explore Now</button>
      </div>
    </div>
  );
};

export default HomeBanner;
