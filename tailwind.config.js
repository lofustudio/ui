/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999",
          400: "#888",
          500: "#666",
          600: "#444",
          700: "#333",
          800: "#111",
          900: "#000",
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
