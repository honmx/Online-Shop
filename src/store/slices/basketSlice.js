import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    ids: []
  },
  reducers: {
    setBasketProduct(state, action) {
      const indexOfExistingProduct = state.basket.findIndex(item => {
        return item.id === action.payload.id &&
               item.color === action.payload.color && 
               item.size === action.payload.size
        //  item?.config?.colors[item?.color - 1]?.color === action.payload?.config?.colors[action.payload?.color - 1]?.color &&
        //  item?.config?.sizes[item?.size - 1]?.size === action.payload?.config?.sizes[action.payload?.size - 1]?.size;
      });

      if (indexOfExistingProduct !== -1) state.basket[indexOfExistingProduct].quantity += 1;
      else {
        state.basket.push({ ...action.payload, quantity: 1 });
        state.ids.push(action.payload.id);
      }
    },
    changeItemQuantity(state, action) {
      state.basket.forEach(item => {
        item.quantity = item.id === action.payload.id &&
                        item.color === action.payload.color &&
                        item.size === action.payload.size ? 
                        action.payload.quantity : item.quantity
      })
    },
    deleteItem(state, action) {
      state.basket = state.basket.filter(item => {
        return item.id !== action.payload.id ||
          (
            item.id === action.payload.id &&
            (item.color !== action.payload.color ||
              item.size !== action.payload.size)
          );
      });
    }
  }
});

export const { setBasketProduct, changeItemQuantity, deleteItem } = basketSlice.actions;
export default basketSlice.reducer;