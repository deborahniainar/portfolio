'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section 
      className={`bg-gradient-to-b from-background to-surface relative section ${
        isVisible ? '[&_.info]:opacity-100 [&_.info]:translate-x-0 [&_.form-container]:opacity-100 [&_.form-container]:translate-x-0' : ''
      }`}
      id="contact" 
      ref={elementRef}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="info opacity-0 -translate-x-12 transition-all duration-800 delay-200">
            <h2 className="heading-lg mb-6 fade-in">
              Travaillons <span className="gradient-text">ensemble</span>
            </h2>
            <p className="body-lg text-text-secondary mb-12 fade-in">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je serais ravi de vous aider à concrétiser vos idées.
            </p>
            
            <div className="flex flex-col gap-6 fade-in">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-glass-bg border border-glass-border transition-all duration-300 glass-hover">
                <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  <div className="w-6 h-6 relative">
                    <div className="absolute w-5 h-3.5 border-2 border-white rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-3 h-2 border-l-2 border-r-2 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  </div>
                </div>
                <div>
                  <h4 className="heading-sm">Email</h4>
                  <p className="body-md">deborahniainar@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-glass-bg border border-glass-border transition-all duration-300 glass-hover">
                <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  <div className="w-6 h-6 relative">
                    <div className="absolute w-4 h-5 border-2 border-white rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-2 h-0.5 bg-white rounded-sm bottom-1 left-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
                <div>
                  <h4 className="heading-sm">Téléphone</h4>
                  <p className="body-md">+261 38 84 430 50</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-glass-bg border border-glass-border transition-all duration-300 glass-hover">
                <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                  <div className="w-6 h-6 relative">
                    <div className="absolute w-4 h-5 border-2 border-white rounded-[50%_50%_50%_50%/60%_60%_40%_40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                <div>
                  <h4 className="heading-sm">Localisation</h4>
                  <p className="body-md">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-container glass p-10 rounded-[20px] relative opacity-0 translate-x-12 transition-all duration-800 delay-400 fade-in">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-text-primary font-medium body-md">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-4 border-2 border-glass-border rounded-xl bg-white/5 text-text-primary font-inherit text-base transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-glow focus:bg-white/8"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-text-primary font-medium body-md">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-4 border-2 border-glass-border rounded-xl bg-white/5 text-text-primary font-inherit text-base transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-glow focus:bg-white/8"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-text-primary font-medium body-md">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="p-4 border-2 border-glass-border rounded-xl bg-white/5 text-text-primary font-inherit text-base transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-glow focus:bg-white/8"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-text-primary font-medium body-md">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="p-4 border-2 border-glass-border rounded-xl bg-white/5 text-text-primary font-inherit text-base transition-all duration-300 resize-y min-h-[120px] focus:outline-none focus:border-primary focus:shadow-glow focus:bg-white/8"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`px-8 py-4 border-none rounded-xl text-white font-semibold text-base cursor-pointer transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2 min-h-[56px] ${
                  isSubmitting ? 'bg-gradient-to-r from-primary to-primary' :
                  submitted ? 'bg-gradient-to-r from-accent to-accent' :
                  'bg-gradient-to-r from-primary to-secondary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)]'
                } ${(isSubmitting || submitted) ? 'cursor-not-allowed' : ''}`}
              >
                {isSubmitting && (
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-white animate-dotBounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                )}
                {submitted && (
                  <div className="w-6 h-6 relative">
                    <div className="w-full h-full rounded-full border-2 border-white relative">
                      <div className="absolute w-1.5 h-3 border-solid border-white border-r-2 border-b-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] rotate-45"></div>
                    </div>
                  </div>
                )}
                <span className="transition-opacity duration-300">
                  {isSubmitting ? 'Envoi en cours...' : submitted ? 'Message envoyé !' : 'Envoyer le message'}
                </span>
              </button>
            </form>
            
            {(isSubmitting || submitted) && (
              <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none rounded-[20px] overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-1 rounded-full animate-fieldFloat"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      backgroundColor: submitted ? 'var(--accent)' : 'var(--primary)',
                      top: `${[10, 20, 30, 40, 50, 60, 70, 80, 90, 15, 35, 75][i]}%`,
                      left: `${[10, 80, 30, 70, 20, 90, 40, 60, 15, 50, 85, 25][i]}%`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}