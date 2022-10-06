import {
  Sidebar,
  Menu,
  MenuHeader,
  MenuTitle,
  MenuItem,
  SubMenu,
  SubMenuTitle,
  SubMenuSeparator,
  SubMenuItem,
  Grid,
  Flex,
} from '@atmoutsourcing/siakit';

import { BsBuilding, BsFillPersonFill, BsHouseDoor, BsPerson, BsPersonCircle } from 'react-icons/bs';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header(){

  const [showMenu, setShowMenu] = useState(false)

  const anonima = () => {
    console.log('teste')
  }

  const toggleModal = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Flex height="100vh" width={180}>
      <Sidebar>
        <Flex maxWidth={180}>
          <Menu>
            <MenuHeader onClick={ toggleModal } children="SiaKit"/>
            <MenuItem icon={<BsHouseDoor/>} value="1" onClick={ toggleModal }>
              Manutenção
            </MenuItem>
            <MenuItem icon={<BsBuilding/>} value="2" onClick={ toggleModal }>
              Clientes
            </MenuItem>
            <MenuItem icon={<BsPerson/>} value="3" onClick={ toggleModal }>
              Perfil
            </MenuItem>
          </Menu>
        </Flex>

        <SubMenu value="1">
          <SubMenuTitle>
            Manutenção
          </SubMenuTitle>
          <SubMenuSeparator />
          <Link to="/maintenance" style={{ textDecoration: "none"}}>
            <SubMenuItem children='Dashboard' onClick={ toggleModal }/>
          </Link>
        </SubMenu>

        <SubMenu value="2">
          <SubMenuTitle>
            Empresas
          </SubMenuTitle>
          <SubMenuSeparator />
          <Link to="/customers" style={{ textDecoration: "none"}}>
            <SubMenuItem children="Cadastro de empresas" onClick={ toggleModal }/>
          </Link>
        </SubMenu>

        <SubMenu value="3">
          <SubMenuTitle>
            Configurações
          </SubMenuTitle>
          <SubMenuSeparator />
          <Link to="/profile" style={{ textDecoration: "none"}}>
            <SubMenuItem children="Configurações" onClick={ toggleModal }/>
          </Link>
        </SubMenu>
      </Sidebar>
    </Flex>
   )
}