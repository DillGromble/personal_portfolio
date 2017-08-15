import React from 'react'
import { Link } from 'react-router'

const AllProjectsComponent = (props) => (
  <div className="project-overview" onClick={ () => props.togglePopup(props) }>
    <img src={ props.img } />
    <h2>{ props.title }</h2>
    <p>{ props.description }</p>
  </div>
)


export default AllProjectsComponent
