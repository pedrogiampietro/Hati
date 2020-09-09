import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'
import accountReducer from './reducers/AccountReducer'
import playerReducer from './reducers/PlayerReducer'
import newsReducer from './reducers/NewsReducer'

const reducers = combineReducers({
	account: accountReducer,
	player: playerReducer,
	post: newsReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store
