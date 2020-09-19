import { NEWS_CREATE, NEWS_LIST, LIKE_UPDATE } from '../actions/NewsActions'

const initialState = {
	post: null,
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case NEWS_CREATE: {
			const response = payload ? payload.data : null
			const post = response ? response.data : null
			return { ...state, post }
		}

		case NEWS_LIST: {
			const response = payload ? payload.data : null
			const post = response ? response.post : null
			return { ...state, post }
		}

		case LIKE_UPDATE: {
			const response = payload ? payload.data : null
			const post = response ? response.post : null
			return { ...state, post }
		}

		default:
			return state
	}
}
