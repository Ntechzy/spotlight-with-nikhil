// src/App.js
import React, { useEffect, useState } from 'react';
import podcasts from './PdcastDetailData.json'; // Import the JSON data
import { useParams } from 'react-router-dom';
import PodcastDetail from './PodcastDetail';



const PodcastDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  console.log(id);
  
  const [podcast, setPodcast] = useState(null);
  
  useEffect(() => {
      // Find the podcast based on the ID
      const selectedPodcast = podcasts.find(p => p.id === parseInt(id)); // Convert id to an integer
      setPodcast(selectedPodcast);
    }, [id]);
    console.log(podcast);

  return <PodcastDetail podcast={podcast} />;
};

export default PodcastDetails;
