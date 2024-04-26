/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '1-stack': '0px 10px 15px -3px #a3e635',
        '2-stack': '0px 10px 15px -3px #3730a3',
        '3-stack': '0px 10px 15px -3px #fbbf24',
      }
    },
  },
  plugins: [],
}

