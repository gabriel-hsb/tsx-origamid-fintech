/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-main": "#463220",
        "brown-light": "#66593c",
        "cream-main": "#eceadd",
        "cream-secondary": "#f7f8f5",
      },
    },
  },
  plugins: [],
};
