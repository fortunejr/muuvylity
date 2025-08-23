/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#0e55c7",
        customYellow: "#FFAD00",
        
      }
    },
  },
  plugins: [],
}