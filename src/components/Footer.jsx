import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#194E82] to-blue-600 text-white py-12 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Connected with Our Podcast
        </h2>
        <div>
          <div className="flex flex-row w-[70%] m-auto justify-between">
            <div className="">
              <p className="text-lg mb-6">Follow us on social media!</p>

              {/* Social Media Links */}
              <div className="flex justify-center gap-8 mb-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition"
                >
                  <FaInstagram className="text-4xl" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-600 transition"
                >
                  <FaYoutube className="text-4xl" />
                </a>
              </div>

              {/* Footer Pages Links */}
              <div className="flex justify-center gap-8 mb-6">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <a href="/about" className="hover:underline">
                  About
                </a>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
                <a href="/team" className="hover:underline">
                  Our Team
                </a>
                <a href="/more" className="hover:underline">
                  More
                </a>
              </div>
            </div>

            <div>
              {/* Get in Touch Section (Updated for Vertical Layout) */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4 ">Get in Touch</h3>
                <div className="space-y-2 text-lg flex flex-col justify-start items-start">
                
                  <p>+44012345678</p>
                  <p>Mon - Sun: 8AM - 8PM</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@example.com"
                      className="hover:underline"
                    >
                      info@example.com
                    </a>
                  </p>
                  <p>
                    2563 Brooklyn Golden Street, New York,greater noigdvh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm text-gray-300">
            &copy; 2024 Spotlight with Nikhil. All Rights Reserved.
          </p>
        </div>
         {/* Created By Section */}
         <div className="text-center mb-6">
          <p className="text-sm">
            Created by{" "}
            <span className="font-semibold">NTechzy Pvt Limited</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
