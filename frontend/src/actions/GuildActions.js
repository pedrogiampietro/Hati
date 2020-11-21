import { apiGet, apiPost } from '../helpers/Api'

export const GUILD_CREATE = 'GUILD_CREATE'
export const GUILD_LIST = 'GUILD_LIST'
export const GUILD_SHOW = 'GUILD_SHOW'
export const GUILD_INVITE = 'GUILD_INVTE'

export const guildCreate = (data) => {
	const payload = apiPost('/guild', data)
	return { type: GUILD_CREATE, payload }
}

export const guildList = (data) => {
	const payload = apiGet('/guild', data)
	return { type: GUILD_LIST, payload }
}

export const guildShow = (id, data) => {
	const payload = apiGet(`/guild/${id}`, data)
	return { type: GUILD_SHOW, payload }
}

export const guildInvite = (id, data) => {
	const payload = apiPost(`/guild/${id}/invite`, data)
	return { type: GUILD_INVITE, payload }
}
