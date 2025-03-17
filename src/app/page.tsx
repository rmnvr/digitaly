// pages/index.js
'use client';

import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import Portfolio from '@/components/Portfolio';
import MissionSection from '@/components/MissionSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <Portfolio />
      <ProductSection />
    </main>
  );
}
