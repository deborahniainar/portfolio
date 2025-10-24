'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProfileImage from '../Image/Profile.jpg';

const skills = [
  { name: 'React/Next.js', level: 95, color: '#61DAFB' },
  { name: 'Node.js', level: 90, color: '#339933' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'Python', level: 80, color: '#7e3391ff' },
  { name: 'PostgreSQL', level: 75, color: '#FF9900' },
  { name: 'PHP', level: 70, color: '#ff0000ff' }
];

export default function About() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      className={`bg-gradient-to-b from-background via-surface to-background relative section ${
        isVisible ? '[&_.text-section]:opacity-100 [&_.text-section]:translate-x-0 [&_.skills-section]:opacity-100 [&_.skills-section]:translate-x-0' : ''
      }`}
      id="about" 
      ref={elementRef}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="text-section opacity-0 -translate-x-12 transition-all duration-800 delay-200">
            <h2 className="heading-lg mb-8 fade-in">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <div className="mb-12 fade-in">
              <p className="body-lg mb-6 text-text-secondary">
                Bonjour ! Je suis Niaina, développeur full-stack passionné par la création d'applications web et logicielles modernes. Avec une expertise en JavaScript et TypeScript, ReactJS et NexJS, Python; je transforme des idées en solutions performantes et intuitives qui offrent une expérience utilisateur exceptionnelle. Toujours curieuse et innovante, je cherche à relever des défis ambitieux et à laisser une vraie empreinte digitale.
              </p>
              <p className="body-lg text-text-secondary">
                Mon approche combine créativité et expertise technique pour livrer des solutions qui dépassent les attentes. J'aime relever des défis complexes et transformer des idées innovantes en réalité numérique.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
              <div className="glass p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
                <span className="heading-md text-primary block mb-2">10+</span>
                <span className="body-sm">Projets réalisés</span>
              </div>
              <div className="glass p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1">
                <span className="heading-md text-primary block mb-2">3+</span>
                <span className="body-sm">Années d'expérience</span>
              </div>
            </div>
          </div>
          
          <div className="skills-section flex flex-col gap-8 opacity-0 translate-x-12 transition-all duration-800 delay-400 md:order-none order-first">
            <div className="glass p-8 rounded-[20px] text-center relative fade-in">
              <div className="relative w-[120px] h-[120px] mx-auto mb-6">
                <img 
                  src={typeof ProfileImage === 'string' ? ProfileImage : ProfileImage.src}
                  alt="Niaina Deborah - Développeuse Web"
                  width={200}
                  height={200}
                  className="w-full h-full rounded-full object-cover border-[3px] border-primary"
                />
                <div className="absolute -top-2.5 -left-2.5 -right-2.5 -bottom-2.5 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-[20px] -z-10 animate-pulse-custom [animation-duration:3s]"></div>
              </div>
              <h3 className="heading-sm text-text-primary mb-2">Niaina Deborah</h3>
              <p className="body-md text-text-secondary">Développeuse Web</p>
            </div>
            
            <div className="bg-glass-bg backdrop-blur-[20px] border border-glass-border rounded-[20px] p-8 fade-in">
              <h3 className="heading-sm mb-8 text-center text-text-primary">Compétences</h3>
              <div className="flex flex-col gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="p-4 rounded-xl cursor-pointer glass-hover"
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="body-md">{skill.name}</span>
                      <span className="body-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded overflow-hidden relative">
                      <div 
                        className="h-full rounded transition-all duration-800 relative animate-skillLoad"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: activeSkill === index ? `0 0 20px ${skill.color}` : 'none',
                          '--skill-width': `${skill.level}%`
                        } as React.CSSProperties}
                      >
                        {activeSkill === index && (
                          <div className="absolute -top-2.5 -right-1.25 w-5 h-5">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i}
                                className="absolute w-1 h-1 rounded-full animate-particleExplode"
                                style={{ 
                                  backgroundColor: skill.color,
                                  animationDelay: `${i * 0.1}s`,
                                  transform: i === 0 ? 'translate(0, 0)' : 
                                            i === 1 ? 'translate(5px, -5px)' :
                                            i === 2 ? 'translate(-5px, -5px)' :
                                            i === 3 ? 'translate(8px, 3px)' : 'translate(-8px, 3px)'
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}