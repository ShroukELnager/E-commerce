import "./Ads.css";
import img1 from '/assets/lot-whole-baked-wholegrain-croissant-basket-Photoroom.png'
import img2 from"/assets/basket-full-vegetables-Photoroom.png"
export default function Ads() {
    return (
        <div className="ads-container">
            <div className="ad-box ad-bg-1">
                <div className="ad-content">
                    <h2>Fruits & Vegetables</h2>
                    <p>Get Upto 30% Off</p>
                    <button className="shop-button">Shop Now</button>
                </div>
                <img src={img1} alt="Fruits & Vegetables" />
            </div>

            <div className="ad-box ad-bg-2">
                <div className="ad-content">
                    <h2>Freshly Baked Buns</h2>
                    <p>Get Upto 25% Off</p>
                    <button className="shop-button">Shop Now</button>
                </div>
                <img src={img2} alt="Baked Buns" className="img2" />
            </div>
        </div>
    );
}
