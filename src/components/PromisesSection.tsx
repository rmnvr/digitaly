import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

const PromisesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex lg:justify-around 2xl:justify-evenly container mx-auto px-4 my-32 lg:my-44 content-center"
    >
      <Image
        src="/images/digitaly_logo.svg"
        alt="Digitaly Logo"
        width={300}
        height={300}
        className="max-h-[272px] 2xl:max-h-[304px] small-screen-hidden xl:ml-[-20px] 2xl:ml-[-40px]"
        priority
      />

      <div
        className={`
          flex flex-col gap-12 text-3xl md:text-4xl 2xl:text-5xl font-light text-left xl:text-right text-[#0A0B2E]/80 align-middle
        `}
      >
        <div className=' flex flex-col gap-16 2xl:gap-20'>
          <p className={`transition-all duration-1000 ease-out delay-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>L&apos;humain est marqué par les <span className="text-secondary font-medium ">histoires,</span></p>
          <p className={`transition-all duration-1000 ease-out delay-[700ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>Car les histoires créent de <span className="text-secondary font-medium">l&apos;émotion,</span></p>
          <p className={`transition-all duration-1000 ease-out delay-[1300ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>Et l&apos;émotion crée de la <span className="text-secondary font-medium">confiance.</span></p>
        </div>
      </div>

    </div>
  );
};

export default PromisesSection;
