// components/TextAnimation.jsx
"use client";

import { useEffect, useRef } from "react";
import EmotionCycle from "./EmotionCycle";
import HoverStory from "./HoverStory";

const mots = ["pubs", "histoires"];

const TextAnimation = () => {
  const motRef = useRef(null);
  const rayureRef = useRef(null);
  const timeouts = useRef([]);

  useEffect(() => {
    const resetStyle = (el, styles) => {
      Object.assign(el.style, styles);
      void el.offsetWidth;
    };

    const animateText = (index = 0) => {
      const motEl = motRef.current;
      const rayure = rayureRef.current;
      if (!motEl || !rayure) return;

      const next = (cb, delay) => timeouts.current.push(setTimeout(cb, delay));

      resetStyle(rayure, {
        transition: "none",
        width: "0",
        opacity: "0",
        transform: "translateY(-50%)",
      });

      rayure.style.transition = "width 0.2s ease, opacity 0.8s ease, transform 0.8s ease";
      rayure.style.opacity = "1";

      next(() => {
        rayure.style.width = `${motEl.offsetWidth}px`;

        next(() => {
          motEl.style.transform = "translateY(20px)";
          motEl.style.opacity = "0";
          rayure.style.transform = "translateY(20px)";
          rayure.style.opacity = "0";

          next(() => {
            motEl.style.transition = "none";
            motEl.textContent = mots[(index + 1) % mots.length];
            motEl.style.transform = "translateY(-20px)";
            motEl.style.opacity = "0";
            void motEl.offsetWidth;

            motEl.style.transition = "transform 0.8s ease, opacity 0.8s ease";

            next(() => {
              motEl.style.transform = "translateY(0)";
              motEl.style.opacity = "1";

              next(() => {
                motEl.style.transform = "translateY(20px)";
                motEl.style.opacity = "0";

                next(() => {
                  motEl.style.transition = "none";
                  motEl.textContent = mots[index];
                  motEl.style.transform = "translateY(-20px)";
                  motEl.style.opacity = "0";
                  void motEl.offsetWidth;

                  motEl.style.transition = "transform 0.8s ease, opacity 0.8s ease";

                  next(() => {
                    motEl.style.transform = "translateY(0)";
                    motEl.style.opacity = "1";
                    next(() => animateText(index), 1000);
                  }, 50);
                }, 800);
              }, 2000);
            }, 50);
          }, 800);
        }, 1500);
      }, 100);
    };

    timeouts.current.push(setTimeout(() => animateText(0), 500));

    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="self-start ml-0 md:ml-8">
      L'Humain est marqué par les
      <span className="relative h-9 min-w-40 overflow-hidden ml-3">
        <span
          ref={motRef}
          className="absolute left-0 whitespace-nowrap transition-transform duration-800 ease-in-out"
        >
          pubs
        </span>
        <div
          ref={rayureRef}
          className="absolute h-1 bg-primary top-[27px] -translate-y-1/2 left-0 w-0 z-10 rounded-full"
        />
      </span>
    </div>
  );
};

export default TextAnimation;
