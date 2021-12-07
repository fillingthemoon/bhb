import NavLink from './navlink'

import { VStack, Flex, Text } from '@chakra-ui/react'

const Submenu = (props) => {
  const { name, href, submenu } = props

  return (
    <Flex role="group">
      <Text
        p="15px"
        _hover={{
          textDecoration: 'none',
          color: 'primary.500',
          cursor: 'pointer',
        }}
      >
        {name}
      </Text>
      <VStack
        display='none'
        position="absolute"
        mt="35px"
        pt="20px"
        shadow="md"
        spacing="0"
        backgroundColor="white"
        transition="0.3s"
        opacity="0"
        _groupHover={{
          display: 'flex',
          alignItems: 'flex-start',
          transition: '0.3s',
          opacity: '1',
        }}
      >
        {submenu.map((item, i) => (
          <NavLink
            key={i}
            name={item.name}
            href={href + item.href}
            submenuItem={true}
          />
        ))}
      </VStack>
    </Flex>
  )
}

export default Submenu
