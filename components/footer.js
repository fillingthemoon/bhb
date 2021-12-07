import {
  Box,
  VStack,
  Container,
  Text,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={2}>
          <Text>&copy; 2021 Believers Hymn Book.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
