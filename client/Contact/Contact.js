import React from 'react'
import './contact.scss'

module.exports = ({ isVisible, exit }) => {
  return (
    <div className={`contact-popup ${isVisible}`}>
      <div className="relative-container">
        <img className="profile-pic" src="assets/Contact/profile-pic.jpg" />
        <img className="exit-btn" src="assets/x-button.png" onClick={exit} />

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
          <div className="icon-text_bottom">
            <a href="https://github.com/DillGromble">
              <img className="contact-icon" src="assets/Contact/github.png" />
            </a>
            <p>Github</p>
          </div>
          <div className="icon-text_bottom">
            <a href="assets/Contact/current-resume.pdf">
              <img
                className="contact-icon"
                src="assets/Contact/resume-icon.png"
              />
            </a>
            <p>Resume</p>
          </div>
          <div className="icon-text_bottom">
            <a href="https://www.linkedin.com/in/josh-white42/">
              <img className="contact-icon" src="assets/Contact/linkedin.png" />
            </a>
            <p>LinkedIn</p>
          </div>
        </section>
      </div>
    </div>
  )
}
