import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'
import accountReducer from './reducers/AccountReducer'
import playerReducer from './reducers/PlayerReducer'

const reducers = combineReducers({
    account: accountReducer,
    player: playerReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))


export default store