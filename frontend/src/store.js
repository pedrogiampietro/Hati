import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'
import accountReducer from './reducers/AccountReducer'
import playerReducer from './reducers/PlayerReducer'
import forumReducer from './reducers/ForumReducer'
import guildReducer from './reducers/GuildReducer'
import onlineReducer from './reducers/OnlineReducer'

const reducers = combineReducers({
	account: accountReducer,
	player: playerReducer,
	forum: forumReducer,
	guild: guildReducer,
	online: onlineReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store
