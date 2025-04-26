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
  const footerRef = useRef<HTMLDivElement>(null!);

  return (
    <main>
      <HeroSection footerRef={footerRef} />
      <LogoBanner />
      <PromisesSection />
      <Portfolio footerRef={footerRef} />
      <YoutubeLink />
      <MissionSection footerRef={footerRef} />
      <Footer ref={footerRef} />
    </main>
  );
}