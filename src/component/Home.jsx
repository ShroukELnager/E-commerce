import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import slider1 from '/assets/slider1.png';
import slider2 from '/assets/slider2.png';
import ADS from './Ads.jsx';
import FeaturesSection from './OurValues.jsx';
import ShopGallery from './shopGallary.jsx'
import BestSellers from './BestSellers.jsx'
import MultiSlider from './MultiSlider.jsx'
export default function Home() {
  return (<>
    <div className='slider-container'> 
      <Carousel data-bs-theme="dark" indicators={false} controls={false}>
        <Carousel.Item>
          <img className="custom-slider-img" src={slider1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="custom-slider-img" src={slider2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>

    </div>

    <MultiSlider/>
    <ADS />
    <ShopGallery/>
    <BestSellers/>
    <FeaturesSection/>
    
    </>
  );
}
