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
      'base-contrast': '#212121',
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
      '1': '640px',
      '2': '840px',
      '3': '1024px',
      '4': '1380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    height: {
      sm: '8px',
      md: '16px',
      lg: '500px',
      xl: '1000px',
      'full': '100%',
    },
    borderRadius: {
      'sm': '3px',
      DEFAULT: '.25rem',
      'lg': '8px',
    }
  },
  plugins: [],
}
