import React from 'react';
import './FreeShippingBanner.css';
import slider2 from '/assets/slider2.png';
import { useNavigate } from 'react-router-dom';

const FreeShippingBanner = () => {
    const navigate = useNavigate();

  return (
    <div className="slide-container shipping-slide" style={{backgroundColor:'#E9EDEF'}}>
      <div className="text-content">
        <span className="highlight-badge">Free Shipping - orders over $100</span>
        <h1>
          Free Shipping on orders <br /> over <span className="green-text">$100</span>
        </h1>
        <p>
          Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
        </p>
<button className="shop-button" onClick={() => navigate('/shop')}>
    Shop Now
  </button>      </div>
      <div className="image-content">
        <img src={slider2} alt="Fresh Vegetables" className="veg-image" style={{width:'450px',height:'450px'}} />
      </div>
    </div>
  );
};

export default FreeShippingBanner;
