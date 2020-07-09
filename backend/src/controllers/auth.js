const express = require('express')
const crypto = require('crypto')
const { Account } = require('../models')
const { accountSignUp } = require('../validators/account')
const { getMessage } = require('../helpers/messages');

const router = express.Router()

router.get('/sign-in', (req, res) => {
    return res.json('Sign in')
})

router.get('/sign-up', accountSignUp, async (req, res) => {

    const { name, password, } = req.body

    const hash = crypto.createHash('sha1')
        .update(name)
        .digest('hex')

    const account = await Account.findOne({ where: { name } })  
        if (account) return res.jsonBadRequest(null, getMessage('account.signup.name_exists'))   


    const newAccount = await Account.create({
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
    

    return res.jsonOK(newAccount, getMessage('account.signup.sucess'))
})


module.exports = router