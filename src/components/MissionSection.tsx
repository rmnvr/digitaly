'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        <div className={`mb-24 opacity-0 ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_forwards]' : ''}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/studio-video.jpg"
                alt="Studio de production vidéo avec fond vert"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full text-sm border border-[#0A0B2E]/20 text-[#0A0B2E] mb-4">
                NOTRE AGENCE
              </span>
              <h1 className="text-5xl font-bold text-[#0A0B2E] mb-8">
                Production vidéo<br />&amp; motion design
              </h1>
              <p className="text-lg text-[#0A0B2E]/80 leading-relaxed mb-8">
                Yalp est une agence vidéo et une agence motion design implantée à Paris,
                Rennes et Lyon, spécialisée dans la création de contenus vidéo sur-mesure
                pour les entreprises. Nous accompagnons nos clients dans la réalisation de
                projets adaptés à leurs enjeux de communication, marketing et marque
                employeur, avec des formats variés comme les spots publicitaires, les
                vidéos de présentation, le motion design ou encore les vidéos valorisant la
                marque employeur.
              </p>
              <button className="px-6 py-3 bg-[#0A0B2E] text-white rounded-full hover:bg-[#0A0B2E]/90 transition-colors">
                J&apos;ai un projet
              </button>
            </div>
          </div>
        </div>

        <h2
          className={`text-4xl font-bold text-center mb-16 opacity-0 text-[#0A0B2E]
            ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_forwards]' : ''}`}
        >
          Nos 2 axes
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Marketing Axe */}
          <div
            className={`relative p-8 rounded-2xl opacity-0 overflow-hidden
              shadow-[0_4px_24px_-1px_rgba(255,107,74,0.1)]
              ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_0.3s_forwards]' : ''}`}
            style={{
              background: 'radial-gradient(circle at top left, rgba(255,107,74,0.08), rgba(255,138,107,0.03)), linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent -z-10"></div>
            <h3 className="text-2xl font-bold text-[#FF6B4A] mb-4">Marketing</h3>
            <p className="text-lg font-semibold text-[#0A0B2E]/90 mb-6">
              Objectif : Développement commercial
            </p>
            <ul className="space-y-3 text-[#0A0B2E]/80">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF6B4A] rounded-full mr-3"></span>
                Publicité RS/Cinéma/TV
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF6B4A] rounded-full mr-3"></span>
                Film entreprise / présentation entreprise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF6B4A] rounded-full mr-3"></span>
                Image de marque, notoriété
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF6B4A] rounded-full mr-3"></span>
                Formations
              </li>
            </ul>
          </div>

          {/* RH Axe */}
          <div
            className={`relative p-8 rounded-2xl opacity-0 overflow-hidden
              shadow-[0_4px_24px_-1px_rgba(107,43,139,0.1)]
              ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_0.6s_forwards]' : ''}`}
            style={{
              background: 'radial-gradient(circle at top left, rgba(107,43,139,0.08), rgba(139,60,173,0.03)), linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent -z-10"></div>
            <h3 className="text-2xl font-bold text-[#6B2B8B] mb-4">RH / Marque employeur</h3>
            <p className="text-lg font-semibold text-[#0A0B2E]/90 mb-6">
              Objectif : Valoriser et fidéliser vos collaborateurs + attirer des talents
            </p>
            <ul className="space-y-3 text-[#0A0B2E]/80">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6B2B8B] rounded-full mr-3"></span>
                Film entreprise axé marque employeur
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6B2B8B] rounded-full mr-3"></span>
                Portraits métiers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6B2B8B] rounded-full mr-3"></span>
                Interview collaborateurs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6B2B8B] rounded-full mr-3"></span>
                Annonce recrutement
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#6B2B8B] rounded-full mr-3"></span>
                Communication interne
              </li>
            </ul>
          </div>
        </div>

        {/* Notre force */}
        <div
          className={`mt-16 text-center opacity-0
            ${isVisible ? 'animate-[fadeIn_0.6s_ease-in-out_0.9s_forwards]' : ''}`}
        >
          <h3 className="text-2xl font-bold text-[#0A0B2E] mb-4">Notre force, notre différence</h3>
          <p className="text-xl text-[#0A0B2E]/80">
            Émotions grâce au storytelling + qualité d&apos;image
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
