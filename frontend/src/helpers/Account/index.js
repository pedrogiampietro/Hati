import { setCookie, getCookie, removeCookie } from '../Storage'

const expires = new Date()
expires.setFullYear(expires.getFullYear() + 1)

const options = { expires }

export const COOKIE_ACCOUNT = 'acc'
export const COOKIE_TOKEN = 'tk'
export const COOKIE_REFRESH_TOKEN = 'rtk'
export const COOKIE_PLAYER_NAME = 'pnm'

export const setAccount = (account) =>
	setCookie(COOKIE_ACCOUNT, account, options)
export const getAccount = () => getCookie(COOKIE_ACCOUNT)
export const removeAccount = () => removeCookie(COOKIE_ACCOUNT)

export const setPlayerName = (player) =>
	setCookie(COOKIE_PLAYER_NAME, player, options)
export const getPlayerName = () => getCookie(COOKIE_PLAYER_NAME)
export const removePlayerName = () => removeCookie(COOKIE_PLAYER_NAME)

export const setToken = (token) => setCookie(COOKIE_TOKEN, token, options)
export const getToken = () => getCookie(COOKIE_TOKEN)
export const removeToken = () => removeCookie(COOKIE_TOKEN)

export const setRefreshToken = (refreshToken) =>
	setCookie(COOKIE_REFRESH_TOKEN, refreshToken, options)
export const getRefreshToken = () => getCookie(COOKIE_REFRESH_TOKEN)
export const removeRefreshToken = () => removeCookie(COOKIE_REFRESH_TOKEN)
