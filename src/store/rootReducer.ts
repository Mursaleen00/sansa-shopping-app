import { combineReducers } from 'redux';
import productReducer from '../store/Slice/product-slice';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
