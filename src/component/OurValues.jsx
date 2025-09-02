import React from "react";
import { LuClock3, LuGift, LuPackage, LuRotateCw } from "react-icons/lu";
import './OurValues.css';

const features = [
  {
    icon: <LuClock3 className="icon" style={{ fontSize: '65px', color: '#0aad0a' }} />,
    title: "10 Minute Grocery Now",
    description: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
  },
  {
    icon: <LuGift className="icon" style={{ fontSize: '65px', color: '#0aad0a' }} />,
    title: "Best Prices & Offers",
    description: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",
  },
  {
    icon: <LuPackage className="icon" style={{ fontSize: '65px', color: '#0aad0a' }} />,
    title: "Wide Assortment",
    description: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
  },
  {
    icon: <LuRotateCw className="icon" style={{ fontSize: '65px', color: '#0aad0a' }} />,
    title: "Easy Returns",
    description: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className="feature-box">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
