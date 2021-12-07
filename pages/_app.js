import Layout from '../components/layout'
import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
