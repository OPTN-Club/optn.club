module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: '"Exo 2"',
        body: '"Work Sans"',
        mono: 'Inconsolata',
      },
      colors: {
        /**
         * Semantics
         */
        // Text colors
        foreground: 'rgb(244, 244, 249)',
        'foreground-subtle': 'rgb(193, 216, 220)',

        // Backgrounds
        background: 'rgb(0, 21, 26)',
        surface: 'hsl(205, 100%, 9%)',
        'surface-inset': 'rgb(193, 216, 220)',
        'surface-elevated': 'rgb(0, 42, 51)',

        // Other
        primary: {
          50: 'hsl(191, 100%, 47%)',
          100: 'hsl(191, 100%, 43%)',
          200: 'hsl(192, 92%, 41%)',
          300: 'hsl(192, 93%, 37%)',
          400: 'hsl(190, 100%, 32%)',
          500: 'hsl(191, 100%, 28%)',
          600: 'hsl(192, 95%, 25%)',
          700: 'hsl(192, 93%, 21%)',
          800: 'hsl(192, 100%, 17%)',
          900: 'hsl(192, 92%, 14%)',
          1000: 'hsla(190, 100%, 9%, 1)',
          1100: 'hsla(194, 93%, 5%, 1)',
          1200: 'hsla(190, 100%, 1%, 1)',
        },
        accent: 'rgb(255, 189, 51)',
        danger: 'rgb(237, 37, 78)',

        /**
         * Old colors
         */
        // 'ghost-white': 'rgb(244, 244, 249)',
        // 'light-mist': 'rgb(193, 216, 220)',
        // gunmetal: 'rgb(0, 42, 51)',
        // 'rich-black': 'rgb(0, 21, 26)',
        // red: 'rgb(237, 37, 78)',
        // yellow: 'rgb(255, 189, 51)',
        // dark: 'hsl(205, 100%, 9%)',
        // optn: {
        //   50: 'hsl(191, 100%, 47%)',
        //   100: 'hsl(191, 100%, 43%)',
        //   200: 'hsl(192, 92%, 41%)',
        //   300: 'hsl(192, 93%, 37%)',
        //   400: 'hsl(190, 100%, 32%)',
        //   500: 'hsl(191, 100%, 28%)',
        //   600: 'hsl(192, 95%, 25%)',
        //   700: 'hsl(192, 93%, 21%)',
        //   800: 'hsl(192, 100%, 17%)',
        //   900: 'hsl(192, 92%, 14%)',
        //   1000: 'hsla(190, 100%, 9%, 1)',
        //   1100: 'hsla(194, 93%, 5%, 1)',
        //   1200: 'hsla(190, 100%, 1%, 1)',
        // },
      },
    },
  },
  plugins: [],
};