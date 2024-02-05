/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nameFont: ["Protest Guerrilla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
