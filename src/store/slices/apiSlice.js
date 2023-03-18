import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products"
    }),
    getBrands: builder.query({
      query: () => "brands",
    }),
  })
});

export { apiSlice };
export const { useGetProductsQuery, useGetBrandsQuery } = apiSlice;