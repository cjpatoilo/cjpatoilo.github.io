import React from 'react'
import { withSiteData } from 'react-static'

import Section from '../components/Section'
import Hero from '../components/Hero'
import About from '../components/About'
import Social from '../components/Social'
import socials from '../databases/socials'

export default withSiteData((): JSX.Element => (
  <div>
    <Section modifier="hero">
      <Hero />
      <Social list={socials} />
    </Section>
    <Section modifier="disclaimer">
      <About />
    </Section>
  </div>
))
