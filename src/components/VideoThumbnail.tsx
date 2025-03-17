'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import VideoLightbox from './VideoLightbox';

interface VideoThumbnailProps {
  videoId: string;
  title: string;
  description: string;
  preventClick?: boolean;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, title, description, preventClick }) => {
  const [showLightbox, setShowLightbox] = useState(false);
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

  useEffect(() => {
    if (showLightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLightbox]);

  const handleInfoClick = (e: React.MouseEvent) => {
    if (preventClick) {
      e.preventDefault();
      return;
    }
    e.stopPropagation();
    setShowLightbox(true);
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
            <div className="relative w-[350px] h-[230px] overflow-hidden rounded-xl">
              {/* GIF uniquement sur les écrans non mobiles */}
              {!isMobile && (
                <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <Image
                    src="https://c.tenor.com/Jo1xLhLKfe8AAAAd/tenor.gif"
                    alt="Power GIF"
                    width={360}
                    height={250}
                    className="object-cover w-full h-full"
                    objectFit='cover'
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
                <h3 className="text-white text-sm font-medium tracking-wide">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoLightbox
        isOpen={showLightbox}
        onClose={() => setShowLightbox(false)}
        videoId={videoId}
        title={title}
        description={description}
      />
    </>
  );
};

export default VideoThumbnail;