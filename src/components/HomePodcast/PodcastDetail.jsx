import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioData_spotlight from './PortfolioData_spotlight.json';

const PodcastDetail = () => {
  const { id } = useParams();
  const item = portfolioData_spotlight.find(p => p.id === parseInt(id));

  if (!item) {
    return <div className="text-white font-bold text-center text-[30px] md:text-[100px]">Portfolio item not found in Services</div>;
  }

  return (
    <div className="p-4 mt-[-90px] flex flex-col  md:flex-row items-center min-h-screen bg-gray-900 text-white gap-5">
      <div className="w-full md:w-1/2 lg:w-[400px] p-4">
        <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg shadow-lg" data-aos="flip-right"/>
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col items-start" data-aos="flip-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{item.title}</h1>
        <p className="text-gray-300 mb-6">{item.description}</p>
      
        <div className="flex flex-wrap gap-4">
         
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;