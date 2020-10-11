import {
	PLAYER_CREATE,
	PLAYER_LIST,
	PLAYER_GET,
	PLAYER_UPDATE,
	PLAYER_TO_REMOVE,
	PLAYER_REMOVE,
	HIGHSCORES_LIST,
	CHARACTER_GET,
} from '../actions/PlayerActions'

const initialState = {
	player: null,
	players: [],
}

export default function (state = initialState, action) {
	const { type, payload } = action

	switch (type) {
		case PLAYER_CREATE: {
			const response = payload ? payload.data : null
			const player = response ? response.data : null
			return { ...state, player }
		}

		case PLAYER_UPDATE: {
			const response = payload ? payload.data : null
			const player = response ? response.data : null
			return { ...state, player }
		}

		case PLAYER_GET: {
			const response = payload ? payload.data : null
			const player = response ? response.data : null

			return { ...state, player }
		}

		case PLAYER_LIST: {
			const response = payload ? payload.data : null
			const players = response ? response.players : null
			return { ...state, players }
		}

		case PLAYER_TO_REMOVE: {
			return { ...state, playerToRemove: payload }
		}

		case PLAYER_REMOVE: {
			const players = state.players.filter(
				(player) => player.id !== state.playerToRemove.id
			)
			return { ...state, playerToRemove: null, players }
		}

		case HIGHSCORES_LIST: {
			const response = payload ? payload.data : null
			const players = response ? response.players : null
			return { ...state, players }
		}

		case CHARACTER_GET: {
			const response = payload ? payload.data : null
			const players = response ? response.players : null
			return { ...state, players }
		}

		default:
			return state
	}
}
