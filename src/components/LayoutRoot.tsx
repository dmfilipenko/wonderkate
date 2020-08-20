import * as React from 'react'
import { Global, css } from '@emotion/core'

import normalize from '../styles/normalize'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <Global
      styles={css`
        html,
        body {
          font-family: 'Poppins', sans-serif;
        }
        html,
        body,
        #___gatsby,
        #gatsby-focus-wrapper {
          height: 100%;
        }
      `}
    />
    {children}
  </>
)

export default LayoutRoot
