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

export default productSlice.reducer;