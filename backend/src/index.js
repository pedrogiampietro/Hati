const express = require('express')
const db = require('./models')
const response = require('./middlewares/response')
const authController = require('./controllers/auth')
const playerController = require('./controllers/player')

const app = express()

app.use(response)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/account', authController)
app.use('/player', playerController)

app.get('/', (req, res) => {
    return res.json('OK')
})


db.sequelize.sync()
    .then(() => {
        app.listen(3001, () => {
            console.log('***** Listening on port 3001')
        })
    })

