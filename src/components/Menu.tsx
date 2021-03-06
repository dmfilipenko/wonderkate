/* eslint-disable react/no-array-index-key */
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as React from 'react'
import { color } from 'styled-system'
import { dimensions } from '../styles/variables'
import SocialNetworks from './SocialNetwork'

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

const MenuItem = styled(Link)`
  ${color};
  display: flex;
  padding: 20px 30px;
  font-size: ${dimensions.fontSize.large}px;
  border-bottom: ${dimensions.border}px solid ${props => props.color};
  text-decoration: none;
  transition: 0.3s color, border 0.3s;
  color: #000;
  &.active-link {
    color: ${props => props.activeColor};
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.color};
  }
`

const MenuContainer = styled.div`
  ${color};
  border-left: ${dimensions.border}px solid currentColor;
`

const Menu: React.FC<HeaderProps> = ({ colors, menuItems }) => {
  return (
    <MenuContainer color={colors.myWork.hex}>
      {menuItems.map((e, idx) => {
        return (
          <MenuItem to={`/${e.node.url}`} key={idx} color={colors.myWork.hex} activeColor={colors.myWork.hex} activeClassName="active-link">
            {e.node.title}
          </MenuItem>
        )
      })}
      <SocialNetworks />
    </MenuContainer>
  )
}

export default Menu
