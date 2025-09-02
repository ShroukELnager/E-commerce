import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWishlist } from "../store/wishlistSlice.js";
import { MdDelete } from "react-icons/md";
import "./wishlist.css";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("green");

  useEffect(() => {
    console.log("Wishlist updated:", wishlist);
  }, [wishlist]);

  const handleWishlistToggle = (product) => {
    dispatch(toggleWishlist(product)); // Add/remove product from wishlist
    setAlertMessage(
      product.title + (wishlist.includes(product) ? " added to wishlist." : " removed from wishlist.")
    );
    setAlertColor(wishlist.includes(product) ? "green" : "red");
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty-message">Your wishlist is empty.</p>
      ) : (
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr key={product.id}>
                <td className="product-info">
                  <img src={`/assets/shop/image${product.id}.jpeg`} alt={product.title} />
                  <div>
                    <strong>{product.title}</strong>
                  </div>
                </td>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <MdDelete className="delete-icon" onClick={() => handleWishlistToggle(product)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showAlert && (
        <div
          className="wishlist-alert"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: "white",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 15px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderLeft: `5px solid ${alertColor}`,
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: alertColor,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdDelete style={{ color: "white", fontSize: "14px" }} />
          </div>
          <span style={{ fontSize: "16px", color: "#333" }}>{alertMessage}</span>
        </div>
      )}
    </div>
  );
}
