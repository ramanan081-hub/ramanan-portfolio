/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFFFF',
          100: '#FAF9F6', // Off-white liquid background
          200: '#F2F3EF', // Soft frosted panel
          300: '#E2E5DD', // Soft borders
          400: '#C8CCC0',
        },
        sage: {
          400: '#8A9784',
          500: '#6E7A68', // Muted elegant sage
          600: '#596553', // Deep sage hover
          700: '#465141',
        },
        ink: {
          900: '#141613', // Deep slate primary
          800: '#2A2E28', // Headings
          600: '#4A5047',
          500: '#646B60', // Muted text
          400: '#8E9689',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(110, 122, 104, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.03)',
        'glass-hover': '0 20px 40px -15px rgba(89, 101, 83, 0.15), 0 2px 6px 0 rgba(0, 0, 0, 0.04)',
        'glass-card': '0 4px 24px -2px rgba(20, 22, 19, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
      }
    },
  },
  plugins: [],
}
