const messages = require('../config/messages.json')

const getMessage = (path) => {
    return messages[path] || null
}

module.exports = { getMessage }