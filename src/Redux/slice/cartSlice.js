import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, qty } = action.payload;
      const productExist = state.items.find(
        (item) => item.product.id === product.id
      );
      if (productExist) {
        productExist.qty += qty;
      } else {
        state.items.push({ product, qty });
      }
    },
    updateQty: (state, action) => {
      const { productId, qty } = action.payload;
      const productExist = state.items.find(
        (item) => item.product.id === productId
      );
      if (productExist) {
        productExist.qty = qty;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.product.id !== productId);
    },
  },
});

export const { addToCart, updateQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
