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
      gridTemplateColumns: {
        "auto-auto-1fr": "auto auto 1fr",
        "240px-auto": "240px auto",
      },
    },
  },
  plugins: [],
};
