import React from 'react'
import './contact.scss'

module.exports = ({ visible, exit }) => {
  return (
    <div className={`contact-popup ${visible}`}>
      <div className="relative-container">

        <img className="profile-pic" src="assets/Contact/profile-pic.jpg" />
        <img className="exit-btn" src="assets/x-button.png" onClick={exit} />

        <section className="vert-flex">
          <h1>Josh White</h1>
          <div className="icon-text">
            <img className="contact-icon" src="assets/Contact/phone.png" />
            <p>(615)971-8848</p>
          </div>
          <div className="icon-text">
            <img className="contact-icon" src="assets/Contact/gmail.png" />
            <p>whitejosh42@gmail.com</p>
          </div>
        </section>

      </div>
    </div>
  )
}
