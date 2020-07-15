import axios from 'axios'

export const getApiUrl = (path) => {
    return `http://localhost:3001${path}`
}

export const getHeaders = () => {
    return {}
}

export const apiPost = (path, data = {}) => {

    const url = getApiUrl(path)
    const options = {
        headers: getHeaders()
    }
    
    return axios.post(url, data, options)
}