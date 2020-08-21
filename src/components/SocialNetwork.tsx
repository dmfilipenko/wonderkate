/* eslint-disable react/no-array-index-key */
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

interface HeaderProps {
  menuItems: {
    node: {
      url: string
      title: string
    }
  }[]
  colors: {
    title: {
      hex: string
    }
    myWork: {
      hex: string
    }
  }
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 40px 30px;
`

const SocialItem = styled(OutboundLink)`
  margin-right: 30px;
`

const SocialNetworks: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SocialNetworks {
      allDatoCmsSocialNetwork {
        edges {
          node {
            socialNetworkImage {
              url
              width
            }
            socialNetworkLink
          }
        }
      }
    }
  `)
  return (
    <Container>
      {data.allDatoCmsSocialNetwork.edges.map(
        (e: { node: { socialNetworkLink: string; socialNetworkImage: { width: any; url: any } } }) => (
          <SocialItem href={e.node.socialNetworkLink} target="_blank">
            <img src={e.node.socialNetworkImage.url} alt="" width={e.node.socialNetworkImage.width} />
          </SocialItem>
        )
      )}
    </Container>
  )
}

export default SocialNetworks
