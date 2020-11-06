import {
	apiPostNews,
	apiGet,
	apiLike,
	apiPost,
	apiDelete,
} from '../helpers/api'

export const NEWS_CREATE = 'NEWS_CREATE'
export const LIKE_UPDATE = 'LIKE_UPDATE'

export const FORUM_LIST = 'NEWS_LIST'
export const CREATE_BOARD = 'CREATE_BOARD'

export const BOARD_TO_REMOVE = 'BOARD_TO_REMOVE'
export const BOARD_REMOVE = 'BOARD_REMOVE'

export const SECTION_LIST = 'SECTION_LIST'
export const CREATE_THREAD = 'CREATE_THREAD'
export const GET_DISCUSSION = 'GET_DISCUSSION'

export const forumList = (data) => {
	const payload = apiGet('/forum', data)
	return { type: FORUM_LIST, payload }
}

export const forumCreateBoard = (data) => {
	const payload = apiPost('/forum', data)
	return { type: FORUM_LIST, payload }
}

export const setBoardToRemove = (board) => {
	return { type: BOARD_TO_REMOVE, payload: board }
}

export const boardRemove = (forumBoard) => {
	const payload = apiDelete(`/forum/${forumBoard.id}`)
	return { type: BOARD_REMOVE, payload }
}

export const forumBoard = (board_id) => {
	const payload = apiGet(`/forum/thread/${board_id}`)
	return { type: SECTION_LIST, payload }
}

export const forumNewThread = (data) => {
	const payload = apiPostNews('/forum/newThread', data)
	return { type: CREATE_THREAD, payload }
}

export const forumDiscussion = (board_id, discussion, data) => {
	const payload = apiGet(`/forum/thread/${board_id}/${discussion}`, data)
	return { type: SECTION_LIST, payload }
}

export const newsCreate = (data) => {
	const payload = apiPostNews('/forum/create', data)
	return { type: NEWS_CREATE, payload }
}

export const upLike = (id) => {
	const payload = apiLike(`/forum/upLike/${id}`)
	return { type: LIKE_UPDATE, payload }
}

export const unLike = (id) => {
	const payload = apiLike(`/forum/disLike/${id}`)
	return { type: LIKE_UPDATE, payload }
}
