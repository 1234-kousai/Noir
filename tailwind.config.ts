import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          primary: '#0A0A0A',
          gold: '#D4AF37',
          crimson: '#8B0000',
          dark: '#1A1A1A',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        serif: ['Noto Serif JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glitch': 'glitch 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)',
          },
          '50%': {
            opacity: '.9',
            boxShadow: '0 0 20px 10px rgba(212, 175, 55, 0.2)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glitch': {
          '0%, 100%': { 
            textShadow: '2px 2px 0 #D4AF37, -2px -2px 0 #8B0000',
            transform: 'translate(0)'
          },
          '20%': {
            textShadow: '2px 2px 0 #8B0000, -2px -2px 0 #D4AF37',
            transform: 'translate(-2px, 2px)'
          },
          '40%': {
            textShadow: '-2px -2px 0 #D4AF37, 2px 2px 0 #8B0000',
            transform: 'translate(-2px, -2px)'
          },
          '60%': {
            textShadow: '2px 2px 0 #8B0000, -2px -2px 0 #D4AF37',
            transform: 'translate(2px, -2px)'
          },
          '80%': {
            textShadow: '-2px -2px 0 #8B0000, 2px 2px 0 #D4AF37',
            transform: 'translate(2px, 2px)'
          },
        },
      },
    },
  },
  plugins: [],
}
export default config