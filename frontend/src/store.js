import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'
import signInReducer from './screens/SignIn/SignInReducer'
import signUpReducer from './screens/SignUp/SignUpReducer'

const reducers = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))


export default store