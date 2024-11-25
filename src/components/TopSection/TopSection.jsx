import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const TopSection = () => {
  return (
    <div className="bg-[#194E82] text-white p-2  flex-row w-[100%] m-auto md:block hidden">
      <div className="container  flex flex-row justify-between items-center">
        {/* Contact Info Section */}
        <div className="flex flex-row gap-9">
          <p className="">Monday - Saturday: 10:00 am - 8:00 pm</p>
          <p className="">Email: info@gmail.com</p>
        </div>

        <div className='flex flex-row gap-9'>
            {/* Links Section */}
        <div className=" items-center ml-11">
          <div className=" flex flex-row gap-5  items-center">
            <p className=" cursor-pointer">Collaborate</p>
            <p className=" cursor-pointer">Who We Are</p>
            <p className=" cursor-pointer">Podcast</p>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="">
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="">
            <FaYoutube className="h-6 w-6" />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
