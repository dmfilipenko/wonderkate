import * as React from 'react'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  flex: 1;
  position: relative;
  padding: 40px;
  margin-bottom: 3rem;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
