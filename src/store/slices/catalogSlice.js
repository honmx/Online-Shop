import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "../../services/fetchBrands";
import { fetchProducts } from "../../services/fetchProducts";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    products: [],
    brands: [],
    brandFilter: [],
    error: false
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload; 
    },
    setBrandFilter(state, action) {
      if (state.brandFilter.includes(action.payload)) state.brandFilter.splice(state.brandFilter.indexOf(action.payload), 1);
      else state.brandFilter.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.error = false;
    });
    builder.addCase(fetchBrands.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.error = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.error = true;
    });
  }
});

export const { setProducts, setBrandFilter } = catalogSlice.actions;
export default catalogSlice.reducer;