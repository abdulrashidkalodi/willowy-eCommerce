import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/products";

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products_data: products,
    isError: false,
  }
});
export const selectProducts = (state) => state.products.products_data;

export default productSlice.reducer;