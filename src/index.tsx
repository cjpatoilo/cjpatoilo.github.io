import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import ReactDOM from 'react-dom'
import GoogleFonts from 'google-fonts'
import Raven from 'raven-js'
import ReactGA from 'react-ga'
import 'font-awesome/css/font-awesome.css'
import 'normalize.css'
import './index.css'

const App = () => (
  <Router>
    <div>
    	<Routes />
    </div>
  </Router>
)

export default hot(module)(App)

if (typeof document !== 'undefined') {
  if (process.env.NODE_ENV !== 'development') {
    ReactGA.initialize(process.env.GOOGLE_ANALITYCS_KEY)
    ReactGA.pageview(window.location.pathname)
    Raven.config(process.env.SENTRY_KEY).install()
  }

  if ('serviceWorker' in navigator && window.location.protocol === 'https:') navigator.serviceWorker.register('/service-worker.js')
  else console.info(`[Offline] Don't support service work!`)

  GoogleFonts.add({
    'Roboto': 400,
    'Oswald': 600
  })

  const render = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  render(<App />, document.getElementById('root'))
}
