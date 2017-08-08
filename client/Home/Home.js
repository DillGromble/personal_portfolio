import React from 'react'
import { Link } from 'react-router'
import smoothScroll from '../smoothScroll'

import './home.scss'

const Home = () =>
  <div>
    <section className="splash-container">
      <div className="splash-img" />
      <div className="splash-text home-text">
        <h1>Hi, I'm Josh.</h1>
        <h1>I'm a full stack web developer, and problem solver.</h1>
      </div>
      <img
        className="splash-arrow"
        src="assets/arrow-down-black.png"
        onClick={ () => smoothScroll.scrollTo('techs') }
      />
    </section>

    <section className="techs-container home-text" id="techs">
      <div className="techs-header">
        <h1>I LOVE coding</h1>
        <h1>Particularly in:</h1>
      </div>
      <div className="lang-row">
        <img className="techs-logos js" src="assets/html-css-js-logos.png" />
        <img className="techs-logos python" src="assets/python-logo.png" />
      </div>
    </section>
  </div>

export default Home
