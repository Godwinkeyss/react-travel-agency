import React from 'react'
import './hero.css'
import Video from '../../images/maldivesVideo.mp4'
import { BiSearchAlt2 } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className='hero'>
      <video autoPlay muted loop id="video">
        <source src={Video} type="video/mp4"/>
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Location Worldwide</h2>
        <form action="" className='form'>
          <div>
            <input type="text" placeholder='Search Destination' />
          </div>
          <div>
            <button>< BiSearchAlt2 className='icon'   /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero