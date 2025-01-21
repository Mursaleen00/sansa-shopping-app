import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './product-slice';

interface LikedProductState {
  likedProducts: ProductState[];
}

const initialState: LikedProductState = {
  likedProducts: [],
};

const likedProductSlice = createSlice({
  name: 'likedProduct',
  initialState,
  reducers: {
    addLikedProduct: (state, action: PayloadAction<ProductState>) => {
      const existingProduct = state.likedProducts.find(
        product => product.id === action.payload.id,
      );
      if (!existingProduct) {
        state.likedProducts.push(action.payload);
      }
    },
    removeLikedProduct: (state, action: PayloadAction<number>) => {
      state.likedProducts = state.likedProducts.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const { addLikedProduct, removeLikedProduct } =
  likedProductSlice.actions;
export default likedProductSlice.reducer;
