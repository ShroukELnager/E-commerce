import './Shop.css'
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import ShopGallery from './shopGallary.jsx'


export default function Shop() {
  
  return (
    <>
      <div className='shop-container'>
        <h1>Snacks & Munchies</h1>
        <div className="dropdown-container">
          <p><span>26</span> Products found</p>
          <Dropdown id="dropdown-sort" title="Sort by: Featured" variant="outline-success" align="end">
            <Dropdown.Toggle variant="light" className="custom-dropdown">
              Show: 10
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>10</Dropdown.Item>
              <Dropdown.Item>20</Dropdown.Item>
              <Dropdown.Item>50</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light" className="custom-dropdown" align='end'>
              Sort by: Featured
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Featured</Dropdown.Item>
              <Dropdown.Item>Price: Low to High</Dropdown.Item>
              <Dropdown.Item>Price: High to Low</Dropdown.Item>
              <Dropdown.Item>Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
        <ShopGallery />
        

        
      </div>
    </>
  );
}
