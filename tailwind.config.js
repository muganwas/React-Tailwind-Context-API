const colors = require('tailwindcss/colors');

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
    colors: {
      ...colors,
      orange: {
        light: '#FFBD00',
        medium: '#FFBD00',
        dark: '#FF6200'
      },
      red: {
        light: '#F83A2F',
        medium: '#FD0014',
        dark: '#D7001A'
      },
      green: {
        light: '#00D166',
        '200': '#00AA9C',
        '300': '#008487',
        medium: '#00636E',
        '500': '#004A50',
        dark: '#003D43',
      },
      gray: {
        light: '#EEEEEE',
        medium: '#DDDDDD',
        dark: '#888888',
      },
      blue: {
        sky: '#0099E1',
        dark: '#043562',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F48A21',
      'secondary': '#2ECC71',
      'danger': '#F8F8F8'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#F48A21',
      'secondary': '#888888',
      'danger': '#E74C3C',
    }),
    fontSize: {
      'xxs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
