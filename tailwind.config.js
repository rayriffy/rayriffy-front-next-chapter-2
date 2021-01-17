const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
    },
  },
  darkMode: 'media',
  variants: {
    aspectRatio: ['responsive'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
  purge: [
    './**/*.html',
    './**/*.vue',
    './**/*.tsx',
    './**/*.ts',
    './**/*.jsx',
    './**/*.js',
  ]
}
