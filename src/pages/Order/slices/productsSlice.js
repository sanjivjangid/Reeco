import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep, findIndex } from "lodash";

const initialState = {
  products: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    loadData: (state, action) => {
      return {...state, products: action.payload};
    },
    updateStatus: (state, action) => {
      const tmp = cloneDeep(state.products);
      const findIdx = findIndex(tmp, { id: action.payload.id});
      if (findIdx > -1) {
        tmp[findIdx].status = action.payload.status;
      }
      return { ...state, products: tmp};
    }
  },
});

export const { loadData, updateStatus } = productsSlice.actions;

export default productsSlice.reducer;
