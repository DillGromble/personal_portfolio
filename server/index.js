const path = require('path')
const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

app
  .use(morgan('dev'))

  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use(express.static(path.join(__dirname, '..', 'public')))

  .use('/api', require('./api'))

  .get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')))

  .use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

  .listen(3000, () => {
    console.log('Listening on port 3000')
  })
