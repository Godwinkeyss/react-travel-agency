import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
       <div className="container">
        <div className="top">
            <h3>BEACHES</h3>
            <div className="social">
            < FaFacebookF className='icon' />
            < FaInstagram className='icon' />
            < FaTwitter className='icon' />
            < FaLinkedinIn className='icon' />
            < FaPinterest className='icon' />
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <ul>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertizing</li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Privacy</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer