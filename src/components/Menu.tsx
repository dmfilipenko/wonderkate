/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { typography, space, border, color, ColorProps, SpaceProps } from 'styled-system'
import { dimensions } from '../styles/variables'
import { getPathName } from '../utils'

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
  ${color};
  padding: 20px 30px;
  font-size: ${dimensions.fontSize.large}px;
  border-bottom: ${dimensions.border}px solid ${props => props.color};

  a {
    text-decoration: none;
    transition: 0.3s color, border 0.3s;
    color: ${props => (props.active ? props.color : '#000')};
    &:hover {
      color: ${props => props.color};
    }
  }
`

const MenuContainer = styled.div`
  ${color};
  border-left: ${dimensions.border}px solid currentColor;
`

const Menu: React.FC<HeaderProps> = ({ colors, menuItems }) => {
  return (
    <MenuContainer color={colors.myWork.hex}>
      {menuItems.map((e, idx) => (
        <MenuItem key={idx} color={colors.myWork.hex} active={getPathName().includes(e.node.url)}>
          <a href={`/${e.node.url}`}>{e.node.title}</a>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default Menu
