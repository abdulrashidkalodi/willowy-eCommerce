import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, qty } = action.payload;
      const productExist = state.items.find((item) => item.product.id === product.id);
      if (productExist) {
        productExist.qty += qty;
      } else {
        state.items.push({ product, qty });
      }
    },
    updateQty: (state, action) => {
      const { productId, qty } = action.payload;
      const productExist = state.items.find((item) => item.product.id === productId);
      if (productExist) {
        productExist.qty = qty; 
      }
    },
    // deletedItem:(state,action)=>{
    //   const 
    // }
  },
});

export const { addToCart, updateQty } = cartSlice.actions;
export default cartSlice.reducer;
