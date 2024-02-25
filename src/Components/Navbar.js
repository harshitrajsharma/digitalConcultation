import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full top-0 left-0 bg-white shadow-lg">
      <div className="container mx-auto px-5 py-8 lg:px-10 xl:px-16 lg:py-4 xl:py-4 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <a
              href="#"
              className="text-lg text-gray-800 hover:text-lime-400 font-bold lg:text-xl xl:text-3xl"
            >
              WizardZ
            </a>
          </div>

          {/* Hamburger menu button for medium and large screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } mt-4 lg:flex lg:items-center lg:mt-0`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:pr-8">
            <a
              href="#"
              className="hover:bg-black px-6 py-3 rounded-lg hover:text-white text-base xl:text-lg font-normal xl:font-medium text-gray-800"
            >
              About us
            </a>
            <a
              href="#"
              className="hover:bg-black px-6 py-3 rounded-lg hover:text-white text-base xl:text-lg font-normal xl:font-medium text-gray-800"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:bg-black px-6 py-3 rounded-lg hover:text-white text-base xl:text-lg font-normal xl:font-medium text-gray-800"
            >
              Use Cases
            </a>
            <a
              href="#"
              className="hover:bg-black px-6 py-3 rounded-lg hover:text-white text-base xl:text-lg font-normal xl:font-medium text-gray-800"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:bg-black px-6 py-3 rounded-lg hover:text-white text-base xl:text-lg font-normal xl:font-medium text-gray-800"
            >
              Blog
            </a>
          </div>

          {/* Request a quote button */}
          <a
            href="#"
            className="mt-6 lg:mt-0  inline-block px-6 py-3 border-2 border-black rounded-lg hover:bg-lime-400 hover:text-white font-medium xl:font-semibold text-gray-800"
          >
            Request a quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
