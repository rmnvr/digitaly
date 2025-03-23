import React from 'react';

const VittoriVideo: React.FC = () => {
  return (
    <>
      <h2 className="text-lg font-bold mt-6">Problématique du client :</h2>
      <p className="text-gray-700 text-base">
        Le Groupe Vittori voulait rassurer ses clients (bailleurs sociaux) sur son sérieux, ses compétences et sa fiabilité.
      </p>
      <h2 className="text-lg font-bold mt-6">La vidéo devait :</h2>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Montrer que l’entreprise est professionnelle.
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Donner confiance à ses clients.
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Présenter clairement les différents métiers du groupe.
        </li>
      </ul>
      <h2 className="text-lg font-bold mt-6">Proposition vidéo :</h2>
      <ul className="mt-2 space-y-2">
        <li>🎥 <b>Interview du dirigeant</b> → Pour montrer son sérieux et ses valeurs.</li>
        <li>🎥 <b>Présentation des différentes activités</b> → Pour expliquer clairement tout ce que l’entreprise sait faire.</li>
        <li>🎥 <b>Images des équipes au travail</b> → Montrer leur professionnalisme et la qualité du travail réalisé.</li>
        <li>🎥 <b>Ton sérieux et rassurant</b> → Pour inspirer confiance aux clients lors de la présentation.</li>
      </ul>
    </>
  );
};

export default VittoriVideo;