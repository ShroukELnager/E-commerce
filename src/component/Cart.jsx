import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/slice.js";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart({ isCartOpen, setIsCartOpen }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shop Cart</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✖</button>
        </div>
        <hr />

        <div className="free-delivery">
          <p>
            🚚 You’ve got <strong>FREE delivery</strong>. Start <strong>checkout now!</strong>
          </p>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <>
              <h1>Oops!</h1>
              <p>Your cart is empty</p>
              <button
                className="shop-now-btn"
                onClick={() => {
                  setIsCartOpen(false);
                  navigate("/shop");
                }}
              >
                Shop Now
              </button>
            </>
          ) : (
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={`/assets/shop/image${item.id}.jpeg`} alt={item.title} />
                  <div className="cart-item-details">
                    <h4>{item.title}</h4>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>

                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>

                  <div className="quantity">
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, amount: -1 }))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, amount: 1 }))
                      }
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-buttons">
          <button className="continue-shopping" onClick={() => setIsCartOpen(false)}>
            Continue Shopping
          </button>
          <button className="checkout">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}
