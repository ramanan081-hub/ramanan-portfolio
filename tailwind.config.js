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
          100: '#F9F9F6', // Main background
          200: '#F1F2EE', // Alternate background (Stats bar)
          300: '#E5E7E2', // Borders
        },
        sage: {
          500: '#8B9585', // Accent/Buttons
          600: '#737C6C', // Hover state
        },
        ink: {
          900: '#1A1A1A', // Primary text
          800: '#333333', // Headings
          500: '#5A5A5A', // Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
