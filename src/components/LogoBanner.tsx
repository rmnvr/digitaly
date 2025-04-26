'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const logos = [
  { src: '/logo/AGE_DOR.svg', width: 100, height: 50 },
  { src: '/logo/BMW.svg', width: 100, height: 50 },
  { src: '/logo/CAMPANILE.svg', width: 100, height: 50 },
  { src: '/logo/CAPEB.svg', width: 100, height: 50 },
  { src: '/logo/CMA.svg', width: 100, height: 50 },
  { src: '/logo/Cupra_OZ.svg', width: 100, height: 50 },
  { src: '/logo/ROGER_MARTIN.svg', width: 100, height: 50 },
  { src: '/logo/Grand_BELFORT.svg', width: 100, height: 50 },
  { src: '/logo/Metalhom.svg', width: 100, height: 50 },
  { src: '/logo/Prefecture.svg', width: 100, height: 50 },
  { src: '/logo/RE_MAX.svg', width: 100, height: 50 },
  { src: '/logo/Ville_de_Belfort.svg', width: 100, height: 50 },
  { src: '/logo/VITTORI.svg', width: 100, height: 50 },
  { src: '/logo/VOLVO.svg', width: 100, height: 50 }
];

const LogoBanner = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Créer plusieurs copies des logos pour assurer un défilement continu
  const [multipleLogos, setMultipleLogos] = useState<typeof logos>([]);

  // Vitesse de défilement (ajustable)
  const SCROLL_SPEED = isMobile ? 220 : 150; // pixels par seconde

  useEffect(() => {
    setIsClient(true);
    // Créer 3 copies pour assurer la continuité
    setMultipleLogos(Array.from({ length: 3 }, () => logos).flat());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Vérification initiale
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Animation avec transform au lieu de scrollLeft
  useEffect(() => {
    if (!scrollerRef.current || !isClient) return;

    const scroller = scrollerRef.current;
    let position = 0;
    let animationFrameId: number;
    let lastTimestamp = 0;

    // Obtenir la largeur d'un ensemble de logos
    const getLogoSetWidth = () => {
      const logoWidth = scroller.firstElementChild ?
        (scroller.firstElementChild as HTMLElement).offsetWidth : 0;
      return logoWidth * logos.length;
    };

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculer la nouvelle position
      position -= (SCROLL_SPEED * deltaTime) / 1000;

      // Réinitialiser la position si nécessaire
      const logoSetWidth = getLogoSetWidth();
      if (-position >= logoSetWidth) {
        position += logoSetWidth;
      }

      // Appliquer la transformation
      scroller.style.transform = `translateX(${position}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isClient, SCROLL_SPEED]);

  if (!isClient) {
    return (
      <div className="overflow-hidden bg-primary">
        <div className="flex">
          {logos.map((logo, index) => (
            <div key={index} className="flex-none px-8 py-6">
              <div className="w-32 h-24 bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[-5px] overflow-hidden bg-primary relative">
      <div
        ref={scrollerRef}
        className="flex"
        style={{ willChange: 'transform' }}
      >
        {multipleLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-none px-8 py-6"
          >
            <Image
              src={logo.src}
              alt={`Logo ${index + 1}`}
              width={logo.width}
              height={logo.height}
              className="h-28 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBanner;