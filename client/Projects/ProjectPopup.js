import React from 'react'

module.exports = ({ poppedUp, exit }) => (
  <div className={`disable-bg ${poppedUp}`}>
    <div className={`popup project-popup ${poppedUp}`}>
      <h1>Welcome to project popup</h1>
      <button onClick={ exit }>Exit</button>
    </div>
  </div>
)
