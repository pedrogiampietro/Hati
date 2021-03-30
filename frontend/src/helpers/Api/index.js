import axios from 'axios';
import { serverConnection } from '../../config';
import { getToken, getRefreshToken, getPlayerName } from '../Account';

export const getApiUrl = (path) => {
  return serverConnection.production.base_URL + path;
};

export const getImageUrl = (path) => {
  return `${serverConnection.production.base_URL}/${path}`;
};

export const getHeaders = () => {
  const token = getToken();

  if (!token) return {};
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const apiRefreshToken = () => {
  const url = getApiUrl('/account/refresh');
  const refreshToken = getRefreshToken();
  const options = {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  };

  return axios.post(url, {}, options);
};

export const apiPost = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
  };

  return axios.post(url, data, options);
};

export const apiPut = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
  };

  return axios.put(url, data, options);
};

export const apiDelete = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
  };

  return axios.delete(url, options);
};

export const apiGet = async (path, params = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
  };

  return await axios.get(url, options);
};

export const apiGetCharacter = async (path, params = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
    params: params,
  };

  return await axios.get(url, options);
};

export const apiGetHighscores = async (path, params = {}) => {
  const url = getApiUrl(path);
  const options = {
    params: params,
  };

  return await axios.get(url, options);
};

export const apiGetForum = async (path, params = {}) => {
  const url = getApiUrl(path);
  const options = {};

  return await axios.get(url, options);
};

export const apiPostNews = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
  };

  return axios.post(url, data, options);
};

export const apiLike = (path, params = {}) => {
  const url = getApiUrl(path);
  const token = getToken();
  const options = {
    headers: {
      name: getPlayerName(),
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(url, null, options);
};

export const apiPostAvatar = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
    'content-type': 'multipart/form-data',
  };

  return axios.post(url, data, options);
};

export const apiGetInventory = async (path, params = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getHeaders(),
    params: params,
  };

  return await axios.get(url, options);
};
