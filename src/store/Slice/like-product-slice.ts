// src/store/Slice/like-product-slice.tsx

// Redux Import
import { createSlice } from '@reduxjs/toolkit';
// Export type
export type LikedState = {
  title: string;
  id: number;
  price: number;
  thumbnail: string;
  description: string;
};
// State
const initialState: {
  product: LikedState[] | null;
} = {
  product: null,
};
//  Like Slice
const LikedSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToLikeProduct: (state, action) => {
      if (!state.product) {
        state.product = [action.payload];
      } else {
        state.product.push(action.payload);
      }
    },
    removeToLikeProduct: (state, action) => {
      if (state.product) {
        state.product = state.product.filter(
          product => product.id !== action.payload,
        );
      }
    },
    removeAllLikedProduct: state => {
      state.product = null;
    },
  },
});

export const { addToLikeProduct, removeToLikeProduct, removeAllLikedProduct } =
  LikedSlice.actions;
export default LikedSlice.reducer;
