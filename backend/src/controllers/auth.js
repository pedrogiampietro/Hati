const express = require('express')
const { Account } = require('../models')
const router = express.Router()

router.get('/sign-in', (req, res) => {
    return res.json('Sign in')
})

router.get('/sign-up', async (req, res) => {

    const result = await Account.create({
        name: '123',
        password: '123456',
        secret: '0',
        type: '1',
        premdays: '0',
        coins: '0',
        lastday: '0',
        email: 'pedro@msn.com',
        key: '0',
    })

    console.log('***** Result', result)

    return res.json('Sign up')
})


module.exports = router