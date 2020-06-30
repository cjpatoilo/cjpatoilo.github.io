import React from 'react'
import Styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

type PropsType = {
  children?: string
  className?: string
  href: string
  title?: string
}

const defaultStyle = css`
  color: var(--color-secondary);

  &:active,
  &:focus {
    color: var(--color-secondary);
  }

  &:hover {
    color: var(--color-tertiary);
    text-decoration: none;
  }
`
const ReactRouterLink = Styled(Link)`
  ${defaultStyle}
`
const CustomLink = Styled.a`
  ${defaultStyle}
`

export default ({
  children,
  className = '',
  href = '',
  title = '',
}: PropsType): JSX.Element =>
  href.includes('http') ?? href.includes('mailto') ? (
    <CustomLink
      className={className}
      href={href}
      title={title}
      rel="noopener"
      target="_blank"
    >
      {children}
    </CustomLink>
  ) : (
    <ReactRouterLink className={className} to={href}>
      {children}
    </ReactRouterLink>
  )
