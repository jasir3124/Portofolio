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
        gold: "#FFB22C",
        maroon: "#800000",
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
