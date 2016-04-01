import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import makeStore from './store'

const rootEl = document.getElementById('root')
const store = makeStore()

const render = () => {
  const Root = require('./components/root.jsx').default
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    rootEl
  )
}

if (module.hot) module.hot.accept('./components/root.jsx', () => setTimeout(render))

render()
