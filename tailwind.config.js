const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  // purge: ['./**/*.{js,jsx,ts,tsx,vue}'],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: 'media', // false, // or 'media' or 'class' /* https://tailwindcss.com/docs/dark-mode */
  // darkMode: "class",
  // variants: {
  //   backgroundColor: [
  //     "dark",
  //     "dark-hover",
  //     "dark-group-hover",
  //     "dark-even",
  //     "dark-odd",
  //   ],
  //   borderColor: ["dark", "dark-focus", "dark-focus-within"],
  //   textColor: ["dark", "dark-hover", "dark-active"],
  // },

  theme: {
    boxShadow: {
      button: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      bottom: 'inset 0 -2px -4px 0 rgba(0, 0, 0, 0.06)',
      input: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      topbar:
        '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    screens: {
      sm: '375px',
      smd: '768px',
      md: '1024px',
      lg: '1152px',
      xl: '1440px',
    },

    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   green: '#C1ED7F',
    //   white: '#FFFFFF',
    //   orange: '#E6AB0B',
    //   primary: '#C1ED7F',
    //   secondary: '#FFED4A',
    //   regular: '#1DA1C2',
    //   danger: '#E3342F',
    //   blue: '#BFDEE0',
    //   'gray-lightest': '#ECECEC',
    //   black: '#111827',
    //   'black-gray': '#444444',
    //   'gray-300': '#D1D5DB',
    //   'gray-link': '#7B7979',
    //   'gray-popup': '#B3B3B3',
    //   'gray-search': '#DCDCDC',
    //   'gray-light': '#EDEDED',
    //   'gray-lighter': '#D1D1D1',
    //   'green-filter': '#a7c27f',
    //   'green-darker': '#79C20A',
    //   'green-darker-5': '#6CB500', // green-darker 5% darken
    //   'green-darker-30': '#2D7600', // green-darker 30% darken
    //   'gray-700': '#374151',
    //   'gray-400': '#6B7280'
    // },

    // backgroundColor: (theme: any) => ({
    //   ...theme('colors'),
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   green: '#C1ED7F',
    //   'custom-green': '#C1ED7F',
    //   'green-darker': '#79C20A',
    //   'green-darkest': '#4D7E02',
    //   'green-darker-5': '#6CB500', // green-darker 5% darken
    //   'green-darker-30': '#2D7600', // green-darker 30% darken
    //   gray: '#F2F2F2',
    //   'gray-banner': '#F4F5F7',
    //   'gray-exclusive-disabled': '#7B7979',
    //   'green-banner': '#A7C27F',
    //   'gray-light': '#EDEDED',
    //   'gray-lighter': '#ECECEC',
    //   'green-lightest': '#DDFBB2',
    //   'green-form-submit': '#A7C27F',
    //   'gray-50': '#F9FAFB',
    //   'gray-300': '#D1D5DB',
    //   'gray-600': '#4B5563',
    //   'gray-700': '#374151',
    //   'gray-900': '#111827',
    //   primary: '#C1ED7F',
    //   secondary: '#FFED4A',
    //   regular: '#1DA1C2',
    //   danger: '#E3342F',
    //   white: '#FFFFFF',
    //   orange: '#E6AB0B',
    //   'orange-darker-5': '#D99E00',
    //   blue: '#BFDEE0',
    //   'black-gray': '#444444',
    //   black: '#000000',
    //   filter: '#F5F5F7',
    //   'orange-overlay': '#EFD358',
    //   'banner-card': '#F3F4F6'
    // }),
    // borderColor: (theme: any) => ({
    //   ...theme('colors'),
    //   search: '#D1D5DB'
    // }

    extend: {
      // backgroundImage: {
      //   hero: `url('~assets/images/products/bottles-hero.png')`,
      //   heroMobile: `url('~assets/images/products/3-bottles.png')`,
      //   viagraCroppedMini: `url('~assets/images/products/bottle-viagra-cropped-mini.png')`,
      //   viagraCropped: `url('~assets/images/products/bottle-viagra-cropped.png')`,
      // },
      // margin: {
      //   '-1/5': '-20%',
      // },
      // inset: {
      //   '12/100': '12%',
      //   '5/100': '5%',
      // },
      // rotate: {
      //   '-30': '-30deg',
      // },
      // maxWidth: {
      //   '1/2': '50%',
      // },
      // spacing: {},
      // transitionProperty: {
      //   height: 'height',
      //   spacing: 'margin, padding',
      //   'max-height': 'max-height',
      //   rotate: 'rotate',
      // },
      // backgroundImage: {
      //   brush: "url('static/Brush.svg')",
      // },
      // backgroundSize: {
      //   'brush-big': '120% auto',
      // },
    },

    fontSize: {
      xs: [
        '12px',
        {
          lineHeight: '18px',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight: '21px',
        },
      ],
      base: [
        '16px',
        {
          lineHeight: '24px',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '27px',
        },
      ],

      xl: [
        '20px',
        {
          lineHeight: '30px',
        },
      ],

      '2xl': [
        '24px',
        {
          lineHeight: '36px',
        },
      ],

      '3xl': [
        '30px',
        {
          lineHeight: '45px',
        },
      ],

      '4xl': [
        '36px',
        {
          lineHeight: '54px',
        },
      ],

      '5xl': [
        '48px',
        {
          lineHeight: '72px',
        },
      ],

      '6xl': [
        '64px',
        {
          lineHeight: '96px',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      // gray: colors.coolGray,
      gray: {
        50: '#F9FAFB',
        100: '#ECECEC',
        300: '#D1D5DB',
        600: '#4B5563',
        700: '#374151',
        900: '#111827',
      },
      'black-gray': '#444444',
      'gray-banner': '#F4F5F7',
      // indigo: colors.indigo,
      indigo: {
        500: '#6366F1',
        600: '#4F46E5',
      },
      // red: {
      //   100: '#FFDEDE',
      //   200: '#FFCDCE',
      //   300: '#FFACAD',
      //   400: '#FF8B8C',
      //   500: '#FF5A5B',
      //   600: '#E65152',
      //   700: '#CC4849',
      //   800: '#993637',
      // },
      rose: {
        700: '#BE123C',
      },
      // yellow: colors.amber,
      // green: colors.green,
      green: '#79C20A',
      'green-light': '#C1ED7F',
      // blue: {
      //   100: '#D4D4D9',
      //   200: '#BEBFC5',
      //   300: '#93959F',
      //   400: '#686A79',
      //   500: '#272a3f',
      //   600: '#232639',
      //   700: '#1f2232',
      //   800: '#1b1d2c',
      // },
      // pink: colors.fuchsia,
      // beige: {
      //   100: '#FBF9F3',
      //   200: '#F8F6EE',
      //   300: '#F4F0E2',
      //   400: '#F0EBD6',
      //   500: '#E9E2C5',
      //   600: '#D2CBB1',
      //   700: '#BAB59E',
      //   800: '#8C8876',
      // },
      primary: {
        // light: '#272A3F',
        DEFAULT: '#79C20A',
        // dark: '#272A3F',
      },
      secondary: {
        // light: '#685879',
        DEFAULT: '#E6AB0B',
        // dark: '#685879',
      },
      tertiary: {
        // light: '#252D9B',
        DEFAULT: '#1DA1C2',
        // dark: '#252D9B',
      },
      // monochromatic: {
      //   grey: '#F7FAFD',
      //   blue: '#272A3F',
      //   purpleGrey: '#EBEFF7',
      // },
      // validation: {
      //   success: '#5CC689',
      //   error: '#EE7D52',
      //   secondary: '#685879',
      //   tertiary: '#B3ABBC',
      //   neutral: '#2196F3',
      // },
      // overlay: '#2B1E70',
    },
    fontFamily: {
      sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      // roboto: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '0',
      //   lg: '4.375rem',
      // },
    },
  },
  variants: {
    extend: {
      // backgroundColor: ['odd', 'even'],
    },
  },
  plugins: [],
}
