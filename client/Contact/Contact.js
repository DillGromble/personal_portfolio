import React from 'react'
import './contact.scss'

module.exports = ({ visible }) => {
  return (
    <div className={`contact-popup ${visible}`} />
  )
}
