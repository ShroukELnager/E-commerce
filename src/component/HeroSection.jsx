import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

import slider1 from '/assets/slider1.png';
import slider2 from '/assets/slider2.png';
const HeroSection = () => {
    const navigate = useNavigate();

  return (
    <div className="slide-container hero-slide" style={{backgroundColor:'#CFE7D9'}}>
      <div className="text-content">
        <span className="discount-badge">Opening Sale Discount 50%</span>
        <h1>SuperMarket For Fresh Grocery</h1>
        <p>
          Introduced a new model for online grocery shopping and convenient home delivery.
        </p>
<button className="shop-button" onClick={() => navigate('/shop')}>
    Shop Now
  </button>      </div>
      <div className="image-content">
        <img src={slider1} alt="Fresh Groceries" className="grocery-image" style={{width:'450px',height:'450px'}} />
       
        <div className="delivery-badge">✅ Delivery Done!</div>
      </div>
    </div>
  );
};

export default HeroSection;
