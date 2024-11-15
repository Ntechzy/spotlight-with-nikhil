import React, { useState } from "react";
import { Link } from "react-router-dom";
import podcast from "./Podcast.json";

const PodcastSpotlight = () => {
  const [data] = useState(podcast);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-[#194E82] mt-2">
      {data.map((item) => (
        <Link
          to={`/podcast/podcastDetail/${item.id}`}
          key={item.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300"
          data-aos="flip-right"
        >
          <div className="relative h-64">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <span>{item.duration}</span>
              <h2 className="font-bold text-xl">{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PodcastSpotlight;
