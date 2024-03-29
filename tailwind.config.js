/** @type {import('tailwindcss').Config} */
const { ProvidePlugin } = require('webpack');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8a817c',
        secondary: '#463f3a',
        tertiary: '#EEEEEE',
      },
    },
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
   }),

   require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
