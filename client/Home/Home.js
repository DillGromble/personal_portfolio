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
        <h1>I'm a full stack software developer, and problem solver.</h1>
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

    <section className="bio-area">
      <p>
        After many years working in inventory auditing and consulting for bars and restaurants, I found that the most enjoyable thing for me was setting up or debugging my company’s complex software.  This was a wakeup call for me to reconnect with my long-lost passion for coding (in highschool I loved playing with Q-basic and TI-Assembly).  I started again as a hobbyist with Python and immediately wondered why I ever stopped.  I soon decided to make a career change, and it has been the most gratifying decision I've made to date.
      </p>
      <p>
        I attended a highly selective coding bootcamp based in NYC called Fullstack Academy.  There I learned fundamental computer science and algorithms, full stack JavaScript including Node, Express, Postgres, Sequelize, React, and Redux (to name only a few), as well as CSS(Sass), HTML5, and build tools.  However, the most important thing we were taught was how to be passionate, life long learners who needed nothing but an idea and some documentation to build anything.
      </p>
    </section>
  </div>

export default Home
