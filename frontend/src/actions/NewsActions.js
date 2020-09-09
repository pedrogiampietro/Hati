import { apiPostNews, apiGetNews } from '../helpers/api'

export const NEWS_CREATE = 'NEWS_CREATE'
export const NEWS_LIST = 'NEWS_LIST'

export const newsList = data => {
	const payload = apiGetNews('/dashboard', data)
	return { type: NEWS_LIST, payload }
}

export const newsCreate = data => {
	const payload = apiPostNews('/dashboard/create', data)
	return { type: NEWS_CREATE, payload }
}
