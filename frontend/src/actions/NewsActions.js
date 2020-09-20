import { apiPostNews, apiGetNews, apiLike } from '../helpers/api'

export const NEWS_CREATE = 'NEWS_CREATE'
export const NEWS_LIST = 'NEWS_LIST'
export const LIKE_UPDATE = 'LIKE_UPDATE'

export const newsList = data => {
	const payload = apiGetNews('/dashboard', data)
	return { type: NEWS_LIST, payload }
}

export const newsCreate = data => {
	const payload = apiPostNews('/dashboard/create', data)
	return { type: NEWS_CREATE, payload }
}

export const upLike = id => {
	const payload = apiLike(`/dashboard/upLike/${id}`)
	return { type: LIKE_UPDATE, payload }
}

export const unLike = id => {
	const payload = apiLike(`/dashboard/disLike/${id}`)
	return { type: LIKE_UPDATE, payload }
}
