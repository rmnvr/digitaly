'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react';
import VideoThumbnail from './VideoThumbnail';

interface VideoInfo {
  id: string;
  title: string;
  description: string;
  duration?: string;
  viewCount?: string;
  publishedAt?: string;
  thumbnails?: {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
  };
}

const Portfolio = () => {
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

  const transitionInProgress = useRef(false);
  const lastTimestamp = useRef(0);

  const videoIds = useMemo(() => [
    'GLvYkmyYcKY',
    'zfkLExgz6D8',
    'o_41BoRZsHE',
    'RWyRlp6scVQ',
    'MZdhjIkB-Rc',
    'yf19jCtVSRc',
  ], []);

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
    if (!isClient) return;

    const fetchVideoInfo = async () => {
      try {
        const response = await fetch(`/api/youtube?videoIds=${videoIds.join(',')}&modestbranding=1&controls=0&rel=0&showinfo=0`);
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error('Invalid API response format:', data);
          setVideos(videoIds.map(id => ({ id, title: '', description: '' })));
          return;
        }

        setVideos([...data, ...data, ...data, ...data]);
      } catch (error) {
        console.error('Error fetching video info:', error);
        setVideos(videoIds.map(id => ({ id, title: '', description: '' })));
      }
    };

    fetchVideoInfo();
  }, [videoIds, isClient]);

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

  useEffect(() => {
    if (!containerRef.current || !isClient || isDragging) return;

    const container = containerRef.current;
    let animationFrameId: number;
    const SINGLE_SET_WIDTH = videoIds.length * (350 + 16);

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      if (!transitionInProgress.current && !isDragging) {
        const speed = isHovered ? HOVER_SPEED : NORMAL_SPEED;
        const scrollAmount = (speed * deltaTime) / 16;
        container.scrollLeft += scrollAmount;

        if (container.scrollLeft >= SINGLE_SET_WIDTH) {
          transitionInProgress.current = true;
          container.scrollLeft = 0;
          setTimeout(() => {
            transitionInProgress.current = false;
          }, 50);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lastTimestamp.current = 0;
    };
  }, [isHovered, isClient, videoIds.length, NORMAL_SPEED, isDragging]);

  if (!isClient) {
    return (
      <div className="portfolio overflow-hidden">
        <div className="flex gap-4 overflow-x-hidden w-full">
          {videoIds.map((id, index) => (
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
    <div className="portfolio overflow-hidden">
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
              description={video.description}
              preventClick={hasMoved}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;