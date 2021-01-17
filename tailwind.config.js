const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      primary:colors.orange,

      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      pink: colors.pink,
      green: colors.green,
    },
    minHeight:{
      '3/4': '75%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
