import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Button } from '@chakra-ui/react'

/**
* @author
* @function Profile
**/

export const Profile = (props) => {
  return(
    <Menu zIndex={10}>
  <MenuButton color={'white'} _hover={{color:'black'}}  as={Button} backgroundColor='#20B2AA'>
    Profile 
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
   )
}
