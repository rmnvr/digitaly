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
      <div
        className={`
          flex flex-col gap-12 text-3xl md:text-4xl 2xl:text-5xl font-light text-left text-[#0A0B2E]/80 align-middle
        `}
      >
        <div className=' flex flex-col gap-12 2xl:gap-16'>
          <p className={`transition-all duration-1000 ease-out delay-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>On fait des vidéos qui vont trouver vos prochains clients.</p>
          <p className={`transition-all duration-1000 ease-out delay-[700ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>On s&apos;occupe de tout, du script à la version finale.</p>
          <p className={`transition-all duration-1000 ease-out delay-[1300ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>Modifications illimitées jusqu&apos;à ce que vous soyez satisfait à 100%.</p>
                    <p className={`transition-all duration-1000 ease-out delay-[1300ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>Livraison en 10 jours.</p>
        </div>
      </div>

    </div>
  );
};

export default PromisesSection;
