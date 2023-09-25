// const {configureStore} from '@reduxjs/toolkit';

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
console.log(cartReducer);
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
