import React from 'react';
const StudioTour = () => {
  return (
    <div className="flex items-start justify-between p-6 bg-gray-100" data-aos="fade-right">
         {/* Image Section */}
      <div className="w-1/2 p-4">
        <img 
          src="/assets/podcastbanner.JPG" 
          alt="Spotlight" 
          className="w-full h-auto rounded-lg" 
        />
      </div>
      {/* Content Section */}
      <div className="w-1/2 p-4" data-aos="fade-right">
        <h1 className="text-2xl font-bold mb-4">STUDIO TOUR</h1>
        <p>
        Welcome to the studio of "Spotlight with Nikhil," where excellence meets innovation. Our studio is impeccably furnished with the latest high-quality cameras, microphones, and cut- ting-edge technology to ensure the highest production standards.
        </p>
        <p>
        Our dedicated team works tireless- ly behind the scenes to create an environment where conversations flourish and stories come to life, ensuring every episode is a mem- orable experience for our viewers.
        </p>
        <p>
        Our dedicated team works tireless- ly behind the scenes to create an environment where conversations flourish and stories come to life, ensuring every episode is a mem- orable experience for our viewers.
        </p>
      </div>
     
    </div>
  );
};

export default StudioTour;
