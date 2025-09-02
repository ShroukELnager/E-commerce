import "./BestSellers.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart, FaEye, FaSyncAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function BestSellersSection() {
  const navigate = useNavigate();

  return (
    <div className="xA1c-container">
      <h4 className="xA1c-title">Daily Best Sells</h4>
      <div className="zzZ-content">
        
        <div className="zzZ-banner">
          <img src="./assets/photo-1610632380989-680fe40816c6.jpeg" alt="Promo" className="zzZ-banner-img" />
          <div className="zzZ-banner-text">
            <h3>100% Organic Coffee Beans.</h3>
            <p>Get the best deal before close.</p>
            <Button variant="success" className="zzZ-shop-btn" onClick={() => navigate('/shop')}>
              Shop Now →
            </Button>
          </div>
        </div>

        <div className="yYy-products">
          {[
            { title: "Roast Ground Coffee", category: "Tea, Coffee & Drinks", price: 13.5, oldPrice: 18, image: "./assets/Roast Ground Coffee.jpeg" },
            { title: "Crushed Tomatoes", category: "Fruits & Vegetables", price: 13.5, oldPrice: 18, image: "./assets/Crushed Tomatoes.jpeg" },
            { title: "Golden Pineapple", category: "Fruits & Vegetables", price: 14.4, oldPrice: 18, image: "./assets/Golden Pineapple.jpeg" },
          ].map((product, index) => (
            <Card key={index} className="v99-card">
              <div className="v99-img-wrap">
                <Card.Img variant="top" src={product.image} className="v99-img" />
                <div className="v99-icons">
                  <FaEye className="v99-icon" style={{ fontSize: '34px' }} />
                  <FaHeart className="v99-icon" style={{ fontSize: '34px' }} />
                  <FaSyncAlt className="v99-icon" style={{ fontSize: '34px' }} />
                </div>
              </div>
              <Card.Body>
                <p className="v99-category">{product.category}</p>
                <Card.Title>{product.title}</Card.Title>
                <div className="v99-price-rating">
                  <p className="v99-price">
                    <span className="v99-new">${product.price}</span>
                    <span className="v99-old">${product.oldPrice}</span>
                  </p>
                  <div className="v99-stars">
                    <span>★★★★☆</span>
                    <span className="v99-rating">4.3</span>
                  </div>
                </div>
                <Button variant="success" className="v99-add-btn">+ Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
