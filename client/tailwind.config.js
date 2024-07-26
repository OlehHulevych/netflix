/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter", "sans-serif"],
      },
      backgroundImage:{
        'custom-gradient':'linear-gradient(to right, rgba(0,0,0,1) 20% , rgba(0,0,0,.7) 65% , rgba(0,0,0,.4) 80% , rgba(0,0,0,0) 100%) ',
      }
    },
    screens:{
      tablet:'280px'
    }
  },
  plugins: [],
}

