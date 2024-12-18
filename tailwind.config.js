/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        gray1: {
          DEFAULT: 'var(--gray1)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        lightGreen: {
          DEFAULT: 'var(--lightGreen)',
        },
        darkGreen: {
          DEFAULT: 'var(--darkGreen)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        darkBlue: {
          DEFAULT: 'var(--darkBlue)',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
      gridTemplateColumns: {
        autofill: 'repeat(auto-fill, minmax(24.75rem, 1fr))',
      },
      boxShadow: {
        cardShadow: '0px 0px 0px 1px #0000000F',
      },
      backgroundImage: {
        'custom-linear': 'linear-gradient(180deg, #15B79F 0%, #0E9382 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
