const express = require('express')
const crypto = require('crypto')
const { Account } = require('../models')
const { accountSignUp, accountSignIn } = require('../validators/account')
const { getMessage } = require('../helpers/messages');
const { generateJwt, generateRefreshJwt, verifyRefreshJwt, getTokenFromHeaders } = require('../helpers/jwt')

const router = express.Router()

router.post('/sign-in', accountSignIn, async (req, res) => {

    const { name, password, } = req.body
    const account = await Account.findOne({ where: { name } })  

    // validar o password     
    const match = account ? crypto.createVerify('sha1', password, account.password) : null
        if (!match) return res.jsonBadRequest(null, getMessage('account.signin.failed'))   

    const token = generateJwt({ id: account.id })
    const refreshToken = generateRefreshJwt({ id: account.id, version: account.jwtVersion  })

    console.log('TOKEN, refreshToken', token)

    return res.jsonOK(account, getMessage('account.signin.success'), {token, refreshToken})
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
    const refreshToken = generateRefreshJwt({ id: newAccount.id, version: newAccount.jwtVersion })
    

    return res.jsonOK(newAccount, getMessage('account.signup.sucess'), { token, refreshToken })
})


router.post('/refresh', async (req, res) => {
    const token = getTokenFromHeaders(req.headers);
        if(!token) {
          return res.jsonUnauthorized(null, 'Invalid token');
    }
  
    try {
      const decoded = verifyRefreshJwt(token);
      const account = await Account.findByPk(decoded.id);
      if(!account) return res.jsonUnauthorized(null, 'Invalid token.');
  
      if(decoded.version !== account.jwtVersion) return res.jsonUnauthorized(null, 'Invalid token.');
  
      const meta = {
        token: generateJwt({ id: account.id }),
      }
  
      return res.jsonOK(null, null, meta);
    } catch(error) {
      return res.jsonUnauthorized(null, 'Invalid token.');
    }
  
  });

module.exports = router