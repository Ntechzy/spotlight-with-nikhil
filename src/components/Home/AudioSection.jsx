import React, { useRef, useState, useEffect } from 'react';
import { FaBackward, FaForward, FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const AudioSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Function to handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to handle backward seek
  const seekBackward = () => {
    audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
  };

  // Function to handle forward seek
  const seekForward = () => {
    audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
  };

  // Update current time and duration
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    };

    audioRef.current.addEventListener('timeupdate', updateCurrentTime);
    return () => {
      audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, [audioRef]);

  // Function to handle progress bar click
  const handleProgressClick = (e) => {
    const progressBar = e.target;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const newTime = (clickX / progressBarWidth) * duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="flex flex-col items-center p-11 bg-[#194E82] shadow-md">
      <h2 className="md:text-2xl text-xl font-bold mb-4 text-center text-white">Spotlight with Nikhil Sachan</h2>
      
      {/* Main content flex container */}
      <div className="md:flex md:flex-row flex flex-col w-full items-center">
        
        {/* Image Section */}
        <img 
          src="/assets/podcastbanner.JPG" // Replace with your image URL
          alt="Audio Visual"
          className="md:w-[30%] h-48 object-cover rounded-md m-auto"
        />

        {/* Audio Player Controls Section */}
        <div className="flex flex-col md:w-1/2 w-full mt-7 items-center ml-4">
          {/* Custom Progress Bar */}
          <div className="md:w-full w-[90%]  mb-4">
            <div className="h-2 bg-gray-300 rounded-lg cursor-pointer relative" onClick={handleProgressClick}>
              <div
                className="absolute bg-blue-500 h-full rounded-lg transition-all duration-300"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            {/* Time Display */}
            <div className="flex justify-between text-sm w-full md:mt-1 text-white">
              <span>{Math.floor(currentTime)}s</span>
              <span>{Math.floor(duration)}s</span>
            </div>
          </div>

         <div className='md:flex md:flex-row flex flex-col md:items-center md:gap-32 w-full items-center'>
           {/* Song Title and Author */}
           <div className="text-center mb-4">
            <h3 className=" font-semibold text-xl text-white">Spotlights Here</h3>
            <p className="text-lg text-white">by Nikhil Sachan</p>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center space-x-4 mb-2 text-2xl">
            <button onClick={seekBackward} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              <FaBackward />
            </button>
            <button onClick={togglePlay} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
            </button>
            <button onClick={seekForward} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              <FaForward />
            </button>
          </div>
           {/* View More Episodes Link */}
           <a href="/episodes" className="mt-2 text-white hover:underline text-lg">
             More Episodes &rarr;
          </a>
         </div>

         
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src="/assets/audio.mp3" preload="metadata" />
    </div>
  );
};

export default AudioSection;
