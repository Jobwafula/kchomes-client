import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo - Now using an image */}
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img 
                  src='./logo.jpg' 
                  alt="KCHomes Travels Logo" 
                  className="h-24 w-auto" // Adjust height as needed
                />
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg 
                className="w-6 h-6 text-gray-500 hover:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/tours"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Tours
            </Link>
            <Link
              to="/gallery"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-gray-700 hover:text-orange-600 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/tours"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Tours
        </Link>
        <Link
          to="/gallery"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/about"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-sm hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;