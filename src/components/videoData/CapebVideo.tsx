import React from 'react';

const CapebVideo: React.FC = () => {
  return (
    <>
      <p className="text-gray-700 text-base">
        La CAPEB avait besoin d’une vidéo pour présenter clairement son action auprès des collégiens : leur faire découvrir les métiers du bâtiment et donner envie à d’autres établissements scolaires d’organiser la même intervention.
      </p>
      <h2 className="text-lg font-bold mt-6">La vidéo devait :</h2>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Montrer concrètement l’intérêt et l’impact positif de cette journée pour les élèves.
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Donner envie à d’autres collèges d’accueillir cette action.
        </li>
        <li className="flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
            <path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Mettre en avant l’organisation et la pertinence de l’intervention.
        </li>
      </ul>
      <h2 className="text-lg font-bold mt-6">Proposition vidéo :</h2>
      <ul className="mt-2 space-y-2">
        <li>🎥 <b>Interview organisateur :</b> explique clairement l’intérêt et l’organisation des ateliers.</li>
        <li>🎥 <b>Images des collégiens en action :</b> pour montrer leur intérêt et leur implication.</li>
        <li>🎥 <b>Interviews (organisateur, directeur, intervenants) :</b> pour renforcer la crédibilité auprès des futurs collèges partenaires.</li>
      </ul>
    </>
  );
};

export default CapebVideo;