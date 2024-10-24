import { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/avatar.png';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10  duration-300 backdrop-blur-sm">
      <div className="container">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={profileImg}
              alt="Obiora Igboanusi"
              className="h-10 w-10 rounded object-center bg-blue-100 border-2"
            />
            <span className="font-semibold">Obiora Igboanusi</span>
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className=" transition duration-300">
              Home
            </a>
            <a href="#" className=" transition duration-300">
              Services
            </a>
            <a href="#" className=" transition duration-300">
              Portfolio
            </a>
            <a href="#" className=" transition duration-300">
              Contact
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className=" focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } transition-all duration-500 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-screen bg-white">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-50"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
