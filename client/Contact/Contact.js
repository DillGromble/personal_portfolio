import React from 'react'
import './contact.scss'

module.exports = ({ visible, exit }) => {
  return (
    <div className={`contact-popup ${visible}`}>
      <img className="exit" src="assets/x-button.png" onClick={ exit } />
    </div>
  )
}
