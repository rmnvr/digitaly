'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface MissionSectionProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Agency Description */}
        <div className={`mt-24 mb-36 opacity-0 ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_forwards]' : ''} border border-[#0A0B2E]/10 rounded-[32px] px-8 lg:px-12 py-10 lg:py-16`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative overflow-hidden max-w-[80%] mx-auto group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/happy_face_1.png"
                  alt="Studio de production vidéo avec fond vert"
                  className="w-[102%] h-auto object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  width={500}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Happy Face ^^</p>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h1 className="text-xl md:text-5xl font-extralight text-[#0A0B2E] mb-8 leading-relaxed">
                Objectif Commercial
              </h1>
              <p className="text-lg font-normal text-[#0A0B2E]/70 leading-relaxed mb-2 space-y-2">
                Renforcez votre image de marque et votre notoriété,<br />
                démarquez-vous de vos concurrents et augmentez votre
                visibilité.
              </p>
              <ul className="text-lg font-light text-[#0A0B2E]/70 leading-relaxed mb-8">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Présentation d&apos;entreprises
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Pubs commerciales
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Témoignages de clients
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Corporate
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agency Description */}
        <div className={`mb-10 lg:mb-20 opacity-0 ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_forwards]' : ''} border border-[#0A0B2E]/10 rounded-[32px] px-8 lg:px-12 py-10 lg:py-16`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-xl md:text-5xl font-extralight text-[#0A0B2E] mb-8 leading-relaxed">
                Marque Employeur
              </h1>
              <p className="text-lg font-normal text-[#0A0B2E]/70 leading-relaxed mb-2 space-y-2">
                Attirez des talents et fidélisez vos collaborateurs en les valorisant en vidéos.
              </p>
              <ul className="text-lg font-light text-[#0A0B2E]/70 leading-relaxed mb-8">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Vidéos Portraits métiers
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Vidéos Présentation Entreprise
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Vidéos Annonces recrutements
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Vidéos Formations
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-[#0A0B2E]/50 rounded-full mr-2"></span>
                  Vidéos communication interne
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden max-w-[80%] mx-auto group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/happy_face_2.png"
                  alt="Studio de production vidéo avec fond vert"
                  className="w-[102%] h-auto object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  width={500}
                  height={300}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Happy face ^^</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-12">
          <button
            className="my-6 px-6 py-3 bg-primary text-white rounded-full text-base hover:bg-secondary hover:text-primary transition-colors duration-300 uppercase"
            onClick={handleClick}
          >
            J&apos;ai un projet
          </button>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;
