import React, { useRef, useState, useEffect } from 'react';
import { FaBackward, FaForward, FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const AudioSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Initialize AOS on component mount


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
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };

  // Function to handle forward seek
  const seekForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };

  // Update current time and duration
  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateCurrentTime);
    }

    // Cleanup function to remove event listener
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
      }
    };
  }, [audioRef]);

  // Function to handle progress bar click
  const handleProgressClick = (e) => {
    const progressBar = e.target;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const newTime = (clickX / progressBarWidth) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="flex flex-col items-center p-11 bg-[#194E82] shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-white" data-aos="fade-up">
        Spotlight with Nikhil Sachan
      </h2>

      {/* Main content flex container */}
      <div className="flex flex-row w-full items-center" data-aos="fade-up" data-aos-delay="200">
        
        {/* Image Section */}
        <img 
          src="/assets/podcastbanner.JPG" // Replace with your image URL
          alt="Audio Visual"
          className="w-[30%] h-48 object-cover rounded-md m-auto"
          data-aos="fade-right"
          data-aos-delay="300"
        />

        {/* Audio Player Controls Section */}
        <div className="flex flex-col w-1/2 items-center ml-4" data-aos="fade-left" data-aos-delay="400">
          {/* Custom Progress Bar */}
          <div className="w-full mb-4">
            <div className="h-2 bg-gray-300 rounded-lg cursor-pointer" onClick={handleProgressClick}>
              <div
                className="absolute bg-blue-500  rounded-lg transition-all duration-300 h-[8px]"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            {/* Time Display */}
            <div className="flex justify-between text-sm w-full mt-1 text-white">
              <span>{Math.floor(currentTime)}s</span>
              <span>{Math.floor(duration)}s</span>
            </div>
          </div>

          <div className='flex flex-row gap-32 w-full items-center'>
            {/* Song Title and Author */}
            <div className="text-center mb-4">
              <h3 className="font-semibold text-xl text-white">Spotlights Here</h3>
              <p className="text-lg text-white">by Nikhil Sachan</p>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center space-x-4 mb-2 text-2xl">
              <button 
                onClick={seekBackward} 
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <FaBackward />
              </button>
              <button 
                onClick={togglePlay} 
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
              </button>
              <button 
                onClick={seekForward} 
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <FaForward />
              </button>
            </div>

            {/* View More Episodes Link */}
            <a href="/episodes" className="mt-2 text-white hover:underline text-lg" data-aos="fade-up" data-aos-delay="800">
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
