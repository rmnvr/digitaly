import React from 'react';

const YoutubeLink = () => {
  const handleClick = () => {
    window.open('https://www.youtube.com/@Oz-Digitaly', '_blank');
  };

  return (
    <div className="flex justify-center items-center">
      <button className="my-6 px-6 py-3 bg-primary text-white rounded-full text-base hover:bg-secondary hover:text-primary transition-colors duration-300 uppercase" onClick={handleClick}>
        nos réalisations
      </button>
    </div>
  );
};

export default YoutubeLink; 