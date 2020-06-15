module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    ...process.env.NODE_ENV === 'production' ? [
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.html', 
          './src/**/*.vue'
        ]
      }),
      require('cssnano')({
        preset: 'advanced',
      }),
    ] : []
  ]
}
