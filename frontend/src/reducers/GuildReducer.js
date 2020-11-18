import { GUILD_CREATE, GUILD_LIST } from '../actions/GuildActions'

const initialState = {
	guild: null,
	guilds: [],
}

export default function (state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case GUILD_CREATE:
		case GUILD_LIST: {
			const response = payload ? payload.data : null
			const guild = response ? response.data : null
			return { ...state, guild }
		}

		default:
			return state
	}
}
