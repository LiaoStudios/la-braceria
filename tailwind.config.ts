import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary: the brace — fire & embers
        ember: {
          DEFAULT: '#C1440E',
          soft: '#D96A2B',
          deep: '#8E2F09',
        },
        brace: '#7B2414',
        // Wood / legno — dark sections
        wood: {
          DEFAULT: '#2A1B12',
          deep: '#180F09',
          bark: '#4A3121',
        },
        // Paglia / grano — straw accents
        straw: {
          DEFAULT: '#D7B36A',
          soft: '#E7D2A0',
        },
        // Backgrounds — parchment / sabbia
        parchment: '#F5EBD8',
        sand: '#EADBBE',
        ink: '#231710',
        brass: '#C89B3C',
      },
      fontFamily: {
        western: ['Rye', 'Zilla Slab', 'serif'],
        serif: ['"Zilla Slab"', 'Rockwell', 'Georgia', 'serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        script: ['Yellowtail', 'cursive'],
      },
      boxShadow: {
        warm: '0 20px 45px rgba(24, 15, 9, 0.14)',
        cta: '0 12px 30px rgba(193, 68, 14, 0.32)',
        ember: '0 0 40px rgba(217, 106, 43, 0.45)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '25%': { opacity: '0.85', transform: 'scale(1.03)' },
          '50%': { opacity: '0.95', transform: 'scale(0.98)' },
          '75%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        flicker: 'flicker 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
