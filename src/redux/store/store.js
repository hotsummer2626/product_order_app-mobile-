import { configureStore } from "@reduxjs/toolkit";
import { productListReducer } from "../slices/productList";
import { backdropReducer } from "../slices/backdrop";

export default configureStore({
  reducer: {
    productList: productListReducer,
    backdrop: backdropReducer,
  },
});
