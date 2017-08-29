import React from 'react'

import './carousel.scss'


class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      images: props.images,
      currentlyShown: [0, 1, 2]
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.nextImage.bind(this), 1750)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  nextImage() {
    const nextGroup = this.state.currentlyShown.map(idx => {
      return (idx === this.state.images.length - 1) ? 0 : idx + 1
    })
    this.setState({ currentlyShown: nextGroup })
  }

  render() {
    const currentlyShown = this.state.currentlyShown

    return (
      <div className="carousel-frame flex-center">
        {
          this.state.images.map((image, idx) => (
            <img
              key={image}
              className={currentlyShown.includes(idx) ? '' : 'noShow'}
              style={{ order: idx < currentlyShown[0] ? 1 : 0 }}
              src={`assets/Technologies/${image}.png`}
            />
          ))
        }
      </div>
    )
  }
}

export default Carousel
