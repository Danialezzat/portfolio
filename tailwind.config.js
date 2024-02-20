/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-light": "url('../public/images/background-white.jpg')",
        "hero-dark": "url('../public/images/background-dark.jpg')",
      },
      fontFamily: {
        'Pacifico': ["Pacifico", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
