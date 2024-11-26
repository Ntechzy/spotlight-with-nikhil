import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({CapitalPagename,pagename}) => {
  return (
    <div
      className="relative w-full h-96 flex items-center justify-center bg-cover bg-center" data-aos="fade-up"
      style={{
        backgroundImage: "url('/assets/podcastbanner.JPG')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 bg-white bg-opacity-90 md:rounded-lg max-w-xl text-center" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-2">{CapitalPagename}</h1>
        <div className="flex items-center justify-center text-gray-600 text-sm">
          <span className="mr-2">🏠</span>
        <Link to="/">  <span className="text-blue-600">Home</span> </Link>
          <span className="mx-1">/</span>
          <span>{pagename}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;