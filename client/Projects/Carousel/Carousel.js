import React from 'react'

import './carousel.scss'


class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = { images: props.images }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.nextImage.bind(this), 1750)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  nextImage() {
    this.setState({ images: [...this.state.images.slice(1), this.state.images[0]] })
  }

  render() {
    return (
      <div className="carousel-frame flex-center">
        <img src={`assets/Technologies/${this.state.images[0]}.png`} />
        <img src={`assets/Technologies/${this.state.images[1]}.png`} />
        <img src={`assets/Technologies/${this.state.images[2]}.png`} />
      </div>
    )
  }
}

export default Carousel
