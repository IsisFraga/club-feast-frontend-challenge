/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#01b4e4',
        'dark-blue': '#032541',
        'yellow-rate': '#d2d531',
      }
    },
    fontFamily: {
      sans: ['"Source Sans 3"', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}
