import React from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar/Navbar'
import Contact from './Contact/Contact'

import './index.scss'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = { visible: true }
  }

  toggleContact() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div>
        <Navbar showContacts={this.toggleContact.bind(this)} />
        { this.state.visible ? <Contact /> : null }
        { this.props.children }
      </div>
    )
  }
}


const mapState = state => ({
  name: 'Josh'
})

export default connect(mapState)(Main)
