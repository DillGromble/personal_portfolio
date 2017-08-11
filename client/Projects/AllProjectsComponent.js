import React from 'react'
import { Link } from 'react-router'


const AllProjectsComponent = ({ title, description, img }) => (
  <div className="project-overview">
    <img src={ img } />
    <h2>{ title }</h2>
    <p>{ description }</p>
  </div>
)


export default AllProjectsComponent
