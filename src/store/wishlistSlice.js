import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        state.items.splice(existingIndex, 1)
      } else {
        state.items.push(product); 
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
