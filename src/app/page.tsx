// pages/index.js
'use client';

import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <Portfolio />
    </main>
  );
}
