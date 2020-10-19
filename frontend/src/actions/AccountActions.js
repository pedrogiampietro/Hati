import { apiPost, apiRefreshToken, apiPut } from '../helpers/api'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const INIT_ACCOUNT = 'INIT_ACCOUNT'
export const REFRESH_TOKEN = 'REFRESH_TOKEN'
export const PROFILE_INFO = 'PROFILE_INFO'

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

export const profileInfo = (data) => {
	const payload = apiPut('/account/profile_info', { ...data })
	return { type: PROFILE_INFO, payload }
}

export const initAccount = () => {
	return { type: INIT_ACCOUNT, payload: {} }
}

export const getFreshToken = () => {
	const payload = apiRefreshToken()
	return { type: REFRESH_TOKEN, payload }
}
