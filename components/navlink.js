import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NavLink = ({ name, href, submenuItem, accordion }) => (
  <NextLink href={href}>
    <Link
        display="flex"
        p="15px"
        width={(submenuItem || accordion) && '100%'}
        _hover={{
          textDecoration: 'none',
          color: submenuItem ? 'white' : 'primary.500',
          backgroundColor: submenuItem ? 'primary.500' : accordion && 'blackAlpha.50',
        }}
      >{name}</Link>
  </NextLink>
)

export default NavLink
