import React from 'react';
import Script from 'next/script';

const Portfolio = () => {

  const videos = [
    'https://www.youtube.com/embed/GLvYkmyYcKY?modestbranding=1',
    'https://www.youtube.com/embed/zfkLExgz6D8?modestbranding=1',
    'https://www.youtube.com/embed/o_41BoRZsHE?modestbranding=1',
    'https://www.youtube.com/embed/RWyRlp6scVQ?modestbranding=1',
    'https://www.youtube.com/embed/MZdhjIkB-Rc?modestbranding=1',
    'https://www.youtube.com/embed/yf19jCtVSRc?modestbranding=1',
  ];

  return (
    <div className="portfolio">
      <div className="flex flex-wrap justify-evenly gap-4">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <Script
              src="https://www.youtube.com/iframe_api"
              strategy="lazyOnload"
            />
            <iframe
              width="450"
              height="280"
              src={video}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;