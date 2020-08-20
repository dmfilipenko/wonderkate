import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { color } from 'styled-system'
import styled from '@emotion/styled'
import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

import 'modern-normalize'
import '../styles/normalize'
import Menu from '../components/Menu'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
  allDatoCmsWork: {
    edges: {
      node: {
        title: string
        url: string
      }
    }[]
  }
  datoCmsColor: {
    title: {
      hex: string
    }
    myWork: {
      hex: string
    }
  }
}

const ContainerContent = styled.div`
  ${color};
  color: white;

  a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: ${props => props.linkColor};
    }
  }
`

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        allDatoCmsWork(sort: { fields: positionValue }) {
          edges {
            node {
              title
              url
            }
          }
        }
        datoCmsColor {
          title {
            hex
          }
          myWork {
            hex
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      return (
        <LayoutRoot>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords }
            ]}
          >
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
          </Helmet>

          <LayoutMain>
            <Header title={data.site.siteMetadata.title} colors={data.datoCmsColor} />
            <ContainerContent bg={data.datoCmsColor.title.hex} linkColor={data.datoCmsColor.myWork.hex}>
              {children}
            </ContainerContent>
            <Menu menuItems={data.allDatoCmsWork.edges} colors={data.datoCmsColor} />
          </LayoutMain>
        </LayoutRoot>
      )
    }}
  />
)

export default IndexLayout
