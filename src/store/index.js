// import { createStore, applyMiddleware, compose } from 'redux'
import { createStore } from 'redux'
// chrome 调试
import { composeWithDevTools } from 'redux-devtools-extension'
// reducer 集合
import rootReducer from './reducers'

// 应用第三方插件
// import createSagaMiddleware from 'redux-saga'


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleWare = createSagaMiddleware()
// 创建store
const store = createStore(
  rootReducer,
  // composeEnhancers(
    // applyMiddleware(sagaMiddleWare)
  // )
  composeWithDevTools() // 无法与上一条命令兼容
);

export default store;
