import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import store from './store'

import Main from './Main'


ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } >
      <Route path="/" component={ Main }>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
