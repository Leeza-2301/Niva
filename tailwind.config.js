/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f8ff",
          600: "#0f4c81",
          700: "#0a3558"
        }
      }
    }
  },
  plugins: []
};
