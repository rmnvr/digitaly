// pages/index.js
'use client';

import HeroSection from '@/components/HeroSection';
import Portfolio from '@/components/Portfolio';
import MissionSection from '@/components/MissionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <Portfolio />
      <Footer />
    </main>
  );
}
