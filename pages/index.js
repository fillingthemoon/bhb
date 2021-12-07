import Head from 'next/head'
import {
  Container,
  Heading,
  Stack,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react'

const Home = () => {
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <Container maxW="container.md">
      <Head>
        <title>Believers Hymn Book</title>
      </Head>
      <Heading textAlign="center" mb="16" fontSize="3rem">
        Home
      </Heading>
      <form>
        <Flex justify="center">
          <Input maxW='400px' placeholder="Enter a phrase or hymn number" />
          <Button ml={4} colorScheme="primary" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
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
