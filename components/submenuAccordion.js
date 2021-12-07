import NavLink from './navlink'

import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const SubmenuAccordion = (props) => {
  const { name, href, submenu } = props

  return (
    <AccordionItem>
      <AccordionButton p="15px">
        <Box
          flex="1"
          textAlign="left"
          _hover={{
            textDecoration: 'none',
            color: 'primary.500',
            cursor: 'pointer',
          }}
        >
          {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel
        spacing="0"
        backgroundColor="white"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        {submenu.map((item, j) => (
          <NavLink
            key={j}
            name={item.name}
            href={href + item.href}
            accordion={true}
            submenuItem={true}
          />
        ))}
      </AccordionPanel>
    </AccordionItem>
  )
}

export default SubmenuAccordion
