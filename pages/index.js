import { useState } from 'react'

import Head from 'next/head'
import {
  useColorMode,
  useColorModeValue,
  Box,
  VStack,
  Flex,
  Input,
  Button,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const { colorMode, toggleColorMode } = useColorMode()
  const primaryColor = useColorModeValue('primary.500', 'primary.200')
  const errorColor = useColorModeValue('red.500', 'red.300')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const bhbRes = await fetch(`/api/bhb-songs?q=${searchValue}`)

    const results = await bhbRes.json()
    console.log(results)
    setSearchResults(results)
  }

  return (
    <Box>
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
      <VStack my={20} spacing={14}>
        {searchResults !== null &&
          (searchResults.length <= 0 ? (
            <Text color={errorColor} fontSize="2rem" fontWeight={500}>
              No results... :(
            </Text>
          ) : (
            searchResults[0].verses.map((verse, i) => {
              return (
                <VStack key={i}>
                  {verse.map((line, j) => {
                    return (
                      <VStack key={j}>
                        <Text
                          color={primaryColor}
                          fontSize={{ base: '1.1rem', md: '1.5rem' }}
                        >
                          {line}
                        </Text>
                      </VStack>
                    )
                  })}
                </VStack>
              )
            })
          ))}
      </VStack>
    </Box>
  )
}

export default Home
