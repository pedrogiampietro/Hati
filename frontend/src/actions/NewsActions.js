import { apiPostNews, apiGetNews, apiLike } from '../helpers/api'

export const NEWS_CREATE = 'NEWS_CREATE'
export const NEWS_LIST = 'NEWS_LIST'
export const LIKE_UPDATE = 'LIKE_UPDATE'

export const newsList = data => {
	const payload = apiGetNews('/forum', data)
	return { type: NEWS_LIST, payload }
}

export const newsCreate = data => {
	const payload = apiPostNews('/forum/create', data)
	return { type: NEWS_CREATE, payload }
}

export const upLike = id => {
	const payload = apiLike(`/forum/upLike/${id}`)
	return { type: LIKE_UPDATE, payload }
}

export const unLike = id => {
	const payload = apiLike(`/forum/disLike/${id}`)
	return { type: LIKE_UPDATE, payload }
}
