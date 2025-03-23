import React from 'react';

interface VideoDescriptionProps {
  description?: string;
  defaultDescription: string;
}

const GrrranitVideo: React.FC<VideoDescriptionProps> = ({ description, defaultDescription }) => {
  return (
    <>
      <p className="text-gray-700 text-base">
        {description || defaultDescription}
      </p>
      <ul className="mt-6 space-y-2">
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Conception du script & storyboard
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Création graphique
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Animation, voix-off & sound design
        </li>
      </ul>
    </>
  );
};

export default GrrranitVideo;