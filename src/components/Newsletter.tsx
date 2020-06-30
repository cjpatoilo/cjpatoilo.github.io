import React from 'react'
import { useLocation } from 'react-router-dom'
import Styled from 'styled-components/macro'

import Button from '../components/Button'
import Dialog from '../components/Dialog'

const Newsletter = Styled.div`
  position: relative;

  label {
    font-weight: var(--font-normal);
    margin-bottom: 3.5rem;
  }

  input[type=email] {
    border: 0;
    border-bottom: solid .1px var(--color-secondary);
    border-radius: var(--border-radius);
    font-weight: var(--font-normal);
    height: 4.4rem;
    margin: 0;
    outline: none;
    padding: 0 13.5rem 0 0;

    &:focus {
      border-color: var(--color-tertiary);
    }
  }

  button {
    margin: 0;
    position: absolute;
    right: 0;
  }

  @media (min-width: 960px) {
    bottom: 10.0rem;
    left: 15.0rem;
    max-width: 40.0rem;
    position: absolute;
    text-align: left;
  }
`

export default (): JSX.Element => {
  const { hash } = useLocation()

  return (
    <Newsletter>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/cjpatoilo"
        method="post"
      >
        <label htmlFor="newsletter">
          <strong>Monthly diary</strong> of what I have discovered about
          technology, design and lifestyle. What these discoveries have made me
          think and what these thoughts generate from practical ideas.
        </label>
        <input
          name="email"
          id="newsletter"
          placeholder="Enter your email here"
          required
          type="email"
        />
        <Button>Subscribe</Button>
        {hash === '#newsletter' && <Dialog>Email Registered!</Dialog>}
      </form>
    </Newsletter>
  )
}
