'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';

const HeroSection = () => {
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    loadYouTubeAPI();

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(iframeRef.current!, {
        videoId: 'KdFpPl_Rhz0',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          controls: 0,
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          playsinline: 1,
          playlist: 'KdFpPl_Rhz0',
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navigation />

      <Image
        src="/images/digitaly_logo.png"
        alt="Digitaly Logo"
        width={150}
        height={200}
        className="absolute top-4 left-4 z-50 h-auto w-auto"
        priority
      />

      <div className="absolute inset-0">
        <div
          ref={iframeRef}
          className="w-full h-full scale-125"
        />
      </div>
    </div>
  );
};

export default HeroSection; 