const express = require('express')
const cors = require('cors')
const db = require('./models')
const authController = require('./controllers/auth')
const playerController = require('./controllers/player')
const forumController = require('./controllers/forum')
const guildController = require('./controllers/guild')
const response = require('./middlewares/response')
const checkJwt = require('./middlewares/jwt')
const path = require('path')

const app = express()

app.use(cors())
app.use(response)
app.use(checkJwt)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use('/account', authController)
app.use('/player', playerController)
app.use('/forum', forumController)
app.use('/guild', guildController)

app.get('/', (req, res) => {
	return res.json('OK')
})

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log('***** Listening on port 3001')
	})
})
