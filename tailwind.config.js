/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       sedan:"'Sedan SC', serif" 
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [ "retro","luxury" ],
  },

}

