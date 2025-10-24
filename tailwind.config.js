/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#EC4899',
        accent: '#10B981',
        background: '#0F0F23',
        surface: '#1A1A2E',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
        particle: '#8B5CF6',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-custom': 'pulse 2s ease-in-out infinite',
        'aurora': 'aurora 25s linear infinite',
        'bounce-custom': 'bounce 2s infinite',
        'fadeIn': 'fadeIn 0.8s ease forwards',
        'slideInLeft': 'slideInLeft 0.8s ease forwards',
        'slideInRight': 'slideInRight 0.8s ease forwards',
        'slideInUp': 'slideInUp 0.8s ease forwards',
        'skillLoad': 'skillLoad 2s ease-out',
        'particleExplode': 'particleExplode 0.6s ease-out forwards',
        'trailExplosion': 'trailExplosion 1s ease-out forwards',
        'dotBounce': 'dotBounce 1.4s ease-in-out infinite both',
        'fieldFloat': 'fieldFloat 3s ease-in-out infinite',
        'floatUp': 'floatUp 10s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        aurora: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '50%': { transform: 'translateX(100%) rotate(180deg)' },
          '100%': { transform: 'translateX(-100%) rotate(360deg)' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '40%': { transform: 'translateX(-50%) translateY(-10px)' },
          '60%': { transform: 'translateX(-50%) translateY(-5px)' },
        },
        fadeIn: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        skillLoad: {
          from: { width: '0%' },
          to: { width: 'var(--skill-width, 0%)' },
        },
        particleExplode: {
          '0%': { opacity: '1', transform: 'scale(1) translate(0, 0)' },
          '100%': { opacity: '0', transform: 'scale(0.5) translate(var(--particle-x, 0), var(--particle-y, 0))' },
        },
        trailExplosion: {
          '0%': { opacity: '1', transform: 'scale(1) translate(0, 0)' },
          '100%': { opacity: '0', transform: 'scale(0.3) translate(var(--trail-x, 0), var(--trail-y, 0))' },
        },
        dotBounce: {
          '0%, 80%, 100%': { transform: 'scale(0)' },
          '40%': { transform: 'scale(1)' },
        },
        fieldFloat: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: '1' },
        },
        floatUp: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(1)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}