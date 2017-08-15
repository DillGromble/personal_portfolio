import React from 'react'

module.exports = ({ link, img, title }) => (
<<<<<<< HEAD
  <div className="icon-text_bottom" key={ link }>
=======
  <div className="icon-text_bottom">
>>>>>>> master
    <a href={ link } target="_blank" rel="noopener noreferrer">
      <img className="contact-icon" src={ img } />
    </a>
    <p>{ title }</p>
  </div>
)
