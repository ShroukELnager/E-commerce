import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice.js";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, 
  },
});

export default store;
