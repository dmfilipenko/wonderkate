/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import * as React from 'react'
import { color } from 'styled-system'
import { dimensions } from '../styles/variables'
import { ComponentOnCondition } from './ComponentOnCondition'
import { isMain } from '../utils'

const StyledHeader = styled.header`
  ${color}
`

const HeaderInner = styled.div`
  ${color}
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding-left: 40px;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  ${color}
  font-size: ${dimensions.fontSize.xlarge}px;
  font-weight: 600;
  border-bottom: ${dimensions.border}px solid currentColor;
  text-transform: uppercase;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
const HomeTitle = HomepageLink.withComponent('span')

const MyWork = styled.div`
  ${color}
  display: flex;
  align-items: center;
  color: white;
  font-size: ${dimensions.fontSize.xlarge}px;
  text-transform: uppercase;
  font-weight: 600;
  padding-left: 40px;
  span {
    border-bottom: ${dimensions.border}px solid currentColor;
  }
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

const HeaderTitle = ({ title, colors }: { title: string, colors: HeaderProps['colors'] }) => {
  return <ComponentOnCondition conditions={[
    [isMain(), (
      <HomepageLink to="/" color="white">
        {title}
      </HomepageLink>
    )],
    [true, <HomeTitle color={colors.myWork.hex}>{title}</HomeTitle>]
  ]} />
}

const Header: React.FC<HeaderProps> = ({ colors }) => {
  const bg = !isMain() ? 'white' : 'black'
  return (
    <>
      <StyledHeader bg={bg}>
        <HeaderInner bg={bg}>
          <HeaderTitle title="Kateryna Sotnychenko" colors={colors} />
        </HeaderInner>
      </StyledHeader>
      <MyWork bg={colors.myWork.hex}>
        <span>My work</span>
      </MyWork>
    </>
  )
}

export default Header
