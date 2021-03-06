import React from 'react'
import Styled from 'styled-components/macro'
import Link from '../components/Link'

const Hero = Styled.header`
  bottom: auto;
  left: 50%;
  display: block;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 82.5%;
  z-index: 0;
`

const HeroTitle = Styled.h1`
  color: var(--color-secondary);
  font-size: 4.8rem;
  font-weight: var(--font-normal);
  font-family: var(--font-secondary);
  letter-spacing: normal;
  margin-top: 0;
  text-transform: uppercase;
`

const HeroDescription = Styled.blockquote`
  border: 0;
  font-size: 1.8rem;
  margin: -2.0rem auto 4.0rem;
`

export default function HeroComponent (): JSX.Element {
  return (
    <Hero>
      <HeroTitle>CJ Patoilo</HeroTitle>
      <HeroDescription>
        Life Hacker based in Brazil. Engineer of things. Creator of{' '}
        <Link
          href="https://github.com/milligram/milligram"
          title="Milligram - A minimalist CSS framework."
        >
          Milligram
        </Link>{' '}
        and{' '}
        <Link
          href="https://github.com/airform/airform"
          title="Airform - Functional HTML forms. Keeping it plane and simple."
        >
          Airform
        </Link>
        .
      </HeroDescription>
    </Hero>
  )
}
