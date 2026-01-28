/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar"
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    scrollbar
  ],
}
