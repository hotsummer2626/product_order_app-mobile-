import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "../slices/productList";

export default configureStore({
  reducer: {
    productList: productListReducer,
  },
});
