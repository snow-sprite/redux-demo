// 创建 reducer, 合并多个reducer
import { combineReducers } from 'redux';

import cartReducer from './cart-reducer';
import productsReducer from './products-reducer';

const allReducer = {
  cartReducer,
  productsReducer
}

// 将两个reducer 合并成一个reducer
const rootReducer = combineReducers(allReducer);

export default rootReducer
