/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the logo
        'bloom-red': '#EA2E3B',
        'bloom-yellow': '#F7C81C', 
        'bloom-green': '#7BC74D',
        'bloom-teal': '#08A589',
      }
    },
  },
  plugins: [],
}