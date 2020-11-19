import { apiGet, apiPost, apiDelete } from '../helpers/Api'

export const GUILD_CREATE = 'GUILD_CREATE'
export const GUILD_LIST = 'GUILD_LIST'

export const guildCreate = (data) => {
	const payload = apiPost('/guild', data)
	return { type: GUILD_CREATE, payload }
}

export const guildList = (data) => {
	const payload = apiGet('/guild', data)
	return { type: GUILD_LIST, payload }
}
