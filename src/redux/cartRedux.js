import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    favoriteProducts: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProducts: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    addFavorite: (state,action) => {
      state.favoriteProducts.push(action.payload)
    }


   
    
  },
});

export const { addProduct , removeProducts , addFavorite } = cartSlice.actions;
export default cartSlice.reducer;