'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import dynamic from 'next/dynamic';
import Player from '@vimeo/player';

// Création d'un composant vidéo séparé qui ne sera rendu que côté client
const VimeoPlayer = dynamic(() => Promise.resolve(() => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }}>
      <iframe
        src="https://player.vimeo.com/video/1071352330?h=1d6376e726&background=1&autoplay=1&loop=1&byline=0&title=0&badge=0&autopause=0&player_id=0&app_id=58479"
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
          const iframe = document.querySelector('iframe');
          if (iframe) {
            const player = new Player(iframe);
            player.on('play', () => {
              document.dispatchEvent(new Event('vimeoLoaded')); // Écoute l'événement 'ready'
            });
          } else {
            console.error('Iframe non trouvé'); // Log si l'iframe n'est pas trouvé
          }
        }}
      />
    </div>
  );
}), { ssr: false });

interface HeroSectionProps {
  footerRef: React.RefObject<HTMLDivElement>; // Ajouter la prop pour la référence
}

const HeroSection = ({ footerRef }: HeroSectionProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHidden, setIsLoadingHidden] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleVimeoLoad = () => {
      setShowLoader(false);
      setIsLoadingHidden(true);
      setTimeout(() => setIsLoading(false), 700);
    };

    document.addEventListener('vimeoLoaded', handleVimeoLoad);

    // Timeout de secours (ex : 10 secondes)
    const fallbackTimeout = setTimeout(() => {
      setShowLoader(false);
      setIsLoadingHidden(true);
      setIsLoading(false);
    }, 3500);

    return () => {
      document.removeEventListener('vimeoLoaded', handleVimeoLoad);
      clearTimeout(fallbackTimeout);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // Délai de 0 millisecondes
  })

  return (
    <div className="relative h-[calc(100vh+10px)] w-full overflow-hidden mt-[-5px]">
      {isLoading && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black
            transition-transform duration-700 ease-in-out
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
        <Navigation footerRef={footerRef} />
        <Image
          src="/images/digitaly_logo.svg"
          alt="Digitaly Logo"
          width={150}
          height={200}
          className="absolute top-4 left-4 z-50 h-auto w-auto 
            max-w-[80px] md:max-w-[110px]"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection; 