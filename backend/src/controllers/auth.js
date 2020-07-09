const express = require('express')
const crypto = require('crypto')
const { Account } = require('../models')
const { accountSignUp } = require('../validators/account')
const router = express.Router()

router.get('/sign-in', (req, res) => {
    return res.json('Sign in')
})

router.get('/sign-up', accountSignUp, async (req, res) => {

    const { name, password } = req.body

    const hash = crypto.createHash('sha1')
        .update(name)
        .digest('hex')

    const account = await Account.findOne({ where: { name } })  
        if (account) return res.json('Account already exists.')      


    const newAccount = await Account.create({
        name,
        password: hash,
        secret,
        type,
        premdays,
        coins,
        lastday,
        email,
        key,
    })
    

    return res.jsonOK(newAccount, 'Account created.')
})


module.exports = router