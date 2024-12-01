/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
        Poppins: ['Poppins']
      },
      colors: {
        greenPlant: '#059212',
        grayCus: '#D9D9D9',
        greenDark:  '#12372A'
      }
    },
  },
  plugins: [],
}

