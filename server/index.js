const path = require('path')
const express = require('express')
const app = express()
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db')
const store = new SequelizeStore({ db })
const PORT = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')


const createApp = () => app
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


const syncDb = () =>
  db.sync()


const listenUp = () =>
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


if (require.main === module) {
  store.sync()
    .then(syncDb)
    .then(createApp)
    .then(listenUp)
}
else {
  createApp(app)
}
