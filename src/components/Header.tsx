import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as React from 'react'
import { color } from 'styled-system'

const StyledHeader = styled.header``

const HeaderInner = styled.div`
  ${color}
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  font-size: 21px;
  font-weight: 600;
  border-bottom: 3px solid currentColor;
  text-transform: uppercase;
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    border-bottom: 3px solid transparent;
    text-decoration: none;
  }
`

const MyWork = styled.div`
  ${color}
  display: flex;
  align-items: center;
  color: white;
  font-size: 21px;
  text-transform: uppercase;
  font-weight: 600;
`

interface HeaderProps {
  title: string
  colors: {
    title: {
      hex: string
    }
    myWork: {
      hex: string
    }
  }
}

const Header: React.FC<HeaderProps> = ({ colors }) => {
  return (
    <>
      <StyledHeader>
        <HeaderInner bg={colors.title.hex}>
          <HomepageLink to="/">Kateryna Sotnychenko</HomepageLink>
        </HeaderInner>
      </StyledHeader>
      <MyWork bg={colors.myWork.hex}>My work</MyWork>
    </>
  )
}

export default Header
