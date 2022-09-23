import React from 'react'
import './destination.css'
import Borabora from '../../images/borabora.jpg'
import Borabora2 from '../../images/borabora2.jpg'
// import Gold from '../../images/gold.png'
import Keywest from '../../images/keywest.jpg'
import Maldives from '../../images/maldives.jpg'
import Maldives2 from '../../images/maldives2.jpg'
// import Maldives3 from '../../images/maldives3.jpg'

const Destination = () => {
  return (
    <div name="destination" className='destination'>
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beachhes</p>
        <div className="img-container">
            <img src={Borabora} alt="/" className='span-3 img-grid-row-2' />
            <img src={Borabora2} alt="/" />
            {/* <img src={Gold} alt="/" /> */}
            <img src={Keywest} alt="/" />
            <img src={Maldives} alt="/" />
            <img src={Maldives2} alt="/" />
            {/* <img src={Maldives3} alt="/" /> */}
        </div>
      </div>
    </div>
  )
}

export default Destination