module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'fot-blue': {
          DEFAULT: 'hsl(191, 100%, 32%)',
          light: 'hsl(191, 93%, 72%)',
          dark: 'hsl(191, 100%, 10%)',
          darkest: 'hsl(191, 100%, 5%)',
        },
        'fot-green': {
          DEFAULT: 'hsl(169, 100%, 40%)',
          dark: 'hsl(169, 100%, 26%)',
        },
        'fot-yellow': {
          DEFAULT: 'rgb(255, 189, 51)',
        },
        'offwhite': {
          DEFAULT: 'rgb(250, 245, 236)',
        },
      },
    },
  },
  plugins: [],
};
