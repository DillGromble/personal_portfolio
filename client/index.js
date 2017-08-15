import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import store from './store'

import Main from './Main'
import Home from './Home/Home'
import AllProjectsContainer from './Projects/AllProjectsContainer'

import { getAllProjects } from './reducers'


const fetchProjects = () => store.dispatch(getAllProjects())

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } >
      <Route path="/" component={ Main }>
        <IndexRedirect to="/home" />
        <Route path="/home" component={ Home } />
        <Route path="/projects"
          component={ AllProjectsContainer }
          onEnter={ fetchProjects }
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
