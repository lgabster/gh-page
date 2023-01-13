/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00002a'
        }
      },
      inset: {
        'full': '100%'
      },
      opacity: {
        '10': '0.1',
        '90': '0.9'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
