/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        sm: '550px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      fontFamily: {
        vt: 'VT323, monospace'
      }
    },
  },
  plugins: [],
}

