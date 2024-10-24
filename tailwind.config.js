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
        grisClaro: '#4c4c4c',
        grisLetraFooter: '#c4c4c4',
        lineaFooter: '#6c6c6c',
        propietario: '#d4d4d4',
        name: '#767676',
        testimonioColor: '#bebebe',
        colorTipo: '#9d9d9d'
      }
    },
  },
  plugins: [],
}

