const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {

    extend: {
      colors: {
        'gray': '#646464',
      },
      fontFamily: {
        // sans: ['Noto Sans TC',...fontFamily.sans],
        // serif: ['Playfair Display', ...fontFamily.serif]
      },
      letterSpacing: {
        normal: '.03em',
      },
      fontSize: {
        xs: ['12px', '18px'],
        sm: ['14px', '21px'],
        base: ['16px', '24px'],
        md: ['18px', '26px'],
        lg: ['20px', '30px'],
        xl: ['22px', '33px'],
        '2xl': ['24px', '36px'],
        '3xl': ['28px', '42px'],
        '4xl': ['36px', '54px'],
        '5xl': ['48px', '72px'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
