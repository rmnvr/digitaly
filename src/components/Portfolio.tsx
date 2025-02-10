'use client'

import React, { useState } from 'react';
import Script from 'next/script';
import VideoThumbnail from './VideoThumbnail';

const Portfolio = () => {

  const videos = [
    'GLvYkmyYcKY',
    'zfkLExgz6D8',
    'o_41BoRZsHE',
    'RWyRlp6scVQ',
    'MZdhjIkB-Rc',
    'yf19jCtVSRc',
  ];

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setActiveVideo(videoId);
  };

  return (
    <div className="portfolio mb-8">
      <div className="flex flex-wrap justify-evenly gap-4">
        {videos.map((videoId, index) => (
          <VideoThumbnail
            key={index}
            videoId={videoId}
            isActive={activeVideo === videoId}
            onClick={() => handleVideoClick(videoId)}
          />
        ))}
      </div>
      <Script
        src="https://www.youtube.com/iframe_api"
        strategy="lazyOnload"
      />
    </div>
  );
};

export default Portfolio;