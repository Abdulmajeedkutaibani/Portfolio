module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inconsolata', 'monospace'],
    },
    extend: { colors: { lightBlack: '#181818' } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
