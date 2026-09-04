/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        cream: {
          50: '#fffdfb',
          100: '#fdf6ef',
          200: '#f8e8d8',
          300: '#f0d4ba',
          400: '#e6b994',
          500: '#d99b6e',
          600: '#c97f4f',
          700: '#a8643f',
          800: '#875236',
          900: '#6b432e',
        },
        blush: {
          50: '#fff5f6',
          100: '#ffe7ea',
          200: '#ffd0d8',
          300: '#ffb0bf',
          400: '#ff8aa3',
          500: '#f5678a',
          600: '#e04a72',
          700: '#bd385c',
          800: '#9c2f4d',
          900: '#7e2a42',
        },
        cocoa: {
          50: '#faf6f3',
          100: '#f0e6df',
          200: '#e0cdc0',
          300: '#c9a98f',
          400: '#a87f5e',
          500: '#8a6347',
          600: '#6f4e38',
          700: '#573d2c',
          800: '#3e2c20',
          900: '#271b14',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e3ece4',
          200: '#c7d8ca',
          300: '#a3bba8',
          400: '#7d9a84',
          500: '#5d7c64',
          600: '#48634f',
          700: '#3a5040',
          800: '#2f4034',
          900: '#243228',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
