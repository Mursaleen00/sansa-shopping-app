// Redux Import
import { createSlice } from '@reduxjs/toolkit';

export type ProductState = {
  title: string;
  id: number;
  price: number;
  thumbnail: string;
  description: string;
};

const initialState: {
  product: ProductState[] | null;
} = {
  product: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if (!state.product) {
        state.product = [action.payload];
      } else {
        state.product.push(action.payload);
      }
    },
    updateProduct: (state, action) => {
      if (state.product) {
        state.product = state.product.map(product =>
          product.id === action.payload.id ? action.payload : product,
        );
      }
    },
    removeProduct: (state, action) => {
      if (state.product) {
        state.product = state.product.filter(
          product => product.id !== action.payload,
        );
      }
    },
    removeAllProducts: state => {
      state.product = null;
    },
  },
});
export const { addProduct, updateProduct, removeProduct, removeAllProducts } =
  productSlice.actions;

export default productSlice.reducer;
