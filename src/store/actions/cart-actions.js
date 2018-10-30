/*
 * 增加购物车的方法
 */
import { ADD_TO_CART } from '../mutations'
export const add = ({...goods}) => {
  return {
    type: ADD_TO_CART,
    payload: {...goods}
  }
}
