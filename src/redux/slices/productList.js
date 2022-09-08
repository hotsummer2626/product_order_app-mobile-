import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products/products";

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products: products,
    filterProducts: products,
  },
  reducers: {
    setProductListByKeyWord(state, action) {
      state.filterProducts = state.products.filter(
        (product) => product.name.toLowerCase().indexOf(action.payload) !== -1
      );
    },
  },
});

export const { setProductListByKeyWord } = productListSlice.actions;
export const { reducer: productListReducer } = productListSlice;
