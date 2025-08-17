import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../component/Home";
import Shop from "../component/Shop";
import Stores from "../component/stores";
import Docs from "../component/Docs";
import Header from './header.jsx';
import WishlistPage from "./wishlistPage.jsx";
import RegisterHeader from './RegisterHeader.jsx';
import Breadcrumbs from '../component/Breadcrumbs.jsx';
import Signin from "./Sign-in.jsx";
import Signup from "./Sign-up.jsx"; 
import ForgotPassword from "./Forgot-Password.jsx"; 

export default function AppRoutes() {
  const location = useLocation();
  const isAuthPage = ["/Sign-in", "/Sign-up", "/Forgot-Password"].includes(location.pathname);

  return (
    <>
      {!isAuthPage ? <Header /> : <RegisterHeader />}  
      {!isAuthPage && <Breadcrumbs />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/Sign-in" element={<Signin />} />
        <Route path="/Sign-up" element={<Signup />} />
        <Route path="/Forgot-Password" element={<ForgotPassword />} />
        <Route path="/wishlist" element={<WishlistPage />} /> 
      </Routes>
    </>
  );
}
