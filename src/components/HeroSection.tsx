'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import dynamic from 'next/dynamic';

// Création d'un composant vidéo séparé qui ne sera rendu que côté client
const VimeoPlayer = dynamic(() => Promise.resolve(() => (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }}>
    <iframe
      src="https://player.vimeo.com/video/1065121951?h=c7c0e0c6b6&background=1&autoplay=1&loop=1&byline=0&title=0"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '177.77777778vh', // Ratio 16:9
        height: '56.25vw',       // Ratio 16:9
        minWidth: '100%',
        minHeight: '100%',
        transform: 'translate(-50%, -50%)',
        objectFit: 'cover'
      }}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      onLoad={() => {
        document.dispatchEvent(new Event('vimeoLoaded'));
      }}
    />
  </div>
)), { ssr: false });

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHidden, setIsLoadingHidden] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleVimeoLoad = () => {
      setTimeout(() => {
        setShowLoader(false);
        setTimeout(() => {
          setIsLoadingHidden(true);
          setTimeout(() => setIsLoading(false), 1000);
        }, 500);
      }, 2000);
    };

    document.addEventListener('vimeoLoaded', handleVimeoLoad);
    return () => {
      document.removeEventListener('vimeoLoaded', handleVimeoLoad);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {isLoading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black
            transition-transform duration-1000 ease-in-out
            ${isLoadingHidden ? '-translate-y-full' : ''}`}
        >
          {showLoader && (
            <div className="flex flex-col items-center gap-4">
              <div className="custom-loader"></div>
            </div>
          )}
        </div>
      )}

      <div className="absolute inset-0 w-full h-full">
        <VimeoPlayer />
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