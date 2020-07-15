import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

import './assets/styles/main.scss'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
)
