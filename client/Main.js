import React from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar/Navbar'
import Contact from './Contact/Contact'

import './index.scss'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = { showContacts: false }
  }

  toggleContact() {
    this.setState({ showContacts: !this.state.showContacts })
  }

  render() {
    return (
      <div>
        <Navbar showContact={ this.toggleContact.bind(this) } />
        <Contact
          isVisible={ this.state.showContacts ? 'contact-show' : '' }
          exit={ this.toggleContact.bind(this) }
        />
        { this.props.children }
      </div>
    )
  }
}


const mapState = state => ({
  name: 'Josh'
})

export default connect(mapState)(Main)
