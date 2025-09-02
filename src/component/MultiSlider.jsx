import './MultiSlider.css'
import React, { useEffect, useState } from "react";

const categories = [
  { img: "/assets/shop/image3.jpeg", label: "Dairy, Bread & Eggs" },
  { img: "/assets/shop/image4.jpeg", label: "Snack & Munchies" },
  { img: "/assets/shop/image5.jpeg", label: "Bakery & Biscuits" },
  { img: "/assets/shop/image6.jpeg", label: "Instant Food" },
  { img: "/assets/shop/image7.jpeg", label: "Tea, Coffee & Drinks" },
  { img: "/assets/shop/image8.jpeg", label: "Atta, Rice & Dal" },
  { img: "/assets/shop/image9.jpeg", label: "Baby Care" },
  { img: "/assets/shop/image10.jpeg", label: "Chicken, Meat & Fish" },
];

export default function LoopingSlider() {
  const [items, setItems] = useState(categories);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const updated = [...prev];
        const first = updated.shift(); // احذف أول صورة
        updated.push(first); // رجعها في الآخر
        return updated;
      });
    }, 2000); // كل 2 ثانية

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loopingSliderWrapper">
      <h2 className="loopingSliderTitle">Featured Categories</h2>
      <div className="loopingSliderTrack">
        {items.slice(0, 4).map(({ img, label }, idx) => (
          <div className="loopingSliderItem" key={idx}>
            <img src={img} alt={label} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

