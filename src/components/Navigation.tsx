'use client';

import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 right-0 w-full z-50 p-4">
      {/* Version Desktop */}
      <div className="hidden md:flex justify-end items-center space-x-8 pr-8">
        <a
          href="#"
          className="text-white relative transition-colors duration-300 hover:text-[#C93D39] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:bg-[#C93D39]"
        >
          Digitaly
        </a>
        <a
          href="#"
          className="text-white relative transition-colors duration-300 hover:text-[#C93D39] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:bg-[#C93D39]"
        >
          Image de marque
        </a>
        <a
          href="#"
          className="text-white relative transition-colors duration-300 hover:text-[#C93D39] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:bg-[#C93D39]"
        >
          Portfolio
        </a>
      </div>

      {/* Bouton Hamburger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute top-4 right-4 text-white z-50"
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Menu Mobile */}
      <div className={`
        md:hidden 
        fixed top-0 right-0 w-full h-full bg-black bg-opacity-95
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Digitaly
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Image de marque
          </a>
          <a
            href="#"
            className="text-white text-2xl hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 