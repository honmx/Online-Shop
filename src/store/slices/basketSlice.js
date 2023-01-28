import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    ids: []
  },
  reducers: {
    setBasketProduct(state, action) {
      const indexOfExistingProduct = state.basket.findIndex(item => item.id === action.payload.id);
      if (indexOfExistingProduct !== -1) state.basket[indexOfExistingProduct].quantity += 1;
      else {
        state.basket.push({ ...action.payload, quantity: 1 });
        state.ids.push(action.payload.id);
      }
    },
    changeItemQuantity(state, action) {
      state.basket.forEach(item => {
        item.quantity = item.id === action.payload.id ? action.payload.quantity : item.quantity
      })
    }
  }
});

export const { setBasketProduct, changeItemQuantity } = basketSlice.actions;
export default basketSlice.reducer;