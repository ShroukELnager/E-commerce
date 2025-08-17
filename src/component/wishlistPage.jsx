import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleWishlist } from "../store/wishlistSlice.js";
import { MdDelete } from "react-icons/md";
import "./wishlist.css";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const location = useLocation();

  useEffect(() => {
    console.log("Wishlist updated:", wishlist); 
  }, [location, wishlist]);

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
                  <MdDelete className="delete-icon" onClick={() => dispatch(toggleWishlist(product))} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
