/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "geopostcodes-navy": "#002d5b",
        "geopostcodes-lb": "#d8e8f3",
      },
    },
    fontFamily: {
      geo: ["Lexend", "Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
