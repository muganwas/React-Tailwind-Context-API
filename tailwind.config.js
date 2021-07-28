module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xsm': { 'max': '319px' },
      // => @media (max-width: 319px) { ... }
      'sm': { 'max': '639px' },
      // => @media (min-width: 320px) { ... }
      'md': { 'max': '767px' },
      // => @media (min-width: 640px) { ... }
      'lg': { 'max': '1279px' },
      // => @media (min-width: 768px) { ... }
      'xlg': { 'max': '1900px' },
      // => @media (min-width: 1280px) { ... }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F48A21',
      'secondary': '#2ECC71',
      'danger': '#E74C3C'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
