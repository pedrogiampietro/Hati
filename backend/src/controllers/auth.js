const express = require('express')
const encrypt = require('js-sha1')
const crypto = require('crypto')

const { account } = require('../models')
const { accountSignUp, accountSignIn } = require('../validators/account')
const { getMessage } = require('../helpers/messages')
const {
	generateJwt,
	generateRefreshJwt,
	verifyRefreshJwt,
	getTokenFromHeaders,
} = require('../helpers/jwt')

const router = express.Router()

router.post('/sign-in', accountSignIn, async (req, res) => {
	const { name, password } = req.body
	const accounts = await account.findOne({ where: { name } })

	// validar o password     (password, account.password)
	const parsedBody = req.body
	const encryptedPassword = encrypt(parsedBody.password)

	const accountFound = await account.findOne({
		where: { name: parsedBody.name, password: encryptedPassword },
	})

	if (!accountFound)
		return res.jsonBadRequest(null, getMessage('account.signin.failed'))

	const token = generateJwt({ id: accounts.id })
	const refreshToken = generateRefreshJwt({
		id: accounts.id,
		version: accounts.jwtVersion,
	})

	return res.jsonOK(accounts, getMessage('account.signin.success'), {
		token,
		refreshToken,
	})
})

router.post('/sign-up', accountSignUp, async (req, res) => {
	const { name, password } = req.body

	const hash = crypto.createHash('sha1').update(name).digest('hex')

	const accounts = await account.findOne({ where: { name } })
	if (accounts)
		return res.jsonBadRequest(null, getMessage('account.signup.name_exists'))

	const newAccount = await account.create({
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
	const refreshToken = generateRefreshJwt({
		id: newAccount.id,
		version: newAccount.jwtVersion,
	})

	return res.jsonOK(newAccount, getMessage('account.signup.sucess'), {
		token,
		refreshToken,
	})
})

router.post('/refresh', async (req, res) => {
	const token = getTokenFromHeaders(req.headers)
	if (!token) {
		return res.jsonUnauthorized(null, 'Invalid token')
	}

	try {
		const decoded = verifyRefreshJwt(token)
		const accounts = await account.findByPk(decoded.id)
		if (!accounts) return res.jsonUnauthorized(null, 'Invalid token.')

		if (decoded.version !== accounts.jwtVersion)
			return res.jsonUnauthorized(null, 'Invalid token.')

		const meta = {
			token: generateJwt({ id: accounts.id }),
		}

		return res.jsonOK(null, null, meta)
	} catch (error) {
		return res.jsonUnauthorized(null, 'Invalid token.')
	}
})

module.exports = router
