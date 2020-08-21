import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { color } from 'styled-system'

const Arrow = styled.button<{ show: boolean; arrowColor: string }>`
  ${color}
  border: solid ${props => props.arrowColor};
  border-width: 0 3px 3px 0;
  padding: 10px;
  vertical-align: middle;
  transform: rotate(-135deg);
  position: fixed;
  right: calc(30% - 70px);
  bottom: 20px;
  background: transparent;
  display: ${props => (props.show ? 'block' : 'none')};
  &:hover {
    cursor: pointer;
  }
`
const BackToTop = ({ arrowColor }: { arrowColor: string }) => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (window?.pageYOffset > 300) {
      setShowScroll(true)
    } else if (window?.pageYOffset <= 300) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    // eslint-disable-next-line no-unused-expressions
    window?.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    window?.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [])

  return <Arrow arrowColor={arrowColor} type="button" className="scrollTop" onClick={scrollTop} show={showScroll} />
}

export default BackToTop
