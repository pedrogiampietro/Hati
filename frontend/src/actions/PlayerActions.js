import { apiPost } from '../helpers/api'

export const PLAYER_CREATE = 'PLAYER_CREATE'

export const playerCreate = (data) => {

    const payload = apiPost('/player', data)
    return { type: PLAYER_CREATE, payload}
}