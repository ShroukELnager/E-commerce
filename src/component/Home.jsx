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
import MainSlider from './MainSlider.jsx';
export default function Home() {
  return (<>
    <div className='slider-container'> 
     <MainSlider />

    </div>

    <MultiSlider/>
    <ADS />
    <ShopGallery/>
    <BestSellers/>
    <FeaturesSection/>
    
    </>
  );
}
