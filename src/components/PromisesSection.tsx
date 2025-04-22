import React from 'react';

import TextAnimation from './TextAnimation';
import HoverStory from './HoverStory';
import EmotionCycle from './EmotionCycle';

const PromisesSection = () => {
  return (
    < div className="container mx-auto px-4 mt-24 mb-40 mobile-hidden" >
      <div className="flex flex-col gap-12 lg:gap-28 text-2xl md:text-4xl font-bold italic text-[#0A0B2E]/80">
        <TextAnimation />
        <HoverStory />
        <EmotionCycle />
      </div>
    </ div>
  );
};

export default PromisesSection;
