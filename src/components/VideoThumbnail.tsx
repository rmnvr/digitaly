'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface VideoThumbnailProps {
  videoId: string;
  title: string;
  gif: string;
  preventClick?: boolean;
  onClick: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, title, gif, preventClick, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add event listener

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  if (!gif) {
    console.error(`VideoThumbnail: GIF path is missing for videoId: ${videoId}, title: ${title}`);
  }

  const handleInfoClick = (e: React.MouseEvent) => {
    if (preventClick) {
      e.preventDefault();
      return;
    }
    e.stopPropagation();
    onClick();
  };

  return (
    <>
      <div className="relative">
        <div className="flex flex-col">
          <div
            className="relative group cursor-pointer"
            onClick={handleInfoClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-[400px] h-[263px] overflow-hidden rounded-xl">
              {/* GIF uniquement sur les écrans non mobiles et lors du survol */}
              {!isMobile && gif && isHovered && (
                <div className={`absolute inset-0 transition-opacity duration-500 opacity-100`}> {/* Opacity is always 100 when rendered */}
                  <Image
                    src={gif}
                    alt="Power GIF"
                    width={360}
                    height={250}
                    className="object-cover w-full h-full"
                    objectFit='cover'
                    priority // Optionally add priority if first hover experience is critical
                  />
                </div>
              )}

              {/* Image statique toujours présente */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${(!isMobile && isHovered) ? 'opacity-0' : 'opacity-100'
                }`}>
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={`Thumbnail for video ${videoId}`}
                  width={360}
                  height={250}
                  className="object-cover w-full h-full scale-125 filter brightness-110 saturate-125"
                  objectFit='cover'
                />
              </div>

              {/* Overlay sombre dégradé */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent to-30% transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'
                }`} />

              {/* Bouton play et texte combinés */}
              <div className={`absolute inset-0 flex flex-row items-end justify-center transition-opacity duration-300 ${(!isMobile && isHovered) ? 'opacity-0' : 'opacity-100'
                }`} style={{ paddingBottom: '20px' }}>
                <div className="bg-transparent border border-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent" />
                </div>
                {/* Texte */}
                <h3 className="text-white text-sm font-medium tracking-wide mb-[2px]">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoThumbnail;