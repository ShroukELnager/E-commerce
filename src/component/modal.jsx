import './modal.css';
import { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import { FaShoppingBag, FaExchangeAlt, FaHeart } from "react-icons/fa";

function LensZoomEffect({ show, onClose }) {
  const images = [
    "assets/modal/img1.png",
    "assets/modal/img2.png",
    "assets/modal/img3.png",
    "assets/modal/img4.png",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const lensRef = useRef(null);
  const imgContainerRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState("500g"); 
  const [counter, setCounter] = useState(0); 

  useEffect(() => {
    setMainImage(images[0]);
  }, [show]);

  const handleMouseMove = (e) => {
    const lens = lensRef.current;
    const imgContainer = imgContainerRef.current;
    if (!lens || !imgContainer) return;

    const { left, top, width, height } = imgContainer.getBoundingClientRect();
    const lensSize = 100;

    let x = e.clientX - left - lensSize / 2;
    let y = e.clientY - top - lensSize / 2;

    if (x > width - lensSize) x = width - lensSize;
    if (x < 0) x = 0;
    if (y > height - lensSize) y = height - lensSize;
    if (y < 0) y = 0;

    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;
    lens.style.backgroundImage = `url(${mainImage})`;
    lens.style.backgroundSize = `${width * 2}px ${height * 2}px`;
    lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>×</button>

        <div className='image-section'>
          <div 
            className="main-image-container" 
            ref={imgContainerRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={() => lensRef.current.style.display = "none"} 
            onMouseEnter={() => lensRef.current.style.display = "block"}
          >
            <img src={mainImage} alt="Product" className="main-image" />
            <div className="lens" ref={lensRef}></div>
          </div>
          <div className="thumbnails">
            {images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Thumbnail ${index}`} 
                className={`thumbnail ${mainImage === img ? 'active-thumbnail' : ''}`} 
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className='info-section'>
          <section className='section1'>
            <p>Bakery & Biscuits</p>
            <h1 style={{margin:'0'}}>Cadbury 5 Star Chocolate</h1>
            <p className="rating">
              <span className="stars">★ ★ ★ ★ ☆</span>
              <span className="reviews">(4 reviews)</span>
            </p>
            <p className="price">$35 <span className="old-price">$40</span></p><p className="price">
  $21.6 <span className="old-price">$24</span> 
  <span className="discount"> 10% Off</span>
</p>
          </section>

          <hr />

          <section className='section2'>
            <ButtonGroup className="weight-options">
              {["250g", "500g", "1kg"].map((weight) => (
                <Button
                  key={weight}
                  className={selectedWeight === weight ? "btn-selected" : ""}
                  onClick={() => setSelectedWeight(weight)}
                >
                  {weight}
                </Button>
              ))}
            </ButtonGroup>
            
            <div className="quantity">
              <button className="qty-btn" onClick={decreaseCounter}>−</button>
              <input type="text" value={counter} readOnly className="qty-input"/>
              <button className="qty-btn" onClick={increaseCounter}>+</button>
            </div>

            <div className="actions">
              <button className="add-to-cart" style={{ width: '150px', height:'60px' }}>
                <FaShoppingBag size={16} />
                Add to cart
              </button>
              <button className="icon-btn"><FaExchangeAlt size={16} /></button>
              <button className="icon-btn"><FaHeart size={16} /></button>
            </div>
          </section>
          <hr />

          <section className='section3'>
            <div className="product-details">
              <p><strong>Product Code:</strong> FBB00255</p>
              <p><strong>Availability:</strong> <span className="in-stock">In Stock</span></p>
              <p><strong>Type:</strong> Fruits</p>
              <p>
                <strong>Shipping:</strong> 
                <span className="shipping">01 day shipping.</span> 
                <span className="free-pickup">( Free pickup today)</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LensZoomEffect;
