import React from 'react';

// ImageGrid component
const AllImages = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-16">
      {/* Loop over the images and create the grid */}
      {data.map((image, index) => (
        <div key={index} className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllImages;
