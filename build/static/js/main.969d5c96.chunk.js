(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),u=n(4),i=n(2),s=n(14),l=n(3),m=n(5),p={cart:[{name:"apple",price:5,num:10,totalMoney:50},{name:"banana",price:2,num:8,totalMoney:16}]},d=[{name:"orange",id:1},{name:"grape",id:2},{name:"peach",id:3},{name:"pomegranate",id:4},{name:"watermelon",id:5}],f={cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(m.a)({},e,{cart:Object(l.a)(e.cart).concat([t.payload])});default:return e}},productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e=Object(l.a)(d).concat(Object(l.a)(e)),console.log("action",t),e}},h=Object(i.combineReducers)(f),b=Object(i.createStore)(h,Object(s.composeWithDevTools)()),g=n(15),v=n(16),E=n(19),N=n(17),O=n(20),j=(n(30),n(18)),C=function(e){var t=Object(j.a)({},e);return{type:"ADD_TO_CART",payload:Object(m.a)({},t)}},y=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(E.a)(this,Object(N.a)(t).call(this,e))).addCart=function(){n.state.name?n.setState(function(e){return{totalMoney:e.num*e.price}},function(){b.dispatch(C(n.state)),n.setState({name:""})}):n.setState(function(e){return{tipContent:"\u6dfb\u52a0\u5546\u54c1\u540d",isSHowTip:!e.isShowTip}})},n.selectGoods=function(e){var t=e.target.value;n.setState(function(e){return{name:t}})},n.minusGoods=function(){0!==n.state.num&&n.setState(function(e){return e.num--})},n.addGoods=function(){n.setState(function(e){return e.num++})},n.changePrice=function(e){var t=e.target.value;n.setState(function(e){return e.price=t})},n.changeNum=function(e){var t=e.target.value;n.setState(function(e){return{num:t}})},n.clearTip=function(){n.setState({tipContent:"",isSHowTip:!1})},n.state={name:"",price:99,num:1,totalMoney:null,isSHowTip:!1,tipContent:""},n}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=b.getState().cartReducer;return c.a.createElement("div",{className:"project"},c.a.createElement("span",{className:"tips"},this.state.tipContent?"!":null," ",this.state.tipContent),c.a.createElement("div",{className:"box"},c.a.createElement("input",{type:"text",className:"select",placeholder:"\u5546\u54c1\u540d\u79f0\uff01",value:this.state.name,onChange:function(t){return e.selectGoods(t)},onFocus:function(){return e.clearTip()}}),c.a.createElement("p",{className:"ml"},c.a.createElement("span",{className:"singleName"},"\u5355\u4ef7\uff1a\xa5"),c.a.createElement("input",{type:"number",className:"single",value:this.state.price,onChange:function(t){return e.changePrice(t)}})),c.a.createElement("p",{className:"ml"},c.a.createElement("span",{className:"singleName"},"\u6570\u91cf\uff1a"),c.a.createElement("button",{className:"minus",onClick:function(){return e.minusGoods()}},"-"),c.a.createElement("input",{type:"number",className:"input",value:this.state.num,onChange:function(t){return e.changeNum(t)}}),c.a.createElement("button",{className:"add",onClick:function(){return e.addGoods()}},"+"))),c.a.createElement("button",{className:"increase ml",onClick:function(){return e.addCart()}},"\u6dfb\u52a0"),c.a.createElement("ul",{className:"ul"},t.cart.map(function(e,t){return c.a.createElement("li",{className:"li",key:t},c.a.createElement("span",null,"\u5546\u54c1\uff1a",e.name)," ",c.a.createElement("span",null,"\u5355\u4ef7\uff1a",e.price)," ",c.a.createElement("span",null,"\u6570\u91cf\uff1a",e.num)," ",c.a.createElement("span",null,"\u603b\u4ef7\uff1a",e.totalMoney))})))}}]),t}(c.a.Component),S=Object(u.b)(C)(y);o.a.render(c.a.createElement(u.a,{store:b},c.a.createElement(S,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.969d5c96.chunk.js.map