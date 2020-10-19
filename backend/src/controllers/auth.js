const express = require('express')
const encrypt = require('js-sha1')
const crypto = require('crypto')

const { account, player } = require('../models')
const { accountSignUp, accountSignIn } = require('../validators/account')
const { getMessage } = require('../helpers/messages')
const {
	generateJwt,
	verifyJwt,
	generateRefreshJwt,
	verifyRefreshJwt,
	getTokenFromHeaders,
} = require('../helpers/jwt')

const router = express.Router()

router.post('/sign-in', accountSignIn, async (req, res) => {
	const { name, password } = req.body
	const accounts = await account.findOne({ where: { name } })

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
	const { name, email } = req.body

	const hash = crypto.createHash('sha1').update(name).digest('hex')

	const accounts = await account.findOne({ where: { name } })
	if (accounts)
		return res.jsonBadRequest(null, getMessage('account.signup.name_exists'))

	const emails = await account.findOne({ where: { email } })
	if (emails)
		return res.jsonBadRequest(null, getMessage('account.signup.email_exists'))

	const newAccount = await account.create({
		name,
		password: hash,
		email,
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

router.put('/profile_info', async (req, res) => {
	const { body } = req
	const fields = ['rlname', 'location']
	const token = getTokenFromHeaders(req.headers)

	if (!token) {
		return res.jsonUnauthorized(null, 'Invalid token')
	}

	const decoded = verifyJwt(token)

	const accounts = await account.findByPk(decoded.id)
	if (!accounts) return res.jsonUnauthorized(null, 'Invalid token.')

	fields.map((fieldName) => {
		const newValue = body[fieldName]
		if (newValue) accounts[fieldName] = newValue
	})

	await accounts.save()
	return res.jsonOK(accounts)
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
