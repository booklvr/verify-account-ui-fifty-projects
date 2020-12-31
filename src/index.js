/* global module */
import React from 'react'
import { render } from 'react-dom'
import './assets/index.scss'
import App from './App'

const root = document.getElementById('root')

function renderApp() {
  // const App = require('./App').default
  render(<App />, root)
}

renderApp()

if (module.hot) {
  module.hot.accept(renderApp)
}
