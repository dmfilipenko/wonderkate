import * as React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import Page from '../components/Page'

import IndexLayout from '../layouts'

const Container = styled.div`
  position: relative;
`
const NotFoundPage = () => (
  <IndexLayout
    content={
      <Page>
        <Container>
          <h1>404: Page not found.</h1>
          <p>
            You've hit the void. <Link to="/">Go back.</Link>
          </p>
        </Container>
      </Page>
    }
  />
)

export default NotFoundPage
