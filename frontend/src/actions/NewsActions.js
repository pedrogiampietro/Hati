import { apiPostNews } from '../helpers/api'

export const NEWS_CREATE = 'NEWS_CREATE'

// export const highscoresList = data => {
// 	const payload = apiGetHighscores('/player/highscores', data)
// 	return { type: HIGHSCORES_LIST, payload }
// }

export const newsCreate = data => {
	const payload = apiPostNews('/dashboard/create', data)
	return { type: NEWS_CREATE, payload }
}
