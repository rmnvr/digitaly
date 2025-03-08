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
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [isClient, setIsClient] = useState(false);
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

  const isMobile = window.innerWidth < 1024; // Détermine si l'écran est mobile
  const NORMAL_SPEED = isMobile ? 1.05 : 2; // Vitesse normale ajustée pour mobile
  const HOVER_SPEED = 1.05; // Vitesse de survol ajustée pour mobile

  useEffect(() => {
    setIsClient(true);
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

  useEffect(() => {
    if (!containerRef.current || !isClient) return;

    const container = containerRef.current;
    let animationFrameId: number;
    const SINGLE_SET_WIDTH = videoIds.length * (350 + 16);

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;
      if (!transitionInProgress.current) {
        const speed = isHovered ? HOVER_SPEED : NORMAL_SPEED;
        const scrollAmount = (speed * deltaTime) / 16; // Normalisation pour 60fps
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
  }, [isHovered, isClient, videoIds.length]);

  if (!isClient) {
    return (
      <div className="portfolio my-[200px] overflow-hidden">
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
    <div className="portfolio my-[200px] overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-hidden w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;