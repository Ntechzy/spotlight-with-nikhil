import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Importing icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#194E82] to-blue-600 py-12 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Spotlight with Nikhil
      </h1>

      {/* Main Content: Navigation & Contact */}
      <div className="flex flex-wrap justify-between items-start w-[90%] max-w-[1200px] mb-8">
        {/* Navigation Links */}
        <div className="w-full sm:w-[45%] mb-6 sm:mb-0" data-aos="fade-right">
          <div className="flex flex-col gap-4 text-xl text-white font-semibold ">
            <ul>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors duration-300 p-2  ">
                <Link to="/">HOME</Link>
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors duration-300 p-2 ">
                <Link to="/about">ABOUT US</Link>
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors duration-300 p-2 ">
                <Link to="/podcast">PODCASTS</Link>
              </li>
              {/* <li className="hover:text-yellow-300 cursor-pointer transition-colors duration-300">
        <Link to="/blog">BLOG</Link>
    </li> */}
              <li className="hover:text-yellow-300 cursor-pointer transition-colors duration-300 p-2 ">
                <Link to="/our-team">OUR TEAM</Link>
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition-colors duration-300 p-2 ">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info & Social Media */}
        <div className="w-full sm:w-[45%] mb-6 sm:mb-0" data-aos="fade-right">
          {/* Contact Information */}
          <div className="flex flex-col gap-4 text-xl text-white">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" /> +91 91983 50992
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" /> Info@spotlightwithnikhil.in
            </li>
            <li className="flex items-center gap-2 w-[90%] sm:w-[80%] text-end">
              <FaMapMarkerAlt className="text-lg" /> 117/H, 1606, Near J.K.
              Temple, Model Town, Pandu Nagar, Kanpur, Uttar Pradesh 208005
            </li>
          </div>

          {/* Social Media Links in Row */}
          <div className="flex gap-8 mt-6 justify-start">
            <a
              href="https://www.youtube.com/@SpotlightwithNikhil" target="_blank"
              className="text-white text-3xl hover:text-red-600 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-white text-3xl hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-white text-3xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com"
              className="text-white text-3xl hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
          </div>
          {/* Reach us on Social Media Text */}
          <p className="text-white mt-4 text-lg">Reach us on Social Media</p>
        </div>
      </div>

      {/* Footer Bottom Section with Copyright and Creator Info */}
      <div className="w-full text-center text-white mt-8 text-sm">
        <p>&copy; 2024 Spotlight with Nikhil. All Rights Reserved.</p>
        <p>
          Created by{" "}
          <a
            href="https://www.ntechzy.com"
            className="text-yellow-300 hover:underline"
          >
            Ntechzy Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
