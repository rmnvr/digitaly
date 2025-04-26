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
      className="flex justify-between container mx-auto px-4 my-44 content-center"
    >
      <div className='grow small-screen-hidden'>
        <Image
          src="/images/digitaly_logo.svg"
          alt="Digitaly Logo"
          width={150}
          height={200}
          className="h-full w-auto 
            max-w-[80px] md:max-w-[500px]"
          priority
        />
      </div>
      <div
        className={`
          flex flex-col gap-12 text-5xl md:text-5xl font-light text-left xl:text-right text-[#0A0B2E]/80 align-middle
          transition-all duration-1000 ease-out delay-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
      >
        <div className=' flex flex-col gap-16'>
          <p>L&apos;humain est marqué par les <span className="text-secondary font-medium">histoires,</span></p>
          <p>Car les histoires créent de <span className="text-secondary font-medium">l&apos;émotion,</span></p>
          <p>Et l&apos;émotion crée de la <span className="text-secondary font-medium">confiance.</span></p>
        </div>
      </div>

    </div>
  );
};

export default PromisesSection;
