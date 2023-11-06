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
        'ghost-white': 'rgb(244, 244, 249)',
        'light-mist': 'rgb(193, 216, 220)',
        'sky-blue': 'rgb(117, 226, 250)',
        teal: 'rgb(0, 133, 163)',
        gunmetal: 'rgb(0, 42, 51)',
        'rich-black': 'rgb(0, 21, 26)',
        'canopy-green': 'rgb(0, 133, 108)',
        green: 'rgb(0, 204, 167)',
        red: 'rgb(237, 37, 78)',
        yellow: 'rgb(255, 189, 51)',
        dark: 'hsl(205, 100%, 9%)',
        secondary: 'hsl(222, 37%, 19%)',
        optn: {
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

        // 'optn-500': {
        // DEFAULT: 'hsl(191, 100%, 32%)',
        // accent: 'hsl(191, 100%, 36%)',
        // light: 'hsl(191, 93%, 72%)',
        // dark: 'hsl(191, 100%, 10%)',
        // darkest: 'hsl(191, 100%, 5%)',
        // },
      },
    },
  },
  plugins: [],
};

/*
Regex's for formatting export from coolers.co:

"hex": "([0-9a-fA-F]+)"
"hex": "#$1"

"(rgb|hsb|hsl|lab)": \[\n\s+(-?\d+),\n\s+(-?\d+),\n\s+(-?\d+)\n\s+\]
"$1": "$1($2, $3, $4)"

hsl\((\d+), (\d+), (\d+)\)
hsl($1, $2%, $3%)

"cmyk": \[\n\s+(\d+),\n\s+(\d+),\n\s+(\d+),\n\s+(\d+)\n\s+\]
"cmyk": "cmyk($1, $2, $3, $4)"

^\s+"(cmyk|hsb|lab)": .*,?\n
<empty>

,(\n\s+\})
$1

fot-blue: #0085A3
fot-light-blue: #75E2FA
#0095b7
#00151a
fot-dark-blue: #002A33
fot-green: #00CCA7
fot-yellow: #FFBD33
offwhite: #FAF5EC
*/
