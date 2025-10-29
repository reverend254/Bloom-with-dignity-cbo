/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: { 
    extend: {
      colors: {
        'gold': '#F7C81C',
        'soft-lavender': '#E8D5F2'
      }
    } 
  },
  plugins: [],
}