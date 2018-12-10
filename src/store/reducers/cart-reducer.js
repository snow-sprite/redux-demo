// cartReducer
import { ADD_TO_CART } from '../mutations'
// 初始商品列表
const initalCart = {
  cart: [
    {
      name: 'apple',
      price: 5,
      num: 10,
      totalMoney: 50
    },
    {
      name: 'banana',
      price: 2,
      num: 8,
      totalMoney: 16
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
