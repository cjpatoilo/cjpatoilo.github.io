import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import './App.css'

const App = () => (
  <Router>
    <div>
    	<Routes />
    </div>
  </Router>
)

export default hot(module)(App)
