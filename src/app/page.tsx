'use client';

import HeroSection from '@/components/HeroSection';
import Portfolio from '@/components/Portfolio';
import MissionSection from '@/components/MissionSection';
import Footer from '@/components/Footer';
import YoutubeLink from '@/components/YoutubeLink';
import LogoBanner from '@/components/LogoBanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoBanner /> {/* Ajouter le bandeau de logos ici */}
      <MissionSection />
      <Portfolio />
      <YoutubeLink />
      <Footer />
    </main>
  );
}