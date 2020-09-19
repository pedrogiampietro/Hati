import { apiPostNews, apiGetNews, apiPut } from '../helpers/api'

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

export const likeUpdate = (id, data) => {
	const Likes = !!data.Likes
	const payload = apiPut(`/dashboard/${id}`, { ...data, Likes })
	return { type: LIKE_UPDATE, payload }
}
