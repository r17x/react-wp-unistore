import React from 'react'
import {render} from 'react-dom'
import 'antd/dist/antd.less'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {Provider, connect} from 'unistore/react'
import {store, actions, initState} from './Utils/Unistore'

const MainApp = connect(Object.keys(initState), actions)((props)=> <App {...props} />)

render((
  <Provider store={store}>
    <MainApp />
  </Provider>
),
document.getElementById('root')
)
registerServiceWorker()
