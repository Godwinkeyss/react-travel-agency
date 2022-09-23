import React from 'react';
import './Imgcarousel.css';
import { Carousel } from 'react-responsive-carousel';
import Borabora from '../../images/borabora.jpg';
import Borabora2 from '../../images/borabora2.jpg';
import Keywest from '../../images/keywest.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const ImgCarousel = () => {
  return (
    <div name="carousel" className="container">
    <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div >
        <img src={Borabora} alt="/" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={Borabora2} alt="/" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={Keywest} alt="/" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
    </div>
  );
};

export default ImgCarousel;
