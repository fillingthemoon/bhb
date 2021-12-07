import NavBar from './navbar'
import Footer from './footer'

import { Flex, Container } from '@chakra-ui/react'

const Layout = (props) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <NavBar />
      <Container maxW="container.xl" flexGrow="1" mb={20} mt={16}>
        {props.children}
      </Container>
      <Footer />
    </Flex>
  )
}

export default Layout
