import React from 'react'

import './carousel.scss'


class Carousel extends React.Component {

  constructor(props) {
    super(props)
    console.log('carousel props', props)
    this.state = {
      images: props.images,
      imgIdx: 0,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.nextImage.bind(this), 1750)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  nextImage() {
    const idx = this.state.imgIdx
    const next = idx === this.state.images.length - 1 ? 0 : idx + 1
    this.setState({ imgIdx: next })
  }

  render() {
    const idx = this.state.imgIdx

    return (
      <div className="carousel-frame flex-center">
        <div className="img-frame flex-center" >
          <img src={`assets/Technologies/${this.state.images[idx]}.png`} />
        </div>
      </div>
    )
  }
}


export default Carousel
