import {
	apiPost,
	apiGet,
	apiPut,
	apiDelete,
	apiGetHighscores,
	apiGetCharacter,
} from '../helpers/Api'

export const PLAYER_CREATE = 'PLAYER_CREATE'
export const PLAYER_LIST = 'PLAYER_LIST'
export const PLAYER_GET = 'PLAYER_GET'
export const PLAYER_UPDATE = 'PLAYER_UPDATE'
export const PLAYER_TO_REMOVE = 'PLAYER_TO_REMOVE'
export const PLAYER_REMOVE = 'PLAYER_REMOVE'

export const HIGHSCORES_LIST = 'HIGHSCORES_LIST'
export const CHARACTER_GET = 'CHARACTER_GET'

export const highscoresList = (data) => {
	const payload = apiGetHighscores('/player/highscores', data)
	return { type: HIGHSCORES_LIST, payload }
}

export const playerGetCharacter = (name) => {
	const payload = apiGetCharacter(`/player/character/${name}`)
	return { type: CHARACTER_GET, payload }
}

export const playerCreate = (data) => {
	const payload = apiPost('/player', data)
	return { type: PLAYER_CREATE, payload }
}

export const playerList = (data) => {
	const payload = apiGet('/player/characters')
	return { type: PLAYER_CREATE, payload }
}

export const playerUpdate = (id, data) => {
	const payload = apiPut(`/player/${id}`, { ...data })
	return { type: PLAYER_UPDATE, payload }
}

export const playerGet = (id) => {
	const payload = apiGet(`/player/${id}`)
	return { type: PLAYER_GET, payload }
}

export const setPlayerToRemove = (player) => {
	return { type: PLAYER_TO_REMOVE, payload: player }
}

export const playerRemove = (player) => {
	const payload = apiDelete(`/player/${player.id}`)
	return { type: PLAYER_REMOVE, payload }
}
