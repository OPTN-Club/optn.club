module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'offwhite': 'rgb(250, 245, 236)',
        'dark': 'hsl(191, 30%, 5%)',
        'dark-accent': 'hsl(191, 30%, 9%)',
        'optn-red': '#ed254e',
        'optn-yellow': 'rgb(255, 189, 51)',
        'optn-blue': {
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
        'ghost': 'rgba(231, 241, 243, 1)',
        'light-mist': 'rgba(193, 216, 220, 1)',
        'dark-blue': {
          DEFAULT: 'rgba(0, 26, 44, 1)',
          '800': 'rgba(193, 216, 220, 0.05)',
          '700': 'rgba(193, 216, 220, 0.15)',
        },
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
