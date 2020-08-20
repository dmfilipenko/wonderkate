import * as React from 'react'
import { graphql } from 'gatsby'

import styled from '@emotion/styled'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { dimensions } from '../styles/variables'

interface IndexProps {
  data: {
    datoCmsHome: {
      introText: string
    }
  }
}

const Container = styled.div`
  white-space: pre-line;
  max-width: 800px;
  font-size: ${dimensions.fontSize.xlarge}px;
  font-style: normal;
  letter-spacing: 1.6px;
`

const IndexPage = ({ data }: IndexProps) => {
  return (
    <IndexLayout>
      <Page>
        <Container dangerouslySetInnerHTML={{ __html: data.datoCmsHome.introText }} />
      </Page>
    </IndexLayout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    datoCmsHome {
      introText
    }
  }
`
