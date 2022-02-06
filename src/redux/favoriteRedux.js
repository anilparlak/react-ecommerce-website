import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteProducts: [],
    quantity:0
    
  },
  reducers: {
   
    addFavorite: (state,action) => {
      state.favoriteProducts.push(action.payload);
      state.quantity += 1;
    },
    removeFavorite: (state,action) => {
      state.favoriteProducts.splice(action.payload,1);
      state.quantity -= 1;
    }
   
    
  },
});

export const { addFavorite , removeFavorite} = cartSlice.actions;
export default cartSlice.reducer;