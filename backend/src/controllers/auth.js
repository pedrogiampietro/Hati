const express = require('express')
const crypto = require('crypto')
const { Account } = require('../models')
const { accountSignUp, accountSignIn } = require('../validators/account')
const { getMessage } = require('../helpers/messages');
const { generateJwt, generateRefreshJwt } = require('../helpers/jwt')

const router = express.Router()

router.post('/sign-in', async (req, res) => {

    const { name, password, } = req.body
    const account = await Account.findOne({ where: { name } })  

    // validar o password     
    const match = account ? crypto.createVerify('sha1', account.password) : null
        if (!match) return res.jsonBadRequest(null, getMessage('account.signin.failed'))   

    const token = generateJwt({ id: account.id })
    const refreshToken = generateRefreshJwt({ id: account.id })

    return res.jsonOK(account, null, getMessage('account.signin.success'), { token, refreshToken })
})

router.post('/sign-up', accountSignUp, async (req, res) => {

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

    const token = generateJwt({ id: newAccount.id })
    const refreshToken = generateRefreshJwt({ id: newAccount.id })
    

    return res.jsonOK(newAccount, getMessage('account.signup.sucess'), { token, refreshToken })
})


module.exports = router