import React from 'react'
// 引入 store
import store from './store'
import { connect } from 'react-redux'
// 引入 store add方法
import { add } from './store/actions/cart-actions'

class MyApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  addCart = () => {
    store.dispatch(add('peach', 1, 5))
  }

  render () {
    return (
      <div>
        <button onClick={() => this.addCart()}>添加</button>
        <ul>
          {
            store.getState().cartReducer.cart.map((val, ind) => {
              return <li key={ind}>{ val.name } - { val.num } - { val.totalMoney }</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(add)(MyApp)
