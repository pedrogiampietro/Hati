const jwt = require('jsonwebtoken')

const tokenPrivateKey = 'hiati'
const options = { expiresIn: '30 minutes' }

const generateJwt = (payload) => {
    return jwt.sign(payload, tokenPrivateKey, options)
}