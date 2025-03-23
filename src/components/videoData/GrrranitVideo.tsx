import React from 'react';

const GrrranitVideo: React.FC = () => {
  return (
    <>
      <h2 className="text-lg font-bold mt-6">Problématique du client :</h2>
      <p className="text-gray-700 text-base">
        Le théâtre GRRRANIT souhaitait montrer l’importance des travaux lancés, expliquer clairement pourquoi il les réalisait, et mettre en avant son histoire ainsi que ses ambitions.
      </p>
      <h2 className="text-lg font-bold mt-6">La vidéo devait :</h2>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Raconter simplement l’histoire du GRRRANIT.
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Expliquer clairement pourquoi ces travaux étaient essentiels.
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Montrer comment ces travaux vont améliorer le théâtre.
        </li>
      </ul>
      <h2 className="text-lg font-bold mt-6">Proposition vidéo :</h2>
      <p className="text-gray-700 text-base">
        💡 Objectif : Expliquer simplement et visuellement pourquoi les travaux sont importants, et ce qu’ils vont apporter au public et aux artistes.
      </p>
      <ul className="mt-2 space-y-2">
        <li>🎥 <b>Interview</b> du directeur pour raconter clairement l’histoire et les raisons des travaux.</li>
        <li>🎥 <b>Images des travaux réalisés</b> (nouveau son, lumières, installations techniques) pour montrer clairement leur impact.</li>
        <li>🎥 <b>Images avant/après</b> pour visualiser concrètement les améliorations apportées.</li>
        <li>🎥 <b>Ton informatif et clair</b>, pour rendre la vidéo accessible à tous et valoriser l’importance du projet.</li>
      </ul>
      <p className="text-gray-700 text-base mt-4">
        📌 <b>Résultat attendu :</b> Une vidéo simple, claire et efficace, qui valorise les travaux du GRRRANIT et permet au public de comprendre leur utilité.      </p>
    </>
  );
};

export default GrrranitVideo;