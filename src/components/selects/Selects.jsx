import React from 'react'
import './selects.css'
import Borabora from '../../images/borabora.jpg'
import Borabora2 from '../../images/borabora2.jpg'
// import Gold from '../../images/gold.png'
import Keywest from '../../images/keywest.jpg'
import Maldives from '../../images/maldives.jpg'
import Maldives2 from '../../images/maldives2.jpg'
import Maldives3 from '../../images/maldives3.jpg'
import Selectsimg from '../selectsimg/Selectsimg'

const Selects = () => {
  return (
    <div name="views" className='selects'>
        <div className="container">
      <Selectsimg bgImg={Borabora} text='Bora Bora' />
      <Selectsimg bgImg={Borabora2} text='Emerald Bay' />
      <Selectsimg bgImg={Maldives} text='Maldives' />
      <Selectsimg bgImg={Maldives2} text='Granada' />
      <Selectsimg bgImg={Maldives3} text='Barbados' />
      <Selectsimg bgImg={Keywest} text='Key West' />
      </div>
    </div>
  )
}

export default Selects