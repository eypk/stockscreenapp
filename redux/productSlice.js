import { createSlice } from "@reduxjs/toolkit";
import ProductList from "../assets/ProductList.json";

const initialState = {
  // TODO: get initial state from api
  productList: ProductList,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductAction: (state, action) => {
      if (action.payload) {
        // TODO implement debounce
        state.productList = initialState.productList.filter((item) =>
          item.title?.toUpperCase().includes(action.payload.toUpperCase())
        );
      } else {
        state.productList = initialState.productList;
      }
    },
  },
});

export const { setProductAction } = productSlice.actions;

export default productSlice.reducer;
