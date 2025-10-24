'use client';

import Navigation from '../components/Navigation';
import ScrollIndicator from '../components/ScrollIndicator';
import ParticleSystem from '../components/ParticleSystem';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function PortfolioPreview() {
  return (
    <>
      <Navigation />
      <ScrollIndicator />
      <main>
        <ParticleSystem 
          particleCount={40}
          colors={['#6366F1', '#EC4899', '#10B981', '#8B5CF6']}
          speed={0.5}
          size={2}
        />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}