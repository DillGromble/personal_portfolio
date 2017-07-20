import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar/Navbar'


const Main = (props) => {
  console.log(props)
  return (
    <div>
      <Navbar />
      <h1>This is { props.name } homepage!</h1>
    </div>
  )
}

const mapState = (state) => ({
  name: 'Josh'
})

export default connect(mapState)(Main)
