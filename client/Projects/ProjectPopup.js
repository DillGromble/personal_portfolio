import React from 'react'

import ProjectLink from '../Contact/SocialLink'
import Carousel from './Carousel/Carousel'

module.exports = props => {

  return (
    <div className={`disable-bg ${props.poppedUp}`}>
      <div className={`popup project-popup ${props.poppedUp}`}>
        <img
          className="exit-btn"
          src="assets/x-button.png"
          onClick={props.exit}
        />

        <header className="selected-project-header">
          <h1>{props.project.title}</h1>
          <br />
          <hr />
        </header>

        <section className="selected-project-grid">
          {props.project.img && <img className="project-img" src={props.project.img} />}
          <p>{props.project.description}</p>

          <div className="selected-project-links">
            <ProjectLink
              link={props.project.github_repo}
              img="/assets/Contact/github.png"
              title="Github"
            />
            <ProjectLink
              link={props.project.deployment}
              img="/assets/Projects/deployment.png"
              title="Visit"
            />
          </div>
          {
            props.project.technologies && <Carousel images={props.project.technologies} />
          }
        </section>
      </div>
    </div>
  )
}
