const jwt = require('jsonwebtoken')

const tokenPrivateKey = 'Hiati'
const refreshTokenPrivateKey = 'refreshHiati'
const options = { expiresIn: '30 minutes' }
const refreshOptions = { expiresIn: '30 days' }

const generateJwt = (payload) => {
	return jwt.sign(payload, tokenPrivateKey, options)
}

const generateRefreshJwt = (payload) => {
	return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions)
}

const verifyJwt = (token) => {
	return jwt.verify(token, tokenPrivateKey)
}

const verifyRefreshJwt = (token) => {
	return jwt.verify(token, refreshTokenPrivateKey)
}

const getTokenFromHeaders = (headers) => {
	const token = headers['authorization']
	return token ? token.slice(7, token.length) : null
}

module.exports = {
	generateJwt,
	verifyJwt,
	generateRefreshJwt,
	verifyRefreshJwt,
	getTokenFromHeaders,
}
