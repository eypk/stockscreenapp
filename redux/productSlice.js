import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import ProductList from "../assets/ProductList.json";

const initialState = {
  // TODO: get initial state from api
  productList: [],
  unFilteredProductList: [],
};

export const fetchProducts = createAsyncThunk(
  //action type string
  "product/setProductAction",
  // callback function
  async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (data) => data.json()
    );
    const orderResponse = response.sort((a, b) => {
      // sorted by title
      const nameA = a.title.toUpperCase(); // ignore upper and lowercase
      const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    return orderResponse;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductAction: (state, action) => {
      if (action.payload) {
        // TODO implement debounce
        state.productList = state.unFilteredProductList.filter((item) => {
          return item.title
            ?.toUpperCase()
            .includes(action.payload.toUpperCase());
        });
      } else {
        state.productList = state.unFilteredProductList;
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      state.productList = action.payload;
      state.unFilteredProductList = action.payload;
    });
  },
});

export const { setProductAction } = productSlice.actions;

export default productSlice.reducer;
