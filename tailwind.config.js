/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'bg-texture': "url('/assets/bg1.jpg')",
      // },
      colors: {
        wyellow: '#ffc72d',
        wblue: '#1e6ef3',
        wcyan: '#3ecce1',
        wblack: '#191b1f',
        wred: '#fe8157',
      },
    },
  },
  plugins: [],
};
