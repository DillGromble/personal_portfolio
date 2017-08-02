import React from 'react'
import './home.scss'

const Home = () => (
  <div>

    <section className="splash-container">
      <div className="splash-img" />
      <div className="splash-text home-text">
        <h1>Hi, I'm Josh.</h1>
        <h1>I'm a full stack web developer, and problem solver.</h1>
      </div>
      <img className="splash-arrow" src="assets/arrow-down-black.png" />
    </section>

    <section className="techs-container home-text">
      <h1 className="techs-header">I LOVE coding</h1>
      <h1>Particularly in:</h1>
      <div className="lang-row">
        <img className="techs-logos js" src="assets/html-css-js-logos.png" />
        <h1>and</h1>
        <img className="techs-logos python" src="assets/python-logo.png" />
      </div>
    </section>

  </div>
)

export default Home

