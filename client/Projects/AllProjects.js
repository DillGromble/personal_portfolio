import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './projects.scss'

const AllProjects = (props) => {
  console.log(props.allProjects)
  return (
    <h1>{ props.allProjects[0] && props.allProjects[0].title }</h1>
  )
}

const mapState = state => ({
  allProjects: state.allProjects
})

export default connect(mapState)(AllProjects)
