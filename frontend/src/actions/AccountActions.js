import { apiPost } from '../helpers/api'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const INIT_ACCOUNT = 'INIT_ACCOUNT'

export const signUp = (data) => {
    const payload = apiPost('/account/sign-up', data)
    return { type: SIGN_UP, payload }
}


export const signIn = (data) => {
    const payload = apiPost('/account/sign-in', data)
    return { type: SIGN_IN, payload }
}

export const signOut = () => {

    return { type: SIGN_OUT, payload: {} }
  } 

export const initAccount = () => {
    return { type: INIT_ACCOUNT, payload: {} }
  }