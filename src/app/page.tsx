'use client';

import { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import Portfolio from '@/components/Portfolio';
import MissionSection from '@/components/MissionSection';
import Footer from '@/components/Footer';
import YoutubeLink from '@/components/YoutubeLink';
import LogoBanner from '@/components/LogoBanner';
import PromisesSection from '@/components/PromisesSection';

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null!);

  return (
    <main>
      <HeroSection contactRef={contactRef} />
      <LogoBanner />
      <PromisesSection />
      <Portfolio contactRef={contactRef} />
      <YoutubeLink />
      <MissionSection ref={contactRef} />
      <Footer />
    </main>
  );
}