import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PodcastDetail = ({ podcast }) => {
  const [likes,setLikes] = useState(8778  );
  if (!podcast) {
    return <div className="text-red-500">Podcast not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="670"
          height="315"
          src={podcast.iframeUrl || "https://www.youtube.com/embed/HRt3hHysY_U"} // Use the iframeUrl from the podcast or a default one
          title={`${podcast.title} - YouTube video player`} // Use dynamic title for better accessibility
          frameBorder="0" // Corrected to camelCase
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen // Corrected to camelCase
        />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{podcast.title}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-2">{podcast.author}</span>
          <span className="mx-1">•</span>
          <span>{new Date(podcast.date).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-800 mb-4">{podcast.description}</p>
        
        <div className="mb-4">
          <span className="text-gray-600 font-semibold">Tags: </span>
          {podcast.tags.map((tag, index) => (
            <span key={index} className="text-blue-500 hover:underline mr-2">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
       
            <Link to="https://www.youtube.com/@SpotlightwithNikhil" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700" target="_blank">Subscribe</Link>
          
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400" onClick={() => setLikes(likes + 1)}>
            👍 Like {likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
