/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'Krona':['Krona One','sans-serif'],
        'font-base':['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}

