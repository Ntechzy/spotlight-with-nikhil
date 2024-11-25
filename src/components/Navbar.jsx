import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from './Navbar/navbarData';
// import logo from './path/to/logo.png'; // Update this path to your logo image

const Navbar = () => {
  const [Activelink, setActiveLink] = useState("Home");
  console.log(Activelink);

  return (
    <nav className="flex items-center justify-between p-4 top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Logo Section */}
      <div className="w-48 h-24">
        <img src="/assets/spotlightlogo.png" alt="Logo" className="h-full w-full" />
      </div>

      {/* Centered Navbar Links */}
      <div className="flex-grow text-center">
        <ul className="flex justify-center space-x-4">
          {navbarData.map((item, index) => (
            <li key={index} className="relative group">
              <Link to={item.link}
                onClick={() => setActiveLink(item.label)}
                className={`px-3 py-2 rounded-md text-xl font-medium hover:text-[#2e6793] ${Activelink === item.label ? 'text-gray-500' : 'text-black'}`}
              >
                {item.label}
              </Link>

              {item.submenu && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100">
                  {item.submenu.map((submenuItem, submenuIndex) => (
                    <li key={submenuIndex}>
                      <Link to={submenuItem.link}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#0057B8]"
                      >
                        {submenuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Search Input, Channel Button, and Hamburger Menu Icon */}
      <div className="flex items-center space-x-4 rounded p-2">
       {/* <div className='border p-[8px] rounded-md bg-slate-50'>Subscribe the channel</div> */}
        
        {/* Channel Button */}
      <Link to="https://www.youtube.com/@SpotlightwithNikhil" target="_blank" >
      <button className="px-4 py-2 bg-[#194E82] font-semibold  text-white rounded-md hover:bg-[#1f4b7e] transition duration-200">
         Subscribe the  Channel
        </button>
      </Link>

        {/* Hamburger Menu Icon */}
        {/* <div className="flex items-center cursor-pointer">
          <svg className="h-8 w-8 text-black hover:text-[#2e6793]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
