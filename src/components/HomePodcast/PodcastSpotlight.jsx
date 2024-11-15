import React, { useState } from "react";
import { Link } from "react-router-dom";
import podcast from "./Podcast.json";

const PodcastSpotlight = () => {
  const [data] = useState(podcast);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data.map((item) => (
        <Link
          to={`/portfolio/SpotlightWithNikhil/${item.id}`}
          key={item.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300" data-aos="flip-right"
        >
          <div className="p-4 relative h-64"> {/* Ensure the parent div has a set height */}
            <h2 className="font-bold text-xl mb-2">{item.title}</h2>
            <iframe
              src={item.link}
              title={item.title}
              className="absolute top-0 left-0 w-full h-full" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PodcastSpotlight;