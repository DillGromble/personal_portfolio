import React from 'react'
import './contact.scss'

import SocialLink from './SocialLink'
import links from './links'

module.exports = ({ isVisible, exit }) => {
  return (
    <div className={ `disable-bg ${isVisible}` }>
      <div className={`contact-popup ${isVisible}`}>
        <div className="relative-container">

          <img className="profile-pic" src="assets/Contact/profile-pic.jpg" />
          <img className="exit-btn" src="assets/x-button.png" onClick={ exit } />

          <section className="vert-flex">
            <h1>Josh White</h1>

            <div className="icon-text_side">
              <img className="contact-icon" src="assets/Contact/phone.png" />
              <p>(615)971-8848</p>
            </div>

            <div className="icon-text_side">
              <a href="mailto:whitejosh42@gmail.com">
                <img className="contact-icon" src="assets/Contact/gmail.png" />
              </a>
              <p>whitejosh42@gmail.com</p>
            </div>
          </section>

          <section className="horizon-flex">
            { links.map(link => <SocialLink key={link.link} {...link} />) }
          </section>

        </div>
      </div>
    </div>
  )
}
