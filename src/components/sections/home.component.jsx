import React from 'react'
import './home.styles.scss'
import Slider from 'react-slick'

const photos = [
  { name: 'photo1', loc: require('../../assets/foto1.webp') },
  { name: 'photo2', loc: require('../../assets/foto2.webp') },
  { name: 'photo3', loc: require('../../assets/foto3.webp') },
]

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: 'slider',
    arrows: false,
  }

  return (
    <div className='main-container'>
      <div className='text'>UB Global Logistics and Supply Chain</div>
      <div className='slider'>
        <Slider {...settings}>
          {photos.map((photo) => {
            return <img src={photo.loc} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Home
