import {
  apiGet,
  apiPost,
  apiPostAvatar,
  apiPut,
  apiDelete,
} from '../helpers/Api'

export const GUILD_CREATE = 'GUILD_CREATE'
export const GUILD_LIST = 'GUILD_LIST'
export const GUILD_SHOW = 'GUILD_SHOW'
export const GUILD_MEMBER = 'GUILD_MEMBER'
export const GUILD_INVITE = 'GUILD_INVTE'
export const GUILD_GET_INVITES = 'GUILD_GET_INVITES'
export const GUILD_HAS_INVITE = 'GUILD_HAS_INVITE'
export const GUILD_ACCEPT = 'GUILD_ACCEPT'

export const GET_GUILD_LOGO = 'GET_GUILD_LOGO'
export const POST_GUILD_LOGO = 'POST_GUILD_LOGO'

export const GUILD_EDIT_DESCRIPTION = 'GUILD_EDIT_DESCRIPTION'
export const GUILD_EDIT_RANKS = 'GUILD_EDIT_RANKS'

export const GUILD_TO_REMOVE = 'GUILD_TO_REMOVE'
export const GUILD_REMOVE = 'GUILD_REMOVE'

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

export const guildMember = (id, data) => {
  const payload = apiGet(`/guild/${id}/members`, data)
  return { type: GUILD_MEMBER, payload }
}

export const guildInvite = (id, data) => {
  const payload = apiPost(`/guild/${id}/invite`, data)
  return { type: GUILD_INVITE, payload }
}

export const guildGetInvites = (id, data) => {
  const payload = apiGet(`/guild/${id}/getInvites`, data)
  return { type: GUILD_GET_INVITES, payload }
}

export const guildHasInvite = (id, data) => {
  const payload = apiGet(`/guild/${id}/hasInvite`, data)
  return { type: GUILD_HAS_INVITE, payload }
}

export const guildAccept = (id, data) => {
  const payload = apiPost(`/guild/${id}/accept`, data)
  return { type: GUILD_ACCEPT, payload }
}

export const getGuildLogo = (id, data) => {
  const payload = apiGet(`/guild/${id}/logo`, data)
  return { type: GET_GUILD_LOGO, payload }
}

export const postGuildLogo = (id, data) => {
  const payload = apiPostAvatar(`/guild/${id}/logo`, data)
  return { type: POST_GUILD_LOGO, payload }
}

export const editGuildDescription = (id, data) => {
  const payload = apiPut(`/guild/${id}/description`, { ...data })
  return { type: GUILD_EDIT_DESCRIPTION, payload }
}

export const editGuildRanks = (id, data) => {
  const payload = apiPut(`/guild/${id}/ranks`, { ...data })
  return { type: GUILD_EDIT_RANKS, payload }
}

export const setGuildToRemove = (guilds) => {
  return { type: GUILD_TO_REMOVE, payload: guilds }
}

export const guildRemove = (guildId) => {
  const payload = apiDelete(`/guild/${guildId.id}/disband`)
  return { type: GUILD_REMOVE, payload }
}
