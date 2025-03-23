import React from 'react';

const AgeDorVideo: React.FC = () => {
  return (
    <>
      <h2 className="text-lg font-bold mt-6">Problématique du client :</h2>
      <p className="text-gray-700 text-base">
        L&apos;entreprise a du mal à recruter car le métier est complexe et exigeant. Il faut des personnes bienveillantes et engagées pour accompagner les personnes.
      </p>
      <h2 className="text-lg font-bold mt-6">Objectif :</h2>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Changer l&apos;image du métier et donner envie.</li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Mettre en avant le bien-être et la satisfaction des employés.</li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Humaniser l&apos;entreprise avec des témoignages.</li>
      </ul>
      <h2 className="text-lg font-bold mt-6">Proposition :</h2>
      <p className="text-gray-700 text-base">
        💡 Objectif : Donner envie de rejoindre l&apos;équipe en montrant une entreprise où il fait bon travailler sous un ton chaleureux et sincère.
      </p>
      <p className="text-gray-700 text-base">
        La vidéo plonge le spectateur dans le quotidien des employés pour donner une vision réaliste et humaine du métier.
      </p>
      <ul className="mt-2 space-y-2">
        <li>🎥 Témoignages d&apos;employés → Ils racontent leur expérience pour inspirer et rassurer les futurs candidats.</li>
        <li>🎥 Valeurs humaines → L&apos;entraide et la bienveillance sont mises en avant pour attirer des profils alignés.</li>
        <li>🎥 Scènes du quotidien → Des images du travail réel pour montrer le sens et la richesse du métier.</li>
        <li>🎥 Un montage fluide, naturel et authentique, sans artifices.</li>
      </ul>
      <p className="text-gray-700 text-base mt-4">
        Un tournage, 3 versions : Documentaire 15min, Publicité 90 secondes, Recrutement 90 secondes.
      </p>
    </>
  );
};

export default AgeDorVideo;