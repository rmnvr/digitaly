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
          disablekb: 1,
          iv_load_policy: 3,
          fs: 0,
          enablejsapi: 0
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            const iframe = event.target.getIframe();
            iframe.style.pointerEvents = 'none';
          },
        },
      });
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div

          ref={iframeRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 
            w-[100%] h-screen 
            scale-[300%] sm:scale-[200%] md:scale-[150%] lg:scale-[125%] object-cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8">
        <Navigation />

        <Image
          src="/images/digitaly_logo.png"
          alt="Digitaly Logo"
          width={150}
          height={200}
          className="absolute top-4 left-4 z-50 h-auto w-auto 
            max-w-[100px] md:max-w-[150px]"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection; 