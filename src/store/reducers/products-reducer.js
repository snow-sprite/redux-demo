// products 商品列表

const initProducts = {
  products: [
    {
      name: 'orange',
      id: 1
    },
    {
      name: 'grape',
      id: 2
    },
    {
      name: 'peach',
      id: 3
    },
    {
      name: 'pomegranate',
      id: 4
    },
    {
      name: 'watermelon',
      id: 5
    }
  ]
}

const homeReducer = (state=[], action) => {
  state = [...initProducts.products, ...state]
  console.log('action', action);
  return state;
}

export default homeReducer;
