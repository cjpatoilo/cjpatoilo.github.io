import React from 'react'

import About from '../components/About'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Section from '../components/Section'
import Social from '../components/Social'

export default (): JSX.Element => (
  <>
    <Section color="#fff">
      <Hero />
      <Social />
    </Section>
    <Section color="#1f1f1f">
      <About />
    </Section>
    <Section color="#fff">
      <Newsletter />
    </Section>
  </>
)
