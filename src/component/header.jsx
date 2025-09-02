import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./header.css";
import logo from "/assets/logo.png";
import { IoBagOutline } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineShop, MdGridView, MdStore } from "react-icons/md";
import { CiUser, CiLocationOn } from "react-icons/ci";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import SignupModal from './signModal.jsx';
import Cart from "./Cart.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <img src={logo} alt="Logo" />
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1>FreshCart</h1>
          </Link>
        </div>

        <div className="search-location-container">
          <input type="search" className="search" placeholder="Search for products" />
          <div className="location">
            <CiLocationOn className="location-icon" /> Location
          </div>
        </div>

        <div className="icons">
          <Link to='/wishlist'>
            <div className="icon-wrapper">
              <MdFavoriteBorder className="icon" style={{ fontSize: '24px' }} />
              {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
            </div>
          </Link>

          <div className="icon-wrapper">
            <CiUser className="icon" style={{ fontSize: '24px' }} onClick={() => setOpen(true)} />
            <SignupModal open={open} handleClose={() => setOpen(false)} />
          </div>

          <div className="icon-wrapper">
            <IoBagOutline
              className="icon"
              style={{ fontSize: '22px', cursor: 'pointer' }}
              onClick={() => setIsCartOpen(!isCartOpen)}
            />
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </div>
        </div>

        <div
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown" role="menu" aria-label="Mobile Navigation Menu">
          <div className="location">
            <CiLocationOn className="location-icon" /> Location
          </div>

          <button className="all-departments-btn">
            <MdGridView className="menu-btn" />
            All Departments
          </button>

          <div className="search-input">
            <input type="search" placeholder="Search for products" />
          </div>

          <nav className="mobile-nav-links">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

            <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>
              <MdOutlineShop className="dropdown-icon" />
              Shop
            </Link>

            <Link to="/stores" onClick={() => setMobileMenuOpen(false)}>
              <MdStore className="dropdown-icon" />
              Stores
            </Link>

            <Link to="/Sign-in" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
            <Link to="/Sign-up" onClick={() => setMobileMenuOpen(false)}>Sign up</Link>
            <Link to="/Forgot-Password" onClick={() => setMobileMenuOpen(false)}>Forget Password</Link>
          </nav>
        </div>
      )}

      <Navbar expand="lg">
        <Container>
          <Nav className="me-auto align-items-center">
            <div className="header-btn">
              <button>
                <MdGridView className="menu-btn" />
                <span>All Departments</span>
              </button>
            </div>

            <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active-tab" : ""}>
              Home
            </Nav.Link>

            <NavDropdown title="Shop" id="shop-dropdown">
              <NavDropdown.Item as={Link} to="/shop">
                <MdOutlineShop
                  className="dropdown-icon"
                  style={{ display: 'inline', fontSize: '22px', color: 'gray', marginRight: '5px' }}
                />
                Shop
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Stores" id="stores-dropdown">
              <NavDropdown.Item as={Link} to="/stores">
                <MdStore className="dropdown-icon" /> Stores
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item as={Link} to="/Sign-in">Sign in</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Sign-up">Sign up</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Forgot-Password">Forget Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <hr />

      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
}
