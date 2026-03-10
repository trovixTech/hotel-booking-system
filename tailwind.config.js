/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'shimmer-glass': {
          '0%': { 
            backgroundPosition: '-200% 0',
            transform: 'scale(1)',
            filter: 'brightness(1)' 
          },
          '50%': { 
            transform: 'scale(1.05)',
            filter: 'brightness(1.5)' 
          },
          '100%': { 
            backgroundPosition: '200% 0',
            transform: 'scale(1)',
            filter: 'brightness(1)' 
          },
        },
      },
      animation: {
        'shimmer-glass': 'shimmer-glass 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
  },
};