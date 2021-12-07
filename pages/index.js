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
  useToast,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const { colorMode, toggleColorMode } = useColorMode()
  const primaryColor = useColorModeValue('primary.500', 'primary.200')
  const toast = useToast()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const bhbRes = await fetch(`/api/bhb-hymns?q=${searchValue}`)
    const bhbResJSON = await bhbRes.json()

    if (bhbResJSON.status === 'success') {
      setSearchResults(bhbResJSON)
    } else {
      toast({
        title: 'Error',
        description: bhbResJSON.results,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
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
      {searchResults.status === 'success' &&
        (searchResults.results.length <= 1 ? (
          <VStack my={20} spacing={14}>
            <Heading
              textAlign="center"
              fontSize="1.6rem"
              color={primaryColor}
              mb={4}
            >
              {`Hymn No. ${searchResults.results[0].id}`}
            </Heading>
            {searchResults.results[0].verses.map((verse, i) => {
              return (
                <VStack key={i}>
                  {verse.map((line, j) => {
                    return (
                      <Text
                        key={j}
                        color={primaryColor}
                        fontSize={{ base: '1.1rem', md: '1.5rem' }}
                      >
                        {line}
                      </Text>
                    )
                  })}
                </VStack>
              )
            })}
          </VStack>
        ) : (
          <Flex my={20} flexWrap="wrap" justify="center">
            {searchResults.results.map((hymn, i) => {
              return (
                <Flex
                  flexDirection="column"
                  key={i}
                  m={4}
                  p={4}
                  border="1px solid"
                  borderRadius="10px"
                  borderColor={primaryColor}
                >
                  {(() => {
                    let found = false
                    for (const verse = 0; verse < hymn.verses.length; verse++) {
                      for (
                        const line = 0;
                        line < hymn.verses[verse].length;
                        line++
                      ) {
                        if (
                          hymn.verses[verse][line]
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                        ) {
                          found = verse
                          break
                        }
                      }
                      if (found) {
                        break
                      }
                    }

                    return hymn.verses[found].map((line, j) => {
                      return (
                        <Text
                          key={j}
                          textAlign="center"
                          color={primaryColor}
                          fontSize={{ base: '1rem', md: '1rem' }}
                        >
                          {line}
                        </Text>
                      )
                    })
                  })()}
                </Flex>
              )
            })}
          </Flex>
        ))}
    </Box>
  )
}

export default Home
