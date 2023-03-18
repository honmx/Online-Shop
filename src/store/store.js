import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import catalogSlice from "./slices/catalogSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    basket: basketSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

export default store;