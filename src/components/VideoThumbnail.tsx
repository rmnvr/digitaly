'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoThumbnailProps {
  videoId: string;
  isActive: boolean;
  onClick: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, isActive, onClick }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isActive) {
      setShouldRender(true);
      setIsClicked(false);
    }
  }, [isActive]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(onClick, 300);
  };

  return (
    <div className="video-container mt-8 flex justify-center items-center relative">
      {isActive && isMounted && shouldRender ? (
        <div className="opacity-0 animate-[fadeIn_0.3s_ease-in_forwards]">
          <iframe
            width="350"
            height="230"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`Video ${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>
      ) : (
        <div
          className={`relative w-[350px] h-[230px] ${isClicked ? 'animate-[fadeOut_0.3s_ease-out_forwards]' : ''
            }`}
          onClick={handleClick}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white/80 border-b-[20px] border-b-transparent" />
          </div>
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={`Thumbnail for video ${videoId}`}
            width={350}
            height={230}
            className="object-cover w-full h-full"
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;