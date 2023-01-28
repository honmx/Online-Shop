import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import catalogSlice from "./slices/catalogSlice";

const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    basket: basketSlice,
  }
});

export default store;