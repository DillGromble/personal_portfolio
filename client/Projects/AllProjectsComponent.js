import React from 'react'
import { Link } from 'react-router'

const AllProjectsComponent = (props) => {
  const description = props.description.split('.')[0] + '.'

  return (
    <div className="project-overview" onClick={() => props.togglePopup(props)}>
      <img src={ props.img } />
      <h2>{ props.title }</h2>
      <p>{ description }</p>
    </div>
  )
}


export default AllProjectsComponent
