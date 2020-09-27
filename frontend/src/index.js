import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import TokenRefresher from './components/TokenRefresher'

ReactDOM.render(
	<Provider store={store}>
		<TokenRefresher />
		<App />
	</Provider>,
	document.getElementById('root')
)
