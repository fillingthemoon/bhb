import { useState } from 'react'

import Head from 'next/head'
import {
  useColorMode,
  useColorModeValue,
  Container,
  Stack,
  Flex,
  Input,
  Button,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const { colorMode, toggleColorMode } = useColorMode()
  const primaryColor = useColorModeValue('primary.500', 'primary.200')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const bhbRes = await fetch(
      '/api/bhb-songs',
      {
        body: JSON.stringify({
          name: event.currentTarget.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    )

    const result = await bhbRes.json()
    console.log(result)
  }

  return (
    <Container maxW="container.md">
      <Head>
        <title>Believers Hymn Book</title>
      </Head>
      <Flex
        mt={{ md: 6 }}
        mb={14}
        justify={{ base: 'space-between', md: 'center' }}
        align="center"
      >
        <IconButton
          onClick={toggleColorMode}
          colorScheme={colorMode === 'light' ? 'black' : 'yellow'}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          position={{ md: 'absolute' }}
          top={{ md: 10 }}
          left={{ md: 10 }}
          borderRadius="50%"
        />
        <Heading textAlign="center" fontSize="1.4rem" color={primaryColor}>
          Believers Hymn Book
        </Heading>
      </Flex>
      <form onSubmit={handleSubmit}>
        <Flex justify="center">
          <Input
            maxW="400px"
            placeholder="Enter a phrase or hymn #"
            value={searchValue}
            color={primaryColor}
            fontWeight={500}
            onChange={(event) => setSearchValue(event.currentTarget.value)}
            focusBorderColor={primaryColor}
          />
          <Button ml={4} colorScheme={'primary'} type="submit">
            Search
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
