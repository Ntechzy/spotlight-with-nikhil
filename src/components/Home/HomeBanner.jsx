import React, { useEffect } from "react";
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
      className="relative w-full h-screen z-[999] bg-contain bg-no-repeat bg-center bg-[#050505]"
      style={{ backgroundImage: `url("${image}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative flex items-center flex-col pt-36 h-full gap-4">
        {/* Title with AOS Animation */}
        <h1 
          className="text-white text-6xl font-bold" 
          data-aos="fade-up"
        >
          {title}
        </h1>

        {/* Description with AOS Animation */}
        <p 
          className="text-white text-4xl font-bold w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] text-center" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {description}
        </p>

        {/* Button with AOS Animation */}
        <button 
          className="bg-[#194E82] text-white font-bold py-3 px-6 rounded-lg mt-4" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
