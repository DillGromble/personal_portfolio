import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import store from './store'

import Main from './Main'
import Home from './Home/Home'
import AllProjects from './Projects/AllProjects'

import { getAllProjects } from './reducers'


const fetchProjects = () => store.dispatch(getAllProjects())


function hashLinkScroll() {
  const { hash } = window.location
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } onUpdate={ hashLinkScroll }>
      <Route path="/" component={ Main }>
        <IndexRedirect to="/home" />
        <Route path="/home" component={ Home } />
        <Route path="/projects" component={ AllProjects } onEnter={ fetchProjects } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
