import React from 'react'
import { Link } from 'react-router'

import './navbar.scss'

const Navbar = ({ toggleContact }) => (
  <nav className="navbox">

    <Link to="/home">
      <div>Home</div>
    </Link>

    <Link to="/projects">
      <div>Projects</div>
    </Link>

    <Link to="/algotorials">
      <div>Algotorials</div>
    </Link>

    <Link to="/blog">
      <div>Blog</div>
    </Link>

    <Link to="/home" onClick={ toggleContact }>
      <div>Contact</div>
    </Link>

  </nav>
)


export default Navbar

