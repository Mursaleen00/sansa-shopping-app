// Redux Import
import { createSlice } from '@reduxjs/toolkit';

export type LikedState = {
  title: string;
  id: number;
  price: number;
  thumbnail: string;
  description: string;
};

const initialState: {
  product: LikedState[] | null;
} = {
  product: null,
};

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
  },
});

export const { addToLikeProduct, removeToLikeProduct } = LikedSlice.actions;
export default LikedSlice.reducer;
