import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'
import accountReducer from './reducers/AccountReducer'
import playerReducer from './reducers/PlayerReducer'
import forumReducer from './reducers/ForumReducer'

const reducers = combineReducers({
	account: accountReducer,
	player: playerReducer,
	forum: forumReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store
