/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'cobalt': {
        '50': '#f1f6fd',
        '100': '#dfeafa',
        '200': '#c6daf7',
        '300': '#9ec3f2',
        '400': '#70a3ea',
        '500': '#4f82e2',
        '600': '#3a66d6',
        '700': '#3152c4',
        '800': '#2d449f',
        '900': '#293c7f',
        '950': '#1d264e',
    }},
    },
  },
  plugins: [],
  
}