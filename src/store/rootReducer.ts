// src/store/rootReducer.ts

// Redux Import
import { combineReducers } from 'redux';

// Store Import
import productReducer from '../store/Slice/product-slice';

// --------------------------rootReducer---------------------------
const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
