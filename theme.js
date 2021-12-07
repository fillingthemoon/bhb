import { extendTheme } from '@chakra-ui/react'

import { black, grayD, gray, grayL, primary, red, yellow, green, blue } from './helper-files/colors'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: black,
      },
    },
  },
  colors: {
    primary: {
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
    returnBtn: {
      500: red,
    },
    feedbackBtn: {
      500: black,
    },
  },
  fonts: {
    body: 'Avenir Next',
    heading: 'Avenir Next',
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
