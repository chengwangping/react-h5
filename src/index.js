import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import FastClick from 'fastclick'
import registerServiceWorker from './registerServiceWorker'
import { AppContainer } from 'react-hot-loader'
import {Provider} from 'react-redux'
import store from '@/store/store'
import './styles/base.less'
import './utils/setRem'
FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    // 绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}
render(routes)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    render(routes)
  })
}

registerServiceWorker()
