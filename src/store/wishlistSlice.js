import { createSlice } from "@reduxjs/toolkit";

// الحالة الأولية للمفضلة (قائمة فارغة في البداية)
const initialState = {
  items: [],  // قائمة المنتجات الموجودة في المفضلة
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;  // المنتج الذي سيتم إضافته أو إزالته من المفضلة

      // البحث إذا كان المنتج موجوداً بالفعل في المفضلة
      const existingIndex = state.items.findIndex((item) => item.id === product.id);

      if (existingIndex !== -1) {
        // إذا كان المنتج موجوداً، نقوم بإزالته
        state.items.splice(existingIndex, 1);
      } else {
        // إذا لم يكن موجوداً، نقوم بإضافته
        state.items.push(product);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
