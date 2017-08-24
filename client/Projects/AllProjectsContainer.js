import React from 'react'
import { connect } from 'react-redux'


import './projects.scss'

import AllProjectsComponent from './AllProjectsComponent'
import ProjectPopup from './ProjectPopup'


class AllProjectsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      selectedProject: {}
    }
  }

  togglePopup(selectedProject = {}) {
    this.setState({
      showPopup: !this.state.showPopup,
      selectedProject
    })
  }

  render() {
    const togglePopup = this.togglePopup.bind(this)

    return (
      <div className="project-grid">
        <div className="project-header">
          <h1>Projects</h1>
        </div>
        <br />
        <hr />
        <div className="center-track">
          {
            this.props.allProjects && this.props.allProjects.map(proj =>
              <AllProjectsComponent
                key={ proj.id }
                { ...proj }
                togglePopup={ togglePopup }
              />
            )
          }
        </div>
        <ProjectPopup
          poppedUp={ this.state.showPopup ? 'popup-show' : '' }
          exit={ togglePopup }
          project={ this.state.selectedProject }
        />
      </div>
    )
  }
}

const mapState = state => ({
  allProjects: state.allProjects
})

export default connect(mapState)(AllProjectsContainer)
