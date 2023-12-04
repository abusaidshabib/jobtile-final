/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ["Poiret One", "cursive"],
      neural: ["Young Serif", "serif"],
    },
    extend: {
      colors: {
        "main-v1": "#6d28d9",
        "main-v2": "#8b5cf6",
        "main-v3": "#FAF9F6",
        "main-v4": "#DDBDD5",
        "main-v5": "#c8c7c5",
        "main-v6": "#1D1E2C",
        "main-v7": "#6c757d",
        "main-v8": "#6cd4ff",
        "main-v9": "#FAF9F6",
        "pri-v1": "#e2d4f7",
        "pri-v2": "#D8EBFF",
        "pri-v3": "#DDCFFF",
        "pri-v4": "#1C2733",
        "pri-v5": "#323C47",
        "pri-v6": "#2274A5",
      },
    },
  },
  plugins: [],
};
