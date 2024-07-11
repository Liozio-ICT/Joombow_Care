/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'montserrat':  ["Montserrat", 'sans-serif'],
        clash: ["ClashDisplay-Bold"],
      },
      colors: {
        "dark-1": "#2D2929",
        "dark-2": "#7F7979",
        "brand-red": "#FD1014",
      },
    },
  },
  plugins: [],
};
