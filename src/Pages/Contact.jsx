import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons from React Icons
import Banner from "../components/Banner";

const Contact = () => {
  return (
    <div className="md:w-[90%] w-full m-auto bg-cover bg-no-repeat">
      <Banner CapitalPagename={"CONTACT"} pagename={"Contact"} />

      <h2 className="text-2xl font-semibold text-center m-4">We'd Love to Hear From You!</h2>

      <div className="mx-auto p-8 bg-white shadow-md md:gap-9 rounded-lg mt-8 md:flex md:justify-between ">
        {/* Google Map Embedded */}
        <div className="mb-8 md:w-[65%]" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14285.827006378517!2d80.3010295!3d26.4732347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c390bc50eb861%3A0xcb92eaeb9f752362!2sNTECHZY%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1732272632940!5m2!1sen!2sin"
            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="text-center w-[30%]"data-aos="fade-left">
          {/* <p className="text-lg mb-4">For inquiries, please reach us at:</p> */}
          
          {/* Email */}
          <p className="md:text-lg md:mb-4 md:p-7 border flex items-center md:gap-8 p-4 md:mt-9 mt-5 my-3 gap-2">
            <FaEnvelope className="md:text-4xl " />
            {/* <span className="font-semibold">Email:</span> */}
            <a href="mailto:info@spotlightwithnikhil.in" className="text-blue-500">info@spotlightwithnikhil.in</a>
          </p>

          {/* Address */}
          <p className="md:text-lg mb-4 w-full md:p-7 p-4 border flex items-center justify-between">
            <FaMapMarkerAlt className="md:text-6xl text-4xl " />
            {/* <span className="font-semibold">Address:</span>  */}
            <span className="text-sm">117/H, 1606, Near J.K. Temple, Model Town, Pandu Nagar, Kanpur, Uttar Pradesh 208005</span>
          </p>

          {/* Phone */}
          <p className="md:text-lg mb-4 p-7 border flex items-center ">
            <FaPhoneAlt className="md:text-4xl text-xl mr-3" />
            {/* <span className="font-semibold">Phone:</span> */}
            <a href="tel:+919198350992" className="text-blue-500">+91 91983 50992</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
