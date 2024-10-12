import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products_data: products,
    filteredProducts: products,
    isError: false,
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload; // Update filtered products
    },
  },
});
export const { setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
