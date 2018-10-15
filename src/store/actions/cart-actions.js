/*
 * 增加购物车的方法
 */
import { ADD_TO_CART } from '../mutations'
export const add = (name, num, totalMoney) => {
  return {
    type: ADD_TO_CART,
    payload: {
      name,
      num,
      totalMoney
    }
  }
}
