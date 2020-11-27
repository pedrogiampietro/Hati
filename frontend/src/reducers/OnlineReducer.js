import { PLAYERS_ONLINE } from '../actions/OnlineActions'

const initialState = {
	online: null,
	onlines: [],
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case PLAYERS_ONLINE: {
			const response = payload ? payload.data : null
			const online = response ? response.data : null
			return { ...state, online }
		}

		default:
			return state
	}
}
