import React from 'react'
import Styled from 'styled-components/macro'

const Error = Styled.h1`
  left: 50%;
  max-width: 95%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

export default function ErrorComponent () {
  return <Error>Oh no! We couldn't find that page.</Error>
}
