import {
  useColorModeValue,
  Box,
  VStack,
  Container,
  Text,
} from '@chakra-ui/react'

const Footer = () => {
  const primaryColor = useColorModeValue('primary.500', 'primary.200')

  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <VStack spacing={2}>
          <Text color={primaryColor}>
            &copy;{` ${new Date().getFullYear()} Believers Hymn Book.`}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
