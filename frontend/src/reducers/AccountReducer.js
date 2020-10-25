import {
	SIGN_IN,
	SIGN_UP,
	SIGN_OUT,
	INIT_ACCOUNT,
	REFRESH_TOKEN,
	PROFILE_INFO,
	GET_PROFILE_AVATAR,
	POST_PROFILE_AVATAR,
} from '../actions/AccountActions'
import {
	getAccount,
	setAccount,
	setToken,
	setRefreshToken,
	removeAccount,
	removeToken,
	removeRefreshToken,
	setPlayerName,
	getPlayerName,
	removePlayerName,
} from '../helpers/account'
import { PLAYER_CREATE } from '../actions/PlayerActions'

const initialState = {
	account: null,
	player: null,
}

export default function (state = initialState, action) {
	const { type, payload } = action

	switch (type) {
		case SIGN_IN:
		case SIGN_UP:
		case PLAYER_CREATE:
		case PROFILE_INFO:
		case GET_PROFILE_AVATAR:
		case POST_PROFILE_AVATAR:
			const response = payload ? payload.data : null
			const account = response ? response.data : null
			const metadata = response ? response.metadata : null

			const player = response ? response.data[0]?.name : null

			const token = metadata ? metadata.token : null
			const refreshToken = metadata ? metadata.refreshToken : null

			if (account) setAccount(account)
			if (player) setPlayerName(player)
			if (token) setToken(token)
			if (refreshToken) setRefreshToken(refreshToken)

			return { ...state, account, player }

		case SIGN_OUT:
			removeAccount()
			removePlayerName()
			removeToken()
			removeRefreshToken()

			return { ...state, account: null, player: null }

		case INIT_ACCOUNT: {
			const account = getAccount()
			const player = getPlayerName()

			return { ...state, account, player }
		}

		case REFRESH_TOKEN: {
			const response = payload ? payload.data : null
			const metadata = response ? response.metadata : null

			const token = metadata ? metadata.token : null
			if (token) setToken(token)
			return state
		}

		default:
			return state
	}
}
