'use client';

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
