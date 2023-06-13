import { extendTheme } from '@chakra-ui/react'

import { black, grayD, gray, grayL, white, primary, primaryDarkMode, red, yellow, green, blue } from './helper-files/colors'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        color: black,
      },
    },
  },
  colors: {
    primary: {
      200: primaryDarkMode,
      500: primary,
    },
    black: {
      500: black,
    },
    grayL: {
      500: grayL,
    },
    gray: {
      500: gray
    },
    grayD: {
      500: grayD,
    },
    white: {
      500: white,
    },
    red: {
      500: red,
    },
    yellow: {
      500: yellow,
    },
    green: {
      500: green,
    },
    blue: {
      500: blue,
    },
  },
  fonts: {
    body: 'Inter',
    heading: 'Inter',
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          bg: 'white',
        },
      },
    },
  },
})

export default theme
