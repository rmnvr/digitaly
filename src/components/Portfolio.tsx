'use client'

import React, { useState, useEffect, useMemo } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const videoIds = useMemo(() => [
    'GLvYkmyYcKY',
    'zfkLExgz6D8',
    'o_41BoRZsHE',
    'RWyRlp6scVQ',
    'MZdhjIkB-Rc',
    'yf19jCtVSRc',
  ], []);

  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [videos, setVideos] = useState<VideoInfo[]>([]);

  useEffect(() => {
    if (!mounted) return;

    const fetchVideoInfo = async () => {
      try {
        const response = await fetch(`/api/youtube?videoIds=${videoIds.join(',')}`);
        const data = await response.json();

        // Vérification que data est un tableau valide
        if (!Array.isArray(data)) {
          console.error('Invalid API response format:', data);
          setVideos(videoIds.map(id => ({ id, title: '', description: '' })));
          return;
        }

        setVideos(data);
      } catch (error) {
        console.error('Error fetching video info:', error);
        // Fallback avec juste les IDs si l'API échoue
        setVideos(videoIds.map(id => ({ id, title: '', description: '' })));
      }
    };

    fetchVideoInfo();
  }, [videoIds, mounted]);

  if (!mounted) {
    return null; // ou un placeholder/skeleton
  }

  const handleVideoClick = (videoId: string) => {
    setActiveVideo(videoId);
  };

  return (
    <div className="portfolio mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {videos.length > 0 && videos.map((video, index) => (
            <div key={index} className="w-full">
              <VideoThumbnail
                  videoId={video.id}
                  title={video.title}
                  description={video.description}
                  isActive={activeVideo === video.id}
                  onClick={() => handleVideoClick(video.id)}
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;