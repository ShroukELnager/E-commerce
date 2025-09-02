import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRoutes from "./component/AppRoutes";
import Cart from "./component/Cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/footer.jsx";
export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
