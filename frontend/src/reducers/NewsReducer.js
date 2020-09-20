import { NEWS_CREATE, NEWS_LIST, LIKE_UPDATE } from '../actions/NewsActions'

const initialState = {
	post: null,
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case NEWS_CREATE:
		case NEWS_LIST:
		case LIKE_UPDATE: {
			const response = payload ? payload.data : null
			const post = response ? response.data : null
			return { ...state, post }
		}

		default:
			return state
	}
}
