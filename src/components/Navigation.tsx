'use client';

const Navigation = () => {
  return (
    <nav className="absolute top-0 right-0 w-full z-50 p-4">
      <div className="flex justify-end items-center space-x-8 pr-8">
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Digitaly
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Image de marque
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
};

export default Navigation; 