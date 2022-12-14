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
        primary: '#F05D5E',
        secondary: '#E7ECEF',
        tertiary: '#0F7173',
      },
    },
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
   }),
  ],
}
