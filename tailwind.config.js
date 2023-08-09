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
      'base-contrast-02': '#454545',
      'main': '#F59E0B',
      'secondary': '#ededed',
      'error': '#d10f0f',
      'success': '#0fd153',
      'alert': '#ffa70f',
      colortx: {
        'white': '#ffffff',
        'dark': '#000000',
        'soft': '#6b6b6b'
      },
    },
    screens: {
      '1': '320px',
      '2': '840px',
      '3': '1024px',
      '4': '1040px',
      '5': '1380px',
      sm: '420px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    height: {
      sm: '8px',
      md: '500px',
      lg: '680px',
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
