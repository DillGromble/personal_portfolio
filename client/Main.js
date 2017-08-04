import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar/Navbar'

import './index.scss'

const Main = ({ props, children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

const mapState = state => ({
  name: 'Josh'
})

export default connect(mapState)(Main)
