import * as React from 'react'
import { graphql } from 'gatsby'

import styled from '@emotion/styled'
import Img from 'gatsby-image'
import IndexLayout from '../layouts'

const Container = styled.div`
  position: relative;
`
interface PageTemplateProps {
  data: {
    datoCmsWork: {
      listOfImages: any[]
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  return (
    <IndexLayout>
      <Container>
        {data.datoCmsWork.listOfImages.map(e => (
          <Img fluid={e.fluid} alt="" />
        ))}
      </Container>
    </IndexLayout>
  )
}
export default PageTemplate

export const query = graphql`
  query WorksQuery($url: String!) {
    datoCmsWork(url: { eq: $url }) {
      url
      listOfImages {
        fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
