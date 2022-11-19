/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      colors: {
        mainPink: "#BB99DD",
        bgWhite: "#E5E5E5",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        profilePic: "url('/assets/foto3x4.PNG')",
      },
      borderRadius: {
        full: '50%'
      },
      minWidth: {
        link: '300px'
      },
      maxWidth: {
        icons: '300px'
      }
    },
  },
  plugins: [],
}
