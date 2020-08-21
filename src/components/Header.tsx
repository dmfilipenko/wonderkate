/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { color } from 'styled-system'
import { css } from '@emotion/core'
import { dimensions } from '../styles/variables'
import { ComponentOnCondition } from './ComponentOnCondition'
import { isMain } from '../utils'

const StyledHeader = styled.header`
  ${color};
`

const HeaderInner = styled.div`
  ${color};
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding-left: 40px;
  align-items: center;
  height: 100%;
`

const stylesForHeader = css`
  font-size: ${dimensions.fontSize.xlarge}px;
  font-weight: 600;
  border-bottom: ${dimensions.border}px solid currentColor;
  text-transform: uppercase;
  text-decoration: none;
  `

const HomepageLink = styled(Link) <{ hoverColor?: string }>`
  ${color};
  ${stylesForHeader};
  transition: 0.3s color;

  &:hover,
  &:focus {
    color: ${props => props.hoverColor};
    text-decoration: none;
  }
`
const HomeTitle = styled.span`
  ${color};
  ${stylesForHeader};
`

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
    border-bottom: ${ dimensions.border}px solid currentColor;
  }
`

interface HeaderProps {

  colors: {
    headerBg: string
    headerColor: string
  }


}

const HeaderTitle = ({ title, titleColor, hoverColor }: { hoverColor: string; title: string, titleColor: string }) => {
  console.log(
    titleColor,
    hoverColor
  )
  return <ComponentOnCondition conditions={[
    [isMain(), (
      <HomeTitle color={titleColor}>{title}</HomeTitle>
    )],
    [true, <HomepageLink to="/" color={titleColor} hoverColor={hoverColor}>
      {title}
    </HomepageLink>]
  ]} />
}

const Header: React.FC<HeaderProps> = ({ colors: {
  headerBg,
  headerColor
} }) => {
  const data = useStaticQuery(graphql`
query HeaderQuery {
  datoCmsColor {
    title {
      hex
    }
    myWork {
      hex
    }
  }
}
`)
  return (
    <>
      <StyledHeader bg={headerBg}>
        <HeaderInner>
          <HeaderTitle hoverColor={data.datoCmsColor.myWork.hex} title="Kateryna Sotnychenko" titleColor={headerColor} />
        </HeaderInner>
      </StyledHeader>
      <MyWork bg={data.datoCmsColor.myWork.hex}>
        <span>My work</span>
      </MyWork>
    </>
  )
}

export default Header
