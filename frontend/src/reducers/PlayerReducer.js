import { PLAYER_CREATE } from '../actions/PlayerActions'

const initialState = {
    player: null,
}

export default function(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case PLAYER_CREATE: {

            const response = payload ? payload.data : null
            const player = response ? response.data : null
            return { ...state, player }
        }
        
        default:
         return state
    }
}