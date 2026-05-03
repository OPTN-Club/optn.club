module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        /**
         * Semantics
         */
        // Text colors
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        'foreground-subtle': 'rgb(var(--color-foreground-subtle) / <alpha-value>)',

        // Backgrounds
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        'surface-inset': 'rgb(var(--color-surface-inset) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--color-surface-elevated) / <alpha-value>)',

        // Other
        primary: {
          50: 'hsl(var(--color-primary-50) / <alpha-value>)',
          500: 'hsl(var(--color-primary-500) / <alpha-value>)',
          700: 'hsl(var(--color-primary-700) / <alpha-value>)',
          1100: 'hsl(var(--color-primary-1100) / <alpha-value>)',
        },
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',

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