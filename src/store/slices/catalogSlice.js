import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    brandFilter: [],
  },
  reducers: {
    setBrandFilter(state, action) {
      if (state.brandFilter.includes(action.payload)) {
        state.brandFilter.splice(state.brandFilter.indexOf(action.payload), 1);
      } else {
        state.brandFilter.push(action.payload);
      }
    }
  }
});

export const { setBrandFilter } = catalogSlice.actions;
export default catalogSlice.reducer;