module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // 'xxs': { 'max': '260px' },
      // // => @media (max-width: 260px) { ... }
      'xs': { 'max': '319px' },
      // => @media (max-width: 319px) { ... }
      'sm': { 'max': '655px' },
      // => @media (min-width: 655px) { ... }
      'md': { 'max': '910px' },
      // => @media (min-width: 910px) { ... }
      'lg': { 'min': '911px', 'max': '1399px' },
      // => @media (min-width: 1399px) { ... }
      'xlg': { 'min': '1400px' },
      // => @media (max-width: 1400px) { ... }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F48A21',
      'secondary': '#2ECC71',
      'danger': '#E74C3C'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#F48A21',
      'secondary': '#888888',
      'danger': '#E74C3C',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
