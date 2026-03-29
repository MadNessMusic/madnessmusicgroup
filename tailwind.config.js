/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  accent: "#ed7651",
  accentSoft: "#ed7651cc",
  accentDark: "#c85f3f",
},
    },
  },
  plugins: [],
};