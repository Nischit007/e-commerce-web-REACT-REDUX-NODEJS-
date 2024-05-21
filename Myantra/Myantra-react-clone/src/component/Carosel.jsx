import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../images/image2.avif';

import Image3 from '../images/image3.avif';
const CarouselComponent = () => {
  return (
    <Carousel className='carosel-container' >
      <div className='carosel'>
        <img src={Image1} alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
     
      <div>
        <img src={Image3} alt="Image 3"  />
        <p className="legend">Image 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;