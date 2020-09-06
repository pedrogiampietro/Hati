import axios from 'axios'
import { getToken } from './account'
import { secondsToReadableTime } from './datetime'
import { getTokenExpire } from './jwt'

export const getApiUrl = (path) => {
    return `http://localhost:3001${path}`
}

export const getHeaders = () => {
    const token = getToken()

    if (!token) return {}

    const expires = getTokenExpire(token)
    const secondsToExpire = expires - Date.now() / 1000
    const readableTime = secondsToReadableTime(secondsToExpire)

    console.log('****** getHeaders.tokenParts', readableTime)

    return {
        Authorization: `Bearer ${token}`
    }
}

export const apiPost = (path, data = {}) => {

    const url = getApiUrl(path)
    const options = {
        headers: getHeaders()
    }

    return axios.post(url, data, options)
}

export const apiPut = (path, data = {}) => {

    const url = getApiUrl(path)
    const options = {
        headers: getHeaders()
    }

    return axios.put(url, data, options)
}

export const apiDelete = (path, data = {}) => {

    const url = getApiUrl(path)
    const options = {
        headers: getHeaders()
    }

    return axios.delete(url, options)
}

export const apiGet = async (path, params = {}) => {

    const url = getApiUrl(path)
    const options = {
        headers: getHeaders()
    }

    return await axios.get(url, options)
}

export const apiGetCharacter = async (path, params = {}) => {

    const url = getApiUrl(path)
    const options = {
        headers: getHeaders(),
        params: params
    }

    return await axios.get(url, options)
}

export const apiGetHighscores = async (path, params = {}) => {

    const url = getApiUrl(path)
    const options = {
        headers: getHeaders(),
        params: params
    }
    
    return await axios.get(url, options)
}