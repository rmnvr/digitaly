// components/EmotionCycle.jsx
"use client";

import { useEffect, useRef } from "react";

const mots = ["du lien", "de la confiance", "de la mémorisation"];

const EmotionCycle = () => {
  const containerRef = useRef(null);
  const timeouts = useRef([]);

  useEffect(() => {
    let index = 0;
    const container = containerRef.current;
    if (!container) return;

    const next = (cb, delay) => timeouts.current.push(setTimeout(cb, delay));

    const renderLetters = (text) => {
      container.innerHTML = "";
      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = "0";
        span.style.transform = "translateX(-10px)";
        span.style.display = "inline-block";
        span.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        span.style.transitionDelay = `${i * 50}ms`;
        container.appendChild(span);
        requestAnimationFrame(() => {
          span.style.opacity = "1";
          span.style.transform = "translateX(0)";
        });
      });
    };

    const animate = () => {
      container.style.opacity = "0";
      next(() => {
        index = (index + 1) % mots.length;
        renderLetters(mots[index]);
        container.style.opacity = "1";
        next(animate, 2000);
      }, 300);
    };

    renderLetters(mots[0]);
    timeouts.current.push(setTimeout(animate, 2000));

    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="self-start lg:self-end mr-0 md:mr-8 text-[#0A0B2E]/80 lg:min-w-[673px]">
      Et l&apos;émotion crée
      <span className="inline-block ml-2 relative">
        <span ref={containerRef} className="block" />
      </span>
    </div>
  );
};

export default EmotionCycle;
