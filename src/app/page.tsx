// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <Head>
        <title>Page d&apos;accueil avec vidéo en arrière-plan</title>
      </Head>
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/KdFpPl_Rhz0?autoplay=1&mute=1&loop=1&playlist=KdFpPl_Rhz0&controls=0&modestbranding=1&showinfo=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Bienvenue sur ma page d&apos;accueil</h1>
      </div>
    </div>
  );
}
