  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { navbarData } from './Navbar/navbarData';

  const Navbar = () => {
    const [Activelink, setActiveLink] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);  // Controls mobile menu state

    const toggleMenu = () => {
      window.closed();
    };

    return (
      <nav className={`flex md:items-center justify-between p-4 top-0 left-0 right-0 z-50 bg-white shadow-md`}>
        {/* Logo Section */}
        <div className="w-24 h-auto ">
          <img src="/assets/logo.png" alt="Logo" className="h-full w-full" />
        </div>

        {/* Centered Navbar Links (visible on desktop and mobile when opened) */}
        <div className={`md:text-center md:mt-[68px] md:mr-11 md:block ${isOpen ? 'block' : 'hidden'} md:flex absolute top-0 items-start justify-start flex right-0 left-0 m-auto md:w-[100%] md:text-center  bottom-0 text-white md:text-black w-[100%] md:bg-transparent bg-white z-50  h-52 mt-32 transition-all ease-in-out duration-300`}>
          <ul className="flex justify-center md:space-x-4 md:flex md:flex-row  flex-col translate-y-1 duration-200  md:ml-80 w-[100%] ml-8 gap-3 ">
            {navbarData.map((item, index) => (
              <li key={index} className="relative group ">
                <Link 
                  to={item.link}
                  onClick={() =>{ {setActiveLink(item.label)};setIsOpen(false)}}
                  className={`md:px-3 md:py-2  md:rounded-md md:text-xl md:font-medium hover:text-[#2e6793]  ${Activelink === item.label ? 'text-gray-500' : 'text-black'}`}
                >
                  {item.label}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.submenu.map((submenuItem, submenuIndex) => (
                      <li key={submenuIndex}>
                        <Link 
                          to={submenuItem.link}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#0057B8] transition-colors duration-200"
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}  // Toggles the menu on click
          >
            {/* Conditionally render Hamburger or Cross Icon */}
            {!isOpen ? (
              <svg className="h-8 w-8 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            ) : (
              <svg className="h-8 w-8 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Channel Button and Search Input (Desktop and larger screens) */}
        <div className="hidden md:flex items-center space-x-4 rounded p-2 ">
        <Link to="https://www.youtube.com/@SpotlightwithNikhil" target="_blank" className="px-4 py-2 cursor-pointer bg-[#194E82] font-semibold  text-white rounded-md hover:bg-[#1f4b7e] transition duration-200">
          {/* Channel Button */}
          
              Subscribe the Channel 
          </Link>
        </div>
      </nav>
    );
  };

  export default Navbar;
