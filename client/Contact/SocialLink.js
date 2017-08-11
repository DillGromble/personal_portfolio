import React from 'react'

module.exports = ({ link, img, title }) => (
  <div className="icon-text_bottom">
    <a href={ link } target="_blank" rel="noopener noreferrer">
      <img className="contact-icon" src={ img } />
    </a>
    <p>{ title }</p>
  </div>
)
