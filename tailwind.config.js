/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          nunito: ['Nunito', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }


  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          shimmer: 'shimmer 2s infinite linear',
        },
        keyframes: {
          shimmer: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
        },
      },
    },
    plugins: [],
  }
  

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]