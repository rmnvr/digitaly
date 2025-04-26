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
      className="container mx-auto px-4 my-44 content-center"
    >
      <div
        className={`
          flex flex-col gap-4 text-5xl md:text-7xl font-bold text-[#0A0B2E]/80 align-middle
          transition-all duration-1000 ease-out delay-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
      >
        <p className="text-secondary">Une première phrase.</p>
        <p>Suivie d&apos;une seconde.</p>
      </div>
    </div>
  );
};

export default PromisesSection;
