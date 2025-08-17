import "./BestSellers.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart, FaEye, FaSyncAlt } from "react-icons/fa";

export default function BestSellersSection() {
  return (
    <div className="best-sellers-container">
      <h4 className="best-sellers-address">Daily Best Sells</h4>
      <div className="content-wrapper">
        {/* Banner Section */}
        <div className="banner">
          <img src="./assets/photo-1610632380989-680fe40816c6.jpeg" alt="Promo" className="banner-image" />
          <div className="banner-text">
            <h3>100% Organic Coffee Beans.</h3>
            <p>Get the best deal before close.</p>
            <Button variant="success" className="shop-now">Shop Now →</Button>
          </div>
        </div>

        {/* Products Section */}
        <div className="products-container">
          {[
            { title: "Roast Ground Coffee", category: "Tea, Coffee & Drinks", price: 13.5, oldPrice: 18, image: "./assets/Roast Ground Coffee.jpeg" },
            { title: "Crushed Tomatoes", category: "Fruits & Vegetables", price: 13.5, oldPrice: 18, image: "./assets/Crushed Tomatoes.jpeg" },
            { title: "Golden Pineapple", category: "Fruits & Vegetables", price: 14.4, oldPrice: 18, image: "./assets/Golden Pineapple.jpeg" },
          ].map((product, index) => (
            <Card key={index} className="product-card">
              <div className="product-img-container">
                <Card.Img variant="top" src={product.image} className="product-img" />
                <div className="product-icons">
                  <FaEye className="icon"style={{fontSize:'34px'}} />
                  <FaHeart className="icon" style={{fontSize:'34px'}}/>
                  <FaSyncAlt className="icon" style={{fontSize:'34px'}}/>
                </div>
              </div>
              <Card.Body>
                <p className="category">{product.category}</p>
                <Card.Title>{product.title}</Card.Title>
                <div className="price-rating">
                  <p className="price">
                    <span className="new-price">${product.price}</span>
                    <span className="old-price">${product.oldPrice}</span>
                  </p>
                  <div className="stars">
                      <span>★★★★☆</span> 
                      <span className="rating">4.3</span>
                  </div>
                    </div>
                <Button variant="success" className="add-to-cart">+ Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
