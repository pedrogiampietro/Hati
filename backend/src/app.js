const express = require('express')
const cors = require('cors')
const db = require('./models')
const authController = require('./controllers/auth')
const playerController = require('./controllers/player')
const forumController = require('./controllers/forum')
const guildController = require('./controllers/guild')
const onlineController = require('./controllers/online')
const response = require('./middlewares/response')
const path = require('path')

const app = express()

app.use(cors())
app.use(response)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use('/account', authController)
app.use('/player', playerController)
app.use('/forum', forumController)
app.use('/guild', guildController)
app.use('/online', onlineController)

app.get('/', (req, res) => {
	return res.json('OK')
})

module.exports = app
