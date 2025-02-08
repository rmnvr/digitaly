// pages/index.js
'use client';

import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
    </main>
  );
}
