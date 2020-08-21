import * as React from 'react'
import { graphql } from 'gatsby'

import styled from '@emotion/styled'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import { dimensions } from '../styles/variables'
import Header from '../components/Header'

interface IndexProps {
  data: {
    datoCmsHome: {
      introText: string
    }
    datoCmsColor: {
      myWork: {
        hex: string
      }
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
    <IndexLayout
      header={
        <Header
          colors={{
            headerBg: 'white',
            headerColor: data.datoCmsColor.myWork.hex
          }}
        />
      }
      content={
        <Page>
          <Container dangerouslySetInnerHTML={{ __html: data.datoCmsHome.introText }} />
        </Page>
      }
    />
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    datoCmsHome {
      introText
    }
    datoCmsColor {
      myWork {
        hex
      }
    }
  }
`
