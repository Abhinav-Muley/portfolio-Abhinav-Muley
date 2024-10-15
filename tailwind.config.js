/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
    },

    extend: {

      colors:{ 
        shade_1:"#916CE7",
        shade_2:"#050505",
        shade_3:"#1E1E1E",
        shade_4:"#282828",
        shade_5:"#CCCCCC",
        shade_6:"#FFFFFF",
        shade_7:"#101010"
      },
    }, 
  },
  plugins: [],
}