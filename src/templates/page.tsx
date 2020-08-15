import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface PageTemplateProps {
  data: {
    portfolioitem: {
      slug: string
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        some text
        {/* <h1>{data.markdownRemark.frontmatter.title}</h1> */}
        {/* eslint-disable-next-line react/no-danger */}
        {/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate

// export const query = graphql`
//   query MyQuery {
//     works
//   }
// `
