// pages/index.js
'use client';

import Head from 'next/head';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Handle YouTube iframe API
    const loadYouTubeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    loadYouTubeAPI();

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(iframeRef.current!, {
        videoId: 'KdFpPl_Rhz0', // Your video ID
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          controls: 0,
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          playsinline: 1,
          playlist: 'KdFpPl_Rhz0', // Required for looping
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
      <Head>
        <title>Page d&apos;accueil avec vidéo en arrière-plan</title>
      </Head>

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
          className="w-full h-full scale-125" // Scale up slightly to cover any gaps
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Bienvenue sur ma page d&apos;accueil</h1>
      </div>
    </div>
  );
}
