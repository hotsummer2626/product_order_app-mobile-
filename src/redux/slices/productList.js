import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../products/products";

const productListSlice = createSlice({
  name: "productList",
  initialState: {
    allProducts: products,
    filterProducts: products,
    cartProducts: [],
  },
  reducers: {
    setProductListByKeyWord(state, action) {
      state.filterProducts = state.allProducts.filter(
        (product) => product.name.toLowerCase().indexOf(action.payload) !== -1
      );
    },
    addProductToCart(state, action) {
      const findIndexFromProducts = (productArr) =>
        productArr.findIndex((product) => product.id === action.payload.id);
      const productIndexInAllProduct = findIndexFromProducts(state.allProducts);
      const productIndexInFilterProducts = findIndexFromProducts(
        state.filterProducts
      );
      const productIndexInCartProducts = findIndexFromProducts(
        state.cartProducts
      );
      state.allProducts[productIndexInAllProduct].amount += 1;
      if (productIndexInFilterProducts !== -1) {
        state.filterProducts[productIndexInFilterProducts].amount += 1;
      }
      if (productIndexInCartProducts === -1) {
        state.cartProducts.push({ ...action.payload, amount: 1 });
      } else {
        state.cartProducts[productIndexInCartProducts].amount += 1;
      }
    },
    removeProductFromCart(state, action) {
      const findIndexFromProducts = (productArr) =>
        productArr.findIndex((product) => product.id === action.payload.id);
      const productIndexInAllProduct = findIndexFromProducts(state.allProducts);
      const productIndexInFilterProducts = findIndexFromProducts(
        state.filterProducts
      );
      const productIndexInCartProducts = findIndexFromProducts(
        state.cartProducts
      );
      state.allProducts[productIndexInAllProduct].amount -= 1;
      if (productIndexInFilterProducts !== -1) {
        state.filterProducts[productIndexInFilterProducts].amount -= 1;
      }
      if (productIndexInCartProducts !== -1 && action.payload.amount === 1) {
        state.cartProducts.splice(productIndexInCartProducts, 1);
      } else if (
        productIndexInCartProducts !== -1 &&
        action.payload.amount !== 1
      ) {
        state.cartProducts[productIndexInCartProducts].amount -= 1;
      }
    },
  },
});

export const {
  setProductListByKeyWord,
  addProductToCart,
  removeProductFromCart,
} = productListSlice.actions;
export const { reducer: productListReducer } = productListSlice;
