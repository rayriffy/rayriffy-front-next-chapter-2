module.exports = {
  plugins: {
      tailwindcss: "tailwind.config.js",
      //'@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'development',
      // autoprefixer: {},
      cssnano: {
        preset: 'advanced',
      }
  },
}
