import React, { useEffect } from 'react';


const Guest = ({ profiles, title }) => {
  // Initialize AOS
 
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-semibold mb-6" data-aos="fade-down">
        {title}
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md w-80"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Adding a delay for staggered animation
          >
            {/* Circular image */}
            <div className="flex justify-center mb-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>

            <h2 className="text-xl font-bold mb-4">{profile.name}</h2>
            <p className="text-gray-700"><strong>Position:</strong> {profile.position}</p>
            <p className="text-gray-700"><strong>Address:</strong> {profile.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guest;
