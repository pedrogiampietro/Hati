import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

import './assets/css/app.bundle.css'; 
import './assets/css/vendors.bundle.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

import '../node_modules/bootstrap/js/src/modal'

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
)
