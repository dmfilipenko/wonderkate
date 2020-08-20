import * as React from 'react'
import styled from '@emotion/styled'

const StyledLayoutMain = styled.main`
  display: grid;
  height: 100%;
  grid-template-rows: 150px auto;
  grid-template-columns: auto 30%;
  grid-template-areas:
    'title my-work'
    'content work-link';
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
