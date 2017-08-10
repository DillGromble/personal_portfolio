import React from 'react'
import { Link } from 'react-router'


const AllProjectsComponent = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
    <h1>{props.start_date}</h1>
    <h1>{props.completed}</h1>
    <h1>{props.github_repo}</h1>
    <h1>{props.img}</h1>
  </div>
)


export default AllProjectsComponent
