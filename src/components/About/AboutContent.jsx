import React from 'react';
const AboutContent = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-100" data-aos="fade-up">
      {/* Content Section */}
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Spotlight with Nikhil</h1>
        <p>
          We bridge the gap between the public and decision-makers, bringing you insights and answers
          straight from those who shape policy and influence change and inspire youth. As we explore
          pressing issues, seek clarity, and empower dialogue that matter. Content here.
        </p>
      </div>
      {/* Image Section */}
      <div className="w-1/2 p-4">
        <img 
          src="/assets/podcastbanner.JPG" 
          alt="Spotlight" 
          className="w-full h-auto rounded-lg" 
        />
      </div>
    </div>
  );
};

export default AboutContent;
