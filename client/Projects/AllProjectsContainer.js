import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './projects.scss'

import AllProjectsComponent from './AllProjectsComponent'

const AllProjectsContainer = (props) => {

  return (
  <div>
    {
      props.allProjects && props.allProjects.map(proj =>
        (<AllProjectsComponent { ...proj } key={ proj.id } />)
      )
    }
  </div>
  )
}

const mapState = state => ({
  allProjects: state.allProjects
})

export default connect(mapState)(AllProjectsContainer)
