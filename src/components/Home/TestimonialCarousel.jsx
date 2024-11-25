import React from 'react';
import Slider from 'react-slick';
// import { FaQuoteRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'ABHIJEET SINGH SANGA',
    role: 'BJP',
    photo: 'https://via.placeholder.com/100', // Replace with actual image URL
    text: 'Being interviewed on Spotlight with Nikhil was a fantastic experience. The studio\'s cutting-edge technology and the team\'s professionalism made it truly enjoyable. Nikhil\'s engaging style and thoughtful questions brought out the best in our conversation.',
  },
  {
    name: 'NEELIMA KATIYAR',
    role: 'BJP MLA',
    photo: 'https://via.placeholder.com/100', // Another placeholder or actual URL
    text: 'Appearing on "Spotlight with Nikhil" was a delightful experience. The studio\'s modern setup and the team\'s professionalism made everything smooth and enjoyable. Nikhil\'s engaging questions made for a lively and memorable conversation.',
  },
 
];


const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the delay (in milliseconds) as desired
    arrows: false, // Hide the default arrows
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative" data-aos="fade-up"
      style={{
        backgroundImage: "url('/assets/testimonialbg.png')",
      }}
    >
      <div className="absolute top-8 left-8 max-w-lg bg-white p-8 shadow-md rounded-lg border-red-900">
        <h3 className="text-blue-700 text-2xl font-semibold mb-2">TESTIMONIAL</h3>
        <h2 className="text-2xl font-bold mb-4">Our guests say about us</h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-700 italic relative">
                {/* <FaQuoteRight className="text-blue-500 text-3xl absolute right-0" /> */}
                “{testimonial.text}”
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;