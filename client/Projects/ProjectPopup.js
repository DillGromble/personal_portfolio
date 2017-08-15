import React from 'react'

module.exports = ({ poppedUp, exit }) => (
  <div className={`disable-bg ${poppedUp}`}>
    <div className={`contact-popup ${poppedUp}`}>
      <h1>Welcome to project popup</h1>
      <button onClick={ exit }>Exit</button>
    </div>
  </div>
)
