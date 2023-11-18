/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.jsx",
    "./src/*.jsx"
  ],
  theme: {
    extend: {

      backgroundImage :{
        image1 : "linear-gradient(180deg,#000000,#000E09)",
        image2 : "linear-gradient(180deg,#00FF2580,#00FF2580,#00FF2580,#36A54680,#000000) ",
        image3 : "linear-gradient(262deg, #0F2323 0%, #0F2323 40%)"
      },
      backgroundColor:{
        bgColor1 : "#5E5E5E82",
        bgColor2 : "#38383880",
      },

      colors:{
        customgreen : "#36A546CC",
        customgreen2 :"#36A546",
        customgreen3 : "#36A54680",
        customWhite : "#FFFFFF8C",
        customgray : "#1F191966",
        customgray2 : "#1A2C2C99",
        customgray3 : "#5E5E5E82"

      },
      boxShadow:{
        customShadow1 : "inset 0px 3px 3px #1F191966, 3px 3px 3px #4A494947",
        customShadow2 : "inset 2px 2px 2px #00000040"
      }
    },
  },
  plugins: [],
}

