import React from 'react'

import './carousel.scss'

const images = [
  'assets/Technologies/express.png',
  'assets/Technologies/node.png',
  'assets/Technologies/phaser.png',
  'assets/Technologies/postgresql.png',
  'assets/Technologies/react.png',
  'assets/Technologies/redux.png',
  'assets/Technologies/socketio.png'
]

class Carousel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      images: images,
      imgIdx: 0,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.nextImage.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  nextImage() {
    const idx = this.state.imgIdx
    const next = idx === this.state.images.length ? 0 : idx + 1
    this.setState({ imgIdx: next })
  }

  render() {
    const idx = this.state.imgIdx

    return (
      <div className="carousel-frame">
        <img src={ this.state.images[idx] } />
      </div>
    )
  }
}


export default Carousel
