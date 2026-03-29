/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  accent: {
    DEFAULT: "#ed7651",
    soft: "#ed7651cc",
    dark: "#c85f3f",
  },
  accentSoft: "var(--color-accent)",
  accentDark: "var(--color-accent)",
  accentContent: "var(--color-accent-content)",
  primary: "var(--color-primary)",
  primarySoft: "var(--color-primary)",
  primaryDark: "var(--color-primary)",
  primaryContent: "var(--color-primary-content)",

},
    },
  },
  plugins: [],
};