const express = require('express')
const crypto = require('crypto')
const { Account } = require('../models')
const router = express.Router()
const saltRounds = 10

router.get('/sign-in', (req, res) => {
    return res.json('Sign in')
})

router.get('/sign-up', async (req, res) => {

    const name = '1234'
    const password = '123456'

    const hash = crypto.createHash('sha1')
        .update(name)
        .digest('hex')


    const result = await Account.create({
        name,
        password: hash,
        secret: '0',
        type: '1',
        premdays: '0',
        coins: '0',
        lastday: '0',
        email: 'pedro@msn.com',
        key: '0',
    })
    

    console.log('***** Result', result)

    return res.json(result)
})


module.exports = router