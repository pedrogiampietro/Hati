import {
	GUILD_CREATE,
	GUILD_LIST,
	GUILD_SHOW,
	GUILD_MEMBER,
	GUILD_INVITE,
	GUILD_GET_INVITES,
	GUILD_HAS_INVITE,
	GUILD_ACCEPT,
	GET_GUILD_LOGO,
	POST_GUILD_LOGO,
	GUILD_EDIT_DESCRIPTION,
	GUILD_EDIT_RANKS,
} from '../actions/GuildActions'

const initialState = {
	guild: null,
	guilds: [],
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GUILD_CREATE:
		case GUILD_LIST:
		case GUILD_SHOW:
		case GUILD_MEMBER:
		case GUILD_INVITE:
		case GUILD_GET_INVITES:
		case GUILD_HAS_INVITE:
		case GUILD_ACCEPT:
		case GET_GUILD_LOGO:
		case POST_GUILD_LOGO:
		case GUILD_EDIT_DESCRIPTION:
		case GUILD_EDIT_RANKS: {
			const response = payload ? payload.data : null
			const guild = response ? response.data : null
			return { ...state, guild }
		}

		default:
			return state
	}
}
