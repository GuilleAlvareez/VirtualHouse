/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulLogo: "#34b38a",
        azulLogoOscuro: "#1e7d60",
        grisOscuro: '#393e46',
        grisClaro: '#505762'
      }
    },
  },
  plugins: [],
}

