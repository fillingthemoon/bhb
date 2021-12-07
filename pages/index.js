import Head from 'next/head'
import { Container, Heading, Stack } from '@chakra-ui/react'

const Home = () => {
  return (
    <Container maxW="container.md">
      <Head>
        <title>Believers Hymn Book</title>
      </Head>
      <Heading textAlign='center' mb="16" fontSize="3rem">
        Home
      </Heading>
      <Stack
        fontSize="lg"
        spacing={8}
        textAlign="justify"
        lineHeight="8"
      ></Stack>
    </Container>
  )
}

export default Home
