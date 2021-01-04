import React from 'react'
import { useLocation } from 'react-router-dom'
import Styled from 'styled-components/macro'

import Button from '../components/Button'
import Dialog from '../components/Dialog'

const Newsletter = Styled.div`
  left: 2.0rem;
  height: auto;
  max-width: calc(100% - 4.0rem);
  position: absolute;
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  button {
    margin: 0;
    position: absolute;
    right: 0;
  }

  @media (min-width: 960px) {
    left: 15.0rem;
    max-width: 38.5rem;
  }
`
const Form = Styled.form`
  margin: 0;
`
const Label = Styled.label`
  font-weight: var(--font-normal);
  margin-bottom: 3.5rem;
`
const Input = Styled.input`
  && {
    border: 0;
    border-bottom: solid .1rem var(--color-secondary);
    border-radius: var(--border-radius);
    font-size: 1.6rem;
    font-weight: var(--font-normal);
    height: 4.4rem;
    margin: 0;
    outline: none;
    padding: 0 13.5rem 0 .1rem;

    &:focus {
      border-color: var(--color-tertiary);
    }
  }
`

export default function NewsletterComponent (): JSX.Element {
  const { hash } = useLocation()

  return (
    <Newsletter>
      <Form
        action="https://buttondown.email/api/emails/embed-subscribe/cjpatoilo"
        method="post"
      >
        <Label htmlFor="newsletter">
          <strong>Monthly diary</strong> of what I have discovered about
          technology, design, and lifestyle. What these discoveries have made me
          think and what these thoughts generate from practical ideas.
        </Label>
        <Input
          id="newsletter"
          name="email"
          placeholder="Enter your email here"
          required
          type="email"
        />
        <Button>Subscribe</Button>
        {hash === '#newsletter' && <Dialog>Email Registered!</Dialog>}
      </Form>
    </Newsletter>
  )
}
