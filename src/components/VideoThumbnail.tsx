'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import VideoLightbox from './VideoLightbox';

interface VideoThumbnailProps {
  videoId: string;
  isActive: boolean;
  title: string;
  description: string;
  onClick: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, isActive, title, description, onClick }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isActive) {
      setShouldRender(true);
      setIsClicked(false);
      setError(null);
    }
  }, [isActive]);

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

  const handleClick = () => {
    try {
      setIsClicked(true);
      setTimeout(onClick, 300);
    } catch (err) {
      setError("Une erreur s'est produite lors du chargement de la vidéo");
      console.error("Erreur:", err);
    }
  };

  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowLightbox(true);
  };

  // Composant pour le titre et le bouton d'info, réutilisé dans les deux états
  const TitleAndInfoButton = () => (
      <div className="flex items-center gap-2 mt-2">
        <h3 className="flex-1">{title}</h3>
        <button
            onClick={handleInfoClick}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Plus d'informations"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
      </div>
  );

  if (error) {
    return (
        <div className="video-container mt-8 flex justify-center items-center relative">
          <div className="text-red-500 p-4 border border-red-300 rounded">
            {error}
          </div>
        </div>
    );
  }

  return (
      <>
        <div className="video-container mt-8 flex flex-col justify-center items-center relative">
          {isActive && isMounted && shouldRender ? (
              <div className="flex flex-col">
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
                <TitleAndInfoButton />
              </div>
          ) : (
              <div
                  className={`relative flex flex-col ${isClicked ? 'animate-[fadeOut_0.3s_ease-out_forwards]' : ''}`}
              >
                <div
                    className="relative w-[350px] h-[230px]"
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
                <TitleAndInfoButton />
              </div>
          )}
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