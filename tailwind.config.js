/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#800000",
        gold: "#FFB22C",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        Japanenglish: ['Japanenglish', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
