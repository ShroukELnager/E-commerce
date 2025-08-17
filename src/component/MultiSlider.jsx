import "./MultiSlider.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect } from "react";

const MultiSlider = () => {
    const [images, setImages] = useState([]);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        const imageCount = 10; 
        const imageList = Array.from({ length: imageCount }, (_, i) => `/assets/shop/image${i + 1}.jpeg`);
        setImages(imageList);
    }, []);

    return (
        <div className="category-slider-container">
            <h2 className="category-slider-title">Featured Categories</h2>

            <Swiper
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                slidesPerView={3}
                spaceBetween={20}
                autoplay={{ 
                    delay: 1500, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false 
                }}
                loop={true} 
                modules={[Autoplay]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="category-card"
                            onMouseEnter={() => swiperInstance?.autoplay.stop()} 
                            onMouseLeave={() => swiperInstance?.autoplay.start()} 
                        >
                            <img src={image} alt={`Product ${index + 1}`} className="category-image" />
                        </div>
                        <p className="category-text">Category {index + 1}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MultiSlider;
