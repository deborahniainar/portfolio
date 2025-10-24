'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      // Check if we're near the bottom of the page (for contact section)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = scrollPosition + windowHeight;
      const isNearBottom = scrollBottom >= documentHeight - 100;
      
      if (isNearBottom) {
        setActiveSection('contact');
        return;
      }
      
      // Find the section that's most visible in the viewport
      let activeSection = 'home';
      let maxVisibility = 0;
      
      for (let i = 0; i < sections.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          const elementHeight = rect.height;
          
          // Calculate how much of the element is visible
          const visibleTop = Math.max(0, -elementTop);
          const visibleBottom = Math.min(elementHeight, windowHeight - elementTop);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / elementHeight;
          
          // Consider an element active if it's significantly visible or if its top is near the viewport top
          const isInViewport = elementTop <= 150 && elementBottom > 150;
          const visibility = isInViewport ? visibilityRatio + (elementTop <= 100 ? 0.5 : 0) : 0;
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            activeSection = sections[i];
          }
        }
      }
      
      setActiveSection(activeSection);
    };

    // Initial call to set the correct active section on load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${
      isScrolled ? 'bg-glass-bg backdrop-blur-[20px] border-b border-glass-border shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : 'bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <div className="relative">
          <span className="heading-sm text-text-primary font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
            Niaina
          </span>
        </div>
        
        <div className={`flex items-center gap-8 md:flex ${
          isMobileMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-glass-bg backdrop-blur-[20px] border border-glass-border border-t-0 flex-col gap-0 p-4 translate-y-0 opacity-100 visible' 
            : 'md:translate-y-0 md:opacity-100 md:visible -translate-y-full opacity-0 invisible absolute md:relative md:flex'
        } transition-all duration-300`}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`relative bg-none border-none text-text-secondary text-base font-medium cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg hover:text-text-primary hover:bg-white/5 w-full md:w-auto text-center ${
                activeSection === item.href.substring(1) ? 'text-primary' : ''
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <div className="absolute -bottom-2 md:bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-custom"></div>
              )}
            </button>
          ))}
        </div>
        
        <button
          className="md:hidden bg-none border-none cursor-pointer p-2 relative w-[30px] h-[30px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`relative block w-full h-0.5 bg-text-primary transition-all duration-300 ${
            isMobileMenuOpen ? 'bg-transparent' : ''
          } before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-text-primary before:transition-all before:duration-300 ${
            isMobileMenuOpen ? 'before:-top-0 before:rotate-45' : 'before:-top-2'
          } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-text-primary after:transition-all after:duration-300 ${
            isMobileMenuOpen ? 'after:-bottom-0 after:-rotate-45' : 'after:-bottom-2'
          }`}></span>
        </button>
      </div>
    </nav>
  );
}