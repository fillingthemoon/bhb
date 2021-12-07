import NextLink from 'next/link'

import Submenu from './submenu'
import SubmenuAccordion from './submenuAccordion'
import NavLink from './navlink'

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Accordion,
  AccordionItem,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Menu Item',
    href: '/menu-item',
    submenu: [
      { name: 'Submenu Item 1', href: '/submenu-item-1' },
      { name: 'Submenu Item 2?', href: '/submenu-item-2' },
    ],
  },
]

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="white" shadow="md" px={4} py={{ base: 4, xl: 8 }} zIndex={1}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justify={'space-between'}>
          <IconButton
            icon={
              isOpen ? (
                <CloseIcon fontSize="18px" />
              ) : (
                <HamburgerIcon fontSize="25px" />
              )
            }
            aria-label={'Open Menu'}
            display={{ xl: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            backgroundColor="white"
            transition="0.2s"
            _hover={{
              transform: 'scale(1.2)',
              transition: '0.2s',
            }}
          />
          <NextLink href="/">
            <Link
              fontSize="2xl"
              fontWeight="bold"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Box as="span" fontSize="1.3rem" color="primary.500">
                Believers Hymn Book
              </Box>
            </Link>
          </NextLink>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', xl: 'flex' }}>
            {links.map((link, i) => {
              return !link.submenu ? (
                // Normal navbar item
                <NavLink key={i} name={link.name} href={link.href} />
              ) : (
                // Navbar item with a submenu containing other items
                <Submenu
                  key={i}
                  name={link.name}
                  href={link.href}
                  submenu={link.submenu}
                />
              )
            })}
          </HStack>
        </Flex>

        {/* Accordion menu */}
        {isOpen ? (
          <Box py={4} display={{ xl: 'none' }}>
            <Accordion allowToggle>
              {links.map((link, i) => {
                return !link.submenu ? (
                  // Accordion navbar item
                  <AccordionItem key={i}>
                    <NavLink
                      name={link.name}
                      href={link.href}
                      accordion={true}
                    />
                  </AccordionItem>
                ) : (
                  // Accordion item with a submenu containing other items
                  <SubmenuAccordion
                    key={i}
                    name={link.name}
                    href={link.href}
                    submenu={link.submenu}
                  />
                )
              })}
            </Accordion>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}

export default NavBar
