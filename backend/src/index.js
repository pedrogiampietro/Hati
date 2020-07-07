const express = require('express')
const authController = require('./controllers/auth')

const app = express()

app.use('/account', authController)

app.get('/', (req, res) => {
    return res.json('OK')
})

app.listen(3001, () => {
    console.log('***** Listening on port 3001')
})