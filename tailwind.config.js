/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        flicker: "flicker 1s infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.2",
          },
        },
      },
    },
  },
  plugins: [],
};
