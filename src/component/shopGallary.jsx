import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import instanceAxios from "./instanceAxios";
import { FaHeart, FaEye, FaSyncAlt, FaCheck } from "react-icons/fa";
import LensZoomEffect from "./modal.jsx";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slice.js";
import { toggleWishlist } from "../store/wishlistSlice.js";
import "./ShopGallery.css";

const ShopGallery = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items); // Get wishlist items from redux
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1 });
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("green");
  const pageSize = 5;
  const totalPages = 3;

  useEffect(() => {
    instanceAxios
      .get("/products")
      .then((response) => {
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products.slice(0, pageSize * totalPages));
        } else {
          console.error("API data is not an array:", response.data.products);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleWishlistToggle = (product) => {
    // Check if the product is already in the wishlist
    const isInWishlist = wishlist.some((item) => item.id === product.id); 

    if (isInWishlist) {
      // If product is in wishlist, remove it
      dispatch(toggleWishlist(product));  // Remove from wishlist
      setAlertMessage("Product removed from wishlist");
      setAlertColor("red");
    } else {
      // If product is not in wishlist, add it
      dispatch(toggleWishlist(product));  // Add to wishlist
      setAlertMessage("Product added to wishlist");
      setAlertColor("green");
    }

    // Show alert for 3 seconds
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleCartToggle = (product) => {
    const isAdding = Math.random() > 0.5;

    if (isAdding) {
      dispatch(addToCart(product));
      setAlertMessage("Product added to cart");
      setAlertColor("green");
    } else {
      dispatch(removeFromCart(product));
      setAlertMessage("Product removed from cart");
      setAlertColor("red");
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="zLm-gallery-container">
      {products.length > 0 &&
        products
          .slice((pagination.page - 1) * pageSize, pagination.page * pageSize)
          .map((product, index) => {
            const globalIndex = (pagination.page - 1) * pageSize + index + 1;
            const productImage = `/assets/shop/image${globalIndex}.jpeg`;

            // Ensure each product has a unique ID
            const productWithId = { ...product, id: globalIndex };

            return (
              <div key={productWithId.id} className="pQt-gallery-item">
                <img
                  src={productImage}
                  alt={product.title}
                  className="nGp-product-image"
                  onError={(e) =>
                    (e.target.src = "/assets/shop/placeholder.jpg")
                  }
                />

                <div className="fRb-product-icons">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Quick View</Tooltip>}
                  >
                    <FaEye
                      className="xYs-icon"
                      style={{ fontSize: "38px", cursor: "pointer" }}
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowModal(true);
                      }}
                    />
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">WishList</Tooltip>}
                  >
                    <FaHeart
                      className="xYs-icon jKt-wishlist-icon"
                      style={{
                        fontSize: "38px",
                        cursor: "pointer",
                        color: wishlist.some((item) => item.id === productWithId.id) ? "green" : "gray", // Change color based on wishlist
                      }}
                      onClick={() => handleWishlistToggle(productWithId)}
                    />
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Compare</Tooltip>}
                  >
                    <FaSyncAlt className="xYs-icon" style={{ fontSize: "38px" }} />
                  </OverlayTrigger>
                </div>

                <p className="yGl-product-category">{product.category}</p>
                <h4 className="mPs-product-title">{product.title}</h4>
                <p className="vRk-product-price">${product.price}</p>

                <button
                  className="lWn-add-button"
                  onClick={() => handleCartToggle(productWithId)}
                >
                  + Add
                </button>
              </div>
            );
          })}

      <div className="fYd-pagination-container">
        <Pagination
          count={totalPages}
          page={pagination.page}
          onChange={(event, page) => setPagination({ page })}
          variant="outlined"
          shape="rounded"
          className="rXa-custom-pagination"
        />
      </div>

      {showModal && (
        <LensZoomEffect show={showModal} onClose={() => setShowModal(false)} />
      )}

      {showAlert && (
        <div
          className="hNs-custom-alert"
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
            <FaCheck style={{ color: "white", fontSize: "14px" }} />
          </div>
          <span style={{ fontSize: "16px", color: "#333" }}>{alertMessage}</span>
        </div>
      )}
    </div>
  );
};

export default ShopGallery;
