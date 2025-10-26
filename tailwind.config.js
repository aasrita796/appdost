/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0a192f',
        'navy': '#112240',
        'light-slate': '#ccd6f6',
        'slate': '#8892b0',
        'teal': '#64ffda',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Poppins', 'monospace'],
      }
    },
  },
  plugins: [],
}