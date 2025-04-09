'use client'

import React, { useState, useEffect, useRef } from 'react';
import VideoThumbnail from './VideoThumbnail';
import videoData from './videoData/videoData'; // Importez le tableau d'objets vidéo
import VideoLightbox from './VideoLightbox';

interface VideoInfo {
  id: string;
  title: string;
  component: React.FC<{ description?: string; defaultDescription: string }>;
}

interface PortfolioProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

const Portfolio: React.FC<PortfolioProps> = ({ footerRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  const dragStartTime = useRef<number>(0);
  const dragDistance = useRef<number>(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoInfo | null>(null);

  // State to hold preloaded iframe URLs
  const [preloadedIframes, setPreloadedIframes] = useState<{ [key: string]: string }>({});

  const transitionInProgress = useRef(false);
  const lastTimestamp = useRef(0);

  const NORMAL_SPEED = isMobile ? 1.05 : 2; // Vitesse normale ajustée pour mobile
  const HOVER_SPEED = 1.05; // Vitesse de survol ajustée pour mobile

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    setVideos(Array.from({ length: 8 }, () => videoData).flat());

    // Preload iframes without autoplay
    const preloadIframes = () => {
      const newIframes: { [key: string]: string } = {};
      videoData.forEach(video => {
        newIframes[video.id] = `https://www.youtube.com/embed/${video.id}?modestbranding=1&controls=1&rel=0&showinfo=0`; // No autoplay
      });
      setPreloadedIframes(newIframes);
    };

    preloadIframes();
  }, []);

  // Gestionnaires d'événements pour le défilement manuel
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasMoved(false);
    dragDistance.current = 0;
    dragStartTime.current = Date.now();
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setHasMoved(false);
    dragDistance.current = 0;
    dragStartTime.current = Date.now();
    setStartX(e.touches[0].pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 0.8;
    dragDistance.current = Math.abs(walk);
    if (dragDistance.current > 5) {
      setHasMoved(true);
    }
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 0.8;
    dragDistance.current = Math.abs(walk);
    if (dragDistance.current > 5) {
      setHasMoved(true);
    }
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    const dragDuration = Date.now() - dragStartTime.current;
    const wasClick = dragDuration < 200 && dragDistance.current < 5;

    if (!wasClick) {
      setHasMoved(true);
    }

    setIsDragging(false);
  };

  const handleVideoClick = (video: VideoInfo) => {
    setSelectedVideo(video);
    setShowLightbox(true);
  };

  useEffect(() => {
    if (!containerRef.current || !isClient || isDragging) return;

    const container = containerRef.current;
    let animationFrameId: number;
    const SINGLE_SET_WIDTH = videoData.length * (350 + 16);
    const RESET_THRESHOLD = SINGLE_SET_WIDTH * 4; // Milieu des 8 copies

    // Positionnement initial au milieu (après le premier rendu)
    if (container.scrollLeft === 0) {
      container.scrollLeft = RESET_THRESHOLD - SINGLE_SET_WIDTH;
    }

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      if (!transitionInProgress.current && !isDragging) {
        const speed = isHovered ? HOVER_SPEED : NORMAL_SPEED;
        const scrollAmount = (speed * deltaTime) / 16;
        container.scrollLeft += scrollAmount; // Défilement vers la droite

        // Reset quand on arrive trop à droite
        if (container.scrollLeft >= RESET_THRESHOLD) {
          container.scrollLeft = RESET_THRESHOLD - SINGLE_SET_WIDTH;
        }
        // Reset quand on arrive trop à gauche
        else if (container.scrollLeft <= SINGLE_SET_WIDTH) {
          container.scrollLeft = RESET_THRESHOLD - SINGLE_SET_WIDTH;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lastTimestamp.current = 0;
    };
  }, [isHovered, isClient, NORMAL_SPEED, isDragging]);

  if (!isClient) {
    return (
      <div className="portfolio overflow-hidden">
        <div className="flex gap-[16px] overflow-x-hidden w-full">
          {videoData.map((id, index) => (
            <div
              key={index}
              className="flex-none"
              style={{ width: '350px' }}
            >
              <div className="w-[350px] h-[230px] bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio overflow-hidden mb-20">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-hidden w-full cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleDragEnd();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="flex-none"
            style={{ width: '350px' }}
          >
            <VideoThumbnail
              videoId={video.id}
              title={video.title}
              preventClick={hasMoved}
              onClick={() => handleVideoClick(video)}
            />
          </div>
        ))}
      </div>

      <VideoLightbox
        isOpen={showLightbox}
        onClose={() => setShowLightbox(false)}
        videoId={selectedVideo?.id}
        title={selectedVideo?.title}
        footerRef={footerRef as React.RefObject<HTMLDivElement>}
      />

      {/* Hidden iframes for preloading */}
      {Object.entries(preloadedIframes).map(([id, src]) => (
        <iframe
          key={id}
          style={{ display: 'none' }}
          src={src}
          title={`Preload ${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
};

export default Portfolio;