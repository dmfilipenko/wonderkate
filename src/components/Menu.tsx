import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { typography, space, border, color, ColorProps, SpaceProps } from 'styled-system'

interface HeaderProps {
  menuItems: {
    node: {
      url: string
      title: string
    }
  }[]
  colors: {
    title: {
      hex: string
    }
    myWork: {
      hex: string
    }
  }
}

const MenuItem = styled.div`
  padding: 20px 30px;
  font-size: 21px;

  border-bottom: 4px solid ${props => props.color};
  ${color};
  a {
    text-decoration: none;
    transition: 0.3s color, border 0.3s;
    color: #000;
    border-bottom: 4px solid transparent;
    &:hover {
      color: ${props => props.color};
      border-bottom: 4px solid currentColor;
    }
  }
`

const MenuContainer = styled.div`
  ${color};
  border-left: 4px solid currentColor;
`

const Menu: React.FC<HeaderProps> = ({ colors, menuItems }) => (
  <MenuContainer color={colors.myWork.hex}>
    {menuItems.map(e => (
      <MenuItem color={colors.myWork.hex}>
        <a href={`/${e.node.url}`}>{e.node.title}</a>
      </MenuItem>
    ))}
  </MenuContainer>
)

export default Menu
