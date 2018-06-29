import React from 'react'

import './Section.css'

export default ({ children, modifier }: { children: any, modifier?: string }): JSX.Element => (
  <section className={modifier ? `Section--${modifier}` : 'Section'}>
    {children}
  </section>
)
