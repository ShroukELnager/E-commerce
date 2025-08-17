import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import instanceAxios from "./instanceAxios";
import { FaHeart, FaEye, FaSyncAlt, FaCheck } from "react-icons/fa";
import LensZoomEffect from "./modal.jsx";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/slice.js";
import { toggleWishlist } from "../store/wishlistSlice.js";
import "./ShopGallery.css";

const ShopGallery = () => {
  const dispatch = useDispatch();
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

  const handleCartToggle = (product) => {
    const isAdding = Math.random() > 0.5;
    if (isAdding) {
      dispatch(addToCart(product));
      setAlertMessage("Product updated to cart");
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
    <div className="gallery-container">
      {products.length > 0 &&
        products
          .slice((pagination.page - 1) * pageSize, pagination.page * pageSize)
          .map((product, index) => {
            const globalIndex = (pagination.page - 1) * pageSize + index + 1;
            const productImage = `/assets/shop/image${globalIndex}.jpeg`;

            return (
              <div key={product.id} className="gallery-item">
                <img
                  src={productImage}
                  alt={product.title}
                  className="product-image"
                  onError={(e) =>
                    (e.target.src = "/assets/shop/placeholder.jpg")
                  }
                />

                <div className="product-icons">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Quick View</Tooltip>}
                  >
                    <FaEye
                      className="icon"
                      style={{ fontSize: "34px", cursor: "pointer" }}
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
                      className="icon wishlist-icon"
                      style={{
                        fontSize: "34px",
                        cursor: "pointer",
                        color: "green",
                      }}
                      onClick={() => dispatch(toggleWishlist(product))}
                    />
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Compare</Tooltip>}
                  >
                    <FaSyncAlt className="icon" style={{ fontSize: "34px" }} />
                  </OverlayTrigger>
                </div>

                <p className="product-category">{product.category}</p>
                <h4 className="product-title">{product.title}</h4>
                <p className="product-price">${product.price}</p>

                <button
                  className="add-button"
                  onClick={() => handleCartToggle(product)}
                >
                  + Add
                </button>
              </div>
            );
          })}

      <div className="pagination-container">
        <Pagination
          count={totalPages}
          page={pagination.page}
          onChange={(event, page) => setPagination({ page })}
          variant="outlined"
          shape="rounded"
          className="custom-pagination"
        />
      </div>

      {showModal && (
        <LensZoomEffect show={showModal} onClose={() => setShowModal(false)} />
      )}

      {showAlert && (
        <div
          className="custom-alert"
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
