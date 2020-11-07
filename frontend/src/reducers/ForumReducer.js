import {
	NEWS_CREATE,
	FORUM_LIST,
	LIKE_UPDATE,
	SECTION_LIST,
	CREATE_THREAD,
	GET_DISCUSSION,
	CREATE_BOARD,
	BOARD_TO_REMOVE,
	BOARD_REMOVE,
	EDIT_POST,
	ADD_COMMENT,
	GET_COMMENT,
} from '../actions/ForumActions'

const initialState = {
	forum: null,
	forums: [],
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case NEWS_CREATE:
		case CREATE_THREAD:
		case GET_DISCUSSION:
		case FORUM_LIST:
		case CREATE_BOARD:
		case SECTION_LIST:
		case EDIT_POST:
		case ADD_COMMENT:
		case GET_COMMENT:
		case LIKE_UPDATE: {
			const response = payload ? payload.data : null
			const forum = response ? response.data : null
			return { ...state, forum }
		}

		case BOARD_TO_REMOVE: {
			return { ...state, boardToRemove: payload }
		}

		case BOARD_REMOVE: {
			const forums = state.forums.filter(
				(forum) => forum.id !== state.boardToRemove.id
			)
			return { ...state, boardToRemove: null, forums }
		}

		default:
			return state
	}
}
