import { NEWS_CREATE } from '../actions/NewsActions'

const initialState = {
	post: null,
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case NEWS_CREATE: {
			const response = payload ? payload.data : null
			const post = response ? response.data : null
			console.log(post)
			return { ...state, post }
		}

		// case PLAYER_LIST: {
		// 	const response = payload ? payload.data : null
		// 	const players = response ? response.players : null
		// 	return { ...state, players }
		// }

		default:
			return state
	}
}
