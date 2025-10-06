/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#0ea5e9", dark: "#0369a1" } },
      boxShadow: { soft: "0 10px 30px rgba(2,8,23,0.06)" }
    }
  },
  plugins: []
};
