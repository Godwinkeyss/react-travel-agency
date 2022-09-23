import React from 'react'
import './selectsimg.css'


const Selectsimg = ({bgImg, text}) => {
  return (
    <div className='select-location'>
        <img src={bgImg} alt="/" />
        <div className="overlay">
            <p>{text}</p>
        </div>

    </div>
  )
}

export default Selectsimg