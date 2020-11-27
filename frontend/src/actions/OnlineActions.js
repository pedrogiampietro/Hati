import { apiGet } from '../helpers/Api'

export const PLAYERS_ONLINE = 'PLAYERS_ONLINE'

export const playersOnline = (data) => {
	const payload = apiGet('/online', data)
	return { type: PLAYERS_ONLINE, payload }
}
