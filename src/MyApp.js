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
      name: '',
      price: 99,
      num: 1,
      totalMoney: null,
      isSHowTip: false,
      tipContent: ''
    }
  }
  /*
   * 添加物品
   */
  addCart = () => {
    if (!this.state.name) {
      this.setState(pre => ({
        tipContent: '添加商品名',
        isSHowTip: !pre.isShowTip
      }))
      return
    }
    this.setState(pre => ({
      totalMoney: pre.num * pre.price
    }), () => {
      store.dispatch(add(this.state))
      this.setState({name: ''})
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

   /*
    * 清除提示
    */
   clearTip = () => {
     this.setState({
       tipContent: '',
       isSHowTip: false
     })
   }

  render () {
    const { cartReducer } = store.getState()
    return (
      <div className="project">
        <span className="tips">{ this.state.tipContent ? '!' : null } { this.state.tipContent }</span>
        <div className="box">
          <input type="text" className="select" placeholder="商品名称！" value={this.state.name} onChange={e => this.selectGoods(e)} onFocus={() => this.clearTip()} />
          <p className="ml">
            <span className="singleName">单价：¥</span><input type="number" className="single" value={this.state.price} onChange={(e) => this.changePrice(e)}/>
          </p>
          <p className="ml">
            <span className="singleName">数量：</span>
            <button className="minus" onClick={() => this.minusGoods()}>-</button>
            <input type="number" className="input" value={this.state.num} onChange={(e) => this.changeNum(e)}/>
            <button className="add" onClick={() => this.addGoods()}>+</button>
          </p>
        </div>
        <button className="increase ml" onClick={() => this.addCart()}>添加</button>
        <ul className="ul">
          {
            cartReducer.cart.map((val, ind) => {
              return <li className="li" key={ind}><span>商品：{ val.name }</span> <span>单价：{ val.price }</span> <span>数量：{ val.num }</span> <span>总价：{ val.totalMoney }</span></li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(add)(MyApp)
