/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive1: ["Petit Formal Script", "cursive"],
        cursive2: ["Borel", "cursive"],
        cursive3: ["Playwrite IN", "cursive"]
      },
    },
  },
  plugins: [],
};
