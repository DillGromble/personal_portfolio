const db = require('./server/db')
const Projects = require('./server/db/models/projects')

const projects = [
    {
    title: 'Escape Hatch',
    start_date: new Date(),
    completed: new Date(),
    description: 'Escape Hatch is an npm library / web app for monitoring errors in projects, and providing access to solutions. Upon an error, a link to our server is provided, which presents aggregated and weighted results found from calling the GitHub and Stack Overflow APIs.',
    technologies: ['node', 'express', 'sequelize', 'postgres', 'react', 'redux', 'passport', 'bootstrap', 'sass'],
    github_repo: 'https://github.com/escape-hatch',
    presentation: 'https://www.youtube.com/watch?v=8yz3erL_hm0',
    img: 'assets/Projects/escape-hatch.png',
    deployment: 'https://escapehatch.herokuapp.com'
  }, {
    title: 'Lumber Jack\'s CTS',
    start_date: new Date(),
    completed: new Date(),
    description: 'Lumber Jack\'s CTS is a top-down real-time online multiplayer game for 4 players. This was a Hackathon project while I was at Fullstack Academy which won the ‘Nerd Cred’ award for most technical problems solved in a short time due to the complications with managing state and latency across the players.',
    technologies: ['phaser', 'socket', 'express', 'node'],
    github_repo: 'https://github.com/DillGromble/LumberJacksCTS',
    img: 'assets/Projects/lumber-jacks.png',
    deployment: 'https://lumber-jacks-cts.herokuapp.com/'
  }, {
    title: 'Grace Shopper',
    start_date: new Date(),
    completed: new Date(),
    description: 'A mock e-commerce store specializing in seasonal decorations. This was a short term project to enhance our skills at remote collaboration using tools like GitHub and Waffle.io. \n\nI was responsible for much of the work that went into creating the shopping cart API.',
    technologies: ['node', 'express', 'sequelize', 'postgres', 'react', 'redux', 'passport', 'bootstrap', 'sass'],
    github_repo: 'https://github.com/DillGromble/grace-shopper',
    img: 'assets/Projects/grace-shopper.png',
    deployment: 'http://graceyshopper.herokuapp.com/products'
  }, {
    title: 'Guessing Game',
    start_date: new Date(),
    completed: new Date(),
    description: 'Simple number guessing game using jQuery and CSS.  This was our first project in the foundations phase of Fullstack Academy.  It was used to judge our self learning performance and test our preparation for the immersive course.',
    technologies: ['jquery', 'html', 'bootstrap', 'css'],
    github_repo: 'https://github.com/DillGromble/GuessingGame',
    img: 'assets/Projects/guessing-game.png',
    deployment: 'https://dillgromble.github.io/GuessingGame/'
  }
]


db.sync({ force: true })
  .then(() => Projects.bulkCreate(projects))
  .then(() => db.close())
  .catch(err => `Something went wrong: ${err}`)

