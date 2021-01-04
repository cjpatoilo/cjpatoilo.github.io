import React from 'react'
import Styled from 'styled-components/macro'

type PropsType = {
  children: JSX.Element | string
  onClick?: (event: any) => void
}

const Button = Styled.button`
  background-color: var(--color-secondary);
  border: .1rem solid var(--color-secondary);
  border-radius: var(--border-radius);
  color: var(--color-primary);
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: var(--font-regular);
  height: 4.4rem;
  letter-spacing: 0;
  line-height: 4.4rem;
  margin-bottom: var(--margin-bottom);
  text-transform: uppercase;

  &:hover {
    background-color: var(--color-tertiary);
    border-color: var(--color-tertiary);
    color: var(--color-primary);
  }

  &[disabled] {
    cursor: default;
    opacity: .5;

    &:hover {
      background-color: var(--color-tertiary);
      border-color: var(--color-tertiary);
    }
  }
`

export default function ButtonComponent ({
  children,
  onClick,
}: PropsType): JSX.Element {
  return <Button onClick={onClick}>{children}</Button>
}
