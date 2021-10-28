const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: "media", // false, // or 'media' or 'class' /* https://tailwindcss.com/docs/dark-mode */
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
    extend: {
      backgroundImage: {
        hero: `url('~assets/images/products/bottles-hero.png')`,
        heroMobile: `url('~assets/images/products/3-bottles.png')`,
        viagraCroppedMini: `url('~assets/images/products/bottle-viagra-cropped-mini.png')`,
        viagraCropped: `url('~assets/images/products/bottle-viagra-cropped.png')`,
      },
      margin: {
        "-1/5": "-20%",
      },
      inset: {
        "12/100": "12%",
        "5/100": "5%",
      },
      rotate: {
        "-30": "-30deg",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },

    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "27px",
        },
      ],

      xl: [
        "20px",
        {
          lineHeight: "30px",
        },
      ],

      "2xl": [
        "24px",
        {
          lineHeight: "36px",
        },
      ],

      "3xl": [
        "30px",
        {
          lineHeight: "45px",
        },
      ],

      "4xl": [
        "36px",
        {
          lineHeight: "54px",
        },
      ],

      "5xl": [
        "48px",
        {
          lineHeight: "72px",
        },
      ],

      "6xl": [
        "64px",
        {
          lineHeight: "96px",
        },
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: {
        100: "#FFDEDE",
        200: "#FFCDCE",
        300: "#FFACAD",
        400: "#FF8B8C",
        500: "#FF5A5B",
        600: "#E65152",
        700: "#CC4849",
        800: "#993637",
      },
      yellow: colors.amber,
      blue: {
        100: "#D4D4D9",
        200: "#BEBFC5",
        300: "#93959F",
        400: "#686A79",
        500: "#272a3f",
        600: "#232639",
        700: "#1f2232",
        800: "#1b1d2c",
      },
      pink: colors.fuchsia,
      beige: {
        100: "#FBF9F3",
        200: "#F8F6EE",
        300: "#F4F0E2",
        400: "#F0EBD6",
        500: "#E9E2C5",
        600: "#D2CBB1",
        700: "#BAB59E",
        800: "#8C8876",
      },
      primary: {
        light: "#272A3F",
        DEFAULT: "#272A3F",
        dark: "#272A3F",
      },
      secondary: {
        light: "#685879",
        DEFAULT: "#685879",
        dark: "#685879",
      },
      tertiary: {
        light: "#252D9B",
        DEFAULT: "#252D9B",
        dark: "#252D9B",
      },
      monochromatic: {
        grey: "#F7FAFD",
        blue: "#272A3F",
        purpleGrey: "#EBEFF7",
      },
      validation: {
        success: "#5CC689",
        error: "#EE7D52",
        secondary: "#685879",
        tertiary: "#B3ABBC",
        neutral: "#2196F3",
      },
      overlay: "#2B1E70",
    },
    fontFamily: {
      sans: ["Sora", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        lg: "4.375rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
