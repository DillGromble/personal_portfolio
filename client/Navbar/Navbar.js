import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbox">
      <img className="navbox-brand" src="assets/logo.png" alt="Josh White" />
      <ul className="nav-links">
        <li>Blog</li>
        <li>Algotorials</li>
        <li>Projects</li>
        <li>Home</li>
      </ul>
    </nav>
  )
}

export default Navbar
