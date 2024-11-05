/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
      MuseoModerno: ["MuseoModerno", "sans-serif"],
    },

    extend: {

      cursor: {
        default: "url(../src/assets/cursor.png))",
        pointer: "url(../src/assets/cursor.png))",
      },

      colors:{ 
        shade_1:"#916CE7",
        shade_2:"#050505",
        shade_3:"#1E1E1E",
        shade_4:"#282828",
        shade_5:"#CCCCCC",
        shade_6:"#FFFFFF",
        shade_7:"#101010",
        shade_8:"#141414"
      },

      animation: {
        'ping': 'ping 1.3s linear infinite',
      }
    }, 
  },
  plugins: [],
}