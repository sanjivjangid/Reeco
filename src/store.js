import { configureStore } from "@reduxjs/toolkit";

import productReducer from './pages/Order/slices/productsSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
