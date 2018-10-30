import React from 'react'
import './MyApp.css'
// 引入 store
import store from './store'
import { connect } from 'react-redux'
// 引入 store add方法
import { add } from './store/actions/cart-actions'

class MyApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: 'default',
      price: 99,
      num: 1,
      totalMoney: null
    }
  }
  /*
   * 添加物品
   */
  addCart = () => {
    this.setState(pre => ({
      totalMoney: pre.num * pre.price
    }), () => {
      store.dispatch(add(this.state))
    })
  }

  /*
   * selectGoods 选择商品
   */
   selectGoods = (e) => {
     let val = e.target.value
     this.setState(pre => ({
       name: val
     }))
   }

   /*
    * 减商品数量
    */
   minusGoods = () => {
     if (this.state.num === 0) return
     this.setState(pre => pre.num --)
   }

   /*
    * 加商品
    */
   addGoods = () => {
     this.setState(pre => pre.num ++)
   }
   /*
    * 修改商品单价
    */
   changePrice = (e) => {
     let val = e.target.value
     this.setState(pre => pre.price = val)
   }

   /*
    * 修改商品数
    */
   changeNum = (e) => {
     // 设变量防警告 因为setState 是异步操作，不要直接使用变量 e
     let val = e.target.value
     this.setState(pre => ({
       num: val
     }))
   }

  render () {
    const { cartReducer } = store.getState()
    return (
      <div>
        <div className="box">
          <input type="text" className="select" placeholder="商品名称！" value={this.state.name} onChange={e => this.selectGoods(e)} />
          <p>
            <span className="singleName">单价：¥</span><input type="text" className="single" value={this.state.price} onChange={(e) => this.changePrice(e)}/>
          </p>
          <p>
            <span className="singleName">数量：</span>
            <button className="minus" onClick={() => this.minusGoods()}>-</button>
            <input type="text" className="input" value={this.state.num} onChange={(e) => this.changeNum(e)}/>
            <button className="add" onClick={() => this.addGoods()}>+</button>
          </p>
          <button className="increase" onClick={() => this.addCart()}>添加</button>
        </div>
        <ul className="ul">
          {
            cartReducer.cart.map((val, ind) => {
              return <li className="li" key={ind}><span>商品：{ val.name }</span> <span>数量：{ val.num }</span> <span>总价：{ val.totalMoney }</span></li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(add)(MyApp)
