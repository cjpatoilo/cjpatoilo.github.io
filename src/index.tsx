import React from 'react'
import ReactDOM from 'react-dom'
import GoogleFonts from 'google-fonts'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'
import 'milligram'

import Router from './components/Router'

// @ts-ignore
GoogleFonts.add({ Roboto: 400, Oswald: 600 })

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
)
