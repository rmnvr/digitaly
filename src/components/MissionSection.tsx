'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface MissionSectionProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

const commercialList = [
  "Film promotionnel",
  "Spot publicitaire",
  "Témoignages clients",
  "Contenus réseaux sociaux"
]

const brandList = [
  "Film culture d'entreprise",
  "Portraits collaborateurs & métiers",
  "Communication interne",
  "Formations"
]

const MissionSection: React.FC<MissionSectionProps> = ({ footerRef }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pb-9 bg-white">
      <div className="container mx-auto px-4">

        {/* Agency Description */}
        <div className={`mb-12 py-12 px-6 lg:my-20 lg:py-20 lg:px-12 opacity-0 ${isVisible ? 'animate-[fadeIn_0.8s_ease-in-out_forwards]' : ''} border border-[#0A0B2E]/10 rounded-3xl`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative overflow-hidden max-w[90%] lg:max-w-[80%] mx-auto group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/commercial.jpg"
                  alt="Studio de production vidéo avec fond vert"
                  className="w-[102%] h-auto object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  width={500}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Commerciale</p>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full text-sm border border-[#0A0B2E]/20 text-[#0A0B2E] mb-4 uppercase hover:bg-[#0A0B2E] hover:text-white transition-colors duration-300">
                Commerciale
              </span>
              <ul className="text-lg font-light text-[#0A0B2E]/70 leading-relaxed mb-8">
                {
                  commercialList.map(listItem => {
                    return (<li key={listItem} className="flex items-center">
                      <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                      {listItem}
                    </li>)
                  })
                }
              </ul>
              <p className="text-lg font-normal text-[#0A0B2E]/70 leading-relaxed mb-8 space-y-2">
                Renforcez votre image et votre notoriété,<br />
                démarquez-vous et augmentez votre visibilité.
              </p>
              <div className="flex justify-left">
                <button
                  className="px-6 py-3 bg-primary text-white rounded-full text-base hover:bg-secondary hover:text-primary transition-colors duration-300 uppercase"
                  onClick={handleClick}
                >
                  J&apos;ai un projet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Description */}
        <div className={`mt-12 py-12 px-6 lg:mt-20 lg:py-20 lg:px-12 opacity-0 ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_forwards]' : ''} border border-[#0A0B2E]/10 rounded-3xl`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 rounded-full text-sm border border-[#0A0B2E]/20 text-[#0A0B2E] mb-4 uppercase hover:bg-[#0A0B2E] hover:text-white transition-colors duration-300">
                Marque employeur
              </span>
              <ul className="text-lg font-light text-[#0A0B2E]/70 leading-relaxed mb-8">
                {
                  brandList.map(listItem => {
                    return (<li key={listItem} className="flex items-center">
                      <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                      {listItem}
                    </li>)
                  })
                }
              </ul>
              <p className="text-lg font-normal text-[#0A0B2E]/70 leading-relaxed mb-8 space-y-2">
                Attirez des talents et fidélisez vos collaborateurs en les valorisant en vidéos.
              </p>
              <div className="flex justify-left">
                <button
                  className="px-6 py-3 bg-primary text-white rounded-full text-base hover:bg-secondary hover:text-primary transition-colors duration-300 uppercase"
                  onClick={handleClick}
                >
                  J&apos;ai un projet
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden max-w-[90%] lg:max-w-[80%] mx-auto group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/marque_employeur.jpg"
                  alt="Studio de production vidéo avec fond vert"
                  className="w-[102%] h-auto object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  width={500}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Marque Employeur</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;
