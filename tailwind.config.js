module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cmyk', 'night'],
    darkTheme: 'night',
    utils: true,
    themeRoot: ':root',
  },
}
