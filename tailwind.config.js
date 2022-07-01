module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'hsl(191, 30%, 5%)',
        'dark-accent': 'hsl(191, 30%, 9%)',
        'fot-blue': {
          DEFAULT: 'hsl(191, 100%, 32%)',
          accent: 'hsl(191, 100%, 36%)',
          light: 'hsl(191, 93%, 72%)',
          dark: 'hsl(191, 100%, 10%)',
          darkest: 'hsl(191, 100%, 5%)',
          '50': 'hsl(191, 100%, 72%)',
          '100': 'hsl(191, 100%, 64%)',
          '200': 'hsl(191, 100%, 56%)',
          '300': 'hsl(191, 100%, 48%)',
          '400': 'hsl(191, 100%, 40%)',
          '500': 'hsl(191, 100%, 32%)',
          '600': 'hsl(191, 100%, 24%)',
          '700': 'hsl(191, 100%, 16%)',
          '800': 'hsl(191, 100%, 10%)',
          '900': 'hsl(191, 100%, 1%)',
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
