import React, {useState} from 'react';
import './navbar.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { AiOutlineClose} from 'react-icons/ai';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div name="home" className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className={nav ? 'logo dark' : 'logo'}>
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
        <Link to='destination'smooth={true} duration={500}><li>Destination</li></Link>
        <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
        <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
        <Link to='views'smooth={true} duration={500}><li>Views</li></Link>
       
      </ul>
      <div className="nav-icons">
        <BiSearchAlt2 className="icon" style={{marginRight: '1rem'}} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (< AiOutlineMenu className='icon' />): (<AiOutlineClose className="icon" style={{color:'#000'}}/>)}
        
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
        <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
        <Link to='destination'smooth={true} duration={500}><li>Destination</li></Link>
        <Link to='carousel' smooth={true} duration={500}><li>Travel</li></Link>
        <Link to='book' smooth={true} duration={500}><li>Book</li></Link>
        <Link to='views'smooth={true} duration={500}><li>Views</li></Link>
       
        </ul>
        <div className="mobile-menu-btn">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            < FaFacebookF className='icon' />
            < FaInstagram className='icon' />
            < FaTwitter className='icon' />
            < FaLinkedinIn className='icon' />
            < FaPinterest className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
