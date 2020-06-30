import React from 'react'
import Styled from 'styled-components/macro'

const About = Styled.div`
  color: var(--color-primary);
  left: 50%;
  font-size: 35px;
  font-weight: var(--font-bold);
  font-family: var(--font-secondary);
  letter-spacing: 5px;
  line-height: 1.3;
  margin: 0;
  max-width: 960px;
  padding: 0;
  position: absolute;
  text-transform: uppercase;
  top: 46.5%;
  transform: translate(-50%, -50%);

  @media (min-width: 960px) {
    font-size: 75px;
    width: 960px;
  }
`

export default (): JSX.Element => (
  <About>
    Trying to make a beautiful web, fast, 100% responsive, and accessible for
    everyone.
  </About>
)
