import React from 'react'
import Styled from 'styled-components/macro'

type PropsType = {
  children: any
  color?: string
}

const Section = Styled.section`
  background: ${props => props?.color ?? 'transparent'};
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`

export default function SectionComponent ({
  children,
  color = '',
}: PropsType): JSX.Element {
  return <Section color={color}>{children}</Section>
}
