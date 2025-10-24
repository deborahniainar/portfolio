'use client';

import { useEffect, useState } from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import HeroParticleSystem from './HeroParticleSystem';

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const phrases = ["Full Stack Developer", "Web Designer"];
  const { elementRef } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: parallaxRef, offset } = useParallax(0.3);
  
  // Type-safe refs
  const sectionRef = elementRef as React.RefObject<HTMLElement>;
  const visualRef = parallaxRef as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let phraseIndex = 0;
    let typing = true;

    const animateText = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (typing) {
        // Typing animation
        if (currentIndex <= currentPhrase.length) {
          setText(currentPhrase.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(animateText, 100);
        } else {
          // Pause at the end of typing
          typing = false;
          setIsTyping(false);
          timeoutId = setTimeout(animateText, 2000);
        }
      } else {
        // Erasing animation
        if (currentIndex > 0) {
          setText(currentPhrase.slice(0, currentIndex - 1));
          currentIndex--;
          timeoutId = setTimeout(animateText, 50);
        } else {
          // Move to next phrase
          typing = true;
          setIsTyping(true);
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setCurrentPhraseIndex(phraseIndex);
          timeoutId = setTimeout(animateText, 500);
        }
      }
    };

    // Start animation after initial delay
    const initialTimer = setTimeout(() => {
      animateText();
    }, 1000);
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-[#1a1a3a] to-background"
      ref={sectionRef}
    >
      <HeroParticleSystem />
      
      {/* Aurora effect */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-primary/5 to-transparent animate-aurora pointer-events-none z-[2]"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1200px] w-full px-8 z-[3] relative">
        <div className="opacity-0 -translate-x-12 animate-slideInLeft">
          <h1 className="heading-lg mb-4 relative">
            <span className="gradient-text">Bonjour,</span>
            <br />
            Je suis <span className="heading-xl text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">Niaina</span>
          </h1>
          
          <div className="mb-8 h-16 flex items-center">
            <span className="heading-md text-text-secondary">
              {text}
              <span className={`text-primary transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </span>
          </div>
          
          <p className="body-lg text-text-secondary mb-12 max-w-[500px]">
            Passionnée par la création d'expériences numériques innovantes et performantes.
            Je transforme vos idées en solutions web modernes et élégantes.
          </p>
          
          <div className="flex gap-6 items-center flex-wrap">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-[50px] font-semibold text-base transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)] glass-hover">
              Voir mes projets
            </button>
            <button className="text-text-primary px-8 py-4 border-2 border-glass-border rounded-[50px] font-semibold text-base transition-all duration-300 bg-transparent hover:border-primary hover:text-primary hover:shadow-glow">
              Me contacter
            </button>
          </div>
        </div>
        
        <div 
          className="relative h-[500px] opacity-0 translate-x-12 animate-slideInRight md:block hidden"
          ref={visualRef}
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        >
          <div className="relative w-full h-full">
            {/* Floating element 1 */}
            <div className="absolute w-[200px] h-[120px] top-[20%] left-[10%] rounded-[20px] backdrop-blur-[20px] border border-glass-border bg-gradient-to-br from-primary/10 to-secondary/10 animate-float"></div>
            
            {/* Floating element 2 */}
            <div className="absolute w-[150px] h-[150px] top-[50%] right-[20%] rounded-full backdrop-blur-[20px] border border-glass-border bg-gradient-to-br from-secondary/10 to-accent/10 animate-float [animation-duration:8s] [animation-direction:reverse]"></div>
            
            {/* Floating element 3 */}
            <div className="absolute w-[100px] h-[180px] bottom-[20%] left-[30%] rounded-[20px] backdrop-blur-[20px] border border-glass-border bg-gradient-to-br from-accent/10 to-particle/10 animate-float [animation-duration:7s]"></div>
            
            {/* Floating element 4 */}
            <div className="absolute w-[80px] h-[80px] top-[10%] right-[10%] rounded-full backdrop-blur-[20px] border border-glass-border bg-gradient-to-br from-particle/10 to-primary/10 animate-pulse-custom [animation-duration:4s]"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-custom">
        <div className="w-0.5 h-[30px] bg-primary relative rounded-[2px]">
          <div className="absolute -bottom-[5px] -left-[3px] w-2 h-2 border-r-2 border-b-2 border-primary rotate-45"></div>
        </div>
      </div>
    </section>
  );
}