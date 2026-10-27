
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rosewood: '#300d20',
        cream: '#fff4f6',
        'deep-rose': '#50142f',
        rose: '#e75480',
        pink: '#ff9dbd',
        'light-pink': '#ffd8e5',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
