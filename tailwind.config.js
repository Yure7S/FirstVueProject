/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './src/**/*.vue',
    './src/views/**/*.vue',
    './src/components/**/*.vue',
  ],
  theme: {
    extend: {},
    colors: {
      'base': '#000000',
      'main': '#F59E0B',
      'secondary': '#ffebc9',
      'error': '#d10f0f',
      'success': '#0fd153',
      'alert': '#ffa70f',
      colortx: {
        'white': '#ffffff',
        'dark': '#000000',
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1380px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
