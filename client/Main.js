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

  componentDidUpdate() {
    const bodyState = this.state.showContacts ? 'hidden' : ''
    document.body.style.overflow = bodyState
  }

  toggleContact() {
    this.setState({ showContacts: !this.state.showContacts })
  }

  render() {
    const showContacts = this.state.showContacts
    const toggleContact = this.toggleContact.bind(this)

    return (
      <div>
        <Navbar toggleContact={ toggleContact } />
        <Contact
          isVisible={ showContacts ? 'popup-show' : '' }
          exit={ toggleContact }
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
