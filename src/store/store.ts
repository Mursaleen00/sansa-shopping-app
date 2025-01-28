// src/store/store.ts
'use client';

// Redux Toolkit Store Imports
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// React Import
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Slice Imports
import likedProductSlice from './Slice/like-product-slice';
import productSlice from './Slice/product-slice';

// reducers
const reducers = combineReducers({
  productSlice,
  likedProductSlice,
});

// createNoopStorage
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: unknown) {
      return Promise.resolve(value);
    },

    removeItem() {
      return Promise.resolve();
    },
  };
};

// storage
const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

// persistConfig
const persistConfig = {
  key: 'root',
  middleware: [],
  storage,
  timeout: 50,
};

const persistedReducer = persistReducer(persistConfig, reducers);

//  Store
const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export type RootState = ReturnType<typeof reducers>;
export type LikedState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persister = persistStore(store);
