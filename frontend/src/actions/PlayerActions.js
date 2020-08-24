import { apiPost, apiGet, apiPut, apiDelete, apiGetHighscores } from '../helpers/api'

export const PLAYER_CREATE = 'PLAYER_CREATE'
export const PLAYER_LIST = 'PLAYER_LIST'
export const PLAYER_GET = 'PLAYER_GET'
export const PLAYER_UPDATE = 'PLAYER_UPDATE'
export const PLAYER_TO_REMOVE = 'PLAYER_TO_REMOVE'
export const PLAYER_REMOVE = 'PLAYER_REMOVE'

export const HIGHSCORES_LIST = 'HIGHSCORES_LIST'


export const highscoresList = (data) => {
  const payload = apiGetHighscores('/player/highscores', data)
  return { type: HIGHSCORES_LIST, payload}
}

export const playerCreate = (data) => {
    const payload = apiPost('/player', data)
    return { type: PLAYER_CREATE, payload}
}

export const playerList = (data) => {
    const payload = apiGet('/player/characters')
    return { type: PLAYER_CREATE, payload}
}

export const playerUpdate = (id, data) => {
    const isSocial = !!data.isSocial
    const payload = apiPut(`/player/${id}`, {...data, isSocial})
    return { type: PLAYER_UPDATE, payload }
  }
  
  export const playerGet = (id) => {
    const payload = apiGet(`/player/${id}`)
    return { type: PLAYER_GET, payload }
  }
    
  export const setPLayerToRemove = (link) => {
    return { type: PLAYER_TO_REMOVE, payload: link }
  }
  
  export const playerRemove = (link) => {
    const payload = apiDelete(`/player/${link.id}`)
    return { type: PLAYER_REMOVE, payload }
  }
