import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components/macro'

import ErrorPage from '../pages/error'
import HomePage from '../pages/index'

const GlobalStyles = createGlobalStyle`
  :root {
    --border-radius: 0;

    --break-point: 960px;

    --color-primary: #fff;
    --color-secondary: #222;
    --color-tertiary: red;
    --color-quaternary: #f2f2f2;

    --font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --font-secondary: 'Oswald', sans-serif;

    --font-normal: 300;
    --font-bold: 600;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    background: var(--color-primary);
    color: var(--color-secondary);
    display: block;
    font-family: var(--font-primary);
    font-size: 18px;
    font-weight: var(--font-normal);
    letter-spacing: 1.4px;
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    text-align: center;
  }
`

export default () => (
  <BrowserRouter>
    <GlobalStyles />
    <Switch>
      <Route component={HomePage} exact path="/" />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
)
