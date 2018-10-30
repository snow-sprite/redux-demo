// cartReducer
import { ADD_TO_CART } from '../mutations'
// 初始商品列表
const initalCart = {
  cart: [
    {
      name: 'apple',
      num: 10,
      totalMoney: 50
    },
    {
      name: 'banana',
      num: 8,
      totalMoney: 10
    }
  ]
}

const cartReducer = (state = initalCart, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state;
  }
}

export default cartReducer;
