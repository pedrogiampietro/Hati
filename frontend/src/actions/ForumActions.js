import { apiPostNews, apiGet, apiLike } from '../helpers/api'

export const NEWS_CREATE = 'NEWS_CREATE'
export const FORUM_LIST = 'NEWS_LIST'
export const SECTION_LIST = 'SECTION_LIST'
export const LIKE_UPDATE = 'LIKE_UPDATE'

export const NEW_THREAD = 'NEW_THREAD'

export const forumList = (data) => {
	const payload = apiGet('/forum', data)
	return { type: FORUM_LIST, payload }
}

export const forumBoard = (board_id) => {
	const payload = apiGet(`/forum/${board_id}`)
	return { type: SECTION_LIST, payload }
}

export const forumNewThread = (board_id, data) => {
	const payload = apiPostNews(`/forum/${board_id}`, data)
	return { type: NEW_THREAD, payload }
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
