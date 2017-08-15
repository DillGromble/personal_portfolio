const router = require('express').Router()
const Projects = require('../db').model('projects')

router
  .get('/', (req, res, next) =>
    Projects.findAll()
      .then(projects => res.json(projects))
      .catch(next)
  )

  .post('/', (req, res, next) => console.log(req.body)
    // Projects.create(req.body)
    //   .then(newProject => res.json(newProject))
    //   .catch(next)
  )

module.exports = router
