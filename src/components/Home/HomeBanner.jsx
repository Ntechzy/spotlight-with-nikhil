import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import AOS from "aos"; // Import AOS


const HomeBanner = ({ title, description, image, btn }) => {
  // Initialize AOS on component mount
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200, // Animation duration
  //     once: true, // Trigger animation only once
  //     easing: 'ease-in-out', // Easing function
  //   });
  // }, []);

  return (
    <div
      className="relative w-full md:h-screen h-[80vh] bg-cover  z-10 md:bg-contain bg-no-repeat bg-center bg-[#050505] p-5"
      style={{ backgroundImage: `url("${image}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative flex items-center flex-col pt-36 h-full gap-4">
        {/* Title with AOS Animation */}
        <h1 
          className="text-white md:text-6xl md:font-bold text-4xl font-semibold " 
          data-aos="fade-up"
        >
          {title}
        </h1>

        {/* Description with AOS Animation */}
        <p 
          className="text-white md:text-4xl md:font-bold w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] text-center text-2xl" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {description}
        </p>

        {/* Button with AOS Animation */}
        <button 
          className="bg-[#194E82] text-white md:font-bold md:py-3 md:px-6 p-3 rounded-lg md:mt-4 mt-2" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
         <Link to="/podcast">{btn}</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
