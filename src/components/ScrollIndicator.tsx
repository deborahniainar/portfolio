'use client';

import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 w-1 h-screen bg-white/10 z-[999]">
      <div 
        className="w-full bg-gradient-to-b from-primary via-secondary to-accent transition-[height] duration-100 ease-linear relative"
        style={{ height: `${scrollProgress}%` }}
      >
        <div className="absolute -top-2.5 -left-0.5 -right-0.5 h-5 bg-gradient-to-b from-primary to-secondary blur-[8px] opacity-80"></div>
      </div>
    </div>
  );
}