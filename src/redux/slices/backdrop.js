import { createSlice } from "@reduxjs/toolkit";

const backdropSlice = createSlice({
  name: "backdrop",
  initialState: {
    isCartDetailsShow: false,
    isConfirmShow: false,
    isCheckoutShow: false,
  },
  reducers: {
    open(state, action) {
      const actions = {
        cartDetails: () => (state.isCartDetailsShow = true),
        confirm: () => (state.isConfirmShow = true),
        checkout: () => (state.isCheckoutShow = true),
      };
      for (let value of action.payload) {
        actions[value]();
      }
    },
    close(state, action) {
      const actions = {
        cartDetails: () => (state.isCartDetailsShow = false),
        confirm: () => (state.isConfirmShow = false),
        checkout: () => (state.isCheckoutShow = false),
      };
      for (let value of action.payload) {
        actions[value]();
      }
    },
    toggle(state, action) {
      const actions = {
        cartDetails: () => (state.isCartDetailsShow = !state.isCartDetailsShow),
        confirm: () => (state.isConfirmShow = !state.isConfirmShow),
        checkout: () => (state.isCheckoutShow = !state.isCheckoutShow),
      };
      for (let value of action.payload) {
        actions[value]();
      }
    },
  },
});

export const { open, close, toggle } = backdropSlice.actions;
export const { reducer: backdropReducer } = backdropSlice;
