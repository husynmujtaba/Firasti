import React from 'react';
import HeroSection from '../components/HeroSection';
import SeasonalHighlights from '../components/SeasonalHighlights';
import TopDestinations from '../components/TopDestinations';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SeasonalHighlights />
      <TopDestinations />
      <Testimonials />
    </>
  );
}