module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inconsolata', 'monospace'],
      Tourney: ['Tourney', 'cursive'],
    },
    extend: { colors: { lightBlack: '#181818', lightGreen: '#0fb' } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
