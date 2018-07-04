import React from 'react'

import './Hero.css'

export default ({}): JSX.Element => (
  <header className='Hero'>
    <h1 className='Hero__title'>CJ Patoilo</h1>
    <blockquote className='Hero__description'>
      Life Hacker based in Brazil. Engineer of things. Creator of{' '}
      <a
        href='https://github.com/milligram/milligram'
        title='Milligram - A minimalist CSS framework.'
        rel='noopener'
        target='_blank'
      >
        Milligram
      </a>{' '}
      and{' '}
      <a
        href='https://github.com/airform/airform'
        title='Airform - Functional HTML forms. Keeping it plane and simple.'
        rel='noopener'
        target='_blank'
      >
        Airform
      </a>.
    </blockquote>
  </header>
)
