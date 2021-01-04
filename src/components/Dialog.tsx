import React from 'react'
import Styled from 'styled-components/macro'

type PropsType = {
  children: string[] | string
}

const Dialog = Styled.dialog`
  animation: dialog 8000ms forwards 1;
  background: var(--color-quaternary);
  bottom: 0;
  color: var(--font-black);
  display: inline-block;
  border: none;
  border-radius: .3rem;
  left: 0;
  max-width: 100%;
  padding: 2.0rem 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: auto;
  width: 100%;
  will-change: transform, opacity;
  z-index: 2;

  @keyframes dialog {
    0%,
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
    5%,
    95% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export default function DialogComponent ({ children }: PropsType): JSX.Element {
  return <Dialog>{children}</Dialog>
}
