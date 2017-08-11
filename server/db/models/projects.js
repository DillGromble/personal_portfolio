const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('projects', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  completed: {
    type: Sequelize.DATEONLY,
    default: 'In Progess'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  technologies: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  github_repo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  presentation: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false
  },
  deployment: {
    type: Sequelize.STRING
  }
})
