import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchBrands = createAsyncThunk(
  "catalog/fetchBrands",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8080/brands");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export { fetchBrands };