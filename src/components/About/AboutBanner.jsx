import React from 'react';

const Banner = ({CapitalPagename,pagename}) => {
  return (
    <div
      className="relative w-full h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/image-photo/smiling-brunette-female-doctor-talking-600nw-2323460383.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-2">{CapitalPagename}</h1>
        <div className="flex items-center justify-center text-gray-600 text-sm">
          <span className="mr-2">🏠</span>
          <span className="text-blue-600">Home</span> 
          <span className="mx-1">/</span>
          <span>{pagename}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;