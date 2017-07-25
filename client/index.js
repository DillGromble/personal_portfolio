import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import store from './store'

import Main from './Main'
import Home from './Home/Home'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ Main }>
        <Route path="/home" component={ Home } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
