import React, { useState } from "react";
import { Link } from "react-router-dom";
import podcast from "./PdcastDetailData.json";

const PodcastSpotlight = () => {
  const [data] = useState(podcast);

  return (
    <div className="w-screen  bg-cover bg-no-repeat " style={{ backgroundImage:"url(/assets/svg1.svg)"}} >

   <div className="text-black text-4xl font-bold text-center p-8" >
Featured Video
   </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[99%]   gap-6 p-11 m-auto  mt-2">
      {data.map((item) => (
        <Link
          to={`/podcast/podcastDetail/${item.id}`}
          key={item.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300"
          data-aos="flip-right"
        >
          <div className="relative h-48"> {/* Adjusted height */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
              <span className="text-sm">{item.duration}</span> {/* Right side */}
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default PodcastSpotlight;
