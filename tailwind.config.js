/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      fontFamily: {
        PermanentMarker: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};
